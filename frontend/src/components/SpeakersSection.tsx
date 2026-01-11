import { useCinematicReveal, useFocusSpotlight } from "@/hooks/use-cinematic-reveal";
import { Users, Award, Sparkles, Crown } from "lucide-react";

const speakers = [
  { name: "Dr. Arya Sharma", role: "Director, SCMHRD", initial: "A" },
  { name: "Namrata Sharma", role: "Business Coach", initial: "N" },
  { name: "Ravi Patel", role: "Finance Expert", initial: "R" },
  { name: "Sofia Diaz", role: "Marketing Director", initial: "S" },
];

const organizers = [
  { name: "Dr. Arya Sharma", role: "Faculty Advisor", initial: "A" },
  { name: "Namrata Sarnot", role: "Director, Events", initial: "N" },
  { name: "Ravi Patel", role: "Event Lead", initial: "R" },
  { name: "Sofia Diaz", role: "Marketing Head", initial: "S" },
];

const SpeakersSection = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 200 });
  const { focusedIndex: focusedSpeaker, setFocus: setSpeakerFocus } = useFocusSpotlight();
  const { focusedIndex: focusedOrganizer, setFocus: setOrganizerFocus } = useFocusSpotlight();

  return (
    <div 
      ref={ref}
      id="team"
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_60px_rgba(0,200,255,0.15)]">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-transparent to-orange-600/5 animate-gradient-shift pointer-events-none rounded-3xl" />
        
        {/* Speakers Section */}
        <div className="relative z-10 mb-12">
          <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-white/10 mb-4 shadow-[0_0_30px_rgba(0,200,255,0.3)]">
              <Award className="w-8 h-8 md:w-10 md:h-10 text-cyan-500" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-3 tracking-wide">
              OUR SPEAKERS
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {speakers.map((speaker, index) => (
              <div 
                key={index} 
                className={`text-center cursor-pointer group ${isVisible ? 'animate-zoom-in' : 'opacity-0'} delay-${(index + 2) * 100}`}
                onMouseEnter={() => setSpeakerFocus(index)}
                onMouseLeave={() => setSpeakerFocus(null)}
                style={{
                  opacity: focusedSpeaker === null || focusedSpeaker === index ? 1 : 0.5,
                  transform: focusedSpeaker === index ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div className="relative mb-4">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Avatar Circle */}
                  <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border-2 border-white/20 flex items-center justify-center transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(0,200,255,0.4)]">
                    <span className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500 font-bold">
                      {speaker.initial}
                    </span>
                    
                    {/* Corner Accent */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 border-2 border-background flex items-center justify-center">
                      <Crown className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <h4 className="text-foreground font-display text-sm md:text-base font-semibold mb-1 transition-all duration-300 group-hover:text-cyan-400">
                  {speaker.name}
                </h4>
                <p className="text-foreground/60 text-xs md:text-sm">{speaker.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative z-10 flex items-center gap-4 my-12">
          <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-white/10" />
          <Sparkles className="w-6 h-6 text-orange-500" />
          <div className="flex-1 h-[2px] bg-gradient-to-r from-white/10 via-white/10 to-transparent" />
        </div>

        {/* Organizing Team Section */}
        <div className="relative z-10">
          <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-down delay-600' : 'opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-white/10 mb-4 shadow-[0_0_30px_rgba(255,100,0,0.3)]">
              <Users className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-3 tracking-wide">
              ORGANIZING TEAM
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {organizers.map((organizer, index) => (
              <div 
                key={index} 
                className={`text-center cursor-pointer group ${isVisible ? 'animate-zoom-in' : 'opacity-0'} delay-${(index + 8) * 100}`}
                onMouseEnter={() => setOrganizerFocus(index)}
                onMouseLeave={() => setOrganizerFocus(null)}
                style={{
                  opacity: focusedOrganizer === null || focusedOrganizer === index ? 1 : 0.5,
                  transform: focusedOrganizer === index ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div className="relative mb-4">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-orange-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Avatar Circle */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-gradient-to-br from-orange-600/30 to-red-600/30 border-2 border-white/20 flex items-center justify-center transition-all duration-500 group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(255,100,0,0.4)]">
                    <span className="text-3xl md:text-4xl font-display text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-500 font-bold">
                      {organizer.initial}
                    </span>
                  </div>
                </div>
                
                <h4 className="text-foreground font-display text-sm md:text-base font-semibold mb-1 transition-all duration-300 group-hover:text-orange-400">
                  {organizer.name}
                </h4>
                <p className="text-foreground/60 text-xs md:text-sm">{organizer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
