import { useState, useEffect } from "react";
import lucidusLogo from "@/assets/lucidus-logo.png";

type LoginPanelProps = {
  onLogin: () => void;
  shouldShow?: boolean;
};

const LoginPanel = ({ onLogin, shouldShow = false }: LoginPanelProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textStage, setTextStage] = useState<"welcome" | "lucidus" | "logo" | "form">("welcome");
  const [panelOpacity, setPanelOpacity] = useState(0);
  const [panelTranslate, setPanelTranslate] = useState(8);

  useEffect(() => {
    if (shouldShow) {
      // Fade in panel
      requestAnimationFrame(() => {
        setPanelOpacity(1);
        setPanelTranslate(0);
      });
    }
  }, [shouldShow]);

  useEffect(() => {
    if (textStage === "welcome") {
      const timer1 = setTimeout(() => {
        setTextStage("lucidus");
      }, 600);
      return () => clearTimeout(timer1);
    } else if (textStage === "lucidus") {
      const timer2 = setTimeout(() => {
        setTextStage("logo");
      }, 800);
      return () => clearTimeout(timer2);
    } else if (textStage === "logo") {
      const timer3 = setTimeout(() => {
        setTextStage("form");
      }, 1000);
      return () => clearTimeout(timer3);
    }
  }, [textStage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      style={{
        opacity: panelOpacity,
        transform: `translateY(${panelTranslate}px)`,
        transition: "opacity 700ms ease-out, transform 700ms ease-out",
      }}
    >
      <div className="glass-panel rounded-3xl p-8 w-full max-w-md backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
        {/* Text Choreography */}
        <div className="mb-6 text-center min-h-[80px] flex items-center justify-center relative">
          <h2
            className="font-display text-xl font-bold text-foreground tracking-wider text-glow-cyan absolute inset-0 flex items-center justify-center"
            style={{
              opacity: textStage === "welcome" ? 1 : 0,
              transition: "opacity 500ms ease-in-out",
              pointerEvents: "none",
            }}
          >
            WELCOME TO
          </h2>
          <h2
            className="font-display text-3xl font-bold text-foreground tracking-wider text-glow-cyan absolute inset-0 flex items-center justify-center"
            style={{
              opacity: textStage === "lucidus" ? 1 : 0,
              transition: "opacity 500ms ease-in-out",
              textShadow: "0 0 20px hsl(195 100% 70% / 0.5)",
              pointerEvents: "none",
            }}
          >
            LUCIDUS
          </h2>
          <img
            src={lucidusLogo}
            alt="Lucidus Logo"
            className="w-16 h-16 rounded-full object-cover mx-auto absolute transition-all duration-1000 ease-out"
            style={{
              opacity: textStage === "logo" ? 1 : 0,
              transform: textStage === "logo" ? "scale(1)" : "scale(0.8)",
              pointerEvents: "none",
            }}
          />
        </div>
        
        {textStage === "form" && (
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            style={{
              opacity: textStage === "form" ? 1 : 0,
              transition: "opacity 500ms ease-in",
            }}
          >
          <div>
            <label className="text-foreground/60 text-sm font-medium mb-2 block font-body tracking-wide">
              Email
            </label>
            <input
              type="email"
              className="glass-input text-foreground w-full transition-all duration-500"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-foreground/60 text-sm font-medium mb-2 block font-body tracking-wide">
              Password
            </label>
            <input
              type="password"
              className="glass-input text-foreground w-full transition-all duration-500"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="glow-button w-full mt-6 text-sm tracking-widest font-display hover-react-strong micro-click-rebound glass-edge-light depth-layer-button attention-pulse"
          >
            Login
          </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPanel;

