import { useEffect, useRef, useState } from "react";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

const SponsorsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useCinematicReveal({ delay: 0 });
  const [logo1Visible, setLogo1Visible] = useState(false);
  const [logo2Visible, setLogo2Visible] = useState(false);
  const logo1Ref = useRef<HTMLDivElement>(null);
  const logo2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionVisible) return;

    // Stagger logo reveals after "Backed By" text appears
    const timer1 = setTimeout(() => setLogo1Visible(true), 200);
    const timer2 = setTimeout(() => setLogo2Visible(true), 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [sectionVisible]);

  return (
    <section id="sponsors" className="w-full py-10 px-4">
      <div className="max-w-6xl mx-auto glass-panel rounded-3xl p-8 md:p-10 backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
        <div 
          ref={sectionRef}
          className={`flex flex-col items-center gap-8 ${
            sectionVisible ? 'reveal-visible' : 'reveal-hidden'
          }`}
        >
          {/* "Backed By" Text */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-[0.15em] text-glow-cyan">
              BACKED BY
            </h2>
          </div>

          {/* Sponsor Logos */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full">
            {/* Apple Logo */}
            <div
              ref={logo1Ref}
              className="flex flex-col items-center gap-4 group cursor-pointer"
              style={{
                opacity: logo1Visible ? 1 : 0,
                transform: logo1Visible ? 'scale(1)' : 'scale(0.95)',
                transition: 'all 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div className="relative">
                {/* Subtle glow behind logo */}
                <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Logo container */}
                <div className="relative glass-card rounded-2xl p-6 backdrop-blur-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-[0_0_30px_rgba(195,100%,60%,0.2)]">
                  <img 
                    src="/sponsors/apple.png" 
                    alt="Apple" 
                    className="w-24 h-24 md:w-32 md:h-32 object-contain"
                    onError={(e) => {
                      // Fallback if logo doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-foreground/50 text-2xl font-display">Apple</div>';
                      }
                    }}
                  />
                </div>
              </div>
              <span className="text-foreground/90 text-sm md:text-base font-display font-medium tracking-wide">
                Apple
              </span>
            </div>

            {/* Samsung Logo */}
            <div
              ref={logo2Ref}
              className="flex flex-col items-center gap-4 group cursor-pointer"
              style={{
                opacity: logo2Visible ? 1 : 0,
                transform: logo2Visible ? 'scale(1)' : 'scale(0.95)',
                transition: 'all 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div className="relative">
                {/* Subtle glow behind logo */}
                <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Logo container */}
                <div className="relative glass-card rounded-2xl p-6 backdrop-blur-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-[0_0_30px_rgba(195,100%,60%,0.2)]">
                  <img 
                    src="/sponsors/samsung.png" 
                    alt="Samsung" 
                    className="w-24 h-24 md:w-32 md:h-32 object-contain"
                    onError={(e) => {
                      // Fallback if logo doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center text-foreground/50 text-2xl font-display">Samsung</div>';
                      }
                    }}
                  />
                </div>
              </div>
              <span className="text-foreground/90 text-sm md:text-base font-display font-medium tracking-wide">
                Samsung
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
