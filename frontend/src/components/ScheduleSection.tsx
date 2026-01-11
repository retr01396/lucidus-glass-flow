import { Download, Calendar, MapPin, Clock } from "lucide-react";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

const ScheduleSection = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 200 });

  // PDF download temporarily disabled - will be added later
  const brochureUrl = ""; // Empty URL - PDF will be provided later

  const handleDownload = () => {
    // Disabled for now - PDF will be provided later
    console.log("Download button clicked - PDF will be available soon");
  };

  const scheduleEvents = [
    { 
      time: "8:30 AM", 
      title: "Registration", 
      location: "Main Hall",
      color: "cyan"
    },
    { 
      time: "10:30 AM", 
      title: "Management Events", 
      location: "Conference Hall",
      color: "orange"
    },
    { 
      time: "12:30 PM", 
      title: "Cultural Events", 
      location: "Main Stage",
      color: "cyan"
    },
    { 
      time: "4:00 PM", 
      title: "Valedictory / Business Excellence Awards", 
      location: "Main Auditorium",
      color: "orange"
    },
    { 
      time: "5:30 PM", 
      title: "Entertainment Programme", 
      location: "Main Stage",
      color: "cyan"
    },
    { 
      time: "7:00 PM", 
      title: "Gate Closing", 
      location: "Main Entrance",
      color: "orange"
    },
  ];

  return (
    <div 
      ref={ref}
      id="schedule"
      className={`max-w-6xl mx-auto mt-4 sm:mt-6 md:mt-8 px-3 sm:px-4 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_0_60px_rgba(0,200,255,0.15)]">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-transparent to-orange-600/5 animate-gradient-shift pointer-events-none rounded-3xl" />
        
        <div className={`relative z-10 text-center mb-8 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-cyan-600/20 to-orange-600/20 border border-white/10 mb-4 shadow-[0_0_30px_rgba(0,200,255,0.3)]">
            <Calendar className="w-8 h-8 md:w-10 md:h-10 text-cyan-500" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400 mb-3 tracking-wide">
            EVENT SCHEDULE
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-4" />
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl mx-auto">
            Mark your calendar for these exciting events
          </p>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
          {scheduleEvents.map((event, index) => {
            const isCyan = event.color === "cyan";
            const isLeftColumn = index % 2 === 0;
            return (
              <div 
                key={index}
                className={`bg-black/60 backdrop-blur-sm border-2 ${
                  isCyan ? 'border-cyan-600/30 hover:border-cyan-500/40' : 'border-orange-600/30 hover:border-orange-500/40'
                } rounded-2xl p-5 transition-all duration-300 ${
                  isCyan ? 'hover:shadow-[0_0_30px_rgba(0,200,255,0.15)]' : 'hover:shadow-[0_0_30px_rgba(255,100,0,0.15)]'
                } hover:scale-[1.02] cursor-pointer group ${
                  isVisible ? (isLeftColumn ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'
                } delay-${(index + 2) * 100}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl ${
                    isCyan ? 'bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border-cyan-500/30' : 'bg-gradient-to-br from-orange-600/30 to-red-600/30 border-orange-500/30'
                  } border-2 flex flex-col items-center justify-center flex-shrink-0`}>
                    <Clock className={`w-5 h-5 ${isCyan ? 'text-cyan-400' : 'text-orange-400'} mb-1`} />
                    <span className={`text-xs font-bold font-display ${isCyan ? 'text-cyan-400' : 'text-orange-400'} text-center leading-tight`}>
                      {event.time}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className={`font-display text-base md:text-lg font-bold mb-2 tracking-wide ${
                      isCyan ? 'text-cyan-400' : 'text-orange-400'
                    } group-hover:scale-105 transition-transform duration-200`}>
                      {event.title}
                    </h4>
                    <div className="flex items-center gap-2 text-foreground/70 text-sm">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`relative z-10 overflow-hidden rounded-2xl ${isVisible ? 'animate-scale-in delay-800' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-orange-600/10 to-cyan-600/10 animate-gradient-shift" />
          
          <div className="relative bg-black/60 backdrop-blur-sm border-2 border-cyan-600/30 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <Download className="w-6 h-6 text-cyan-400" />
                  <h4 className="font-display text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400 tracking-wider">
                    GET THE COMPLETE SCHEDULE
                  </h4>
                </div>
                <p className="text-foreground/70 text-sm">
                  Download our detailed brochure with all event information, timings, and venue details
                </p>
              </div>

              <button
                onClick={handleDownload}
                className="group relative overflow-hidden rounded-full px-8 py-4 font-display font-bold text-base tracking-wider transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-orange-600 to-cyan-600 bg-[length:200%_100%] animate-gradient-shift" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                
                <div className="relative flex items-center gap-3 text-black">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="whitespace-nowrap">DOWNLOAD BROCHURE</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
