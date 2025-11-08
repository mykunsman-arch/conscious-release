import { useState, useEffect } from "react";
import logo from "@/assets/logo-full.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-lg shadow-xl border-b border-border/50" : "bg-transparent"
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img 
            src={logo} 
            alt="המרכז לריפוי תודעתי" 
            className={`h-20 w-auto object-contain transition-all duration-300 ${
              isScrolled ? "drop-shadow-lg h-16" : ""
            }`} 
          />
          
          <nav className="hidden md:flex gap-8">
            {[
              { id: "what-is", label: "מה זה ריפוי תודעתי" },
              { id: "how-it-works", label: "איך זה עובד" },
              { id: "questionnaire", label: "שאלון" },
              { id: "contact", label: "יצירת קשר" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm font-medium text-foreground/70 hover:text-accent transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-peach group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
