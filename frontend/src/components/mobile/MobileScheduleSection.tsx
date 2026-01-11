import { Clock, MapPin, Download, Calendar, Sparkles, UserCheck, Flame, Theater, Trophy, Music } from "lucide-react";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

const MobileScheduleSection = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 200 });

  const handleDownload = () => {
    console.log("Download button clicked - PDF will be available soon");
  };

  const scheduleEvents = [
    { 
      time: "8:30 AM", 
      title: "Registration", 
      location: "Main Hall",
      color: "cyan",
      Icon: UserCheck
    },
    { 
      time: "10:30 AM", 
      title: "Management Events", 
      location: "Conference Hall",
      color: "orange",
      Icon: Flame
    },
    { 
      time: "12:30 PM", 
      title: "Cultural Events", 
      location: "Main Stage",
      color: "cyan",
      Icon: Theater
    },
    { 
      time: "4:00 PM", 
      title: "Valedictory / Business Excellence Awards", 
      location: "Main Auditorium",
      color: "orange",
      Icon: Trophy
    },
    { 
      time: "5:30 PM", 
      title: "Entertainment Programme", 
      location: "Main Stage",
      color: "cyan",
      Icon: Music
    },
  ];

  return (
    <div 
      ref={ref}
      id="schedule"
      className={`mt-4 px-3 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative bg-gradient-to-b from-black/60 via-black/50 to-black/60 backdrop-blur-2xl border-2 border-white/10 rounded-3xl p-6 shadow-[0_0_60px_rgba(0,200,255,0.2)]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/8 via-purple-600/5 to-orange-600/8 animate-gradient-shift pointer-events-none rounded-3xl" />
        
        {/* Multiple corner accents for premium look */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/40 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-cyan-500/20 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-orange-500/20 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-orange-500/40 rounded-br-3xl" />
        
        {/* Floating sparkle effects */}
        <div className="absolute top-8 right-8 text-cyan-400/30 animate-pulse" style={{ animationDuration: '3s' }}>
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="absolute bottom-8 left-8 text-orange-400/30 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <Sparkles className="w-4 h-4" />
        </div>
        
        {/* Header */}
        <div className="relative z-10 text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600/30 to-orange-600/30 border-2 border-white/20 mb-3 shadow-[0_0_30px_rgba(0,200,255,0.3)] relative">
            <Calendar className="w-8 h-8 text-white animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-orange-500/20 animate-ping" style={{ animationDuration: '3s' }} />
          </div>
          <h2 className="font-display text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 mb-3 tracking-wider animate-gradient-text">
            SCHEDULE
          </h2>
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-cyan-500 to-cyan-500/50 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,200,255,0.6)]" />
            <div className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(255,100,0,0.6)]" />
            <div className="h-1 w-12 bg-gradient-to-l from-transparent via-orange-500 to-orange-500/50 rounded-full" />
          </div>
          <p className="text-white/50 text-xs tracking-widest uppercase">Day Timeline</p>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative z-10 mb-6">
          {/* Gradient vertical line with glow */}
          <div className="absolute left-[23px] top-2 bottom-2 w-1 bg-gradient-to-b from-cyan-500/60 via-purple-500/40 to-orange-500/60 rounded-full shadow-[0_0_10px_rgba(0,200,255,0.4)]" />

          <div className="space-y-5">
            {scheduleEvents.map((event, index) => {
              const isCyan = event.color === "cyan";
              const EventIcon = event.Icon;
              return (
                <div 
                  key={index}
                  className="relative flex items-start gap-4"
                  style={{
                    animation: `fadeInLeft 0.6s ease-out ${index * 0.12}s backwards`
                  }}
                >
                  {/* Enhanced Timeline Dot with icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isCyan 
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_25px_rgba(0,200,255,0.5)]' 
                        : 'bg-gradient-to-br from-orange-500 to-red-600 shadow-[0_0_25px_rgba(255,100,0,0.5)]'
                    } border-2 border-white/30 transition-all duration-300 hover:scale-125 hover:rotate-12 backdrop-blur-sm`}>
                      <EventIcon className="w-6 h-6 text-white" />
                    </div>
                    {/* Multiple pulsing rings */}
                    <div className={`absolute inset-0 rounded-full ${
                      isCyan ? 'bg-cyan-500/30' : 'bg-orange-500/30'
                    } animate-ping`} style={{ animationDuration: '2s' }} />
                    <div className={`absolute inset-0 rounded-full ${
                      isCyan ? 'bg-cyan-500/20' : 'bg-orange-500/20'
                    } animate-ping`} style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                  </div>

                  {/* Enhanced Content Card */}
                  <div className={`flex-1 bg-gradient-to-br ${
                    isCyan 
                      ? 'from-black/60 via-cyan-950/20 to-black/60' 
                      : 'from-black/60 via-orange-950/20 to-black/60'
                  } backdrop-blur-lg border-2 ${
                    isCyan ? 'border-cyan-500/30 hover:border-cyan-400/60' : 'border-orange-500/30 hover:border-orange-400/60'
                  } rounded-2xl p-4 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${
                    isCyan ? 'hover:shadow-cyan-500/30' : 'hover:shadow-orange-500/30'
                  } relative overflow-hidden group`}>
                    
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      isCyan ? 'from-cyan-600/10 via-transparent to-blue-600/5' : 'from-orange-600/10 via-transparent to-red-600/5'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Top corner glow */}
                    <div className={`absolute -top-8 -right-8 w-24 h-24 ${
                      isCyan ? 'bg-cyan-500/20' : 'bg-orange-500/20'
                    } rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Corner decoration */}
                    <div className={`absolute top-0 right-0 w-20 h-20 ${
                      isCyan ? 'bg-gradient-to-bl from-cyan-500/15' : 'bg-gradient-to-bl from-orange-500/15'
                    } to-transparent rounded-bl-full transition-all duration-500 group-hover:w-24 group-hover:h-24`} />
                    
                    {/* Time badge with enhanced styling */}
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${
                      isCyan 
                        ? 'bg-gradient-to-r from-cyan-600/40 to-blue-600/40 border-2 border-cyan-400/40 shadow-[0_0_15px_rgba(0,200,255,0.3)]' 
                        : 'bg-gradient-to-r from-orange-600/40 to-red-600/40 border-2 border-orange-400/40 shadow-[0_0_15px_rgba(255,100,0,0.3)]'
                    } mb-3 backdrop-blur-xl relative overflow-hidden group/badge`}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${
                        isCyan ? 'from-cyan-400/20 to-blue-400/20' : 'from-orange-400/20 to-red-400/20'
                      } translate-x-[-100%] group-hover/badge:translate-x-[100%] transition-transform duration-700`} />
                      <Clock className={`w-4 h-4 ${isCyan ? 'text-cyan-300' : 'text-orange-300'} relative z-10 drop-shadow-lg`} />
                      <span className={`text-sm font-bold ${isCyan ? 'text-cyan-200' : 'text-orange-200'} relative z-10 tracking-wide`}>
                        {event.time}
                      </span>
                    </div>
                    
                    <h4 className={`text-white font-bold text-lg leading-tight mb-3 relative z-10 drop-shadow-lg ${
                      isCyan ? 'group-hover:text-cyan-100' : 'group-hover:text-orange-100'
                    } transition-colors duration-300`}>
                      {event.title}
                    </h4>
                    
                    <div className="flex items-center gap-2.5 text-white/70 text-sm relative z-10 group-hover:text-white/90 transition-colors duration-300">
                      <div className={`p-1.5 rounded-lg ${
                        isCyan ? 'bg-cyan-500/10' : 'bg-orange-500/10'
                      }`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{event.location}</span>
                    </div>

                    {/* Bottom shine effect */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isCyan ? 'bg-gradient-to-r from-transparent via-cyan-500 to-transparent' : 'bg-gradient-to-r from-transparent via-orange-500 to-transparent'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Download Section */}
        <div className="relative z-10 pt-5 border-t-2 border-white/10">
          <button
            onClick={handleDownload}
            className="relative group w-full py-5 rounded-2xl overflow-hidden font-bold text-base tracking-wider flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(0,200,255,0.3)] transition-all duration-500 hover:scale-[1.03] active:scale-[0.97] border-2 border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-orange-600 bg-[length:200%_100%] animate-gradient-shift" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)]" />
            <Download className="w-6 h-6 relative z-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:animate-bounce" />
            <span className="relative z-10 text-white drop-shadow-lg">Download Full Brochure</span>
            <div className="absolute top-1 right-1">
              <Sparkles className="w-4 h-4 text-white/60 animate-pulse" />
            </div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 8s ease infinite;
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradient-text 6s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default MobileScheduleSection;
