import { X } from "lucide-react";

interface EventDetailModalProps {
  event: {
    title: string;
    subtitle: string;
    prize: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const getEventDescription = (subtitle: string): string => {
  switch (subtitle) {
    case "Finance Game":
      return "A competitive event designed to test participants' skills in financial analysis and strategic decision-making. Teams will face real-world scenarios that demand critical thinking, problem-solving, and effective resource management.";
    case "BMT":
      return "A strategic simulation event testing participants' business management and tactical skills. Teams will engage in real-world scenarios requiring strategic analysis, problem-solving, and leadership under pressure.";
    case "Marketing Game":
      return "A dynamic competition challenging participants' marketing acumen and strategic thinking. Teams will tackle real-world scenarios involving market analysis, campaign planning, and creative problem-solving.";
    case "Operations Game":
      return "An intensive event designed to evaluate participants' operational management skills. Teams will face challenges requiring strategic analysis, process optimization, and decision-making under pressure.";
    case "HR Game":
      return "A competitive event focused on human resource management and people skills. Participants will navigate real-world scenarios involving talent management, conflict resolution, and organizational dynamics.";
    case "Best Manager":
      return "An individual competition identifying exceptional management talent. Participants will demonstrate leadership, strategic thinking, problem-solving, and decision-making abilities across multiple challenges.";
    case "Group Dance":
      return "A vibrant performance event showcasing coordination, creativity, and stage presence. Teams will be judged on choreography, synchronization, expression, and overall impact.";
    case "Fashion Show":
      return "A creative showcase celebrating styling, theme interpretation, and presentation skills. Participants will be evaluated on costume design, walk, confidence, and adherence to the given theme.";
    case "Film Spoofing":
      return "A creative competition testing storytelling, editing, and originality. Teams will produce short films demonstrating humor, technical skills, and creative reinterpretation of popular content.";
    case "Reel Making":
      return "A short-form content creation challenge focused on storytelling, editing, and creativity. Participants will produce engaging reels showcasing originality and technical proficiency.";
    default:
      return "A competitive event designed to test participants' skills and creativity.";
  }
};

const EventDetailModal = ({ event, isOpen, onClose }: EventDetailModalProps) => {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="glass-panel rounded-3xl p-6 w-full max-w-md relative z-10">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 glass-button p-2 rounded-full hover:shadow-glow-cyan"
        >
          <X className="w-4 h-4 text-foreground/60" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="font-display text-xl font-bold text-foreground tracking-wide text-glow-cyan mb-1">
            {event.title}
          </h2>
          <p className="text-foreground/60 text-sm font-body">
            Category: {event.subtitle}
          </p>
          <p className="text-accent text-sm font-semibold mt-1">
            Prize Pool: {event.prize}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-4 text-foreground/80 text-xs font-body">
          {/* About */}
          <div>
            <h3 className="text-foreground font-display text-sm font-semibold mb-2">About the Event</h3>
            <p className="leading-relaxed">
              {getEventDescription(event.subtitle)}
            </p>
          </div>

          {/* Team Size */}
          <div>
            <h3 className="text-foreground font-display text-sm font-semibold mb-1">Team Size</h3>
            <p>Up to 4 members per team</p>
          </div>

          {/* Eligibility */}
          <div>
            <h3 className="text-foreground font-display text-sm font-semibold mb-1">Eligibility</h3>
            <p>Open to undergraduate and postgraduate students from recognized institutions.</p>
          </div>

          {/* Rules */}
          <div>
            <h3 className="text-foreground font-display text-sm font-semibold mb-2">General Rules</h3>
            <ul className="space-y-1.5 text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                College ID or authorization letter required
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Teams must report at least 30 minutes prior
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Judges' decisions are final
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Any misconduct may result in disqualification
              </li>
            </ul>
          </div>
        </div>

        {/* Register Button */}
        <button className="fire-button w-full mt-6 text-sm font-display tracking-widest py-3">
          REGISTER NOW
        </button>
      </div>
    </div>
  );
};

export default EventDetailModal;
