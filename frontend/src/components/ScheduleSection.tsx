import { Download, Calendar, MapPin, Clock } from "lucide-react";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";
import Character3D from "./Character3D";

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
      color: "from-primary/20 to-primary/5"
    },
    { 
      time: "9:30 AM", 
      title: "Inauguration", 
      location: "Main Auditorium",
      color: "from-accent/20 to-accent/5"
    },
    { 
      time: "10:30 AM", 
      title: "Management Events", 
      location: "Conference Hall",
      color: "from-primary/20 to-accent/10"
    },
    { 
      time: "12:30 PM", 
      title: "Cultural Events", 
      location: "Main Stage",
      color: "from-accent/20 to-primary/10"
    },
    { 
      time: "4:00 PM", 
      title: "Valedictory / Business Excellence Awards", 
      location: "Main Auditorium",
      color: "from-primary/20 to-primary/5"
    },
    { 
      time: "5:30 PM", 
      title: "Entertainment Programme", 
      location: "Main Stage",
      color: "from-accent/20 to-accent/5"
    },
    { 
      time: "7:00 PM", 
      title: "Gate Closing", 
      location: "Main Entrance",
      color: "from-primary/20 to-accent/10"
    },
  ];

  return (
    <div 
      ref={scheduleRef}
      className={`glass-panel rounded-3xl p-8 w-full subtle-glow-shift deep-ambient-float glass-edge-light hover-react-subtle depth-layer-panel ${
        scheduleVisible ? 'reveal-visible' : 'reveal-hidden'
      }`}
    >
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5 text-primary animate-pulse" />
          <h3 className="font-display text-2xl font-black text-foreground tracking-wider text-glow-cyan">
            EVENT SCHEDULE
          </h3>
          <Calendar className="w-5 h-5 text-primary animate-pulse" />
        </div>
        <p className="text-foreground/60 text-sm font-body tracking-wide">
          Mark your calendar for these exciting events
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Events Grid */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {scheduleEvents.map((event, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Glass Panel */}
                <div className="relative glass-card p-5 h-full border-2 border-foreground/10 group-hover:border-primary/30 transition-all duration-500">
                  {/* Time */}
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-primary text-base font-bold font-display tracking-wider">
                      {event.time}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-foreground text-base font-bold font-display mb-3 tracking-wide group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h4>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-foreground/60 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Download Brochure Section - Big & Catchy */}
          <div className="relative overflow-hidden rounded-2xl">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-gradient-x" />
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
            
            {/* Content */}
            <div className="relative glass-panel p-6 border-2 border-primary/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left Side - Text */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <Download className="w-6 h-6 text-primary" />
                    <h4 className="font-display text-xl font-black text-foreground tracking-wider text-glow-cyan">
                      GET THE COMPLETE SCHEDULE
                    </h4>
                  </div>
                  <p className="text-foreground/70 text-sm font-body">
                    Download our detailed brochure with all event information, timings, and venue details
                  </p>
                </div>

                {/* Right Side - Download Button */}
                <button
                  onClick={handleDownload}
                  className="group relative overflow-hidden rounded-full px-8 py-4 font-display font-bold text-base tracking-wider transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-glow-cyan"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-x" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  
                  {/* Button Content */}
                  <div className="relative flex items-center gap-3 text-background">
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    <span className="whitespace-nowrap">DOWNLOAD BROCHURE</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Character Container */}
        <div className="hidden lg:block w-64 h-64 flex-shrink-0 relative">
          <div className="w-full h-full glass-card rounded-2xl overflow-hidden border-2 border-foreground/10 hover:border-primary/30 transition-all duration-500">
            <Character3D />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;

