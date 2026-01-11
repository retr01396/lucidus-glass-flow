import { useState } from "react";
import { Flame, Snowflake } from "lucide-react";
import { eventsData } from "@/data/eventsData";
import EventCard from "@/components/EventCard";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const EventsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useCinematicReveal({ delay: 100 });
  const [activeTab, setActiveTab] = useState<"management" | "non-management">("management");

  return (
    <div
      ref={sectionRef}
      id="events"
      className={`max-w-6xl mx-auto mt-4 sm:mt-6 md:mt-8 px-3 sm:px-4 transition-all duration-1000 ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_0_60px_rgba(255,100,0,0.15)]">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 via-transparent to-cyan-600/5 animate-gradient-shift pointer-events-none rounded-3xl" />
        
        {/* Section Header */}
        <div className="relative z-10 text-center mb-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400 mb-3 tracking-wide">
            ALL EVENTS
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-4" />
          <p className="text-foreground/70 text-sm md:text-base">
            Explore our exciting lineup of events
          </p>
        </div>

        <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "management" | "non-management")}
        className="relative z-10 w-full"
      >
        {/* Tab Triggers */}
        <TabsList className="w-full max-w-2xl mx-auto mb-8 h-auto p-2 bg-black/60 backdrop-blur-xl border-2 border-white/10 rounded-2xl grid grid-cols-2 gap-2">
          <TabsTrigger
            value="management"
            className="relative py-3 px-4 text-sm md:text-base font-bold tracking-wider rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_30px_rgba(255,100,0,0.5)] hover:bg-white/5"
          >
            <Flame className="inline-block mr-2 w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Management Events</span>
            <span className="sm:hidden">Management</span>
          </TabsTrigger>
          <TabsTrigger
            value="non-management"
            className="relative py-3 px-4 text-sm md:text-base font-bold tracking-wider rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_30px_rgba(0,200,255,0.5)] hover:bg-white/5"
          >
            <Snowflake className="inline-block mr-2 w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Non-Management</span>
            <span className="sm:hidden">Non-Mgmt</span>
          </TabsTrigger>
        </TabsList>

        {/* Management Events Tab Content */}
        <TabsContent value="management" className="mt-0">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 backdrop-blur-xl">
              <Flame className="w-4 h-4 text-red-400" />
              <p className="text-red-200 font-semibold text-sm">
                {eventsData.management.length} Management Events
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventsData.management.map((event, index) => (
              <div
                key={event.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <EventCard event={event} type="management" />
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Non-Management Events Tab Content */}
        <TabsContent value="non-management" className="mt-0">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 backdrop-blur-xl">
              <Snowflake className="w-4 h-4 text-cyan-400" />
              <p className="text-cyan-200 font-semibold text-sm">
                {eventsData.nonManagement.length} Non-Management Events
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventsData.nonManagement.map((event, index) => (
              <div
                key={event.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <EventCard event={event} type="non-management" />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Add custom animation styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
      </div>
    </div>
  );
};

export default EventsSection;
