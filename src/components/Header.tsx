import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "what-is", label: "מה זה ריפוי תודעתי" },
    { id: "how-it-works", label: "איך זה עובד" },
    { id: "questionnaire", label: "שאלון" },
    { id: "contact", label: "יצירת קשר" }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-lg shadow-xl border-b border-border/50" : "bg-transparent"
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center mt-0 md:mt-8">
          <nav className="flex gap-4 lg:gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-base lg:text-lg font-medium text-foreground/70 hover:text-accent transition-colors group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-peach group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center justify-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground/70 hover:text-accent transition-colors"
            aria-label="תפריט"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-lg border-b border-border/50 shadow-xl">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-lg font-medium text-foreground/70 hover:text-accent transition-colors text-center py-3 hover:bg-muted/30 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
