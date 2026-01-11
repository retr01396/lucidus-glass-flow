import { useEffect, useRef, useState } from "react";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";
import { Award, Handshake } from "lucide-react";

const SponsorsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useCinematicReveal({ delay: 0 });
  const [logo1Visible, setLogo1Visible] = useState(false);
  const [logo2Visible, setLogo2Visible] = useState(false);
  const logo1Ref = useRef<HTMLDivElement>(null);
  const logo2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionVisible) return;

    const timer1 = setTimeout(() => setLogo1Visible(true), 200);
    const timer2 = setTimeout(() => setLogo2Visible(true), 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [sectionVisible]);

  return (
    <section id="sponsors" className="w-full py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={sectionRef}
          className={`relative bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_60px_rgba(0,200,255,0.15)] transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-transparent to-orange-600/5 animate-gradient-shift pointer-events-none rounded-3xl" />
          
          {/* Header */}
          <div className={`relative z-10 text-center mb-12 ${sectionVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-cyan-600/20 to-orange-600/20 border border-white/10 mb-4 shadow-[0_0_30px_rgba(0,200,255,0.3)]">
              <Handshake className="w-8 h-8 md:w-10 md:h-10 text-cyan-500" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-orange-400 mb-3 tracking-[0.15em] animate-gradient-text">
              BACKED BY
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 via-white to-orange-500 mx-auto" />
          </div>

          {/* Sponsor Logos Grid */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Apple Logo */}
            <div
              ref={logo1Ref}
              className={`group cursor-pointer ${sectionVisible ? 'animate-zoom-in delay-200' : 'opacity-0'}`}
            >
              <div className="relative">
                {/* Premium Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Logo Container */}
                <div className="relative bg-black/60 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 md:p-10 transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_50px_rgba(0,200,255,0.3)] group-hover:-translate-y-2">
                  <img 
                    src="/sponsors/apple.png" 
                    alt="Apple" 
                    className="w-32 h-32 md:w-40 md:h-40 object-contain transition-all duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-2">🍎</div><div class="text-foreground/70 text-xl font-display font-bold">Apple</div></div></div>';
                      }
                    }}
                  />
                  
                  {/* Corner Accents */}
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyan-500/60 rounded-tl-lg transition-all duration-300 group-hover:border-cyan-500" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cyan-500/60 rounded-br-lg transition-all duration-300 group-hover:border-cyan-500" />
                </div>
                
                {/* Label */}
                <div className="mt-4 text-center">
                  <span className="text-foreground/90 text-sm md:text-base font-display font-semibold tracking-wider px-4 py-2 rounded-full bg-cyan-600/20 border border-cyan-500/30 transition-all duration-300 group-hover:bg-cyan-600/30 group-hover:border-cyan-500/50 inline-flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Apple
                  </span>
                </div>
              </div>
            </div>

            {/* Samsung Logo */}
            <div
              ref={logo2Ref}
              className={`group cursor-pointer ${sectionVisible ? 'animate-zoom-in delay-400' : 'opacity-0'}`}
            >
              <div className="relative">
                {/* Premium Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Logo Container */}
                <div className="relative bg-black/60 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 md:p-10 transition-all duration-500 group-hover:border-orange-500/50 group-hover:shadow-[0_0_50px_rgba(255,100,0,0.3)] group-hover:-translate-y-2">
                  <img 
                    src="/sponsors/samsung.png" 
                    alt="Samsung" 
                    className="w-32 h-32 md:w-40 md:h-40 object-contain transition-all duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-2">📱</div><div class="text-foreground/70 text-xl font-display font-bold">Samsung</div></div></div>';
                      }
                    }}
                  />
                  
                  {/* Corner Accents */}
                  <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-orange-500/60 rounded-tl-lg transition-all duration-300 group-hover:border-orange-500" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-orange-500/60 rounded-br-lg transition-all duration-300 group-hover:border-orange-500" />
                </div>
                
                {/* Label */}
                <div className="mt-4 text-center">
                  <span className="text-foreground/90 text-sm md:text-base font-display font-semibold tracking-wider px-4 py-2 rounded-full bg-orange-600/20 border border-orange-500/30 transition-all duration-300 group-hover:bg-orange-600/30 group-hover:border-orange-500/50 inline-flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Samsung
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="relative z-10 text-center mt-10">
            <p className="text-foreground/60 text-sm md:text-base font-display tracking-wide">
              Proudly partnering with industry leaders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
