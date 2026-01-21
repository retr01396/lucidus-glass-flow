import { useState } from "react";
import { Coins, Swords, Target, Cog, Users, Trophy, Music, Sparkles, Anchor, Dribbble, PartyPopper } from "lucide-react";
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
  { icon: Sparkles, title: "Elyse", subtitle: "Fashion Show", prize: "₹30,000" },
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

        {/* Foam Party Announcement */}
        <div className={`relative overflow-hidden bg-black/60 backdrop-blur-xl border-2 border-cyan-500/40 rounded-2xl p-5 mb-6 shadow-[0_0_50px_rgba(0,200,255,0.3)] hover-react-subtle ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-orange-600/10 pointer-events-none" style={{
            backgroundSize: '200% 100%',
            animation: 'gradientShift 8s ease infinite'
          }} />
          
          {/* Decorative elements */}
          <div className="absolute top-2 right-2 text-cyan-400/30">
            <PartyPopper className="w-10 h-10" style={{ animation: 'bounce 2s infinite' }} />
          </div>
          <div className="absolute bottom-2 left-2 text-orange-400/30">
            <PartyPopper className="w-8 h-8" style={{ animation: 'bounce 2.5s infinite', animationDelay: '0.5s' }} />
          </div>
          
          <div className="relative z-10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 border-2 border-cyan-400/50 flex items-center justify-center flex-shrink-0 animate-pulse">
              <PartyPopper className="w-7 h-7 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 mb-2" style={{
                backgroundSize: '200% auto',
                animation: 'gradientText 4s ease infinite'
              }}>
                Get Ready for the Ultimate Foam Party! 🫧
              </h3>
              <p className="text-white/90 text-sm leading-relaxed mb-2">
                We are turning up the volume and the bubbles! You are invited to our <span className="font-bold text-cyan-300">Foam Party</span>—a mix of <span className="font-semibold text-purple-300">digital creativity</span> and <span className="font-semibold text-orange-300">high-energy fun</span>.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/40 rounded-full text-cyan-300 text-xs font-semibold">
                  Epic Entertainment
                </span>
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/40 rounded-full text-purple-300 text-xs font-semibold">
                  Creative Vibes
                </span>
                <span className="px-3 py-1 bg-orange-500/20 border border-orange-400/40 rounded-full text-orange-300 text-xs font-semibold">
                  Unforgettable Fun
                </span>
              </div>
            </div>
          </div>
          
          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 opacity-50" />
        </div>

        <style>{`
          @keyframes gradientText {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
        
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
