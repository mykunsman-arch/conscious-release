import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "בית" },
  { id: "what-is", label: "מה זה" },
  { id: "how-it-works", label: "איך זה עובד" },
  { id: "questionnaire", label: "שאלון" },
  { id: "testimonials", label: "המלצות" },
  { id: "contact", label: "יצירת קשר" },
];

const ScrollProgressDots = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3" dir="ltr">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative"
          aria-label={section.label}
        >
          <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === index
                    ? "bg-sage scale-125 shadow-lg shadow-sage/50"
                    : "bg-border hover:bg-sage/50 hover:scale-110"
                }`}
          />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border/50 shadow-lg">
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ScrollProgressDots;
