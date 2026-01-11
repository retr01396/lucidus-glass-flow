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
      return "The Corporate Coliseum - A strategic simulation event testing participants' business management and tactical skills. Teams will engage in multiple rounds requiring strategic analysis, problem-solving, and leadership under pressure.";
    case "Marketing Game":
      return "A dynamic competition challenging participants' marketing acumen and strategic thinking. Teams will tackle real-world scenarios involving market analysis, campaign planning, and creative problem-solving.";
    case "Operations Game":
      return "An intensive event designed to evaluate participants' operational management skills. Teams will face challenges requiring strategic analysis, process optimization, and decision-making under pressure.";
    case "HR Game":
      return "A competitive event focused on human resource management and people skills. Participants will navigate real-world scenarios involving talent management, conflict resolution, and organizational dynamics.";
    case "Best Manager":
      return "The event will include multiple rounds designed to evaluate managerial thinking, leadership ability, communication skills, decision-making, and the capacity to perform under pressure. Punctuality and adherence to time limits are essential for every round.";
    case "IPL Auction":
      return "An exciting IPL auction simulation event testing cricket knowledge, observation skills, and strategic bidding. Experience the thrill of building your dream cricket team through quiz rounds and a live mock auction.";
    case "Group Dance":
      return "A vibrant performance event showcasing coordination, creativity, and stage presence. Teams will be judged on choreography, synchronization, expression, and overall impact.";
    case "Fashion Show":
      return "A creative showcase celebrating styling, theme interpretation, and presentation skills. Participants will be evaluated on costume design, walk, confidence, and adherence to the given theme.";
    case "Film Spoofing":
      return "A creative competition testing storytelling, editing, and originality. Teams will produce short films demonstrating humor, technical skills, and creative reinterpretation of popular content.";
    case "Reel Making":
      return "Reel the Fest - Capture all major events of the management fest. A creative reel-making competition where participants showcase their video editing and storytelling skills by creating engaging short-form content.";
    default:
      return "A competitive event designed to test participants' skills and creativity.";
  }
};

