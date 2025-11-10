import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-main.png";
import { Sparkles, ArrowLeft } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[60vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden px-4 pt-16 pb-4 md:pt-20 md:pb-6" dir="rtl">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-sage/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl text-center space-y-4 md:space-y-6 relative z-10">
        {/* Logo */}
        <div className="animate-scale-in">
          <img 
            src={logo} 
            alt="המרכז לריפוי תודעתי" 
            className="h-auto w-32 sm:w-40 md:w-56 max-w-full mx-auto object-contain drop-shadow-lg" 
          />
        </div>
        
        {/* Main heading */}
        <div className="space-y-2 md:space-y-3">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="text-sage h-4 w-4 md:h-5 md:w-5" />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              להשתחרר. להתחבר. להתרפא.
            </h1>
            <Sparkles className="text-sage h-4 w-4 md:h-5 md:w-5" />
          </div>
          
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto leading-snug">
            תהליך עדין של ריפוי תודעתי שמסייע לשחרר עומסים רגשיים
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
