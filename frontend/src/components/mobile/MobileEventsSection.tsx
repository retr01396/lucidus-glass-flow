import { useState } from "react";
import { Flame, Snowflake, ChevronDown } from "lucide-react";
import { eventsData } from "@/data/eventsData";
import MobileEventCard from "@/components/mobile/MobileEventCard";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

const MobileEventsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useCinematicReveal({ delay: 100 });
  const [activeTab, setActiveTab] = useState<"management" | "non-management">("management");

  return (
    <div
      ref={sectionRef}
      id="events"
      className={`mt-4 px-3 transition-all duration-1000 ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-5 shadow-[0_0_40px_rgba(255,100,0,0.15)]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 via-transparent to-cyan-600/5 animate-gradient-shift pointer-events-none rounded-3xl" />
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-orange-500/30 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/30 rounded-br-3xl" />
        
        {/* Section Header */}
        <div className="relative z-10 text-center mb-5">
          <h2 className="font-display text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400 mb-2 tracking-wide">
            ALL EVENTS
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto" />
        </div>

        {/* Tab Selector - Enhanced */}
        <div className="relative z-10 flex gap-2 mb-5">
          <button
            onClick={() => setActiveTab("management")}
            className={`relative flex-1 py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden ${
              activeTab === "management"
                ? "text-white shadow-lg shadow-orange-500/30"
                : "text-white/60 border-2 border-white/10 hover:border-white/20"
            }`}
          >
            {activeTab === "management" && (
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 animate-gradient-shift" />
            )}
            <Flame className={`w-5 h-5 relative z-10 ${activeTab === "management" ? "animate-bounce-subtle" : ""}`} />
            <span className="relative z-10">Management</span>
          </button>
          <button
            onClick={() => setActiveTab("non-management")}
            className={`relative flex-1 py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden ${
              activeTab === "non-management"
                ? "text-white shadow-lg shadow-cyan-500/30"
                : "text-white/60 border-2 border-white/10 hover:border-white/20"
            }`}
          >
            {activeTab === "non-management" && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 animate-gradient-shift" />
            )}
            <Snowflake className={`w-5 h-5 relative z-10 ${activeTab === "non-management" ? "animate-spin-slow" : ""}`} />
            <span className="relative z-10">Non-Mgmt</span>
          </button>
        </div>

        {/* Event Count Badge - Enhanced */}
        <div className="relative z-10 mb-5 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
            activeTab === "management" 
              ? "bg-gradient-to-r from-red-900/40 to-orange-900/40 border-2 border-red-500/30 shadow-[0_0_20px_rgba(255,100,0,0.2)]" 
              : "bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-2 border-cyan-500/30 shadow-[0_0_20px_rgba(0,200,255,0.2)]"
          } backdrop-blur-xl`}>
            {activeTab === "management" ? (
              <Flame className="w-4 h-4 text-red-400" />
            ) : (
              <Snowflake className="w-4 h-4 text-cyan-400" />
            )}
            <p className={`font-semibold text-sm ${
              activeTab === "management" ? "text-red-200" : "text-cyan-200"
            }`}>
              {activeTab === "management" 
                ? `${eventsData.management.length} Management Events`
                : `${eventsData.nonManagement.length} Non-Management Events`
              }
            </p>
          </div>
        </div>

        {/* Event Cards */}
        <div className="relative z-10 space-y-3">
          {activeTab === "management" 
            ? eventsData.management.map((event, index) => (
                <div
                  key={event.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <MobileEventCard event={event} type="management" />
                </div>
              ))
            : eventsData.nonManagement.map((event, index) => (
                <div
                  key={event.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <MobileEventCard event={event} type="non-management" />
                </div>
              ))
          }
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }
        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradient-shift 6s ease infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MobileEventsSection;
