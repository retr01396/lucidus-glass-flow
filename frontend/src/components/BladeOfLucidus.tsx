import { useEffect, useRef, useCallback } from "react";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

interface Demon {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  type: 'red' | 'blue' | 'purple';
  radius: number;
  slashed: boolean;
  splitAngle: number;
  splitVelocity: number;
  opacity: number;
}

interface SlashTrail {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
  lifetime: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  lifetime: number;
}

const BladeOfLucidus = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const { ref: sectionRef, isVisible } = useCinematicReveal({ threshold: 0.2 });

  // Game state stored in refs for performance
  const gameStateRef = useRef({
    demons: [] as Demon[],
    slashTrails: [] as SlashTrail[],
    particles: [] as Particle[],
    cursorX: 0,
    cursorY: 0,
    prevCursorX: 0,
    prevCursorY: 0,
    isSlashing: false,
    score: 0,
    combo: 0,
    lastComboTime: 0,
    lastSpawnTime: 0,
    width: 0,
    height: 0,
    isActive: false,
  });

  const demonIdRef = useRef(0);

  // Spawn demon
  const spawnDemon = useCallback(() => {
    const state = gameStateRef.current;
    if (!state.isActive) return;

    const types: Array<'red' | 'blue' | 'purple'> = ['red', 'red', 'red', 'blue', 'purple'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    const speed = type === 'blue' ? 1.5 : type === 'purple' ? 0.8 : 1.0;
    const radius = type === 'purple' ? 35 : type === 'blue' ? 25 : 30;

    const demon: Demon = {
      id: demonIdRef.current++,
      x: Math.random() * (state.width - radius * 2) + radius,
      y: state.height + radius,
      vx: (Math.random() - 0.5) * 0.5 * speed,
      vy: -0.8 * speed,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.05,
      type,
      radius,
      slashed: false,
      splitAngle: 0,
      splitVelocity: 0,
      opacity: 1,
    };

    state.demons.push(demon);
    
    // Keep max 15 demons
    if (state.demons.length > 15) {
      state.demons.shift();
    }
  }, []);

  // Velocity-based slash detection
  const checkSlash = useCallback((x1: number, y1: number, x2: number, y2: number) => {
    const state = gameStateRef.current;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const velocity = distance; // pixels per frame

    // Only register slash if velocity is high enough
    if (velocity < 5) return;

    const angle = Math.atan2(dy, dx);

    // Check collision with each demon
    for (const demon of state.demons) {
      if (demon.slashed) continue;

      // Line-circle intersection
      const distToLine = Math.abs(
        (dy * demon.x - dx * demon.y + x2 * y1 - y2 * x1) / distance
      );

      if (distToLine < demon.radius) {
        // Check if point is within line segment
        const t = ((demon.x - x1) * dx + (demon.y - y1) * dy) / (distance * distance);
        
        if (t >= 0 && t <= 1) {
          // Slash hit!
          demon.slashed = true;
          demon.splitAngle = angle;
          demon.splitVelocity = velocity * 0.1;
          demon.vy = Math.sin(angle) * demon.splitVelocity;
          demon.vx = Math.cos(angle) * demon.splitVelocity;

          // Create particles
          for (let i = 0; i < 8; i++) {
            const particleAngle = angle + (Math.random() - 0.5) * Math.PI * 0.5;
            state.particles.push({
              x: demon.x,
              y: demon.y,
              vx: Math.cos(particleAngle) * (2 + Math.random() * 3),
              vy: Math.sin(particleAngle) * (2 + Math.random() * 3),
              opacity: 1,
              lifetime: 20 + Math.random() * 10,
            });
          }

          // Update score
          state.score += 1;
          const now = performance.now();
          if (now - state.lastComboTime < 1000) {
            state.combo += 1;
          } else {
            state.combo = 1;
          }
          state.lastComboTime = now;

          // Add slash trail
          state.slashTrails.push({
            x1,
            y1,
            x2,
            y2,
            opacity: 1,
            lifetime: 15,
          });
        }
      }
    }
  }, []);

  // Mouse handlers
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const state = gameStateRef.current;
    
    state.prevCursorX = state.cursorX;
    state.prevCursorY = state.cursorY;
    state.cursorX = e.clientX - rect.left;
    state.cursorY = e.clientY - rect.top;

    if (state.isSlashing && state.prevCursorX > 0 && state.prevCursorY > 0) {
      checkSlash(state.prevCursorX, state.prevCursorY, state.cursorX, state.cursorY);
    }
  }, [checkSlash]);

  const handleMouseDown = useCallback(() => {
    gameStateRef.current.isSlashing = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    gameStateRef.current.isSlashing = false;
  }, []);

  // Main animation loop
  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const state = gameStateRef.current;
    state.isActive = true;
    state.width = canvas.width;
    state.height = canvas.height;

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      if (!state.isActive) return;

      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Clear canvas
      ctx.fillStyle = 'hsl(220 40% 6%)';
      ctx.fillRect(0, 0, state.width, state.height);

      // Draw subtle fog
      ctx.fillStyle = 'hsl(220 30% 10% / 0.3)';
      const fogX = (currentTime * 0.01) % (state.width + 200) - 100;
      ctx.fillRect(fogX, 0, 200, state.height);
      const fogX2 = (currentTime * 0.008 + 100) % (state.width + 200) - 100;
      ctx.fillRect(fogX2, 0, 150, state.height);

      // Update and draw demons
      for (let i = state.demons.length - 1; i >= 0; i--) {
        const demon = state.demons[i];

        if (demon.slashed) {
          // Slashed demon - split halves
          demon.x += demon.vx;
          demon.y += demon.vy;
          demon.opacity -= 0.03;
          demon.rotation += demon.rotationSpeed * 2;

          if (demon.opacity <= 0) {
            state.demons.splice(i, 1);
            continue;
          }

          // Draw split halves
          ctx.save();
          ctx.globalAlpha = demon.opacity;
          ctx.translate(demon.x, demon.y);
          ctx.rotate(demon.rotation);

          // Left half
          ctx.save();
          ctx.beginPath();
          ctx.arc(0, 0, demon.radius, Math.PI / 2, -Math.PI / 2);
          ctx.lineTo(-demon.radius, 0);
          ctx.closePath();
          ctx.clip();
          drawDemon(ctx, demon.type, demon.radius);
          ctx.restore();

          // Right half
          ctx.save();
          ctx.beginPath();
          ctx.arc(0, 0, demon.radius, -Math.PI / 2, Math.PI / 2);
          ctx.lineTo(demon.radius, 0);
          ctx.closePath();
          ctx.clip();
          drawDemon(ctx, demon.type, demon.radius);
          ctx.restore();

          ctx.restore();
        } else {
          // Normal demon
          demon.x += demon.vx;
          demon.y += demon.vy;
          demon.rotation += demon.rotationSpeed;

          // Remove if off screen
          if (demon.y < -demon.radius || demon.x < -demon.radius || demon.x > state.width + demon.radius) {
            state.demons.splice(i, 1);
            continue;
          }

          // Draw demon
          ctx.save();
          ctx.translate(demon.x, demon.y);
          ctx.rotate(demon.rotation);
          drawDemon(ctx, demon.type, demon.radius);
          ctx.restore();
        }
      }

      // Update and draw particles
      for (let i = state.particles.length - 1; i >= 0; i--) {
        const particle = state.particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.lifetime -= 1;
        particle.opacity = particle.lifetime / 30;
        particle.vx *= 0.95;
        particle.vy *= 0.95;

        if (particle.lifetime <= 0 || particle.opacity <= 0) {
          state.particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = 'hsl(195 100% 70%)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Update and draw slash trails
      for (let i = state.slashTrails.length - 1; i >= 0; i--) {
        const trail = state.slashTrails[i];
        trail.lifetime -= 1;
        trail.opacity = trail.lifetime / 15;

        if (trail.lifetime <= 0) {
          state.slashTrails.splice(i, 1);
          continue;
        }

        // Draw cyan slash trail with blur effect
        ctx.save();
        ctx.globalAlpha = trail.opacity;
        ctx.strokeStyle = 'hsl(195 100% 70%)';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        
        // Blur effect (multiple passes)
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'hsl(195 100% 70%)';
        
        ctx.beginPath();
        ctx.moveTo(trail.x1, trail.y1);
        ctx.lineTo(trail.x2, trail.y2);
        ctx.stroke();
        ctx.restore();
      }

      // Draw katana cursor
      if (state.cursorX > 0 && state.cursorY > 0) {
        ctx.save();
        ctx.translate(state.cursorX, state.cursorY);
        ctx.rotate(-Math.PI / 4);
        
        // Blade glow
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'hsl(195 100% 70%)';
        
        // Handle
        ctx.fillStyle = 'hsl(25 60% 25%)';
        ctx.fillRect(-4, 15, 6, 12);
        ctx.fillRect(-5, 12, 8, 3);
        
        // Blade
        const gradient = ctx.createLinearGradient(0, 0, 0, -25);
        gradient.addColorStop(0, 'hsl(195 100% 90%)');
        gradient.addColorStop(0.5, 'hsl(195 100% 70%)');
        gradient.addColorStop(1, 'hsl(210 80% 60%)');
        ctx.fillStyle = gradient;
        ctx.fillRect(-2, -20, 4, 25);
        
        // Edge highlight
        ctx.strokeStyle = 'hsl(195 100% 95%)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, -20);
        ctx.lineTo(0, 5);
        ctx.stroke();
        
        ctx.restore();
      }

      // Draw score
      ctx.save();
      ctx.fillStyle = 'hsl(195 100% 70% / 0.8)';
      ctx.font = 'bold 18px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(`Score: ${state.score}`, state.width - 20, 30);
      if (state.combo > 1) {
        ctx.fillStyle = 'hsl(195 100% 80%)';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText(`Combo x${state.combo}!`, state.width - 20, 50);
      }
      ctx.restore();

      // Spawn demons
      if (currentTime - state.lastSpawnTime > 1500) {
        spawnDemon();
        state.lastSpawnTime = currentTime;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      state.isActive = false;
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, spawnDemon]);

  // Resize handler
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = 500;
      gameStateRef.current.width = canvas.width;
      gameStateRef.current.height = canvas.height;
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Draw demon function
  const drawDemon = (ctx: CanvasRenderingContext2D, type: 'red' | 'blue' | 'purple', radius: number) => {
    const colors = {
      red: { body: 'hsl(0 60% 40%)', glow: 'hsl(0 80% 50%)', outline: 'hsl(0 70% 45%)' },
      blue: { body: 'hsl(200 60% 40%)', glow: 'hsl(200 80% 50%)', outline: 'hsl(200 70% 45%)' },
      purple: { body: 'hsl(280 50% 35%)', glow: 'hsl(280 70% 45%)', outline: 'hsl(280 60% 40%)' },
    };

    const color = colors[type];

    // Glow
    ctx.shadowBlur = 8;
    ctx.shadowColor = color.glow;

    // Body
    ctx.fillStyle = color.body;
    ctx.beginPath();
    ctx.ellipse(0, radius * 0.3, radius * 0.6, radius * 0.7, 0, 0, Math.PI * 2);
    ctx.fill();

    // Head
    ctx.beginPath();
    ctx.arc(0, -radius * 0.4, radius * 0.4, 0, Math.PI * 2);
    ctx.fill();

    // Outline
    ctx.strokeStyle = color.outline;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, radius * 0.3, radius * 0.6, radius * 0.7, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, -radius * 0.4, radius * 0.4, 0, Math.PI * 2);
    ctx.stroke();

    // Eyes
    ctx.fillStyle = color.glow;
    ctx.beginPath();
    ctx.arc(-radius * 0.15, -radius * 0.45, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(radius * 0.15, -radius * 0.45, 3, 0, Math.PI * 2);
    ctx.fill();

    // Horns
    ctx.strokeStyle = color.outline;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-radius * 0.3, -radius * 0.5);
    ctx.lineTo(-radius * 0.5, -radius * 0.7);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(radius * 0.3, -radius * 0.5);
    ctx.lineTo(radius * 0.5, -radius * 0.7);
    ctx.stroke();

    ctx.shadowBlur = 0;
  };

  return (
    <div 
      ref={sectionRef}
      className={`mt-16 max-w-5xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wider text-glow-cyan mb-2">
          BLADE OF LUCIDUS
        </h2>
        <p className="text-foreground/50 text-sm font-body">
          Cut through the darkness.
        </p>
      </div>

      {/* Game Container */}
      <div 
        ref={containerRef}
        className="glass-panel rounded-3xl p-2 relative overflow-hidden"
      >
        <canvas
          ref={canvasRef}
          className="w-full rounded-2xl cursor-none"
          style={{ height: '500px', display: 'block' }}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </div>
    </div>
  );
};

export default BladeOfLucidus;
