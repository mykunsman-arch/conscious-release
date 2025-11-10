import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoHeader from "@/assets/logo-header-dark.png";

const Header = () => {
  const [showLogo, setShowLogo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border/30 h-16 md:h-16"
      dir="rtl"
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="flex items-center justify-between relative w-full gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logoHeader} 
              alt="המרכז לריפוי תודעתי" 
              className={`h-12 md:h-36 w-auto object-contain transition-opacity duration-500 ${
                showLogo ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>
          
          {/* Navigation */}
          <nav className="flex gap-3 md:gap-4 lg:gap-6 justify-end flex-1">
            {[
              { path: "/", label: "ריפוי תודעתי" },
              { path: "/questionnaire", label: "שאלון" },
              { path: "/faq", label: "שאלות" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-base md:text-base lg:text-lg transition-all group whitespace-nowrap ${
                  location.pathname === item.path
                    ? "text-foreground opacity-100 font-bold" 
                    : "text-foreground/70 opacity-70 hover:opacity-100 hover:text-accent font-medium"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sage to-primary transition-all duration-300 ${
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
