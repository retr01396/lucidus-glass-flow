import { useEffect, useRef } from "react";

const WaterBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    let targetX = width / 2;
    let targetY = height / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      // Inertia interpolation for water-like lag
      const lerpFactor = 0.06;
      currentX += (targetX - currentX) * lerpFactor;
      currentY += (targetY - currentY) * lerpFactor;

      // Base deep navy / blue gradient
      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#020617"); // very dark navy
      gradient.addColorStop(0.5, "#020617");
      gradient.addColorStop(1, "#0b1120"); // slightly lighter deep blue

      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      // Soft radial cyan glow that follows the cursor with subtle opacity
      const radius = Math.max(width, height) * 0.25;
      const glowGradient = context.createRadialGradient(
        currentX,
        currentY,
        radius * 0.1,
        currentX,
        currentY,
        radius
      );

      glowGradient.addColorStop(0, "rgba(34, 211, 238, 0.10)"); // cyan center
      glowGradient.addColorStop(0.3, "rgba(56, 189, 248, 0.06)");
      glowGradient.addColorStop(1, "rgba(15, 23, 42, 0)"); // fade out

      context.globalAlpha = 1;
      context.fillStyle = glowGradient;
      context.fillRect(0, 0, width, height);

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

export default WaterBackground;


