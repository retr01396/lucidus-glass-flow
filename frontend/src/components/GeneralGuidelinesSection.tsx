import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";
import { Shield, CheckCircle2, AlertTriangle, User, Calendar, FileText, Award, DollarSign, AlertCircle, Gavel, Laptop, UtensilsCrossed } from "lucide-react";
import { useState } from "react";

const GeneralGuidelinesSection = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 200 });
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const guidelineCategories = [
    {
      title: "Registration & Eligibility",
      icon: User,
      color: "cyan",
      items: [
        "Open to undergraduate and postgraduate students from all streams",
        "Participants must be from affiliated colleges",
        "Individual participants must register through the official website",
        "Group events must be registered under the group leader's name",
        "All team members must be from the same college",
        "Spot registrations may be available subject to event-day announcement",
      ]
    },
    {
      title: "Event Day Rules",
      icon: Calendar,
      color: "orange",
      items: [
        "College ID card is mandatory for all participants and visitors",
        "Registration ID cards and materials will be issued at the registration counter",
        "Correct mobile number and email must be provided during registration",
        "Event round details will be shared via registered contact details",
        "Participants must report at least 30 minutes before the allotted time",
        "Late reporting may lead to disqualification",
        "Device Requirement: Please ensure you bring your personal laptop along with its charger, as this will be a hands-on session",
        "Refreshments: No need to pack a lunch! Food and beverages will be provided for all attendees",
      ]
    },
    {
      title: "Payment & Refunds",
      icon: DollarSign,
      color: "cyan",
      items: [
        "Registration fees are non-refundable",
        "Refund decisions are at the discretion of the organizing committee",
      ]
    },
    {
      title: "Technical & Equipment",
      icon: FileText,
      color: "orange",
      items: [
        "Event-specific rules will be communicated separately",
        "Participants must ensure proper functioning of personal equipment",
        "Organizers are not responsible for technical or equipment failures",
        "Clarifications must be addressed to coordinators before the event begins",
      ]
    },
    {
      title: "Decisions & Appeals",
      icon: Gavel,
      color: "cyan",
      items: [
        "No appeals or objections will be entertained during or after events",
        "Event structure may be modified for smooth scheduling",
        "Judges' and event heads' decisions are final and binding",
      ]
    },
    {
      title: "Certificates & Awards",
      icon: Award,
      color: "orange",
      items: [
        "E-certificates will be issued within 14 days after the event",
        "Physical certificates will be awarded only to winners",
      ]
    },
    {
      title: "Liability & Conduct",
      icon: AlertCircle,
      color: "cyan",
      items: [
        "Participants are responsible for their personal belongings",
        "Organizers are not liable for loss or damage of personal property",
        "Organizers are not responsible for disruptions due to unforeseen circumstances",
        "Events may be cancelled, rescheduled, or modified as per college directives",
        "All individuals must follow the college code of conduct",
        "Participation implies acceptance of all general and event-specific rules",
      ]
    },
  ];

  return (
    <div
      ref={ref}
      className={`max-w-6xl mx-auto mt-4 sm:mt-6 md:mt-8 px-3 sm:px-4 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_0_60px_rgba(255,100,0,0.15)]">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 via-transparent to-cyan-600/5 animate-gradient-shift pointer-events-none rounded-3xl" />
        
        <div className="relative z-10 text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-white/10 mb-4 shadow-[0_0_30px_rgba(255,100,0,0.3)]">
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-3 tracking-wide">
            GENERAL GUIDELINES
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-4" />
          <p className="text-foreground/70 text-sm md:text-base max-w-2xl mx-auto">
            Please review all guidelines carefully to ensure a smooth experience
          </p>
        </div>

        <div className="relative z-10 bg-gradient-to-r from-orange-600/10 to-red-600/10 border-2 border-orange-500/30 rounded-xl p-4 mb-8 flex items-start gap-3 max-w-4xl mx-auto">
          <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-orange-400 text-sm md:text-base font-semibold mb-1">
              Important: Read All Guidelines
            </p>
            <p className="text-orange-400/80 text-xs md:text-sm">
              Participation implies acceptance of all general and event-specific rules. Contact coordinators for clarifications.
            </p>
          </div>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-4 md:gap-6">
          {guidelineCategories.map((category, catIndex) => {
            const IconComponent = category.icon;
            const isCyan = category.color === "cyan";
            const isExpanded = expandedCategory === catIndex;
            
            return (
              <div 
                key={catIndex}
                className={`bg-black/60 backdrop-blur-sm border-2 ${
                  isCyan ? 'border-cyan-600/30 hover:border-cyan-500/40' : 'border-orange-600/30 hover:border-orange-500/40'
                } rounded-2xl overflow-hidden transition-all duration-300 ${
                  isCyan ? 'hover:shadow-[0_0_30px_rgba(0,200,255,0.15)]' : 'hover:shadow-[0_0_30px_rgba(255,100,0,0.15)]'
                }`}
                style={{ animationDelay: `${catIndex * 50}ms` }}
              >
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : catIndex)}
                  className="w-full p-5 flex items-center gap-4 hover:bg-white/5 transition-colors duration-200"
                >
                  <div className={`w-12 h-12 rounded-xl ${
                    isCyan ? 'bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border-cyan-500/30' : 'bg-gradient-to-br from-orange-600/30 to-red-600/30 border-orange-500/30'
                  } border-2 flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`w-6 h-6 ${isCyan ? 'text-cyan-400' : 'text-orange-400'}`} />
                  </div>

                  <div className="flex-1 text-left">
                    <h3 className={`font-display text-base md:text-lg font-bold ${
                      isCyan ? 'text-cyan-400' : 'text-orange-400'
                    } mb-1`}>
                      {category.title}
                    </h3>
                    <p className="text-foreground/60 text-xs md:text-sm">
                      {category.items.length} guidelines
                    </p>
                  </div>

                  <div className={`w-6 h-6 rounded-full ${
                    isCyan ? 'bg-cyan-600/20' : 'bg-orange-600/20'
                  } flex items-center justify-center transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}>
                    <svg className={`w-4 h-4 ${isCyan ? 'text-cyan-400' : 'text-orange-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div className={`transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-5 pb-5 space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start gap-3 text-foreground/80 text-sm leading-relaxed hover:translate-x-1 transition-transform duration-200 group"
                      >
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          isCyan ? 'text-cyan-500/70 group-hover:text-cyan-500' : 'text-orange-500/70 group-hover:text-orange-500'
                        } transition-colors duration-200`} />
                        <span className="break-words">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`h-1 ${
                  isCyan ? 'bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent' : 'bg-gradient-to-r from-transparent via-orange-500/30 to-transparent'
                }`} />
              </div>
            );
          })}
        </div>

        <div className="relative z-10 mt-8 text-center">
          <button
            onClick={() => {
              if (expandedCategory !== null) {
                setExpandedCategory(null);
              } else {
                setExpandedCategory(0);
              }
            }}
            className="text-foreground/60 text-xs md:text-sm font-display tracking-wide hover:text-cyan-400 transition-colors duration-200 underline"
          >
            {expandedCategory !== null ? '▲ Collapse All' : '▼ Click any category to expand and read guidelines'}
          </button>
        </div>

        <div className="relative z-10 mt-8 text-center space-y-2">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
          <p className="text-foreground/60 text-xs md:text-sm font-display tracking-wide">
            For queries, contact the event coordinators • All decisions are final and binding
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralGuidelinesSection;