import { Youtube, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

const MobileFooter = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 100 });
  
  const facultyCoordinators = [
    { name: "Renu J Kandathil", phone: "+91 94007 95632" },
    { name: "MR. Roshan David", phone: "9809055360" },
    { name: "MR. John Mathew", phone: "8086950545" },
  ];

  const studentCoordinators = [
    { name: "Fazil Shahid Farook", phone: "8089262591" },
    { name: "Saurav Suresh", phone: "8086137123" },
    { name: "Alishya K.J", phone: "8921461903" },
    { name: "Abel J Kolapran", phone: "8891389600" },
  ];

  return (
    <footer id="contact" className="w-full py-6 px-3">
      <div 
        ref={ref}
        className={`relative bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-lg transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-cyan-500" />
            <span className="text-[10px] font-display uppercase tracking-widest text-cyan-400">Contact Us</span>
          </div>
          <h2 className="font-display text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">
            LUCIDUS 2026
          </h2>
          <p className="text-xs text-white/50 mt-1">
            Christ College of Engineering & CIBA
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {["Home", "About", "Events", "Schedule", "Team", "Contact"].map(link => (
            <button
              key={link}
              onClick={() => {
                const element = document.getElementById(link.toLowerCase());
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-xs text-white/60 py-2 px-3 rounded-lg bg-white/5 border border-white/10 active:bg-white/10"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Coordinators */}
        <div className="mb-4">
          <h3 className="text-xs font-display uppercase tracking-widest text-orange-400 mb-2 text-center">
            Faculty Coordinators
          </h3>
          <div className="space-y-1.5">
            {facultyCoordinators.map((contact, idx) => (
              <a
                key={idx}
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 active:bg-white/10"
              >
                <span className="text-white/80 text-xs font-semibold">{contact.name}</span>
                <span className="text-white/50 text-xs">{contact.phone}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xs font-display uppercase tracking-widest text-cyan-400 mb-2 text-center">
            Student Coordinators
          </h3>
          <div className="space-y-1.5">
            {studentCoordinators.map((contact, idx) => (
              <a
                key={idx}
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 active:bg-white/10"
              >
                <span className="text-white/80 text-xs font-semibold">{contact.name}</span>
                <span className="text-white/50 text-xs">{contact.phone}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-[10px] text-white/40 uppercase tracking-widest text-center mb-3">
            Follow Us
          </p>
          <div className="flex items-center justify-center gap-3">
            <button className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center active:bg-red-600/20">
              <Youtube className="w-5 h-5 text-white/70" />
            </button>
            <button className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center active:bg-pink-600/20">
              <Instagram className="w-5 h-5 text-white/70" />
            </button>
            <button className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center active:bg-blue-600/20">
              <Facebook className="w-5 h-5 text-white/70" />
            </button>
            <a 
              href="mailto:lucidus@cce.ac.in"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center active:bg-cyan-600/20"
            >
              <Mail className="w-5 h-5 text-white/70" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-white/10 text-center">
          <p className="text-[10px] text-white/30">
            © 2026 LUCIDUS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
