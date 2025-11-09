import { useState, useEffect } from "react";
import logoHeader from "@/assets/logo-header-dark.png";

const Header = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 100);

      // Detect which section is currently in view
      const sections = ["what-is", "how-it-works", "why-here", "testimonials", "faq", "questionnaire", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2.5;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border/30 h-16 md:h-20"
      dir="rtl"
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="flex items-center justify-between relative w-full">
          {/* Logo */}
          <img 
            src={logoHeader} 
            alt="המרכז לריפוי תודעתי" 
            className={`h-14 md:h-[4.5rem] w-auto object-contain transition-opacity duration-500 max-h-full ${
              showLogo ? "opacity-100" : "opacity-0"
            }`}
          />
          
          {/* Navigation */}
          <nav className="flex gap-1 md:gap-3 lg:gap-4 flex-wrap justify-center flex-1">
            {[
              { id: "what-is", label: "מה זה ריפוי תודעתי" },
              { id: "how-it-works", label: "איך זה עובד" },
              { id: "why-here", label: "למה כאן" },
              { id: "testimonials", label: "המלצות" },
              { id: "faq", label: "שאלות נפוצות" },
              { id: "questionnaire", label: "שאלון" },
              { id: "contact", label: "יצירת קשר" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-[0.54rem] md:text-[1.05rem] lg:text-[1.2rem] transition-all group whitespace-nowrap px-0.5 md:px-0 ${
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
