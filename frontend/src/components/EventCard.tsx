import { useState } from "react";
import { Trophy, Flame, Sword, Users, Phone } from "lucide-react";
import { EventData } from "@/data/eventsData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  event: EventData;
  type: "management" | "non-management";
}

const EventCard = ({ event, type }: EventCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const gradientClass = type === "management" 
    ? "from-red-900/20 via-orange-900/20 to-amber-900/20" 
    : "from-cyan-900/20 via-blue-900/20 to-indigo-900/20";

  const glowClass = type === "management"
    ? "hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:border-amber-500/50"
    : "hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:border-cyan-500/50";

  const accentColor = type === "management" ? "text-amber-400" : "text-cyan-400";
  const iconBgClass = type === "management" 
    ? "bg-gradient-to-br from-red-600 to-orange-600" 
    : "bg-gradient-to-br from-cyan-600 to-blue-600";

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className={`group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-br ${gradientClass} backdrop-blur-xl transition-all duration-500 ${glowClass} hover:scale-105 hover:border-white/30`}
      >
        {/* Top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${type === "management" ? "from-red-600 via-amber-500 to-orange-600" : "from-cyan-500 via-blue-500 to-indigo-500"}`} />
        
        {/* Content */}
        <div className="relative p-6">
          {/* Icon Badge */}
          <div className={`absolute -top-3 -right-3 ${iconBgClass} w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {type === "management" ? (
              <Flame className="w-8 h-8 text-white" />
            ) : (
              <Sword className="w-8 h-8 text-white" />
            )}
          </div>

          {/* Category Badge */}
          <Badge 
            variant="outline" 
            className={`mb-3 border-white/20 ${accentColor} bg-black/40 text-xs font-bold tracking-wider`}
          >
            {event.category}
          </Badge>

          {/* Title */}
          <h3 className="mb-2 font-serif text-2xl font-bold text-white tracking-tight leading-tight min-h-[3.5rem]">
            {event.title}
          </h3>

          {/* Theme */}
          <p className="mb-4 text-sm text-white/60 italic">
            {event.imageTheme}
          </p>

          {/* Prize Pool */}
          <div className="mb-4 flex items-center gap-2">
            <Trophy className={`w-5 h-5 ${accentColor}`} />
            <div>
              <p className="text-xs text-white/60">Prize Pool</p>
              <p className={`text-2xl font-bold ${accentColor} drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]`}>
                {event.prizePool}
              </p>
            </div>
          </div>

          {/* Registration Fee */}
          <div className="mb-4">
            <p className="text-xs text-white/60">Registration Fee</p>
            <p className="text-lg font-semibold text-white">{event.fee}</p>
          </div>

          {/* Call to Action */}
          <Button
            className={`w-full font-bold tracking-wider transition-all duration-300 ${
              type === "management"
                ? "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg hover:shadow-amber-500/50"
                : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-cyan-500/50"
            }`}
          >
            View Details
          </Button>
        </div>

        {/* Bottom glow effect */}
        <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t ${type === "management" ? "from-amber-500/10" : "from-cyan-500/10"} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-black/95 border-2 border-white/20 text-white backdrop-blur-xl">
          <DialogHeader>
            {/* Title with accent */}
            <div className={`mb-2 h-1 w-20 rounded-full bg-gradient-to-r ${type === "management" ? "from-red-600 to-amber-500" : "from-cyan-500 to-blue-500"}`} />
            
            <DialogTitle className="font-serif text-4xl font-bold text-white mb-2">
              {event.title}
            </DialogTitle>
            
            <DialogDescription className="text-white/80 text-lg">
              {event.category} • {event.imageTheme}
            </DialogDescription>
          </DialogHeader>

          <Separator className="my-4 bg-white/10" />

          {/* Prize and Fee Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className={`rounded-xl border border-white/10 p-4 ${type === "management" ? "bg-gradient-to-br from-red-900/20 to-orange-900/20" : "bg-gradient-to-br from-cyan-900/20 to-blue-900/20"}`}>
              <div className="flex items-center gap-2 mb-2">
                <Trophy className={`w-5 h-5 ${accentColor}`} />
                <p className="text-sm text-white/60 font-semibold">Prize Pool</p>
              </div>
              <p className={`text-3xl font-bold ${accentColor}`}>{event.prizePool}</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/60 font-semibold mb-2">Registration Fee</p>
              <p className="text-3xl font-bold text-white">{event.fee}</p>
            </div>
          </div>

          {/* Prize Distribution */}
          <div className={`mb-6 rounded-xl border-2 p-4 ${type === "management" ? "border-amber-500/50 bg-gradient-to-br from-amber-900/20 to-orange-900/20" : "border-cyan-500/50 bg-gradient-to-br from-cyan-900/20 to-blue-900/20"}`}>
            <h3 className={`mb-4 font-serif text-xl font-bold ${accentColor} flex items-center gap-2`}>
              <Trophy className="w-6 h-6" />
              💰 Prize Distribution
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/80 font-semibold flex items-center gap-2">
                  🏆 1st Prize
                </span>
                <span className={`text-xl font-bold ${accentColor}`}>{event.prizeDistribution.first}</span>
              </div>
              {event.prizeDistribution.second && (
                <div className="flex items-center justify-between">
                  <span className="text-white/80 font-semibold flex items-center gap-2">
                    🥈 2nd Prize
                  </span>
                  <span className={`text-xl font-bold ${accentColor}`}>{event.prizeDistribution.second}</span>
                </div>
              )}
              {event.prizeDistribution.finalists && (
                <div className="flex items-center justify-between">
                  <span className="text-white/80 font-semibold flex items-center gap-2">
                    🥈 Finalists
                  </span>
                  <span className={`text-xl font-bold ${accentColor}`}>{event.prizeDistribution.finalists}</span>
                </div>
              )}
            </div>
          </div>

          {/* Guidelines */}
          <div className="mb-6">
            <h3 className={`mb-4 font-serif text-2xl font-bold ${accentColor} flex items-center gap-2`}>
              <Users className="w-6 h-6" />
              Event Guidelines
            </h3>
            <ul className="space-y-3">
              {event.guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className={`mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${type === "management" ? "bg-gradient-to-br from-red-600 to-orange-600" : "bg-gradient-to-br from-cyan-600 to-blue-600"} text-xs font-bold text-white`}>
                    {index + 1}
                  </span>
                  <span className="text-white/90 leading-relaxed">{guideline}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator className="my-4 bg-white/10" />

          {/* Coordinators */}
          <div className="mb-6">
            <h3 className={`mb-4 font-serif text-2xl font-bold ${accentColor} flex items-center gap-2`}>
              <Phone className="w-6 h-6" />
              Contact Coordinators
            </h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Faculty Coordinator */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="mb-2 text-sm font-semibold text-white/60">Faculty Coordinator</p>
                <a
                  href={`tel:${event.coordinators.faculty.match(/\+91 \d+/)?.[0].replace(/\s/g, '')}`}
                  className={`text-lg font-bold ${accentColor} hover:underline flex items-center gap-2 transition-colors`}
                >
                  <Phone className="w-4 h-4" />
                  {event.coordinators.faculty}
                </a>
              </div>

              {/* Student Coordinator */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="mb-2 text-sm font-semibold text-white/60">Student Coordinator</p>
                <a
                  href={`tel:${event.coordinators.student.match(/\+91 \d+/)?.[0].replace(/\s/g, '')}`}
                  className={`text-lg font-bold ${accentColor} hover:underline flex items-center gap-2 transition-colors`}
                >
                  <Phone className="w-4 h-4" />
                  {event.coordinators.student}
                </a>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <Button
            onClick={() => window.open(event.registrationLink, '_blank')}
            className={`w-full py-6 text-lg font-bold tracking-wider transition-all duration-300 ${
              type === "management"
                ? "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-xl hover:shadow-amber-500/50"
                : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-xl hover:shadow-cyan-500/50"
            }`}
          >
            Register Now
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EventCard;
