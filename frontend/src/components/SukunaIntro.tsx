import { useRef, useEffect, useState } from "react";
import lucidusLogo from "@/assets/lucidus-logo.png";

type SukunaIntroProps = {
  onEnd: () => void;
};

const SukunaIntro = ({ onEnd }: SukunaIntroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFrozen, setIsFrozen] = useState(false);
  const [lastFrame, setLastFrame] = useState<string | null>(null);
  const [textStage, setTextStage] = useState<"none" | "welcome" | "lucidus" | "logo">("none");
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [blackOverlay, setBlackOverlay] = useState(0);
  const [hasTriggeredText, setHasTriggeredText] = useState(false);
  const [hasTriggeredLucidus, setHasTriggeredLucidus] = useState(false);
  const [hasTriggeredLogo, setHasTriggeredLogo] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set a maximum timeout of 5 seconds - if video doesn't start playing, skip intro
    timeoutRef.current = setTimeout(() => {
      console.warn("Video loading timeout - skipping intro");
      onEnd();
    }, 5000);

    const handleCanPlay = () => {
      // Video is ready to play, clear timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const handleError = () => {
      console.error("Video failed to load - skipping intro");
      setVideoError(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      // Skip directly to main content
      onEnd();
    };

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;

      // 2 seconds: Show "WELCOME TO"
      if (currentTime >= 2 && !hasTriggeredText) {
        setHasTriggeredText(true);
        setTextStage("welcome");
        
        // After "WELCOME TO" holds briefly, fade it out and show "LUCIDUS"
        setTimeout(() => {
          setTextStage("lucidus");
          setHasTriggeredLucidus(true);
          
          // After "LUCIDUS" holds briefly, fade it out and show logo
          setTimeout(() => {
            setTextStage("logo");
            setLogoOpacity(1);
            setHasTriggeredLogo(true);
          }, 1500);
        }, 1500);
      }
    };

    const handleEnded = () => {
      // Capture last frame
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        setLastFrame(canvas.toDataURL());
        setIsFrozen(true);
        
        // Freeze briefly, then fade to black
        setTimeout(() => {
          setBlackOverlay(1);
          // Notify parent that video ended
          onEnd();
        }, 500);
      }
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [onEnd, hasTriggeredText, hasTriggeredLucidus, hasTriggeredLogo]);

  const handleSkip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    onEnd();
  };

  // If video error, show nothing and skip
  if (videoError) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 z-60 px-4 py-2 text-white/60 hover:text-white text-sm font-display tracking-wider transition-colors duration-300 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm"
      >
        SKIP INTRO
      </button>

      {/* Video or frozen frame */}
      {isFrozen && lastFrame ? (
        <img
          src={lastFrame}
          alt="Frozen frame"
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/videos/intro.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
        />
      )}

      {/* Black overlay after video ends */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-1000 ease-in-out"
        style={{ opacity: blackOverlay }}
      />

      {/* Text and Logo Overlays */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        {/* "WELCOME TO" */}
        <h2
          className="font-display text-6xl md:text-8xl font-bold text-white tracking-wider absolute inset-0 flex items-center justify-center"
          style={{
            opacity: textStage === "welcome" ? 1 : 0,
            transition: "opacity 600ms ease-in-out",
          }}
        >
          WELCOME TO
        </h2>

        {/* "LUCIDUS" */}
        <h2
          className="font-display text-7xl md:text-9xl font-bold text-white tracking-wider absolute inset-0 flex items-center justify-center"
          style={{
            opacity: textStage === "lucidus" ? 1 : 0,
            transition: "opacity 600ms ease-in-out",
            textShadow: "0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(255, 255, 255, 0.4)",
          }}
        >
          LUCIDUS
        </h2>

        {/* Logo - hide when black overlay appears (IntroSequence will handle it) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: blackOverlay > 0 ? 0 : logoOpacity,
            transition: "opacity 600ms ease-in-out",
          }}
        >
          <img
            src={lucidusLogo}
            alt="Lucidus Logo"
            className="w-48 h-48 md:w-64 md:h-64 object-contain transition-transform duration-800 ease-out"
            style={{
              transform: logoOpacity === 1 ? "scale(1)" : "scale(0.9)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SukunaIntro;

