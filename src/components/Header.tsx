import { useState, useEffect } from "react";

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
      <div className="container mx-auto px-4 py-3 md:py-8">
        <div className="flex items-center justify-center mt-0 md:mt-4">
          <nav className="flex flex-wrap gap-2 sm:gap-3 md:gap-6 lg:gap-8 justify-center">
            {[
              { id: "what-is", label: "מה זה ריפוי תודעתי" },
              { id: "how-it-works", label: "איך זה עובד" },
              { id: "questionnaire", label: "שאלון" },
              { id: "contact", label: "יצירת קשר" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-xs sm:text-sm md:text-base lg:text-lg font-medium text-foreground/70 hover:text-accent transition-colors group whitespace-nowrap px-1"
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
