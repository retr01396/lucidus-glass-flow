import { useState, useEffect } from "react";
import { Trophy, Flame, Sword, Users, Phone, ChevronRight, X } from "lucide-react";
import { EventData } from "@/data/eventsData";
import { Badge } from "@/components/ui/badge";
import { createPortal } from "react-dom";

interface MobileEventCardProps {
  event: EventData;
  type: "management" | "non-management";
}

const MobileEventCard = ({ event, type }: MobileEventCardProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const gradientClass = type === "management" 
    ? "from-red-900/30 via-orange-900/30 to-amber-900/30" 
    : "from-cyan-900/30 via-blue-900/30 to-indigo-900/30";

  const accentColor = type === "management" ? "text-amber-400" : "text-cyan-400";
  const borderColor = type === "management" ? "border-amber-500/30" : "border-cyan-500/30";
  const bgGradient = type === "management" 
    ? "from-red-600 to-orange-600" 
    : "from-cyan-600 to-blue-600";

  const DrawerContent = () => (
    <div 
      className="fixed inset-0 z-[9999]"
      style={{ touchAction: 'none' }}
    >
      {/* Enhanced Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={(e) => {
          e.stopPropagation();
          setIsDrawerOpen(false);
        }}
        style={{
          animation: 'fadeIn 0.3s ease-out'
        }}
      />
      
      {/* Drawer Content with Enhanced Styling */}
      <div 
        className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-b from-black via-black/95 to-black border-t-2 border-white/20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: 'slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-transparent to-orange-600/5 animate-gradient-shift pointer-events-none" />
        
        {/* Top glow effect */}
        <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${type === "management" ? "from-orange-500/10" : "from-cyan-500/10"} to-transparent pointer-events-none`} />
        
        {/* Header with Enhanced Design */}
        <div className="sticky top-0 z-10 bg-black/90 backdrop-blur-xl pb-3 border-b border-white/10">
          <div className="flex items-center justify-between p-4 pb-2">
            <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${bgGradient} shadow-[0_0_10px_rgba(0,200,255,0.3)]`} />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDrawerOpen(false);
              }}
              className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center active:bg-white/20 transition-all duration-200 hover:scale-110"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          
          <div className="px-4">
            <Badge 
              variant="outline" 
              className={`mb-2 border-white/30 ${accentColor} bg-black/60 text-xs font-bold tracking-wider px-3 py-1`}
            >
              {event.category}
            </Badge>
            <h2 className="font-serif text-2xl font-bold text-white leading-tight mb-1">
              {event.title}
            </h2>
            <p className="text-white/60 text-sm">{event.imageTheme}</p>
          </div>
        </div>

        {/* Scrollable Content with Enhanced Cards */}
        <div 
          className="overflow-y-auto px-4 pt-4 smooth-scroll"
          style={{ height: 'calc(100vh - 180px)' }}
        >
          {/* Prize and Fee - Enhanced Design */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className={`rounded-xl border-2 ${borderColor} bg-gradient-to-br ${gradientClass} backdrop-blur-xl p-4 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-200`}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full" />
              <div className="relative flex items-center gap-2 mb-2">
                <Trophy className={`w-5 h-5 ${accentColor}`} />
                <p className="text-[10px] text-white/70 font-semibold uppercase tracking-wider">Prize Pool</p>
              </div>
              <p className={`relative text-3xl font-bold ${accentColor} drop-shadow-lg`}>{event.prizePool}</p>
            </div>

            <div className="rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-xl p-4 relative overflow-hidden hover:scale-[1.02] transition-transform duration-200">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full" />
              <p className="text-[10px] text-white/70 font-semibold uppercase tracking-wider mb-2">Reg. Fee</p>
              <p className="text-3xl font-bold text-white">{event.fee}</p>
            </div>
          </div>

          {/* Prize Distribution - Enhanced */}
          <div className={`mb-4 rounded-2xl border-2 ${borderColor} bg-gradient-to-br ${gradientClass} backdrop-blur-xl p-5 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full" />
            <h3 className={`mb-4 font-serif text-lg font-bold ${accentColor} flex items-center gap-2 relative`}>
              <Trophy className="w-6 h-6" />
              💰 Prize Distribution
            </h3>
            <div className="space-y-2.5 relative">
              <div className="flex items-center justify-between bg-black/40 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 hover:border-white/20 transition-colors">
                <span className="text-white/90 text-sm font-semibold flex items-center gap-2">
                  🏆 1st Prize
                </span>
                <span className={`text-xl font-bold ${accentColor} drop-shadow-lg`}>{event.prizeDistribution.first}</span>
              </div>
              {event.prizeDistribution.second && (
                <div className="flex items-center justify-between bg-black/40 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 hover:border-white/20 transition-colors">
                  <span className="text-white/90 text-sm font-semibold flex items-center gap-2">
                    🥈 2nd Prize
                  </span>
                  <span className={`text-xl font-bold ${accentColor} drop-shadow-lg`}>{event.prizeDistribution.second}</span>
                </div>
              )}
              {event.prizeDistribution.finalists && (
                <div className="flex items-center justify-between bg-black/40 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 hover:border-white/20 transition-colors">
                  <span className="text-white/90 text-sm font-semibold flex items-center gap-2">
                    🥈 Finalists
                  </span>
                  <span className={`text-xl font-bold ${accentColor} drop-shadow-lg`}>{event.prizeDistribution.finalists}</span>
                </div>
              )}
            </div>
          </div>

          {/* Guidelines - Enhanced */}
          <div className="mb-4">
            <h3 className={`mb-4 font-serif text-lg font-bold ${accentColor} flex items-center gap-2`}>
              <Users className="w-6 h-6" />
              Event Guidelines
            </h3>
            <div className="space-y-2.5">
              {event.guidelines.map((guideline, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                  style={{ 
                    animation: `fadeInUp 0.3s ease-out ${index * 0.05}s backwards`
                  }}
                >
                  <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${bgGradient} text-xs font-bold text-white shadow-lg`}>
                    {index + 1}
                  </span>
                  <span className="text-white/85 text-sm leading-relaxed">{guideline}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coordinators - Enhanced */}
          <div className="mb-24">
            <h3 className={`mb-4 font-serif text-lg font-bold ${accentColor} flex items-center gap-2`}>
              <Phone className="w-6 h-6" />
              Contact Coordinators
            </h3>
            
            <div className="space-y-3">
              {/* Faculty */}
              <a
                href={`tel:${event.coordinators.faculty.match(/\+91\s*\d+/)?.[0]?.replace(/\s/g, '') || ''}`}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 active:bg-white/10 active:scale-[0.98] transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${bgGradient} flex items-center justify-center shadow-lg`}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">Faculty Coordinator</p>
                  <p className={`text-sm font-bold ${accentColor}`}>{event.coordinators.faculty}</p>
                </div>
              </a>

              {/* Student */}
              <a
                href={`tel:${event.coordinators.student.match(/\+91\s*\d+/)?.[0]?.replace(/\s/g, '') || ''}`}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 active:bg-white/10 active:scale-[0.98] transition-all duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${bgGradient} flex items-center justify-center shadow-lg`}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] text-white/50 uppercase tracking-wider">Student Coordinator</p>
                  <p className={`text-sm font-bold ${accentColor}`}>{event.coordinators.student}</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Fixed Bottom Register Button - Enhanced */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black to-transparent border-t border-white/10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(event.registrationLink, '_blank');
            }}
            className={`relative group w-full py-6 text-base font-bold tracking-wider overflow-hidden border-2 border-white/20 rounded-xl ${
              type === "management" 
                ? "shadow-[0_0_30px_rgba(255,100,0,0.3)] hover:shadow-[0_0_40px_rgba(255,100,0,0.5)]"
                : "shadow-[0_0_30px_rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.5)]"
            } active:scale-[0.98] transition-all duration-300`}
            style={{
              background: type === "management" 
                ? 'linear-gradient(to right, rgb(234, 88, 12), rgb(249, 115, 22), rgb(220, 38, 38))'
                : 'linear-gradient(to right, rgb(8, 145, 178), rgb(14, 165, 233), rgb(37, 99, 235))',
              backgroundSize: '200% 100%'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            <span className="relative z-10 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Register Now</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 6s ease infinite;
        }
        .smooth-scroll {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </div>
  );

  return (
    <>
      {/* Enhanced Mobile Card with Glass Morphism */}
      <div
        onClick={() => setIsDrawerOpen(true)}
        className={`relative overflow-hidden rounded-2xl border-2 ${borderColor} bg-gradient-to-br ${gradientClass} backdrop-blur-xl cursor-pointer group transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(0,200,255,0.2)]`}
      >
        {/* Animated top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${bgGradient} transition-all duration-300 group-hover:h-1.5`} />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none" />
        
        {/* Corner accents */}
        <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl ${bgGradient} opacity-10 rounded-bl-full`} />
        
        <div className="relative p-4 flex items-center gap-3">
          {/* Enhanced Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${bgGradient} flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
            {type === "management" ? (
              <Flame className="w-7 h-7 text-white drop-shadow-lg" />
            ) : (
              <Sword className="w-7 h-7 text-white drop-shadow-lg" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <Badge 
              variant="outline" 
              className={`mb-1.5 border-white/30 ${accentColor} bg-black/40 text-[10px] font-bold tracking-wider px-2.5 py-0.5`}
            >
              {event.category}
            </Badge>
            <h3 className="font-serif text-base font-bold text-white truncate leading-tight mb-1">
              {event.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <Trophy className={`w-4 h-4 ${accentColor}`} />
              <span className={`text-sm font-bold ${accentColor}`}>{event.prizePool}</span>
              <span className="text-white/40 text-xs">•</span>
              <span className="text-white/60 text-xs">{event.fee}</span>
            </div>
          </div>

          {/* Animated Arrow */}
          <ChevronRight className="w-5 h-5 text-white/40 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
        
        {/* Bottom glow effect */}
        <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t ${type === "management" ? "from-orange-500/10" : "from-cyan-500/10"} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>

      {/* Render drawer using Portal to ensure it's on top of everything */}
      {isDrawerOpen && createPortal(<DrawerContent />, document.body)}
    </>
  );
};

export default MobileEventCard;
