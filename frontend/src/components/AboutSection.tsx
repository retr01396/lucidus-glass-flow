import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

const AboutSection = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 150 });

  return (
    <div 
      ref={ref}
      id="about"
      className={`glass-panel rounded-3xl p-6 w-full animate-ambient-breathe ${
        isVisible ? 'reveal-visible' : 'reveal-hidden'
      }`}
    >
      <h2 className="font-display text-xl font-bold text-foreground mb-6 tracking-wide text-glow-cyan text-center">
        ABOUT LUCIDUS
      </h2>
      
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
    </div>
  );
};

export default AboutSection;
