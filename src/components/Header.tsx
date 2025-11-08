import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpg";

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
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img src={logo} alt="המרכז לריפוי תודעתי" className="h-16 w-16 object-contain" />
          
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("what-is")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              מה זה ריפוי תודעתי
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              איך זה עובד
            </button>
            <button
              onClick={() => scrollToSection("questionnaire")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              שאלון
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              יצירת קשר
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
