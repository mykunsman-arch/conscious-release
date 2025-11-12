import { useState, useEffect } from "react";
import logoHeader from "@/assets/logo-header-dark.png";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  const isLandingPage = location.pathname === '/landing';

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 100);

      // Detect which section is currently in view
      const sections = {
        "what-is": ["what-is"],
        "how-it-works": ["trauma-connection", "how-it-works", "questionnaire"],
        "why-here": ["why-here", "testimonials"],
        "next-steps": ["faq", "contact"]
      };
      
      const scrollPosition = window.scrollY + window.innerHeight / 2.5;

      for (const [groupId, sectionIds] of Object.entries(sections)) {
        for (const sectionId of sectionIds) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(groupId);
              return;
            }
          }
        }
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If on landing page, navigate to home first
    if (isLandingPage) {
      navigate('/', { state: { scrollTo: id } });
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scroll on navigation from landing page
  useEffect(() => {
    if (!isLandingPage && location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location, isLandingPage]);

  return (
    <header
      className="fixed top-0 w-full z-[150] bg-background/95 backdrop-blur-sm border-b border-border/30 h-16 md:h-20 pointer-events-auto"
      dir="rtl"
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          {/* Logo - right side (first in RTL) */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => {
                if (location.pathname === '/') {
                  window.location.reload();
                } else {
                  navigate('/');
                }
              }}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="חזרה לדף הבית"
            >
              <img 
                src={logoHeader} 
                alt="המרכז לריפוי תודעתי" 
                className={`h-[5.46875rem] md:h-[7.03125rem] w-auto object-contain transition-opacity duration-500 max-h-full ${
                  showLogo ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          </div>
          
          {/* Navigation - centered */}
          <nav className="grid grid-cols-4 md:flex gap-1 md:gap-3 lg:gap-4 justify-center flex-1 max-w-md md:max-w-none relative pointer-events-auto">
            {[
              { id: "what-is", label: "ריפוי תודעתי" },
              { id: "how-it-works", label: "איך זה עובד", scrollTo: "trauma-connection" },
              { id: "why-here", label: "למה כאן" },
              { id: "next-steps", label: "איך מתקדמים", scrollTo: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.scrollTo || item.id)}
                className={`relative text-[0.648rem] md:text-[1.05rem] lg:text-[1.2rem] transition-all group whitespace-nowrap px-0.5 md:px-0 cursor-pointer pointer-events-auto ${
                  activeSection === item.id 
                    ? "text-foreground opacity-100 font-bold" 
                    : "text-foreground/70 opacity-40 hover:opacity-70 hover:text-accent font-medium"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sage to-primary transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
