import { useState } from "react";
import { Coins, Swords, Target, Cog } from "lucide-react";
import { useCinematicReveal, useFocusSpotlight } from "@/hooks/use-cinematic-reveal";

const events = [
  { icon: Coins, title: "The Money Alchemist", subtitle: "Finance Game", prize: "₹30,000" },
  { icon: Swords, title: "The Shogun Syndicate", subtitle: "BMT", prize: "₹30,000" },
  { icon: Target, title: "Log Horizon", subtitle: "Marketing Game", prize: "₹30,000" },
  { icon: Cog, title: "Shadow Break", subtitle: "Operations Game", prize: "₹30,000" },
];

const EventsPanel = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 200 });
  const { focusedIndex, setFocus, getCardStyle } = useFocusSpotlight();

  return (
    <div 
      ref={ref}
      className={`glass-panel rounded-3xl p-5 w-full max-w-[280px] subtle-glow-shift deep-ambient-float glass-edge-light hover-react-subtle depth-layer-panel ${
        isVisible ? 'reveal-visible' : 'reveal-hidden'
      }`}
    >
      <h3 className="text-foreground/50 text-xs font-medium mb-1 tracking-widest font-display">EVENTS PAGE</h3>
      <h2 className="font-display text-lg font-bold text-foreground mb-4 tracking-wide text-glow-cyan">EVENTS PAGE</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {events.map((event, index) => (
          <div 
            key={index} 
            className="glass-card-fire group cursor-pointer parallax-card hover-react-medium glass-edge-light"
            style={{
              ...getCardStyle(index),
              animationDelay: `${index * 100}ms`,
            }}
            onMouseEnter={() => setFocus(index)}
            onMouseLeave={() => setFocus(null)}
          >
            <div className="event-icon mb-3 mx-auto group-hover:shadow-glow-orange transition-all duration-500 group-hover:scale-110">
              <event.icon className="w-7 h-7 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
            </div>
            <h4 className="text-foreground font-display text-[10px] font-bold text-center leading-tight transition-all duration-300 group-hover:text-glow-cyan">
              {event.title}
            </h4>
            <p className="text-foreground/60 text-[10px] text-center mb-1">
              {event.subtitle}
            </p>
            <p className="text-accent text-[9px] text-center mb-2 font-semibold">
              Prizes worth {event.prize}
            </p>
            <button className="glass-button w-full text-[10px] py-1.5 px-2 group-hover:shadow-glow-cyan font-display hover-react-strong micro-click depth-layer-button">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPanel;
