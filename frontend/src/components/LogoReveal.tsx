import { useEffect } from "react";
import lucidusLogo from "@/assets/lucidus-logo.png";

type LogoRevealProps = {
  onComplete: () => void;
};

const LogoReveal = ({ onComplete }: LogoRevealProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <img
        src={lucidusLogo}
        alt="Lucidus Logo"
        className="w-32 h-32 rounded-full object-cover"
      />
    </div>
  );
};

export default LogoReveal;

