import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

const AboutSection = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 150 });

  return (
    <div 
      ref={ref}
      className={`glass-panel rounded-3xl p-6 w-full animate-ambient-breathe ${
        isVisible ? 'reveal-visible' : 'reveal-hidden'
      }`}
    >
      <h2 className="font-display text-xl font-bold text-foreground mb-6 tracking-wide text-glow-cyan text-center">
        ABOUT US
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* About Lucidus */}
        <div className="glass-card group parallax-card transition-all duration-500 hover:shadow-glow-cyan">
          <h3 className="font-display text-sm font-bold text-foreground mb-3 tracking-wide transition-all duration-300 group-hover:text-glow-cyan">
            About LUCIDUS
          </h3>
          <p className="text-foreground/70 text-sm leading-relaxed font-body">
            LUCIDUS is a national-level intercollegiate management fest organized by the Department of Business Administration, Christ College of Engineering (Autonomous), Irinjalakuda, Thrissur, Kerala.
          </p>
          <p className="text-foreground/70 text-sm leading-relaxed font-body mt-3">
            The fest celebrates management excellence, leadership, creativity, and teamwork, offering students a platform to showcase talent and engage in strategic competitions.
          </p>
        </div>

        {/* About Institution */}
        <div className="glass-card group parallax-card transition-all duration-500 hover:shadow-glow-cyan">
          <h3 className="font-display text-sm font-bold text-foreground mb-3 tracking-wide transition-all duration-300 group-hover:text-glow-cyan">
            About Institution
          </h3>
          <p className="text-foreground/70 text-sm leading-relaxed font-body">
            Christ College of Engineering (Autonomous), Irinjalakuda, is a premier institution committed to academic excellence and holistic development.
          </p>
          <p className="text-foreground/70 text-sm leading-relaxed font-body mt-3">
            The event is conducted by the Christ Institute of Business Administration (CIBA), the MBA wing of the college.
          </p>
        </div>
      </div>

      {/* Guidelines */}
      <div className="glass-card mt-6 group parallax-card transition-all duration-500 hover:shadow-glow-orange">
        <h3 className="font-display text-sm font-bold text-foreground mb-3 tracking-wide transition-all duration-300 group-hover:text-glow-orange">
          General Guidelines
        </h3>
        <ul className="text-foreground/70 text-sm leading-relaxed font-body space-y-2">
          {[
            "Teams limited to 4 members from the same college",
            "College ID or authorization letter required",
            "Participants must report 30 minutes early",
            "Judges' decisions are final",
            "Misconduct may result in disqualification",
          ].map((item, index) => (
            <li 
              key={index} 
              className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-accent mt-1 transition-all duration-300 group-hover:scale-125">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
