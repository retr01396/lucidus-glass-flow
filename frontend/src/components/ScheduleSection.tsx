import { useState } from "react";
import { Download } from "lucide-react";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";
import Character3D from "./Character3D";

const ScheduleSection = () => {
  const { ref: scheduleRef, isVisible: scheduleVisible } = useCinematicReveal({ delay: 300 });
  const [activeTimeIndex, setActiveTimeIndex] = useState<number | null>(null);

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
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display text-lg font-bold text-foreground tracking-wide text-glow-cyan">SCHEDULE</h3>
            <button className="glass-button text-[10px] flex items-center gap-2 py-2 px-4 font-display transition-all duration-300 hover:scale-105">
              <Download className="w-3 h-3" />
              Download PDF
            </button>
          </div>

          {/* Timeline */}
          <div className="mb-5">
            <div className="flex justify-between mb-4">
              {scheduleEvents.map((event, index) => (
                <span 
                  key={index}
                  className={`glass-button text-[11px] py-1.5 px-4 font-display cursor-pointer transition-all duration-500 ${
                    activeTimeIndex === index ? 'shadow-glow-cyan scale-105' : ''
                  }`}
                  onMouseEnter={() => setActiveTimeIndex(index)}
                  onMouseLeave={() => setActiveTimeIndex(null)}
                >
                  {event.time}
                </span>
              ))}
            </div>
            <div className="timeline-track">
              {scheduleEvents.map((_, index) => (
                <div 
                  key={index}
                  className={`timeline-marker transition-all duration-500 ${
                    activeTimeIndex === index ? 'timeline-node-active scale-150' : ''
                  }`}
                  style={{ left: `${15 + index * 35}%` }}
                  onMouseEnter={() => setActiveTimeIndex(index)}
                  onMouseLeave={() => setActiveTimeIndex(null)}
                />
              ))}
            </div>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-3 gap-3">
            {scheduleEvents.map((event, index) => (
              <div 
                key={index} 
                className={`glass-card text-center py-4 transition-all duration-500 cursor-pointer ${
                  activeTimeIndex === index 
                    ? 'scale-105 shadow-glow-cyan' 
                    : activeTimeIndex !== null 
                      ? 'opacity-50 blur-[1px]' 
                      : ''
                }`}
                onMouseEnter={() => setActiveTimeIndex(index)}
                onMouseLeave={() => setActiveTimeIndex(null)}
              >
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

