import { useState, useEffect } from "react";
import logoHeader from "@/assets/logo-header-dark.png";

const Header = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 100);
    };

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
      className="fixed top-0 w-full z-50 bg-transparent"
      dir="rtl"
    >
      <img 
        src={logoHeader} 
        alt="המרכז לריפוי תודעתי" 
        className={`h-32 md:h-60 w-auto object-contain fixed z-50 transition-opacity duration-500 ${
          showLogo ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: '-0.5rem', right: '-0.25rem' }}
      />
      
      <div className="container mx-auto px-4 pt-24 md:pt-8 pb-4">
        <div className="flex items-center justify-center relative">
          <nav className="flex gap-2 md:gap-6 lg:gap-8 mx-auto flex-wrap justify-center text-sm md:text-base">
            {[
              { id: "what-is", label: "מה זה ריפוי תודעתי" },
              { id: "how-it-works", label: "איך זה עובד" },
              { id: "questionnaire", label: "שאלון" },
              { id: "contact", label: "יצירת קשר" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm md:text-xl lg:text-2xl font-medium text-foreground/70 hover:text-accent transition-colors group whitespace-nowrap px-1 md:px-0"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sage to-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
