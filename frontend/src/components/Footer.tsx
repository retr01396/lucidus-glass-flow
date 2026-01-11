import { Youtube, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useCinematicReveal } from "@/hooks/use-cinematic-reveal";

const Footer = () => {
  const { ref, isVisible } = useCinematicReveal({ delay: 100 });
  
  return (
    <footer id="contact" className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`relative bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_60px_rgba(0,200,255,0.15)] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-transparent to-orange-600/5 animate-gradient-shift pointer-events-none rounded-3xl" />
          
          <div className="relative z-10 grid md:grid-cols-3 gap-8 md:gap-10">
            {/* About Section */}
            <div className={`space-y-4 text-foreground ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600/30 to-orange-600/30 border border-white/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan-500" />
                </div>
                <h3 className="font-display text-sm uppercase tracking-[0.2em] text-cyan-400">
                  Contact Us
                </h3>
              </div>
              <div className="space-y-2">
                <h2 className="font-display text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">
                  LUCIDUS 2026
                </h2>
                <p className="text-sm text-foreground/70">
                  MANAGEMENT FEST
                </p>
              </div>

              <div className="space-y-2 text-sm text-foreground/80">
                <p className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
                  Organized by
                </p>
                <p className="text-base font-semibold leading-relaxed">
                  Christ College of Engineering (Autonomous), and Christ Institution of Business Administration
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className={`space-y-4 text-foreground ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600/30 to-orange-600/30 border border-white/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="font-display text-sm uppercase tracking-[0.2em] text-orange-400">
                  Quick Links
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  { name: "Home", id: "home" },
                  { name: "About", id: "about" },
                  { name: "Schedule", id: "schedule" },
                  { name: "Events", id: "events" },
                  { name: "Team", id: "team" },
                  { name: "Contact", id: "contact" }
                ].map(link => (
                  <button
                    key={link.name}
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        setTimeout(() => {
                          element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }, 0);
                      }
                    }}
                    className="text-left text-foreground/80 hover:text-cyan-400 transition-all duration-200 cursor-pointer py-1 px-2 rounded hover:bg-white/5"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className={`space-y-6 text-foreground ${isVisible ? 'animate-fade-in-right delay-400' : 'opacity-0'}`}>
              <div>
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600/30 to-orange-600/30 border border-white/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cyan-500" />
                  </div>
                  <h3 className="font-display text-sm uppercase tracking-[0.2em] text-cyan-400">
                    Coordinators
                  </h3>
                </div>
                
                {/* Faculty Coordinators */}
                <div className="space-y-3 mb-6">
                  <p className="uppercase text-xs tracking-[0.2em] text-orange-400 font-bold">
                    Faculty
                  </p>
                  <div className="space-y-2">
                    {[
                      { name: "Renu J Kandathil", phone: "+91 94007 95632" },
                      { name: "MR. Roshan David", phone: "9809055360" },
                      { name: "MR. John Mathew", phone: "8086950545" },
                    ].map((contact, idx) => (
                      <div key={idx} className="text-foreground/70 text-xs md:text-sm leading-relaxed bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors">
                        <p className="font-semibold text-foreground/90">{contact.name}</p>
                        <p className="text-xs text-foreground/60">{contact.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Student Coordinators */}
                <div className="space-y-3">
                  <p className="uppercase text-xs tracking-[0.2em] text-cyan-400 font-bold">
                    Students
                  </p>
                  <div className="space-y-2">
                    {[
                      { name: "Fazil Shahid Farook", phone: "8089262591" },
                      { name: "Saurav Suresh", phone: "8086137123" },
                      { name: "Alishya K.J", phone: "8921461903" },
                      { name: "Abel J Kolapran", phone: "8891389600" },
                    ].map((contact, idx) => (
                      <div key={idx} className="text-foreground/70 text-xs md:text-sm leading-relaxed bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors">
                        <p className="font-semibold text-foreground/90">{contact.name}</p>
                        <p className="text-xs text-foreground/60">{contact.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <p className="uppercase text-xs tracking-[0.2em] text-foreground/60">
                  Follow Us
                </p>
                <div className="flex items-center gap-3">
                  <button
                    aria-label="Youtube"
                    className="w-10 h-10 rounded-full border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center hover:border-red-500/50 hover:bg-red-600/20 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 group"
                  >
                    <Youtube className="w-5 h-5 text-white/80 group-hover:text-red-500 transition-colors" />
                  </button>
                  
                  <a
                    href="https://www.instagram.com/lucidus.2k26?igsh=MXJzZGNoYWx4NnA4dw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center hover:border-pink-500/50 hover:bg-pink-600/20 hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-all duration-300 group"
                  >
                    <Instagram className="w-5 h-5 text-white/80 group-hover:text-pink-500 transition-colors" />
                  </a>
                  
                  <button
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-600/20 hover:shadow-[0_0_20px_rgba(0,100,255,0.3)] transition-all duration-300 group"
                  >
                    <Facebook className="w-5 h-5 text-white/80 group-hover:text-blue-500 transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="relative z-10 mt-10 pt-6 border-t border-white/10 text-center">
            <p className="text-foreground/60 text-xs md:text-sm font-display tracking-wide">
              © 2026 LUCIDUS. All rights reserved. • Powered by Christ College of Engineering
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
