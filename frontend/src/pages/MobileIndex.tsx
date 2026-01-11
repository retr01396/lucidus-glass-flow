import cinematicBg from "@/assets/cinematic-bg.jpg";
import GlassNavigation from "@/components/GlassNavigation";
import MobileHeroSection from "@/components/mobile/MobileHeroSection";
import MobileScheduleSection from "@/components/mobile/MobileScheduleSection";
import MobileEventsSection from "@/components/mobile/MobileEventsSection";
import MobileAboutSection from "@/components/mobile/MobileAboutSection";
import MobileGuidelinesSection from "@/components/mobile/MobileGuidelinesSection";
import MobileFooter from "@/components/mobile/MobileFooter";

type Stage = "intro-sequence" | "settle";

type MobileIndexProps = {
  stage: Stage;
};

const MobileIndex = ({ stage }: MobileIndexProps) => {
  const isSettled = stage === "settle";

  return (
    <div className="min-h-screen relative overflow-y-auto overflow-x-hidden">
      {/* Cinematic Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 -z-10"
        style={{ 
          backgroundImage: `url(${cinematicBg})`,
          opacity: isSettled ? 1 : 0.7
        }}
      />

      {/* Cinematic Depth Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 transition-opacity duration-700 -z-10" />

      {/* Animated Glow Orbs - Mobile Optimized */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div 
          className={`absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] animate-pulse-slow transition-opacity duration-1000 ${
            isSettled ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute bottom-1/3 right-1/4 w-56 h-56 bg-orange-500/10 rounded-full blur-[70px] animate-pulse-slow transition-opacity duration-1000 ${
            isSettled ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ animationDelay: "1s", transitionDelay: "0.3s" }}
        />
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 min-h-screen pt-16 pb-4 transition-all duration-700 ease-out ${
          isSettled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Navigation */}
        <GlassNavigation />

        {/* Hero Section */}
        <MobileHeroSection stage={stage} />

        {/* Schedule Section */}
        <MobileScheduleSection />

        {/* About Section */}
        <MobileAboutSection />

        {/* Events Section */}
        <MobileEventsSection />

        {/* Guidelines Section */}
        <MobileGuidelinesSection />

        {/* Footer */}
        <MobileFooter />
      </div>
    </div>
  );
};

export default MobileIndex;
