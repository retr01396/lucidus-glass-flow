import { useEffect, useState } from "react";
import { Calendar, Trophy } from "lucide-react";
import lucidusLogo from "@/assets/lucidus-logo.png";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

type Stage = "sukuna" | "intro-sequence" | "settle";

type MobileHeroSectionProps = {
  stage: Stage;
};

interface TimeRemaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const MobileHeroSection = ({ stage }: MobileHeroSectionProps) => {
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
    <div className="flex flex-col items-center w-full px-3">
      <div 
        ref={heroRef}
        id="home"
        className={`w-full transition-all duration-1000 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Enhanced Glass Panel with Cinematic Theme */}
        <div className="relative bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-6 shadow-[0_0_40px_rgba(0,200,255,0.15)] mt-4">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-transparent to-orange-600/10 animate-gradient-shift pointer-events-none rounded-3xl" />
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-orange-500/30 rounded-tr-3xl" />
          
          <div className="relative z-10 text-center">
            {/* Logo with Glow Effect */}
            <div className="relative inline-block mb-5">
              {/* Pulsing glow */}
              <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full animate-pulse-slow" />
              <img 
                src={lucidusLogo} 
                alt="Lucidus Phoenix" 
                className="relative w-28 h-28 mx-auto rounded-full object-cover border-3 border-white/20 shadow-[0_0_30px_rgba(0,200,255,0.3)] transition-all duration-500 hover:scale-105"
              />
              {/* Corner decorations */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyan-500/60 rounded-tl-lg" />
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-orange-500/60 rounded-tr-lg" />
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-orange-500/60 rounded-bl-lg" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cyan-500/60 rounded-br-lg" />
            </div>

            {/* Title with Enhanced Styling */}
            <div className="space-y-2 mb-5">
              <h1 className="font-display text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-orange-400 tracking-wide animate-gradient-text">
                LUCIDUS 2026
              </h1>
              <div className="flex items-center justify-center gap-2">
                <div className="h-[2px] w-10 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
                <Trophy className="w-4 h-4 text-orange-500 animate-bounce-subtle" />
                <div className="h-[2px] w-10 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse" />
              </div>
              <h2 className="font-display text-sm font-bold text-foreground/90 tracking-wide">
                National Level Management Fest
              </h2>
              <p className="text-foreground/60 text-xs font-body flex items-center justify-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                Christ College of Engineering
              </p>
            </div>

            {/* CTA Button with Glow Effect */}
            <button 
              onClick={handleRegister}
              className="relative group w-full py-4 font-display font-bold text-sm tracking-widest rounded-xl overflow-hidden mb-5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 bg-[length:200%_100%] animate-gradient-shift" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-active:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative z-10 text-white drop-shadow-lg">REGISTER NOW</span>
              <div className="absolute inset-0 shadow-[0_0_30px_rgba(255,100,0,0.4)] rounded-xl" />
            </button>

            {/* Countdown Timer - Enhanced */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { value: timeRemaining.days, label: "DAYS" },
                { value: timeRemaining.hours, label: "HRS" },
                { value: timeRemaining.minutes, label: "MIN" },
                { value: timeRemaining.seconds, label: "SEC" },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="relative bg-black/60 backdrop-blur-sm border-2 border-white/10 rounded-xl py-2.5 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(0,200,255,0.2)]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                  <span className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-cyan-600 tabular-nums block">
                    {item.value}
                  </span>
                  <span className="block text-[9px] text-foreground/50 font-display tracking-widest mt-0.5">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-gradient-shift {
          animation: gradient-shift 8s ease infinite;
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradient-text 4s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MobileHeroSection;
