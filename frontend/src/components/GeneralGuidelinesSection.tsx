import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

const GeneralGuidelinesSection = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 200 });

  return (
    <div
      ref={ref}
      className={`max-w-5xl mx-auto mt-4 sm:mt-6 md:mt-8 px-3 sm:px-4 ${
        isVisible ? "reveal-visible" : "reveal-hidden"
      }`}
    >
      <div className="glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 w-full animate-ambient-breathe">
        <h2 className="font-display text-base sm:text-lg md:text-xl font-bold text-foreground mb-4 sm:mb-6 tracking-wide text-glow-cyan text-center">
          GENERAL GUIDELINES
        </h2>

        <div className="glass-card group parallax-card transition-all duration-500 hover:shadow-glow-orange">
          <ul className="text-foreground/70 text-xs sm:text-sm md:text-sm leading-relaxed font-body space-y-1.5 sm:space-y-2">
            {[
              "Open to undergraduate and postgraduate students from all streams",
              "Participants must be from affiliated colleges",
              "Individual participants must register through the official website",
              "Group events must be registered under the group leader’s name",
              "All team members must be from the same college",
              "Spot registrations may be available subject to event-day announcement",
              "Registration fees are non-refundable",
              "College ID card is mandatory for all participants and visitors",
              "Registration ID cards and materials will be issued at the registration counter",
              "Correct mobile number and email must be provided during registration",
              "Event round details will be shared via registered contact details",
              "Participants must report at least 30 minutes before the allotted time",
              "Late reporting may lead to disqualification",
              "Event-specific rules will be communicated separately",
              "Participants must ensure proper functioning of personal equipment",
              "Organizers are not responsible for technical or equipment failures",
              "Clarifications must be addressed to coordinators before the event begins",
              "No appeals or objections will be entertained during or after events",
              "Event structure may be modified for smooth scheduling",
              "Judges’ and event heads’ decisions are final and binding",
              "E-certificates will be issued within 14 days after the event",
              "Physical certificates will be awarded only to winners",
              "Participants are responsible for their personal belongings",
              "Organizers are not liable for loss or damage of personal property",
              "Organizers are not responsible for disruptions due to unforeseen circumstances",
              "Events may be cancelled, rescheduled, or modified as per college directives",
              "Refund decisions are at the discretion of the organizing committee",
              "All individuals must follow the college code of conduct",
              "Participation implies acceptance of all general and event-specific rules",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-1.5 sm:gap-2 transition-all duration-300 hover:translate-x-0.5 sm:hover:translate-x-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-accent mt-0.5 sm:mt-1 transition-all duration-300 group-hover:scale-125 flex-shrink-0">
                  •
                </span>
                <span className="break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GeneralGuidelinesSection;
