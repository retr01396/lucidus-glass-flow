import { Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto glass-panel rounded-3xl p-8 md:p-10 backdrop-blur-2xl bg-white/5 border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          <div className="space-y-4 text-foreground">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-foreground/80">
              Contacts
            </h3>
            <div className="space-y-2">
              <h2 className="font-display text-xl font-semibold">
                LUCIDUS 2026 : MANAGEMENT FEST
              </h2>
            </div>

            <div className="space-y-2 text-sm text-foreground/80">
              <p className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
                Organized by
              </p>
              <p className="text-base font-semibold leading-relaxed">Christ College of Engineering (Autonomous), and Christ Institution of Business Administration</p>
            </div>
          </div>

          <div className="space-y-3 text-foreground">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-foreground/80">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Schedule", id: "schedule" },
                { name: "Sponsors", id: "sponsors" },
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
                  className="text-foreground/90 hover:text-foreground transition-colors duration-200 text-left cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-foreground">
            <div className="space-y-3 text-base text-foreground/90">
              <p className="uppercase text-sm tracking-[0.2em] text-foreground/60 font-bold">
                Faculty Coordinators
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed">MR. Roshan David - 9809055360</p>
              <p className="text-foreground/70 text-sm leading-relaxed">MR. John Mathew - 8086950545</p>
            </div>

            <div className="space-y-3 text-base text-foreground/90">
              <p className="uppercase text-sm tracking-[0.2em] text-foreground/60 font-bold">
                Student Coordinators
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed">Fazil Shahid Farook - 8089262591</p>
              <p className="text-foreground/70 text-sm leading-relaxed">Saurav Suresh - 8086137123</p>
              <p className="text-foreground/70 text-sm leading-relaxed">Alishya K.J - 8921461903</p>
              <p className="text-foreground/70 text-sm leading-relaxed">Abel J Kolapran - 8891389600</p>
            </div>

            <div className="space-y-2">
              <p className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
                Social Media
              </p>
              <div className="flex items-center gap-3">
                <button
                  aria-label="Youtube"
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/15 transition-opacity duration-200"
                >
                  <Youtube className="w-4 h-4 text-white/80" />
                </button>
                <button
                  onClick={() => window.open("https://www.instagram.com/lucidus.2k26?igsh=MXJzZGNoYWx4NnA4dw==", "_blank")}
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/15 transition-opacity duration-200"
                >
                  <Instagram className="w-4 h-4 text-white/80" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-xs text-foreground/70 text-center">
            © 2026 LUCIDUS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


