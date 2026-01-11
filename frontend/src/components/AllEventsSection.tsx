import { useState } from "react";
import { Coins, Swords, Target, Cog, Users, Trophy, Music, Sparkles, Anchor, Dribbble } from "lucide-react";
import { Link } from "react-router-dom";
import EventDetailModal from "./EventDetailModal";
import { useCinematicReveal, useFocusSpotlight } from "@/hooks/use-cinematic-reveal";

const allEvents = [
  { icon: Coins, title: "The Money Alchemist", subtitle: "Finance Game", prize: "₹14,500" },
  { icon: Swords, title: "The Shogun Syndicate", subtitle: "BMT", prize: "₹14,500" },
  { icon: Target, title: "Log Horizon", subtitle: "Marketing Game", prize: "₹14,500" },
  { icon: Cog, title: "Shadow Break", subtitle: "Operations Game", prize: "₹14,500" },
  { icon: Users, title: "The Bond Bureau", subtitle: "HR Game", prize: "₹14,500" },
  { icon: Trophy, title: "Project Kaizen", subtitle: "Best Manager", prize: "₹15,000" },
  { icon: Anchor, title: "GrandLine", subtitle: "IPL Auction", prize: "₹14,500" },
  { icon: Dribbble, title: "BlueLock", subtitle: "3's Football", prize: "₹7,000" },
  { icon: Music, title: "Hibike", subtitle: "Group Dance", prize: "₹20,000" },
  { icon: Sparkles, title: "Elyse", subtitle: "Fashion Show", prize: "₹20,000" },
];

const AllEventsSection = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 100 });
  const [selectedEvent, setSelectedEvent] = useState<typeof allEvents[0] | null>(null);
  const { focusedIndex, setFocus, getCardStyle } = useFocusSpotlight();

  return (
    <>
      <div 
        ref={ref}
        id="events"
        className={`glass-panel rounded-3xl p-6 w-full subtle-glow-shift deep-ambient-float glass-edge-light hover-react-subtle depth-layer-panel ${
          isVisible ? 'reveal-visible' : 'reveal-hidden'
        }`}
      >
        <h2 className={`font-display text-xl font-bold text-foreground mb-6 tracking-wide text-glow-cyan text-center ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          ALL EVENTS
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {allEvents.map((event, index) => (
            <div 
              key={index} 
              className={`glass-card-fire group cursor-pointer parallax-card hover-react-medium glass-edge-light ${isVisible ? 'animate-flip-in' : 'opacity-0'} delay-${(index + 2) * 100}`}
              style={{
                ...getCardStyle(index),
              }}
              onMouseEnter={() => setFocus(index)}
              onMouseLeave={() => setFocus(null)}
            >
              <div className="event-icon mb-3 mx-auto group-hover:shadow-glow-orange transition-all duration-500 group-hover:scale-110">
                <event.icon className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <h4 className="text-foreground font-display text-[10px] font-bold text-center leading-tight mb-1 transition-all duration-300 group-hover:text-glow-cyan">
                {event.title}
              </h4>
              <p className="text-foreground/60 text-[9px] text-center mb-1">
                {event.subtitle}
              </p>
              <p className="text-accent text-[8px] text-center mb-2 font-semibold">
                Prizes worth {event.prize}
              </p>
              <button 
                className="glass-button w-full text-[9px] py-1 px-2 group-hover:shadow-glow-cyan font-display hover-react-strong micro-click depth-layer-button"
                onClick={() => setSelectedEvent(event)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="mt-8 text-center">
          <Link to="/events">
            <button className="glass-button px-8 py-3 text-sm font-display tracking-widest hover:shadow-glow-cyan hover-react-strong depth-layer-button">
              VIEW ALL EVENTS DETAILS
            </button>
          </Link>
        </div>
      </div>

      <EventDetailModal 
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
};

export default AllEventsSection;
