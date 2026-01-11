import { useEffect, useState } from "react";
import { Play, Calendar, Trophy, Swords } from "lucide-react";
import lucidusLogo from "@/assets/lucidus-logo.png";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

type Stage = "sukuna" | "intro-sequence" | "settle";

type HeroSectionProps = {
  stage: Stage;
};

interface TimeRemaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const HeroSection = ({ stage }: HeroSectionProps) => {
  const { ref: heroRef, isVisible: heroVisible } = useCinematicReveal({ delay: 0 });
  
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const eventDate = new Date("2026-01-24T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0")
        });
      } else {
        setTimeRemaining({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00"
        });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRegister = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdIl9LhrgavWOCrQDQonVcvk7uv2yS9URwZFckXdvbWQbM7Xw/viewform?usp=header', '_blank');
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div 
        ref={heroRef}
        id="home"
        className={`relative overflow-hidden rounded-3xl transition-all duration-1000 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Premium Glass Panel with Gradient Border */}
        <div className="relative bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-[0_0_60px_rgba(0,200,255,0.15)] mt-6 sm:mt-8">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-transparent to-orange-600/10 animate-gradient-shift pointer-events-none rounded-3xl" />
          
          {/* Sword Divider Top - Hidden on small mobile */}
          <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-full p-2 sm:p-3 shadow-[0_0_30px_rgba(255,100,0,0.6)] ring-4 ring-black/50">
              <Swords className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>

          <div className="relative z-10 text-center space-y-4 sm:space-y-6">
            {/* Logo with Premium Glow */}
            <div className="relative inline-block animate-float-3d">
              {/* Glow effect - reduced on mobile */}
              <div className="hidden sm:block absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full animate-pulse-slow" />
              <div className="relative">
                <img 
                  src={lucidusLogo} 
                  alt="Lucidus Phoenix" 
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 mx-auto rounded-full object-cover border-2 sm:border-4 border-white/20 shadow-[0_0_50px_rgba(0,200,255,0.3)] transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 hover:shadow-[0_0_80px_rgba(0,200,255,0.5)]"
                />
                {/* Corner Accents - smaller on mobile */}
                <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-cyan-500/60 rounded-tl-lg" />
                <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-orange-500/60 rounded-tr-lg" />
                <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-orange-500/60 rounded-bl-lg" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-500/60 rounded-br-lg" />
              </div>
            </div>

            {/* Title Section - Mobile optimized */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-orange-400 mb-2 tracking-wider animate-gradient-text">
                LUCIDUS 2026
              </h1>
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                <div className="h-[2px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                <div className="h-[2px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
              </div>
              <h2 className="font-display text-base sm:text-xl md:text-2xl font-bold text-foreground/90 tracking-wide px-2">
                National Level Management Fest
              </h2>
              <p className="text-foreground/60 text-xs sm:text-sm md:text-base font-body tracking-wide flex items-center justify-center gap-2 px-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-500 flex-shrink-0" />
                <span className="text-center">Christ College of Engineering, Irinjalakuda</span>
              </p>
            </div>

            {/* CTA Button - Mobile optimized */}
            <button 
              onClick={handleRegister}
              className="relative group px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-display font-bold text-xs sm:text-sm tracking-widest rounded-full bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white shadow-[0_0_30px_rgba(255,100,0,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,100,0,0.8)] animate-pulse-border"
            >
              <span className="relative z-10">REGISTER NOW</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </button>

            {/* Countdown Timer - Mobile optimized */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
              {[
                { value: timeRemaining.days, label: "DAYS" },
                { value: timeRemaining.hours, label: "HRS" },
                { value: timeRemaining.minutes, label: "MIN" },
                { value: timeRemaining.seconds, label: "SEC" },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="relative bg-black/60 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,200,255,0.3)] group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-cyan-600 tabular-nums">
                      {item.value}
                    </span>
                    <span className="block text-[8px] sm:text-[9px] md:text-[10px] text-foreground/50 font-display tracking-widest mt-0.5 sm:mt-1">
                      {item.label}
                    </span>
                  </div>
                  {index < 3 && <span className="text-cyan-500/40 text-2xl mx-1 font-display">:</span>}
                </div>
              ))}
            </div>

            {/* Video Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4">
              {["DEAN'S MESSAGE", "FEST THEME", "WATCH TEASER"].map((title, index) => (
                <div 
                  key={index} 
                  className="relative group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-5 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,200,255,0.2)] hover:-translate-y-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-cyan-600/20 to-orange-600/20 flex items-center justify-center border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,200,255,0.4)]">
                      <Play className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 fill-cyan-400/20 ml-0.5" />
                    </div>
                    <span className="text-foreground/70 text-[9px] md:text-[10px] font-semibold text-center font-display tracking-wide block transition-all duration-300 group-hover:text-cyan-400">
                      {title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;