import { useState, useMemo } from "react";
import { Upload, Facebook, Twitter, Instagram, CheckCircle } from "lucide-react";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

type RegistrationPanelProps = {
  onSuccess?: () => void;
};

const events = [
  { name: "The Money Alchemist", category: "Finance Game" },
  { name: "The Shogun Syndicate", category: "BMT" },
  { name: "Log Horizon", category: "Marketing Game" },
  { name: "Shadow Break", category: "Operations Game" },
  { name: "The Bond Bureau", category: "HR Game" },
  { name: "Project Kaizen", category: "Best Manager" },
  { name: "Hibike", category: "Group Dance" },
  { name: "Oshare Festival", category: "Fashion Show" },
  { name: "Quantum Rift", category: "Film Spoofing" },
  { name: "Mirai Motion", category: "Reel Making" },
];

const RegistrationPanel = ({ onSuccess }: RegistrationPanelProps) => {
  const { ref, isVisible } = useCinematicReveal({ delay: 400 });
  const [selectedEvent, setSelectedEvent] = useState("");
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const selectedEventData = events.find(e => e.name === selectedEvent);

  // Calculate form completion for button charge effect
  const formCompletion = useMemo(() => {
    let filled = 0;
    if (teamName) filled++;
    if (selectedEvent) filled++;
    if (members) filled++;
    return filled / 3;
  }, [teamName, selectedEvent, members]);

  const handleSubmit = () => {
    if (selectedEvent && teamName && members) {
      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSelectedEvent("");
    setTeamName("");
    setMembers("");
  };

  return (
    <div 
      ref={ref}
      className={`glass-panel rounded-3xl p-5 w-full max-w-[280px] subtle-glow-shift deep-ambient-float glass-edge-light hover-react-subtle depth-layer-panel ${
        isVisible ? 'reveal-visible' : 'reveal-hidden'
      }`}
    >
      <h2 className="font-display text-base font-bold text-foreground mb-6 text-center tracking-wider text-glow-cyan">
        REGISTRATION PORTAL
      </h2>
      
      {!isSubmitted ? (
        <div className="space-y-4">
          {/* Team Name */}
          <div>
            <label className="text-foreground/60 text-xs font-medium mb-2 block font-body tracking-wide">
              Team Name
            </label>
            <input 
              type="text" 
              className={`glass-input text-foreground transition-all duration-500 ${
                focusedField === 'team' ? 'input-glow-active' : ''
              }`}
              placeholder=""
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              onFocus={() => setFocusedField('team')}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          {/* Event Selection */}
          <div>
            <label className="text-foreground/60 text-xs font-medium mb-2 block font-body tracking-wide">
              Event Selection
            </label>
            <select 
              className={`glass-select transition-all duration-500 ${
                selectedEvent ? 'text-foreground shadow-glow-cyan' : 'text-foreground/70'
              } ${focusedField === 'event' ? 'input-glow-active' : ''}`}
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
              onFocus={() => setFocusedField('event')}
              onBlur={() => setFocusedField(null)}
            >
              <option value="">(Select Event)</option>
              {events.map((event, index) => (
                <option key={index} value={event.name}>{event.name}</option>
              ))}
            </select>
            {/* Selected event confirmation */}
            {selectedEventData && (
              <div className="mt-2 text-[10px] text-primary font-display tracking-wide animate-stagger-reveal">
                Selected: {selectedEventData.name} ({selectedEventData.category})
              </div>
            )}
          </div>

          {/* Number of Members */}
          <div>
            <label className="text-foreground/60 text-xs font-medium mb-2 block font-body tracking-wide">
              Number of Members
            </label>
            <input 
              type="number" 
              className={`glass-input text-foreground transition-all duration-500 ${
                focusedField === 'members' ? 'input-glow-active' : ''
              }`}
              placeholder=""
              min={1}
              max={4}
              value={members}
              onChange={(e) => setMembers(e.target.value)}
              onFocus={() => setFocusedField('members')}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          {/* Upload Payment Screenshot */}
          <div>
            <label className="text-foreground/60 text-xs font-medium mb-2 block font-body tracking-wide">
              Upload Payment Screenshot
            </label>
            <div className="glass-input flex items-center justify-center py-8 cursor-pointer hover:bg-foreground/5 transition-all duration-500 group hover:input-glow-active">
              <Upload className="w-6 h-6 text-foreground/30 group-hover:text-foreground/50 group-hover:scale-110 transition-all duration-300" />
            </div>
          </div>

          {/* Submit Button with charge effect */}
          <button 
            className="fire-button w-full mt-2 text-sm font-display tracking-widest py-3 hover-react-strong micro-click-rebound glass-edge-light depth-layer-button attention-pulse"
            style={{
              boxShadow: formCompletion === 1 
                ? '0 0 50px hsl(25 100% 55% / 0.7), 0 0 100px hsl(25 100% 55% / 0.4)'
                : `0 0 ${20 + formCompletion * 30}px hsl(25 100% 55% / ${0.3 + formCompletion * 0.3})`,
              transform: formCompletion === 1 ? 'scale(1.02)' : 'scale(1)',
            }}
            onClick={handleSubmit}
          >
            SUBMIT & PAY
          </button>
        </div>
      ) : (
        /* Confirmation Summary */
        <div className="space-y-4 animate-cinematic-reveal">
          <div className="glass-card p-4 text-center">
            <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-foreground/80 text-xs font-body mb-2">Registration Submitted</p>
            <p className="text-foreground font-display text-sm font-bold mb-1">
              {teamName}
            </p>
            <p className="text-primary text-xs font-display">
              Registered for: {selectedEventData?.name}
            </p>
            <p className="text-foreground/60 text-[10px]">
              ({selectedEventData?.category})
            </p>
            <p className="text-foreground/50 text-[10px] mt-2">
              Team Size: {members} member{parseInt(members) > 1 ? 's' : ''}
            </p>
          </div>
          <button 
            className="glass-button w-full text-xs py-2 font-display"
            onClick={handleReset}
          >
            Register Another Team
          </button>
        </div>
      )}

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-foreground/10">
        <button className="glass-button p-2.5 rounded-full hover:shadow-glow-cyan transition-all duration-300 hover:scale-110">
          <Facebook className="w-4 h-4 text-foreground/60" />
        </button>
        <button className="glass-button p-2.5 rounded-full hover:shadow-glow-cyan transition-all duration-300 hover:scale-110">
          <Instagram className="w-4 h-4 text-foreground/60" />
        </button>
        <button className="glass-button p-2.5 rounded-full hover:shadow-glow-cyan transition-all duration-300 hover:scale-110">
          <Twitter className="w-4 h-4 text-foreground/60" />
        </button>
      </div>
    </div>
  );
};

export default RegistrationPanel;