const EventDetailModal = ({ event, isOpen, onClose }: EventDetailModalProps) => {
  if (!isOpen || !event) return null;

  const isProjectKaizen = event.subtitle === "Best Manager";
  const isHibike = event.subtitle === "Group Dance";
  const isLogHorizon = event.subtitle === "Marketing Game";
  const isGrandLine = event.subtitle === "IPL Auction";
  const isBMT = event.subtitle === "BMT";
  const isReelMaking = event.subtitle === "Reel Making";
  const isFinanceGame = event.subtitle === "Finance Game";
  const isHRGame = event.subtitle === "HR Game";
  const isFashionShow = event.subtitle === "Fashion Show";
  const isOperationsGame = event.subtitle === "Operations Game";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="glass-panel rounded-3xl p-6 w-full max-w-md relative z-10 max-h-[90vh] overflow-y-auto">
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

          {isProjectKaizen ? (
            <>
              {/* Registration Fee */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Registration Fee</h3>
                <p>Rs. 500</p>
              </div>

              {/* Prize Distribution */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Prize Distribution</h3>
                <p>Prizes pool: ₹15,000</p>
                <p className="text-foreground/70 mt-1">Winner: ₹15,000</p>
              </div>

              {/* Event Coordinators */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Event Coordinators</h3>
                <p>Event Head: Sreerag S Kumar - 6354115294</p>
                <p className="text-foreground/70">Faculty Coordinator: Jerry Johny - 9809475347</p>
              </div>

              {/* Rules and Guidelines */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Rules and Guidelines</h3>
                <ul className="space-y-1.5 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">1.</span>
                    <span>Every participant must carry a valid college ID card for verification at the venue.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">2.</span>
                    <span>Registration Fee is Rs. 500</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">3.</span>
                    <span>Participants are expected to report at least 30 minutes prior to the scheduled start time for briefing and instructions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">4.</span>
                    <span>Formal business attire is mandatory for all rounds to maintain professionalism.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">5.</span>
                    <span>All queries or clarifications must be raised before the commencement of the rounds.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">6.</span>
                    <span>The decisions of the judges will be final, binding, and not open to dispute.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">7.</span>
                    <span>The event will include multiple rounds designed to evaluate managerial thinking, leadership ability, communication skills, decision-making, and the capacity to perform under pressure. Punctuality and adherence to time limits are essential for every round.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">8.</span>
                    <span>Any form of unfair means, inappropriate conduct, or violation of event rules will result in disqualification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">9.</span>
                    <span>Organizers reserve the right to modify event rules, structure, or flow if required due to unforeseen circumstances.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">10.</span>
                    <span>Use of mobile phones, smart devices, or any external assistance is strictly prohibited unless explicitly permitted by the coordinators.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary flex-shrink-0">11.</span>
                    <span>Participants are required to follow all venue rules and instructions issued by the organizing committee throughout the event.</span>
                  </li>
                </ul>
              </div>
            </>
          ) : isHibike ? (
            <>
              {/* Registration Fee */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Registration Fee</h3>
                <p>₹1,500 per team</p>
              </div>

              {/* Event Structure */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Event Structure</h3>
                <p>Only one round</p>
              </div>

              {/* Event Timeline */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Event Timeline</h3>
                <ul className="space-y-1.5 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Each team will get 5-8 minutes for their performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Total scheduled time for event is 45-60 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>A time gap will be provided after every performance</span>
                  </li>
                </ul>
              </div>

              {/* Participation Details */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Participation Details</h3>
                <ul className="space-y-1.5 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Maximum number of teams: 06</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Team Size: Minimum of 5 and Maximum of 10</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Total Participants expected: 60</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Open to both UG and PG students of all colleges</span>
                  </li>
                </ul>
              </div>

              {/* Prize Distribution */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Prize Distribution</h3>
                <p>Total Prize Pool: ₹20,000</p>
                <ul className="space-y-1 text-foreground/70 mt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>First Prize: ₹15,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Second Prize: ₹5,000</span>
                  </li>
                </ul>
              </div>

              {/* Event Coordinators */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Event Coordinators</h3>
                <p>Student Coordinator: Aadithyasiva KV - 8075136483</p>
                <p className="text-foreground/70">Faculty Coordinator: Ms. Renu J Kandathil - 9400795632</p>
              </div>

              {/* Guidelines */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Guidelines to Participants</h3>
                <ul className="space-y-1.5 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Each group must consist of a minimum of 5 and a maximum of 10 participants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The dance content should not affect or target anyone's personal life</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The performance should not include comedy-based acts or excessive dramatic scenes between the dance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The event is an open theme competition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>All groups must report to the stage at the given time without delay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>A green room facility will be provided for the participants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Valid college ID or authorization letter is necessary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The team members must be from the same college</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The time limit for the performance is a minimum of 5 minutes and a maximum of 8 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The music track must be submitted in USB drive to the event heads at the time of registration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Any form of unfair means, inappropriate conduct, or violation of event rules will result in disqualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Participants are required to follow all venue rules and instructions issued by the organizing committee throughout the event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Only registered participants and team officials are permitted to enter the green room</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The team will be responsible for any technical issues and compatibility of audio files</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The provided green room should be cleared by the team after use</span>
                  </li>
                </ul>
              </div>
            </>
          ) : isLogHorizon ? (
            <>
              {/* Registration Fee */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Registration Fee</h3>
                <p>₹1,000 per team</p>
              </div>

              {/* Event Coordinators */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Event Coordinators</h3>
                <p>Event Head: Ashna M Sunil - 7510845626</p>
                <p className="text-foreground/70">Faculty Coordinator: Kavya KB - 9526874419</p>
              </div>

              {/* Event Structure */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Event Structure & Flow</h3>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Round 1: Brand Face-Off</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Round 2: Market Masters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Round 3: Market War Room – Real-Life Pitch (Final Round)</span>
                  </li>
                </ul>
              </div>

              {/* Event Timeline */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Event Timeline</h3>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Round 1: 30 Minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Round 2: 90 Minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Lunch Break: 1 Hour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Final Round: 90 Minutes</span>
                  </li>
                </ul>
              </div>

              {/* Participation Details */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Participation Details</h3>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Maximum Number of Teams: 20</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Team Size: 4 Members per Team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Total Participants: 80 Students</span>
                  </li>
                </ul>
              </div>

              {/* Prize Distribution */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Prize Distribution</h3>
                <p className="text-foreground/80 mb-2">Total Prize Pool: ₹14,500</p>
                <ul className="space-y-1 text-foreground/70 mt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Winner: ₹10,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Finalists (2nd, 3rd & 4th): ₹1,500 each</span>
                  </li>
                </ul>
              </div>

              {/* Round Details */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Round 1: Brand Face-Off</h3>
                <p className="text-foreground/70 mb-1">Duration: 30 Minutes</p>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Written quiz round on marketing and brand knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Correct answer = +1, no negative marking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Discussion allowed within team only</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Round 2: Market Masters</h3>
                <p className="text-foreground/70 mb-1">Duration: 90 Minutes</p>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Create an advertisement using sponsor's product</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Prepare a video within college premises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Content must be respectful and follow ethical marketing standards</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Final Round: Market War Room</h3>
                <p className="text-foreground/70 mb-1">Duration: 28 Minutes per Team (10 min prep + 8 min presentation + 10 min Q&A)</p>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Real-life brand case analysis and solution pitch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>10 minutes preparation time (no digital tools)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>8 minutes presentation as consultants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Must include: problem diagnosis, target market, strategic solution, and benchmarking example</span>
                  </li>
                </ul>
              </div>

              {/* General Guidelines */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">General Guidelines</h3>
                <ul className="space-y-1.5 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Open to UG and PG students from all colleges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>All members must be from the same institution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Valid college ID card is required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Teams must bring well-functioning laptops (devices not provided)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Participants must arrange their own internet connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Strict adherence to time limits set by coordinators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Judges' decisions are final and binding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Any misconduct, plagiarism, or malpractice will result in disqualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Teams are responsible for safeguarding their belongings</span>
                  </li>
                </ul>
              </div>
            </>
          ) : isGrandLine ? (
            <>
              {/* Venue */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Venue</h3>
                <p>Christ Hall</p>
              </div>

              {/* Event Structure */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Event Structure & Flow</h3>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Round 1: L's Deduction Test (IPL Quiz)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Round 2: Observation Haki (Audio & Video Based Questions)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Round 3: Attack on Auction (Mock IPL Auction)</span>
                  </li>
                </ul>
              </div>

              {/* Event Timeline */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Event Timeline</h3>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Round 1: 30 Minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Round 2: 1 Hour</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Final Round (Auction): 2 Hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Total Duration: Approximately 5 Hours</span>
                  </li>
                </ul>
              </div>

              {/* Participation Details */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Participation Details</h3>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Maximum Number of Teams: 40</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Team Size: 2-4 Members per Team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Expected Total Participants: 80 Students</span>
                  </li>
                </ul>
              </div>

              {/* Elimination Criteria */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Elimination Criteria</h3>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Round 1: Top 15 teams qualify based on score</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Round 2: Top 8 teams advance to the Final Auction</span>
                  </li>
                </ul>
              </div>

              {/* Prize Distribution */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Prize Distribution</h3>
                <p>Total Prize Pool: ₹15,000</p>
                <ul className="space-y-1 text-foreground/70 mt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>First Prize: ₹8,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Second Prize: ₹5,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Third Prize: ₹2,000</span>
                  </li>
                </ul>
              </div>

              {/* Round Details */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Round 1: L's Deduction Test</h3>
                <p className="text-foreground/70 mb-1">Duration: 30 Minutes | Format: 20 MCQs (30 seconds each)</p>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Test foundational IPL knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>+1 mark for correct answer, no negative marking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Mobile phone usage strictly prohibited</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Round 2: Observation Haki</h3>
                <p className="text-foreground/70 mb-1">Duration: 1 Hour | Audio & Video Based Questions</p>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>5 Audio clips (played 3 times) + 5 Video clips (played 2 times)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>30 seconds to answer each question</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Marking: Correct +3, Wrong -1, Blank 0</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Final Round: Attack on Auction</h3>
                <p className="text-foreground/70 mb-1">Duration: 2 Hours | Mock IPL Auction</p>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Build a squad of 11-14 players</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Maximum 4 overseas players in playing 11</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Minimum 1 uncapped player in playing 11</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Bidding: 2 min for legendary players, 1 min for normal players</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Bonus: +2 credits for 3+ overseas players from same country</span>
                  </li>
                </ul>
              </div>
            </>
          ) : isBMT ? (
            <>
              {/* Team Requirements */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Team Requirements</h3>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Team Size: 4 members (strictly team event)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>All members must be from the same institution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Open to UG and PG students from all streams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Each team must carry a laptop and smartphone with stable internet</span>
                  </li>
                </ul>
              </div>

              {/* Prize Distribution */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Prize Distribution</h3>
                <p>Total Prize Pool: ₹14,500</p>
                <ul className="space-y-1 text-foreground/70 mt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Winner: ₹10,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Finalists: ₹1,500 each</span>
                  </li>
                </ul>
              </div>

              {/* Event Coordinators */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Event Coordinators</h3>
                <p>Event Head: Adithya Rajan - 8921928096</p>
                <p className="text-foreground/70">Faculty Coordinator: Roshan David - 9809055360</p>
              </div>

              {/* Guidelines */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Guidelines</h3>
                <ul className="space-y-1.5 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Valid college ID card is compulsory for participation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>All participants are required to be in formal attire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Teams must report to the venue 30 minutes before scheduled time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Payment must be completed prior to the event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Mobile phone usage is strictly prohibited, unless permitted by coordinators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The structure and format of each round will be revealed on the day of the event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Any doubts must be raised before the commencement of each round</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Any form of malpractice will lead to disqualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>All decisions made by judges and coordinators are final and binding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Participants must maintain discipline, professionalism, and respect</span>
                  </li>
                </ul>
              </div>
            </>
          ) : isReelMaking ? (
            <>
              {/* Round Info */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Event Structure</h3>
                <p className="text-foreground/70">Round 1: Reel the Fest</p>
                <p className="text-foreground/70 text-xs mt-1">Capture all major events of the management fest</p>
              </div>

              {/* Venue */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Venue</h3>
                <p>Classroom</p>
              </div>

              {/* Participants */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Participation</h3>
                <p>One reel per participant</p>
                <p className="text-foreground/70 text-xs mt-1">Number of Judges: 2</p>
                <p className="text-foreground/70 text-xs">Time: 1:30 / 4</p>
              </div>

              {/* Prize Distribution */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Prize Pool</h3>
                <p>Total Prize Pool: ₹4,000</p>
                <ul className="space-y-1 text-foreground/70 mt-1">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>First Prize: ₹3,500</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Miscellaneous Expense: ₹500</span>
                  </li>
                </ul>
              </div>

              {/* Rules and Guidance */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Rules and Guidance</h3>
                <ul className="space-y-1.5 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Only original footage shot during the fest is allowed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Reel duration: 60 seconds shoot using mobile or camera. Basic editing allowed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Background music should be trending and appropriate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Reel should include minimum 3 events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>One reel per participant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Submit before the given deadline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>No vulgarity allowed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Judges decision will be final</span>
                  </li>
                </ul>
              </div>

              {/* Judgement Criteria */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Judgement Criteria</h3>
                <ul className="space-y-1.5 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">1.</span>
                    <span>Event coverage and completeness: 30%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">2.</span>
                    <span>Creativity and storytelling: 25%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">3.</span>
                    <span>Video quality and editing: 20%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">4.</span>
                    <span>Music, text and visual appeal: 15%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">5.</span>
                    <span>Overall impact: 10%</span>
                  </li>
                </ul>
              </div>

              {/* Infrastructure */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Infrastructure Required</h3>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Classroom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Projector/TV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Pens, Clipboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Power Supply</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Laptop Facility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Judges Score Sheet (A4)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Mic & Speaker</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Internet Access</span>
                  </li>
                </ul>
                <p className="text-foreground/70 text-xs mt-2">Number of Volunteers: 3</p>
              </div>
            </>
          ) : isFinanceGame ? (
            <>
              {/* Team Requirements */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Team Requirements</h3>
                <p>Each team must consist of 4 members only</p>
                <p className="text-foreground/70 text-xs mt-1">Minimum 2 members must carry laptops with stable internet</p>
              </div>

              {/* Event Guidelines */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Event Guidelines</h3>
                <ul className="space-y-1.5 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>All participants must produce a valid institution ID card at registration and verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Minimum 2 members from each team must carry a laptop with stable internet connection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Participants are expected to maintain discipline, professionalism, and ethical conduct</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Any form of misconduct, malpractice, misrepresentation, or violation of rules will result in immediate disqualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The rules, format, and evaluation criteria of each round will be announced at the commencement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>All participants must be dressed in formal attire for the entire duration of the event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Teams must strictly adhere to the time limits specified by event coordinators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The structure, preparation time, and mode of conduct are pre-decided and not open to discussion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The decisions of judges and event coordinators of LUCIDUS '26 shall be final and binding</span>
                  </li>
                </ul>
              </div>
            </>
          ) : isHRGame ? (
            <>
              {/* Registration Fee */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Registration Fee</h3>
                <p>₹250 per head (Non-refundable)</p>
              </div>

              {/* Team Requirements */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Team Requirements</h3>
                <p>Each team shall consist of 4 members only</p>
                <p className="text-foreground/70 text-xs mt-1">Open to UG and PG students</p>
              </div>

              {/* Event Guidelines */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Event Guidelines</h3>
                <ul className="space-y-1.5 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>All participants must produce a valid institution ID card at registration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>All participants must be dressed in formal attire during the event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Minimum 2 members from each team must carry a laptop with active internet connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The rules, format and details of each round will be announced at the commencement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Participants must strictly adhere to the time limits specified by event coordinators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>All participants are expected to maintain decorum, discipline and professional conduct</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Any form of misconduct, undisciplined behavior or violation of rules will result in immediate disqualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The rules, preparation time and mode of conduct have been carefully designed and shall not be subject to dispute</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The decision of judges and event coordinators of LUCIDUS '26 shall be final and binding</span>
                  </li>
                </ul>
              </div>
            </>
          ) : isFashionShow ? (
            <>
              {/* Registration Fee */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Registration Fee</h3>
                <p>₹2,000 per team</p>
              </div>

              {/* Event Structure */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Event Structure</h3>
                <p>Only one Round (No Q/A)</p>
              </div>

              {/* Event Timeline */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Event Timeline</h3>
                <p className="text-foreground/70">Full Event scheduled for 60 minutes</p>
                <p className="text-foreground/70 text-xs mt-1">A time gap between each team performance</p>
              </div>

              {/* Participation Details */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Participation Details</h3>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Maximum number of teams: 06</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Team size: 8-12 members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Total participants expected: 72</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Open to both UG and PG students from all colleges</span>
                  </li>
                </ul>
              </div>

              {/* Prize Distribution */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Prize Distribution</h3>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Winner: ₹20,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Runner-up: ₹10,000</span>
                  </li>
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Instructions</h3>
                <ul className="space-y-1.5 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">1.</span>
                    <span>All participants should be present 30 minutes prior to the reporting time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">2.</span>
                    <span>There should be a THEME according to the college you are representing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">3.</span>
                    <span>One member should be recognized as TEAM LEADER/MANAGER</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">4.</span>
                    <span>No vulgarity shall be entertained</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">5.</span>
                    <span>Props shall be arranged by the team themselves (No support from Lucidus)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">6.</span>
                    <span>Before 3 days of the event, a description about the theme shall be submitted (Name, theme, Rough description)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">7.</span>
                    <span>The stage should be vacated before 3 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">8.</span>
                    <span>Synchronization will be strictly monitored</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">9.</span>
                    <span>Musical instrument should be arranged by the teams themselves (No support from Lucidus)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">10.</span>
                    <span>CD should be given to organizers one day before the event (WhatsApp transfer is also accepted)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">11.</span>
                    <span>Performance time limit: 6-7 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">12.</span>
                    <span>No more than 3 minutes can be used for stage setup/preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">13.</span>
                    <span>Costumes and accessories are the responsibility of participants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">14.</span>
                    <span>Any damage to college property will result in penalties</span>
                  </li>
                </ul>
              </div>

              {/* Judgement Criteria */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Judgement Criteria</h3>
                <ul className="space-y-1.5 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Theme interpretation and creativity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Costume design and styling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Walk and presentation skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Confidence and stage presence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Overall impact and audience engagement</span>
                  </li>
                </ul>
              </div>

              {/* Coordinators */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Event Coordinators</h3>
                <p className="text-foreground/70">Nandini: 9539420355</p>
                <p className="text-foreground/70">Varsha: 9207826868</p>
              </div>
            </>
          ) : isOperationsGame ? (
            <>
              {/* Registration Fee */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Registration Fee</h3>
                <p>₹250 per head</p>
              </div>

              {/* Team Details */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Team Composition</h3>
                <p>4 members per team</p>
              </div>

              {/* Prize Distribution */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Prize Distribution</h3>
                <ul className="space-y-1 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>First Prize: ₹10,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Finalist: ₹1,500</span>
                  </li>
                </ul>
              </div>

              {/* Guidelines */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-2">Guidelines</h3>
                <ul className="space-y-1.5 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>All members in a team must be from the same institution/college</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>All participants are required to carry a valid college ID card or an authorization letter, along with a government-issued identity proof such as Aadhaar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Each team should have at least 1 laptop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Participants must have the following applications installed on their laptop/mobile phone: WhatsApp, Excel, Word</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Participants are required to arrange their own internet connectivity. The organizing committee shall not be held responsible for any network disruptions or connectivity issues. Ensuring a stable and reliable connection rests solely with the participant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The participants should strictly adhere to the guidelines and are expected to be present 15 minutes before the commencement of the rounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Use of unfair means and violation of rules will lead to disqualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The decision of the judges will be final</span>
                  </li>
                </ul>
              </div>

              {/* Coordinators */}
              <div>
                <h3 className="text-foreground font-display text-sm font-semibold mb-1">Event Coordinators</h3>
                <p className="text-foreground/70">Faculty Co-ordinator: Mr. John Mathew - 8606950545</p>
                <p className="text-foreground/70">Student Co-ordinator: Shreyas Mathew - 9995828248</p>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>

        {/* Register Button */}
        <button 
          className="fire-button w-full mt-6 text-sm font-display tracking-widest py-3"
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdIl9LhrgavWOCrQDQonVcvk7uv2yS9URwZFckXdvbWQbM7Xw/viewform?usp=header', '_blank')}
        >
          REGISTER NOW
        </button>
      </div>
    </div>
  );
};

export default EventDetailModal;
