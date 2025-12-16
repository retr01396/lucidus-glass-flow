import { useState } from "react";
import cinematicBg from "@/assets/cinematic-bg.jpg";
import GlassNavigation from "@/components/GlassNavigation";
import EventsPanel from "@/components/EventsPanel";
import HeroSection from "@/components/HeroSection";
import RegistrationPanel from "@/components/RegistrationPanel";
import SpeakersSection from "@/components/SpeakersSection";
import AllEventsSection from "@/components/AllEventsSection";
import AboutSection from "@/components/AboutSection";
import LiquidBackground from "@/components/LiquidBackground";
import BladeOfLucidus from "@/components/BladeOfLucidus";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

type Stage = "sukuna" | "intro-sequence" | "settle";

type IndexProps = {
  stage: Stage;
  blurAmount?: number;
  overlayOpacity?: number;
  onRegistrationSuccess: () => void;
};

const Index = ({
  stage,
  blurAmount = 0,
  overlayOpacity = 0,
  onRegistrationSuccess,
}: IndexProps) => {
  const isIntroSequence = stage === "intro-sequence";
  const isSettled = stage === "settle";

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cinematic background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cinematicBg})` }}
      />

      {/* Soft depth overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-background/80 via-background/40 to-background/70" />

      {/* Liquid background (disabled during intro/settle for performance) */}
      {!isIntroSequence && !isSettled && <LiquidBackground />}

      {/* Ambient glow orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-ice/10 rounded-full blur-[80px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 min-h-screen p-4 md:p-6 transition-[filter] duration-500 ease-out"
        style={{
          filter:
            (isIntroSequence || isSettled) && blurAmount > 0
              ? `blur(${blurAmount}px)`
              : "none",
        }}
      >
        {/* Black overlay during intro + settle */}
        {(isIntroSequence || isSettled) && overlayOpacity > 0 && (
          <div
            className="fixed inset-0 bg-black pointer-events-none transition-opacity duration-500 ease-out z-40"
            style={{ opacity: overlayOpacity }}
          />
        )}

        {/* Header label */}
        <div className="text-center mb-4">
          <span className="text-foreground/60 text-sm font-display tracking-widest">
            HOME PAGE
          </span>
        </div>

        {/* Navigation */}
        <GlassNavigation />

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-start max-w-7xl mx-auto">
          {/* Left */}
          <div className="hidden lg:block">
            <EventsPanel />
          </div>

          {/* Center */}
          <HeroSection stage={stage} />

          {/* Right */}
          <div className="hidden lg:block">
            <RegistrationPanel onSuccess={onRegistrationSuccess} />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden mt-6 space-y-6">
          <div className="flex justify-center">
            <EventsPanel />
          </div>
          <div className="flex justify-center">
            <RegistrationPanel onSuccess={onRegistrationSuccess} />
          </div>
        </div>

        {/* Sections */}
        <div className="mt-8 max-w-6xl mx-auto">
          <AllEventsSection />
        </div>

        <div className="mt-8 max-w-5xl mx-auto">
          <AboutSection />
        </div>

        <div className="mt-8 max-w-5xl mx-auto">
          <SpeakersSection />
        </div>

        {/* Mini game */}
        <BladeOfLucidus />

        {/* Sponsors */}
        <div className="mt-10">
          <SponsorsSection />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
