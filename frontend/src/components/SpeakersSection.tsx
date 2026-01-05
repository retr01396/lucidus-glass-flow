import { useCinematicReveal, useFocusSpotlight } from "@/hooks/use-cinematic-reveal";

const speakers = [
  { name: "Dr. Arya Sharma", role: "Director, SCMHRD" },
  { name: "Namrata Sharma", role: "Business Coach" },
  { name: "Ravi Patel", role: "Finance Expert" },
  { name: "Sofia Diaz", role: "Marketing Director" },
];

const organizers = [
  { name: "Dr. Arya Sharma", role: "Faculty Advisor" },
  { name: "Namrata Sarnot", role: "Director, Events" },
  { name: "Ravi Patel", role: "Event Lead" },
  { name: "Sofia Diaz", role: "Marketing Head" },
];

const SpeakersSection = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 200 });
  const { focusedIndex: focusedSpeaker, setFocus: setSpeakerFocus, getCardStyle: getSpeakerStyle } = useFocusSpotlight();
  const { focusedIndex: focusedOrganizer, setFocus: setOrganizerFocus, getCardStyle: getOrganizerStyle } = useFocusSpotlight();

  return (
    <div 
      ref={ref}
      id="team"
      className={`glass-panel rounded-3xl p-8 w-full animate-ambient-breathe ${
        isVisible ? 'reveal-visible' : 'reveal-hidden'
      }`}
    >
      {/* Speakers */}
      <div className="mb-8">
        <h2 className="section-title text-center mb-6">OUR SPEAKERS & ORGANIZERS</h2>
        
        <div className="flex justify-center gap-8 flex-wrap">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="text-center cursor-pointer transition-all duration-500"
              style={getSpeakerStyle(index)}
              onMouseEnter={() => setSpeakerFocus(index)}
              onMouseLeave={() => setSpeakerFocus(null)}
            >
              <div 
                className="avatar-glass w-20 h-20 mx-auto mb-3 animate-float transition-all duration-500 hover:scale-110" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center transition-all duration-500 hover:shadow-glow-cyan">
                  <span className="text-2xl font-display text-foreground font-bold">
                    {speaker.name.charAt(0)}
                  </span>
                </div>
              </div>
              <h4 className="text-foreground font-display text-sm font-semibold transition-all duration-300 hover:text-glow-cyan">
                {speaker.name}
              </h4>
              <p className="text-foreground/60 text-xs">{speaker.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Organizing Team */}
      <div>
        <h3 className="section-title text-lg text-center mb-6">MEET THE ORGANIZING TEAM</h3>
        
        <div className="flex justify-center gap-6 flex-wrap">
          {organizers.map((organizer, index) => (
            <div 
              key={index} 
              className="text-center cursor-pointer transition-all duration-500"
              style={getOrganizerStyle(index)}
              onMouseEnter={() => setOrganizerFocus(index)}
              onMouseLeave={() => setOrganizerFocus(null)}
            >
              <div 
                className="avatar-glass w-16 h-16 mx-auto mb-2 animate-float transition-all duration-500 hover:scale-110" 
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-ice/20 to-accent/10 flex items-center justify-center transition-all duration-500 hover:shadow-glow-cyan">
                  <span className="text-xl font-display text-foreground font-bold">
                    {organizer.name.charAt(0)}
                  </span>
                </div>
              </div>
              <h4 className="text-foreground font-display text-xs font-semibold transition-all duration-300 hover:text-glow-cyan">
                {organizer.name}
              </h4>
              <p className="text-foreground/50 text-xs">{organizer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
