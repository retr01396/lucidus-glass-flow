import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EventsPage from "./pages/EventsPage";
import IntroSequence from "@/components/IntroSequence";
import WaterBackground from "@/components/WaterBackground";

type Stage = "intro-sequence" | "settle";

const queryClient = new QueryClient();

const App = () => {
  const [stage, setStage] = useState<Stage>("intro-sequence");
  const [introOpacity, setIntroOpacity] = useState(1);
  const [showContent, setShowContent] = useState(false);

  // Show content immediately when component mounts for smooth loading
  useEffect(() => {
    setShowContent(true);
  }, []);

  // Failsafe: if intro doesn't complete within 10 seconds, force skip to main content
  useEffect(() => {
    const failsafeTimeout = setTimeout(() => {
      if (stage !== "settle") {
        console.warn("Intro sequence timeout - forcing skip to main content");
        handleIntroSequenceComplete();
      }
    }, 10000); // 10 second maximum for entire intro

    return () => clearTimeout(failsafeTimeout);
  }, [stage]);

  const handleIntroSequenceComplete = () => {
    setStage("settle");
    setIntroOpacity(0);
  };

  const appRoutes = (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Index stage={stage} />}
        />
        <Route path="/events" element={<EventsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WaterBackground />
        <Toaster />
        <Sonner />
        
        {/* Main content - visible from start with smooth fade-in */}
        <div 
          className={`relative z-0 transition-opacity duration-500 ${
            showContent ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {appRoutes}
        </div>
        
        {/* Intro overlay that fades out */}
        {stage === "intro-sequence" && (
          <div
            className="fixed inset-0 z-50 transition-opacity duration-300 pointer-events-none"
            style={{ opacity: introOpacity, pointerEvents: introOpacity > 0 ? 'auto' : 'none' }}
          >
            <IntroSequence 
              onComplete={handleIntroSequenceComplete}
              onBlurChange={() => {}} 
              onOverlayChange={() => {}} 
              onSukunaFadeOut={setIntroOpacity}
            />
          </div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;