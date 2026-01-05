import { useState, useEffect } from "react";
import lucidusLogo from "@/assets/lucidus-logo.png";
import { Button } from "@/components/ui/button";

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
  const [textStage, setTextStage] = useState<"welcome" | "lucidus" | "logo" | "fadeout">("welcome");
  const [logoOpacity, setLogoOpacity] = useState(0);

  const handleSkip = () => {
    // Immediately complete the intro
    setLogoOpacity(0);
    onBlurChange(0);
    if (onSukunaFadeOut) {
      onSukunaFadeOut(0);
    }
    onOverlayChange(0);
    onComplete();
  };

  useEffect(() => {
    // Show "WELCOME TO" for 1.5 seconds (increased for readability)
    const welcomeTimer = setTimeout(() => {
      setTextStage("lucidus");
    }, 1500);

    // Show "LUCIDUS" for 1.5 seconds (increased for readability)
    const lucidusTimer = setTimeout(() => {
      setTextStage("logo");
      setLogoOpacity(1);
    }, 3000);

    // Hold logo for 2 seconds then start fade out (increased for readability)
    const logoHoldTimer = setTimeout(() => {
      setTextStage("fadeout");
      setLogoOpacity(0);
    }, 5000);

    // No blur - set to 0 immediately
    onBlurChange(0);
    onOverlayChange(0);
    if (onSukunaFadeOut) {
      onSukunaFadeOut(1);
    }

    // Start fade out transition
    const startTime = performance.now();
    const fadeOutStart = 5000; // Start fade when logo starts fading
    const fadeOutDuration = 500; // Smooth fade out

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      
      if (elapsed < fadeOutStart) {
        // Keep black background visible during text/logo display
        if (onSukunaFadeOut) {
          onSukunaFadeOut(1);
        }
      } else {
        // Fade out black background quickly
        const fadeElapsed = elapsed - fadeOutStart;
        const fadeProgress = Math.min(fadeElapsed / fadeOutDuration, 1);
        
        if (onSukunaFadeOut) {
          onSukunaFadeOut(1 - fadeProgress);
        }
      }

      if (elapsed < fadeOutStart + fadeOutDuration) {
        requestAnimationFrame(animate);
      } else {
        // Complete transition
        setLogoOpacity(0);
        if (onSukunaFadeOut) {
          onSukunaFadeOut(0);
        }
        onComplete();
      }
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(lucidusTimer);
      clearTimeout(logoHoldTimer);
      cancelAnimationFrame(animationId);
    };
  }, [onComplete, onBlurChange, onOverlayChange, onSukunaFadeOut]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black gpu-accelerated">
      {/* Skip Button */}
      <Button
        onClick={handleSkip}
        variant="outline"
        className="absolute top-8 right-8 z-50 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm pointer-events-auto transition-all duration-300 hover:scale-105 smooth-appear"
      >
        Skip
      </Button>

      {/* Welcome Text */}
      {textStage === "welcome" && (
        <div className="text-center smooth-appear">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider animate-fade-in">
            WELCOME TO
          </h1>
        </div>
      )}

      {/* Lucidus Text */}
      {textStage === "lucidus" && (
        <div className="text-center smooth-appear">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider animate-fade-in">
            LUCIDUS
          </h1>
        </div>
      )}

      {/* Logo */}
      {(textStage === "logo" || textStage === "fadeout") && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gpu-accelerated"
          style={{
            opacity: logoOpacity,
            transition: "opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <img
            src={lucidusLogo}
            alt="Lucidus Logo"
            className="w-48 h-48 md:w-64 md:h-64 object-contain mb-4 smooth-appear"
          />
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wider smooth-appear delay-100">
            LUCIDUS
          </h1>
        </div>
      )}
    </div>
  );
};

export default IntroSequence;

