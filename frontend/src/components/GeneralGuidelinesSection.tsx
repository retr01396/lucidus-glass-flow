import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

const GeneralGuidelinesSection = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 200 });

  return (
    <div 
      ref={ref}
      className={`max-w-5xl mx-auto mt-8 ${
        isVisible ? 'reveal-visible' : 'reveal-hidden'
      }`}
    >
      <div className="glass-panel rounded-3xl p-6 md:p-8 w-full animate-ambient-breathe">
        <h2 className="font-display text-xl font-bold text-foreground mb-6 tracking-wide text-glow-cyan text-center">
          GENERAL GUIDELINES
        </h2>
        
        <div className="glass-card group parallax-card transition-all duration-500 hover:shadow-glow-orange">
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
    </div>
  );
};

export default GeneralGuidelinesSection;

