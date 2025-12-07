import { useState, useEffect } from "react";
import { Home, Sparkles, Heart, MessageCircle, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  scrollTo?: string;
}

const MobileBottomNav = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { id: "home", label: "בית", icon: Home, scrollTo: "hero" },
    { id: "what-is", label: "ריפוי", icon: Sparkles, scrollTo: "what-is" },
    { id: "why-here", label: "למה כאן", icon: Heart, scrollTo: "why-here" },
    { id: "about", label: "אודות", icon: User, scrollTo: "about" },
    { id: "contact", label: "צור קשר", icon: MessageCircle, scrollTo: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setLastScrollY(currentScrollY);

      // Detect active section
      const sections = ["hero", "what-is", "trauma-connection", "how-it-works", "why-here", "about", "testimonials", "faq", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            // Map sections to nav items
            if (sectionId === "hero") setActiveSection("home");
            else if (["what-is", "trauma-connection", "how-it-works"].includes(sectionId)) setActiveSection("what-is");
            else if (["why-here", "testimonials"].includes(sectionId)) setActiveSection("why-here");
            else if (sectionId === "about") setActiveSection("about");
            else if (["faq", "contact"].includes(sectionId)) setActiveSection("contact");
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (item: NavItem) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: item.scrollTo } });
      return;
    }

    const element = document.getElementById(item.scrollTo || item.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[200] md:hidden"
      dir="rtl"
    >
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl border-t border-border/50 shadow-[0_-4px_30px_rgba(0,0,0,0.1)]" />
      
      {/* Safe area padding for iOS */}
      <div className="relative flex items-center justify-around px-2 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 min-w-[4rem] ${
                isActive
                  ? "text-primary scale-105"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className={`relative ${isActive ? "animate-pulse" : ""}`}>
                <Icon className={`h-5 w-5 transition-all ${isActive ? "stroke-[2.5px]" : "stroke-[1.5px]"}`} />
                {isActive && (
                  <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm -z-10" />
                )}
              </div>
              <span className={`text-[0.65rem] font-medium transition-all ${
                isActive ? "font-bold" : ""
              }`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-sage to-primary rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;