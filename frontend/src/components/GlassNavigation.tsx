import { useEffect, useState } from "react";
import lucidusLogo from "@/assets/lucidus-logo.jpeg";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Events", id: "events" },
  { label: "Sponsors", id: "sponsors" },
  { label: "Team", id: "team" },
  { label: "Contact", id: "contact" },
];

const GlassNavigation = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
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
    <nav className="flex items-center justify-center gap-4 mb-6">
      <img 
        src={lucidusLogo} 
        alt="Lucidus Logo" 
        className="w-10 h-10 rounded-full object-cover logo-presence"
      />
      <div className="nav-glass flex items-center gap-1 glass-edge-light">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`nav-item hover-react-strong micro-click ${
              activeSection === item.id ? 'active' : ''
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default GlassNavigation;
