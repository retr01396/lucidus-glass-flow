import { useEffect } from "react";
import { Play } from "lucide-react";
import lucidusLogo from "@/assets/lucidus-logo.png";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

type Stage = "sukuna" | "intro-sequence" | "settle";

type HeroSectionProps = {
  stage: Stage;
};

const HeroSection = ({ stage }: HeroSectionProps) => {
  const { ref: heroRef, isVisible: heroVisible } = useCinematicReveal({ delay: 0 });

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Main Hero Panel */}
      <div 
        ref={heroRef}
        id="home"
        className={`glass-panel rounded-3xl p-8 w-full text-center relative overflow-hidden glass-edge-light hover-react-subtle depth-layer-panel ${
          heroVisible ? 'reveal-visible' : 'reveal-hidden'
        }`}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        {/* Phoenix Logo */}
        <div className="mb-4 relative">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
          <img 
            src={lucidusLogo} 
            alt="Lucidus Phoenix" 
            className="w-44 h-44 md:w-[216px] md:h-[216px] mx-auto rounded-full object-cover relative z-10 border-2 border-foreground/20 transition-all duration-300 ease-out hover:scale-105"
          />
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl md:text-4xl font-black text-foreground mb-1 tracking-wider text-glow-cyan">
          LUCIDUS 2026
        </h1>
        <h2 className="font-display text-xl md:text-2xl font-bold text-foreground/90 mb-3 tracking-wide">
          National Level Management Fest
        </h2>
        <p className="text-foreground/60 text-base mb-6 font-body tracking-wide">
          Christ College of Engineering, Irinjalakuda
        </p>

        {/* Register Button */}
        <button 
          onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdIl9LhrgavWOCrQDQonVcvk7uv2yS9URwZFckXdvbWQbM7Xw/viewform?usp=header", "_blank")}
          className="glow-button mb-6 attention-pulse px-10 py-3 text-sm tracking-widest font-display hover-react-strong micro-click-rebound glass-edge-light depth-layer-button"
        >
          REGISTER NOW
        </button>

        {/* Countdown Timer */}
        <div className="flex items-center justify-center gap-1.5 mb-6">
          {[
            { value: "07", label: "D" },
            { value: "08", label: "H" },
            { value: "36", label: "M" },
            { value: "45", label: "S" },
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="countdown-box px-4 py-2 transition-all duration-500 hover:scale-110 hover:shadow-glow-cyan"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-display text-xl font-bold text-foreground">{item.value}</span>
              </div>
              {index < 3 && <span className="text-foreground/40 text-xl mx-1 font-display">:</span>}
            </div>
          ))}
        </div>

        {/* Video Cards */}
        <div className="grid grid-cols-3 gap-3">
          {["DEAN'S MESSAGE", "FEST THEME", "WATCH TEASER"].map((title, index) => (
            <div 
              key={index} 
              className="video-card py-5 group parallax-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="play-icon group-hover:scale-110 group-hover:shadow-glow-cyan transition-all duration-500">
                <Play className="w-5 h-5 text-foreground/70 fill-foreground/10 ml-0.5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="text-foreground/70 text-[10px] font-semibold text-center font-display tracking-wide mt-1 transition-all duration-300 group-hover:text-foreground">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
