import { Twitter, Instagram, Facebook } from "lucide-react";

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
                INNOVATE 2025: MBA Management Fest
              </h2>
              <a
                href="mailto:contact@cce.edu.in"
                className="text-accent underline text-sm"
              >
                mail:contact@cce.edu.in
              </a>
            </div>

            <div className="space-y-2 text-sm text-foreground/80">
              <p className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
                Organized by
              </p>
              <p className="font-semibold">Innovate Labs</p>
              <p>Dept of Computer Science</p>
              <p>Dept of Management Science</p>
              <p>Christ College of Engineering (Autonomous)</p>
              <p>Irinjalakuda</p>
            </div>
          </div>

          <div className="space-y-3 text-foreground">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-foreground/80">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              {["Home", "About", "Schedule", "Sponsors", "Team", "Contact"].map(link => (
                <span key={link} className="text-foreground/90">
                  {link}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-foreground">
            <div className="space-y-2">
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-foreground/80">
                Policies
              </h3>
              <div className="flex flex-col gap-2 text-sm text-foreground/90">
                <span>Privacy Policy</span>
                <span>Terms &amp; Conditions</span>
                <span>Code of Conduct</span>
              </div>
            </div>

            <div className="space-y-2 text-sm text-foreground/90">
              <p className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
                Faculty Coordinator
              </p>
              <p className="font-semibold">Edwin Shaji Malakaran</p>
              <p className="text-foreground/70">+91 88787 68510</p>
            </div>

            <div className="space-y-2 text-sm text-foreground/90">
              <p className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
                Student Coordinator
              </p>
              <p className="font-semibold">Gautham Madhu</p>
              <p className="text-foreground/70">+91 85431 87810</p>
            </div>

            <div className="space-y-2">
              <p className="uppercase text-[11px] tracking-[0.2em] text-foreground/60">
                Social Media
              </p>
              <div className="flex items-center gap-3">
                <button
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/15 transition-opacity duration-200"
                >
                  <Twitter className="w-4 h-4 text-white/80" />
                </button>
                <a
                  href="https://www.instagram.com/lucidus.2k26"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/15 transition-opacity duration-200"
                >
                  <Instagram className="w-4 h-4 text-white/80" />
                </a>
                <button
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center hover:bg-white/15 transition-opacity duration-200"
                >
                  <Facebook className="w-4 h-4 text-white/80" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button className="px-8 py-3 rounded-full bg-gradient-to-b from-orange-400 to-orange-500 text-white font-display text-base shadow-lg shadow-orange-500/30">
            Become a Partner
          </button>
          <p className="text-xs text-foreground/70 text-center">
            © 2025 INNOVATE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


