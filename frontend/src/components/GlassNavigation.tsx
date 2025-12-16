import lucidusLogo from "@/assets/lucidus-logo.jpeg";

const navItems = ["Home", "About", "Events", "Sponsors", "Team", "Contact"];

const GlassNavigation = () => {
  return (
    <nav className="flex items-center justify-center gap-4 mb-6">
      <img 
        src={lucidusLogo} 
        alt="Lucidus Logo" 
        className="w-10 h-10 rounded-full object-cover logo-presence"
      />
      <div className="nav-glass flex items-center gap-1 glass-edge-light">
        {navItems.map((item, index) => (
          <button
            key={item}
            className={`nav-item hover-react-strong micro-click ${index === 0 ? 'active' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default GlassNavigation;
