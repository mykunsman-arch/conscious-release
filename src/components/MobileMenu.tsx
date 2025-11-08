import { useState } from "react";
import { Menu, X, Sparkles, Heart, ClipboardCheck, Star, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { id: "what-is", label: "מה זה ריפוי תודעתי", icon: Sparkles },
    { id: "how-it-works", label: "איך זה עובד", icon: Heart },
    { id: "questionnaire", label: "שאלון", icon: ClipboardCheck },
    { id: "testimonials", label: "המלצות", icon: Star },
    { id: "contact", label: "יצירת קשר", icon: Phone },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-card/95 backdrop-blur-md rounded-xl shadow-lg border border-border/50 hover:border-sage/30 transition-all touch-manipulation min-h-[48px] min-w-[48px] active:scale-95"
        aria-label="פתח תפריט"
      >
        <Menu className="h-6 w-6 text-foreground" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-md z-[60] animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-card/98 backdrop-blur-xl z-[70] shadow-2xl border-l border-border/50 transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        dir="rtl"
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 p-3 bg-muted/50 hover:bg-muted rounded-xl transition-all touch-manipulation min-h-[48px] min-w-[48px] active:scale-95"
          aria-label="סגור תפריט"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Logo */}
        <div className="pt-6 pb-8 px-6 border-b border-border/50">
          <h2 className="text-2xl font-bold text-gradient-shimmer font-varela">
            המרכז לריפוי תודעתי
          </h2>
        </div>

        {/* Menu Items */}
        <nav className="py-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full flex items-center gap-4 px-6 py-5 text-right hover:bg-sage/10 transition-all group touch-manipulation min-h-[60px] active:bg-sage/20"
            >
              <item.icon className="h-6 w-6 text-sage transition-transform group-hover:scale-110" />
              <span className="text-lg font-medium text-foreground group-hover:text-sage transition-colors">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* WhatsApp CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border/50 bg-gradient-to-t from-card to-transparent">
          <Button
            onClick={() => {
              window.open("https://wa.me/972527176000", "_blank");
              setIsOpen(false);
            }}
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-6 text-lg rounded-2xl shadow-lg min-h-[56px] touch-manipulation active:scale-95"
          >
            <MessageCircle className="ml-2 h-5 w-5" />
            שיחה בוואטסאפ
          </Button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
