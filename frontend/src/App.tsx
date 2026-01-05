import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SukunaIntro from "@/components/SukunaIntro";
import IntroSequence from "@/components/IntroSequence";
import WaterBackground from "@/components/WaterBackground";

type Stage = "sukuna" | "intro-sequence" | "settle";

const queryClient = new QueryClient();

const App = () => {
  const [stage, setStage] = useState<Stage>("sukuna");
  const [blurAmount, setBlurAmount] = useState(16);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [sukunaOpacity, setSukunaOpacity] = useState(1);

  // Failsafe: if intro doesn't complete within 10 seconds, force skip to main content
  useEffect(() => {
    const failsafeTimeout = setTimeout(() => {
      if (stage !== "settle") {
        console.warn("Intro sequence timeout - forcing skip to main content");
        setStage("settle");
        setBlurAmount(0);
        setOverlayOpacity(0);
        setSukunaOpacity(0);
      }
    }, 10000); // 10 second maximum for entire intro

    return () => clearTimeout(failsafeTimeout);
  }, [stage]);

  const handleSukunaEnd = () => {
    // Video ended, freeze frame, start intro sequence
    setStage("intro-sequence");
    // Mount website immediately with blur only (no opacity animation)
    setBlurAmount(16);
    setOverlayOpacity(0);
    setSukunaOpacity(1);
  };

  const handleIntroSequenceComplete = () => {
    // Intro sequence complete
    setStage("settle");
    setBlurAmount(0);
    setOverlayOpacity(0);
    setSukunaOpacity(0);
  };

  const appRoutes = (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Index
              stage={stage}
              blurAmount={blurAmount}
              overlayOpacity={overlayOpacity}
            />
          }
        />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
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
        {/* Mount website behind intro sequence - always visible, blur only */}
        {(stage === "intro-sequence" || stage === "settle") && (
          <div className="fixed inset-0 z-0">
            {appRoutes}
          </div>
        )}
        {/* Show website normally when settled */}
        {stage === "settle" && appRoutes}
        {(stage === "sukuna" || stage === "intro-sequence") && (
          <div
            className="fixed inset-0 z-50 transition-opacity duration-800 ease-in-out"
            style={{ opacity: sukunaOpacity }}
          >
            <SukunaIntro onEnd={handleSukunaEnd} />
          </div>
        )}
        {stage === "intro-sequence" && (
          <IntroSequence 
            onComplete={handleIntroSequenceComplete}
            onBlurChange={setBlurAmount}
            onOverlayChange={setOverlayOpacity}
            onSukunaFadeOut={setSukunaOpacity}
          />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
