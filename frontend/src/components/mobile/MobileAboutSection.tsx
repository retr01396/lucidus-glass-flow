import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";
import { Sparkles, Target, Users, Award } from "lucide-react";

const MobileAboutSection = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 150 });

  const highlights = [
    { icon: Target, text: "Management Excellence", color: "from-cyan-500 to-blue-500" },
    { icon: Users, text: "Leadership", color: "from-orange-500 to-red-500" },
    { icon: Award, text: "Competitions", color: "from-cyan-500 to-blue-500" },
    { icon: Sparkles, text: "Innovation", color: "from-orange-500 to-red-500" },
  ];

  return (
    <div 
      ref={ref}
      id="about"
      className={`mt-4 px-3 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-lg">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 mb-1 tracking-wide">
            ABOUT LUCIDUS
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
        </div>
        
        {/* Content */}
        <div className="bg-black/40 border border-white/10 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
            <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">About</span>
          </div>
          <p className="text-white/80 text-sm leading-relaxed mb-3">
            LUCIDUS is a national-level intercollegiate management fest organized by the Department of Business Administration, Christ College of Engineering (Autonomous), Irinjalakuda.
          </p>
          <p className="text-white/70 text-sm leading-relaxed">
            The fest celebrates management excellence, leadership, creativity, and teamwork.
          </p>
        </div>

        {/* Highlights Grid - 2x2 */}
        <div className="grid grid-cols-4 gap-2">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-black/40 border border-white/10 rounded-xl p-2 text-center"
            >
              <div className={`w-8 h-8 mx-auto mb-1.5 rounded-full bg-gradient-to-br ${item.color}/20 flex items-center justify-center border border-white/10`}>
                <item.icon className={`w-4 h-4 text-transparent bg-clip-text bg-gradient-to-br ${item.color}`} strokeWidth={2} />
              </div>
              <p className="text-white/60 text-[9px] font-display font-semibold leading-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileAboutSection;
