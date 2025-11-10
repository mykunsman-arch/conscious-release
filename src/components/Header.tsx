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
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border/30 h-16 md:h-20"
      dir="rtl"
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="flex items-center justify-between relative w-full">
          {/* Logo */}
          <img 
            src={logoHeader} 
            alt="המרכז לריפוי תודעתי" 
            className={`h-[5.46875rem] md:h-[7.03125rem] w-auto object-contain transition-opacity duration-500 max-h-full ${
              showLogo ? "opacity-100" : "opacity-0"
            }`}
          />
          
          {/* Navigation Tabs */}
          <nav className="flex gap-2 md:gap-3 justify-center flex-1 max-w-md md:max-w-none mx-auto">
            {[
              { path: "/", label: "עמוד ראשי" },
              { path: "/questionnaire", label: "שאלון התאמה" },
              { path: "/faq", label: "שאלות ותשובות" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-sm md:text-base transition-all whitespace-nowrap px-3 md:px-5 py-2.5 rounded-full ${
                  location.pathname === item.path
                    ? "text-white bg-sage font-semibold shadow-md" 
                    : "text-foreground/70 hover:text-foreground hover:bg-sage/10 font-medium"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
