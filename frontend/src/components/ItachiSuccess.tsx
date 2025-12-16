import { useRef, useEffect, useState } from "react";
import lucidusLogo from "@/assets/lucidus-logo.png";

type ItachiSuccessProps = {
  onEnd: () => void;
};

const ItachiSuccess = ({ onEnd }: ItachiSuccessProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showLogo, setShowLogo] = useState(false);
  const [videoOpacity, setVideoOpacity] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      // Logo appears on the LAST FRAME
      setShowLogo(true);
      // Fade out video after logo appears
      requestAnimationFrame(() => {
        setVideoOpacity(0);
        setTimeout(() => {
          onEnd();
        }, 500);
      });
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [onEnd]);

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: videoOpacity }}
        src="/videos/success.mp4"
        autoPlay
        muted
        playsInline
      />
      {showLogo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={lucidusLogo}
            alt="Lucidus Logo"
            className="w-32 h-32 rounded-full object-cover"
            style={{
              opacity: showLogo ? 1 : 0,
              transition: "opacity 300ms ease-out",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ItachiSuccess;

