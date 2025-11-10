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
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 pt-24 pb-16" dir="rtl">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-sage/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl text-center space-y-8 relative z-10">
        {/* Logo */}
        <div className="animate-scale-in">
          <img 
            src={logo} 
            alt="המרכז לריפוי תודעתי" 
            className="h-auto w-48 sm:w-56 md:w-72 max-w-full mx-auto object-contain drop-shadow-lg" 
          />
        </div>
        
        {/* Main heading */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="text-sage h-5 w-5 md:h-6 md:w-6" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              להשתחרר. להתחבר. להתרפא.
            </h1>
            <Sparkles className="text-sage h-5 w-5 md:h-6 md:w-6" />
          </div>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            תהליך עדין של ריפוי תודעתי שמסייע לשחרר עומסים רגשיים ודפוסים מעכבים
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="w-full sm:w-auto bg-sage hover:bg-sage/90 text-white px-10 py-7 text-lg rounded-xl shadow-lg group"
          >
            בואו נדבר
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          </Button>
          
          <Link to="/questionnaire" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full border-2 border-sage text-sage hover:bg-sage hover:text-white px-10 py-7 text-lg rounded-xl"
            >
              שאלון התאמה
            </Button>
          </Link>
        </div>

        {/* Quick stats */}
        <div className="pt-8 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-sage">15+</div>
            <div className="text-sm text-foreground/60">שנות ניסיון</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sage">500+</div>
            <div className="text-sm text-foreground/60">לקוחות מרוצים</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sage">95%</div>
            <div className="text-sm text-foreground/60">שביעות רצון</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
