import { useEffect, useState, useRef } from "react";

const LiquidBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0.5, y: 0.5 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth interpolation for viscous water effect
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.03),
        y: lerp(prev.y, mousePosition.y, 0.03),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  // Calculate gradient positions based on cursor
  const offsetX = (smoothPosition.x - 0.5) * 30;
  const offsetY = (smoothPosition.y - 0.5) * 30;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Primary liquid layer */}
      <div
        className="absolute inset-0 transition-none"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 60% at ${50 + offsetX}% ${45 + offsetY}%,
              hsla(var(--primary) / 0.15) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse 60% 80% at ${40 - offsetX * 0.5}% ${60 - offsetY * 0.5}%,
              hsla(var(--ice) / 0.12) 0%,
              transparent 45%
            ),
            radial-gradient(
              ellipse 70% 50% at ${60 + offsetX * 0.7}% ${35 + offsetY * 0.7}%,
              hsla(var(--primary) / 0.08) 0%,
              transparent 55%
            )
          `,
        }}
      />

      {/* Secondary flowing layer */}
      <div
        className="absolute inset-0 transition-none"
        style={{
          background: `
            radial-gradient(
              circle at ${55 + offsetX * 1.2}% ${50 + offsetY * 1.2}%,
              hsla(var(--accent) / 0.08) 0%,
              transparent 35%
            ),
            radial-gradient(
              ellipse 50% 70% at ${30 - offsetX * 0.8}% ${70 - offsetY * 0.8}%,
              hsla(var(--primary) / 0.06) 0%,
              transparent 40%
            )
          `,
        }}
      />

      {/* Subtle refraction overlay */}
      <div
        className="absolute inset-0 opacity-30 transition-none"
        style={{
          background: `
            linear-gradient(
              ${135 + offsetX * 2}deg,
              transparent 0%,
              hsla(var(--ice) / 0.03) 25%,
              transparent 50%,
              hsla(var(--primary) / 0.03) 75%,
              transparent 100%
            )
          `,
        }}
      />
    </div>
  );
};

export default LiquidBackground;
