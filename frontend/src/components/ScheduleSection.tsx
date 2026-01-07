import { Download, Calendar, MapPin, Clock, ArrowRight, Users, Award, Music, DoorClosed, Sparkles } from "lucide-react";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

const ScheduleSection = () => {
  const { ref: scheduleRef, isVisible: scheduleVisible } = useCinematicReveal({ delay: 300 });

  // Google Drive direct download link
  const brochureUrl = "https://drive.google.com/uc?export=download&id=1dflqzBzUiZ7zlkVS_O8BsnwPODEhe0sI";

  const handleDownload = () => {
    // Open the download link in a new tab
    window.open(brochureUrl, '_blank');
  };

  const scheduleEvents = [
    { 
      time: "8:30 AM", 
      title: "Registration", 
      location: "Main Hall",
      description: "Participant check-in and welcome kit distribution",
      icon: Users,
    },
    { 
      time: "9:30 AM", 
      title: "Inauguration", 
      location: "Main Auditorium",
      description: "Official opening ceremony with keynote speakers",
      icon: Sparkles,
    },
    { 
      time: "10:30 AM", 
      title: "Management Events", 
      location: "Conference Hall",
      description: "Business strategy sessions and workshops",
      icon: Users,
    },
    { 
      time: "12:30 PM", 
      title: "Cultural Events", 
      location: "Main Stage",
      description: "Performances, exhibitions, and cultural activities",
      icon: Music,
    },
    { 
      time: "4:00 PM", 
      title: "Valedictory / Business Excellence Awards", 
      location: "Main Auditorium",
      description: "Closing ceremony and award presentations",
      icon: Award,
    },
    { 
      time: "5:30 PM", 
      title: "Entertainment Programme", 
      location: "Main Stage",
      description: "Live performances and entertainment shows",
      icon: Music,
    },
    { 
      time: "7:00 PM", 
      title: "Gate Closing", 
      location: "Main Entrance",
      description: "Event conclusion and venue closure",
      icon: DoorClosed,
    },
  ];

  return (
    <div 
      ref={scheduleRef}
      className={`glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 w-full subtle-glow-shift deep-ambient-float glass-edge-light hover-react-subtle depth-layer-panel ${
        scheduleVisible ? 'reveal-visible' : 'reveal-hidden'
      }`}
    >
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap px-2">
          <div className="hidden sm:flex w-12 sm:w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-primary"></div>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Calendar className="w-6 sm:w-8 h-6 sm:h-8 text-primary flex-shrink-0 animate-pulse" />
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-wider bg-clip-text ">
              EVENT SCHEDULE
            </h3>
            <Calendar className="w-6 sm:w-8 h-6 sm:h-8 text-primary flex-shrink-0 animate-pulse" />
          </div>
          <div className="hidden sm:flex w-12 sm:w-16 h-[2px] bg-gradient-to-l from-transparent via-primary/50 to-primary"></div>
        </div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-center gap-2 text-foreground/80 text-sm sm:text-base font-body tracking-wide">
            <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
            <span className="font-semibold text-foreground">January 23, 2026</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-foreground/70 text-xs sm:text-sm font-body tracking-wide">
            <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
            <span>Christ College of Engineering</span>
          </div>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-16">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 sm:left-3 md:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent hidden sm:block"></div>

          {/* Events List */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {scheduleEvents.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <div 
                  key={index} 
                  className="group relative"
                  style={{ 
                    animationDelay: `${index * 80}ms`,
                    animation: 'fadeIn 0.5s ease-out forwards'
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 sm:left-3 md:left-12 -translate-x-1/2 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-primary border-3 sm:border-4 border-background shadow-lg shadow-primary/50 hidden sm:flex items-center justify-center group-hover:scale-125 transition-transform duration-300 z-10"></div>

                  {/* Event Card */}
                  <div className="sm:ml-6 md:ml-24 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-foreground/10 hover:border-primary/30 transition-all duration-500 overflow-hidden group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-1">
                    <div className="p-3 sm:p-6 md:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-3 sm:gap-6">
                        {/* Left: Icon & Time */}
                        <div className="flex items-center gap-2 sm:gap-6 lg:w-64 flex-shrink-0">
                          {/* Icon */}
                          <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                            <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
                          </div>

                          {/* Time */}
                          <div className="flex flex-col">
                            <span className="text-xs text-foreground/50 font-medium uppercase tracking-wider mb-1">Time</span>
                            <div className="flex items-center gap-1 sm:gap-2">
                              <Clock className="w-3 sm:w-4 h-3 sm:h-4 text-primary flex-shrink-0" />
                              <span className="text-lg sm:text-xl font-bold text-foreground font-display">
                                {event.time}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden lg:block w-[2px] h-16 bg-gradient-to-b from-transparent via-foreground/20 to-transparent"></div>

                        {/* Right: Content */}
                        <div className="flex-1 space-y-2 sm:space-y-3">
                          {/* Title */}
                          <h4 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground font-display tracking-wide group-hover:text-primary transition-colors duration-300">
                            {event.title}
                          </h4>

                          {/* Description */}
                          <p className="text-foreground/60 text-xs sm:text-sm md:text-base leading-relaxed">
                            {event.description}
                          </p>

                          {/* Location */}
                          <div className="flex items-center gap-1 sm:gap-2 text-foreground/70">
                            <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-primary flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-medium">{event.location}</span>
                          </div>
                        </div>

                        {/* Arrow Indicator */}
                        <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/30 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                          <ArrowRight className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-primary transition-all duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Download Brochure Section */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl max-w-4xl mx-auto">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
        
        {/* Content */}
        <div className="relative glass-panel p-4 sm:p-10 md:p-14 border-2 border-primary/20">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-8 lg:gap-12">
            {/* Left: Icon & Info */}
            <div className="flex-1 text-center lg:text-left space-y-3 sm:space-y-4">
              <div className="inline-flex lg:flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-2">
                <div className="w-10 sm:w-14 h-10 sm:h-14 rounded-lg sm:rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0">
                  <Download className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
                </div>
                <h4 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-foreground tracking-wider">
                  Event Brochure
                </h4>
              </div>
              
              <p className="text-foreground/70 text-xs sm:text-base md:text-lg leading-relaxed max-w-xl px-2 sm:px-0">
                Download the complete event guide with detailed schedules, venue maps, speaker profiles, and essential information for attendees.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2 px-2 sm:px-0">
                {['Full Schedule', 'Venue Maps', 'Speaker Info', 'Guidelines'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-foreground/60 text-xs sm:text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Download Button */}
            <div className="flex flex-col items-center gap-2 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={handleDownload}
                className="group relative overflow-hidden rounded-lg sm:rounded-2xl px-6 sm:px-10 py-3 sm:py-5 font-display font-bold text-sm sm:text-lg tracking-wider transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 bg-gradient-to-r from-primary to-accent text-white w-full sm:w-auto"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Button Content */}
                <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                  <Download className="w-5 sm:w-6 h-5 sm:h-6 group-hover:animate-bounce" />
                  <span className="hidden sm:inline">DOWNLOAD NOW</span>
                  <span className="sm:hidden">DOWNLOAD</span>
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
              
              <p className="text-foreground/50 text-xs text-center">
                PDF Format • 2.5 MB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;

