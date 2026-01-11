import { useState } from "react";
import { Flame, Snowflake, Sword, Calendar, Trophy } from "lucide-react";
import { eventsData } from "@/data/eventsData";
import EventCard from "@/components/EventCard";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const EventsPage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useCinematicReveal({ delay: 100 });
  const { ref: tabsRef, isVisible: tabsVisible } = useCinematicReveal({ delay: 200 });
  const [activeTab, setActiveTab] = useState<"management" | "non-management">("management");

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-900/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <div
          ref={heroRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Sword Divider */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-red-500 to-red-500" />
            <Sword className="mx-4 w-8 h-8 text-amber-400 animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-cyan-500 to-cyan-500" />
          </div>

          {/* Title */}
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]">
            LUCIDUS '26
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-3xl text-white/80 mb-6 tracking-wide">
            National Level Management Fest
          </p>

          {/* Event Date */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-amber-400" />
            <p className="text-2xl md:text-3xl font-bold text-white">
              23 JANUARY 2026
            </p>
          </div>

          {/* Prize Pool Highlight */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-600/20 via-amber-500/30 to-amber-600/20 border-2 border-amber-500/50 backdrop-blur-xl shadow-[0_0_40px_rgba(255,215,0,0.3)]">
            <Trophy className="w-8 h-8 text-amber-400 animate-pulse" />
            <div className="text-left">
              <p className="text-sm text-white/60 font-semibold">Total Prize Pool</p>
              <p className="text-3xl md:text-4xl font-bold text-amber-400 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                ₹2,00,000+
              </p>
            </div>
          </div>

          {/* College Name */}
          <p className="mt-6 text-lg text-white/60">
            Christ College of Engineering
          </p>
        </div>

        {/* Tabs Section */}
        <div
          ref={tabsRef}
          className={`transition-all duration-1000 ${
            tabsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "management" | "non-management")}
            className="w-full"
          >
            {/* Tab Triggers */}
            <TabsList className="w-full max-w-2xl mx-auto mb-12 h-auto p-2 bg-black/60 backdrop-blur-xl border-2 border-white/10 rounded-2xl grid grid-cols-2 gap-2">
              <TabsTrigger
                value="management"
                className="relative py-4 px-6 text-lg font-bold tracking-wider rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_30px_rgba(255,100,0,0.5)] hover:bg-white/5"
              >
                <Flame className="inline-block mr-2 w-5 h-5" />
                Management Events
              </TabsTrigger>
              <TabsTrigger
                value="non-management"
                className="relative py-4 px-6 text-lg font-bold tracking-wider rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-[0_0_30px_rgba(0,200,255,0.5)] hover:bg-white/5"
              >
                <Snowflake className="inline-block mr-2 w-5 h-5" />
                Non-Management Events
              </TabsTrigger>
            </TabsList>

            {/* Management Events Tab Content */}
            <TabsContent value="management" className="mt-0">
              <div className="mb-8 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 backdrop-blur-xl">
                  <Flame className="w-5 h-5 text-red-400" />
                  <p className="text-red-200 font-semibold">
                    {eventsData.management.length} Management Events
                  </p>
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              <div className="mb-8 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 backdrop-blur-xl">
                  <Snowflake className="w-5 h-5 text-cyan-400" />
                  <p className="text-cyan-200 font-semibold">
                    {eventsData.nonManagement.length} Non-Management Events
                  </p>
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>

        {/* Bottom Divider */}
        <div className="flex items-center justify-center mt-20">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </div>
      </div>

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
  );
};

export default EventsPage;
