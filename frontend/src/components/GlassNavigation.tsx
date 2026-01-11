import { useEffect, useState } from "react";
import lucidusLogo from "@/assets/lucidus-logo.jpeg";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Events", id: "events" },
  { label: "Schedule", id: "schedule" },
  { label: "Contact", id: "contact" },
];

const GlassNavigation = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const NAVBAR_OFFSET = 80; // Approximate navbar height in pixels

  // Smooth scroll function with offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  // IntersectionObserver to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: `-${NAVBAR_OFFSET}px 0px -50% 0px`,
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 items-center justify-center gap-4 mb-12">
        <div className="relative group">
          <img 
            src={lucidusLogo} 
            alt="Lucidus Logo" 
            className="w-12 h-12 rounded-full object-cover border-2 border-white/20 shadow-[0_0_20px_rgba(0,200,255,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,200,255,0.5)]"
          />
        </div>
        <div className="bg-black/40 backdrop-blur-xl border-2 border-white/10 rounded-full px-2 py-2 flex items-center gap-2 shadow-[0_0_40px_rgba(0,200,255,0.15)]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-5 py-2.5 rounded-full font-display font-semibold text-sm tracking-wider transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-cyan-600 to-orange-600 text-white shadow-[0_0_20px_rgba(0,200,255,0.5)]' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img 
              src={lucidusLogo} 
              alt="Lucidus Logo" 
              className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
            />
            <span className="font-display text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">
              LUCIDUS
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-foreground hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-display font-semibold text-sm tracking-wider transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-cyan-600 to-orange-600 text-white' 
                      : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default GlassNavigation;

