import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";
import { Shield, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const MobileGuidelinesSection = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 200 });
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const guidelineCategories = [
    {
      title: "Registration",
      color: "cyan",
      items: [
        "Open to UG and PG students from all streams",
        "Register through the official website",
        "All team members must be from the same college",
        "Spot registrations may be available",
      ]
    },
    {
      title: "Event Day",
      color: "orange",
      items: [
        "College ID card is mandatory",
        "Report 30 minutes before your event",
        "Late reporting may lead to disqualification",
        "Bring your personal laptop with charger (hands-on session)",
        "Food and beverages provided—no need to pack lunch!",
      ]
    },
    {
      title: "Payments",
      color: "cyan",
      items: [
        "Registration fees are non-refundable",
        "Refund decisions are at committee's discretion",
      ]
    },
    {
      title: "Decisions",
      color: "orange",
      items: [
        "Judges' decisions are final and binding",
        "No appeals during or after events",
      ]
    },
    {
      title: "Certificates",
      color: "cyan",
      items: [
        "E-certificates within 14 days",
        "Physical certificates for winners only",
      ]
    },
  ];

  return (
    <div
      ref={ref}
      className={`mt-4 px-3 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-lg">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-white/10 mb-2">
            <Shield className="w-6 h-6 text-orange-500" />
          </div>
          <h2 className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-1 tracking-wide">
            GUIDELINES
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto" />
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {guidelineCategories.map((category, catIndex) => {
            const isCyan = category.color === "cyan";
            const isExpanded = expandedCategory === catIndex;
            
            return (
              <div 
                key={catIndex}
                className={`bg-black/40 border ${
                  isCyan ? 'border-cyan-500/20' : 'border-orange-500/20'
                } rounded-xl overflow-hidden`}
              >
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : catIndex)}
                  className="w-full p-3 flex items-center justify-between active:bg-white/5"
                >
                  <h3 className={`font-display text-sm font-bold ${
                    isCyan ? 'text-cyan-400' : 'text-orange-400'
                  }`}>
                    {category.title}
                  </h3>
                  <ChevronDown className={`w-4 h-4 ${
                    isCyan ? 'text-cyan-400' : 'text-orange-400'
                  } transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>

                {isExpanded && (
                  <div className="px-3 pb-3 space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start gap-2 text-white/70 text-xs leading-relaxed"
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                          isCyan ? 'text-cyan-500/70' : 'text-orange-500/70'
                        }`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileGuidelinesSection;
