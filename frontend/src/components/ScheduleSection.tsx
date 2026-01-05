import { Download } from "lucide-react";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";
import Character3D from "./Character3D";

const ScheduleSection = () => {
  const { ref: scheduleRef, isVisible: scheduleVisible } = useCinematicReveal({ delay: 300 });

  // Google Drive direct download link
  const brochureUrl = "https://drive.google.com/uc?export=download&id=12GpD7NfTjl1TEjc-RxQZ_nCMWLZEfdC3";

  const handleDownload = () => {
    // Open the download link in a new tab
    window.open(brochureUrl, '_blank');
  };

  const scheduleEvents = [
    { time: "9:00 AM", title: "Inauguration", location: "(Main Audi)" },
    { time: "11:00 AM", title: "The Money Alchemist", location: "(Room 201)" },
    { time: "2:00 PM", title: "Log Horizon", location: "(Room 305)" },
  ];

  return (
    <div 
      ref={scheduleRef}
      className={`glass-panel rounded-3xl p-6 w-full subtle-glow-shift deep-ambient-float glass-edge-light hover-react-subtle depth-layer-panel ${
        scheduleVisible ? 'reveal-visible' : 'reveal-hidden'
      }`}
    >
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Schedule Content - Full width on left */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-lg font-bold text-foreground tracking-wide text-glow-cyan">SCHEDULE</h3>
            <button 
              onClick={handleDownload}
              className="glass-button text-[10px] flex items-center gap-2 py-2 px-4 font-display transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan attention-pulse"
            >
              <Download className="w-3 h-3" />
              Download Brochure
            </button>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {scheduleEvents.map((event, index) => (
              <div 
                key={index} 
                className="glass-card text-center py-4 transition-all duration-500 hover:scale-105 hover:shadow-glow-cyan cursor-pointer"
              >
                <div className="text-primary text-xs font-bold font-display mb-2 tracking-wider">
                  {event.time}
                </div>
                <h4 className="text-foreground text-xs font-bold font-display mb-1 tracking-wide">
                  {event.title}
                </h4>
                <p className="text-foreground/50 text-xs">{event.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Character Container - Ready for GLB model integration */}
        <div className="hidden lg:block w-64 h-64 flex-shrink-0 relative">
          <div className="w-full h-full glass-card rounded-2xl overflow-hidden">
            <Character3D />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;

