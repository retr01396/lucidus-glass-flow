import { useState, useEffect, useRef } from "react";
import lucidusLogo from "@/assets/lucidus-logo.png";

type IntroSequenceProps = {
  onComplete: () => void;
  onBlurChange: (blur: number) => void;
  onOverlayChange: (opacity: number) => void;
  onSukunaFadeOut?: (opacity: number) => void;
};

const IntroSequence = ({ 
  onComplete, 
  onBlurChange, 
  onOverlayChange,
  onSukunaFadeOut
}: IntroSequenceProps) => {
  const [logoOpacity, setLogoOpacity] = useState(1);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Start logo fade out and blur reduction simultaneously
    // Logo fade: 200ms, Blur reduction: 700ms (both start at same time)
    const startTime = performance.now();
    const logoFadeDuration = 200; // Logo fade-out duration (quick)
    const blurReductionDuration = 700; // Blur reduction duration (600-800ms)

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      
      // Logo fade progress (0 → 1 over 200ms)
      const logoProgress = Math.min(elapsed / logoFadeDuration, 1);
      setLogoOpacity(1 - logoProgress);

      // Blur reduction progress (0 → 1 over 700ms)
      const blurProgress = Math.min(elapsed / blurReductionDuration, 1);
      
      // Fade out black background (SukunaIntro) (opacity 1 → 0) - same as blur
      if (onSukunaFadeOut) {
        onSukunaFadeOut(1 - blurProgress);
      }

      // Reduce blur progressively (16 → 0)
      onBlurChange(16 * (1 - blurProgress));

      // No overlay animation needed
      onOverlayChange(0);

      // Continue until blur reduction completes
      if (blurProgress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete
        onComplete();
      }
    };

    // Start immediately, no delay
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [onComplete, onBlurChange, onOverlayChange, onSukunaFadeOut]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Logo */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: logoOpacity,
          transition: "opacity 200ms ease-in-out",
        }}
      >
        <img
          src={lucidusLogo}
          alt="Lucidus Logo"
          className="w-48 h-48 md:w-64 md:h-64 object-contain"
        />
      </div>
    </div>
  );
};

export default IntroSequence;

