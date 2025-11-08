import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-full.png";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום%20🌿%20הגעתי%20מהאתר%20mindcenter.co.il%20ורציתי%20לשמוע%20פרטים%20על%20התהליך", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-12 md:pt-32 md:pb-0" dir="rtl">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-peach/10 via-transparent to-transparent"></div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-peach/5 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto max-w-5xl text-center space-y-6 md:space-y-10 relative z-10">
        <div className="animate-scale-in">
          <img 
            src={logo} 
            alt="המרכז לריפוי תודעתי" 
            className="h-auto w-48 sm:w-64 md:w-80 lg:w-96 max-w-full mx-auto object-contain drop-shadow-2xl" 
          />
        </div>
        
        <div className="space-y-4 md:space-y-6 animate-fade-in">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient leading-tight px-4">
            ריפוי תודעתי, בגישה עדינה ומדויקת.
          </h1>
          
          <div className="flex items-center justify-center gap-2 md:gap-3 px-4">
            <Sparkles className="text-accent h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 animate-pulse flex-shrink-0" />
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient-accent">
              להשתחרר. להתחבר. להתרפא.
            </p>
            <Sparkles className="text-accent h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 animate-pulse flex-shrink-0" />
          </div>
        </div>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
          כל תהליך של שינוי וריפוי אמיתי מתחיל בתודעה.
          <br />
          כאן נוצר <span className="text-primary font-medium">מרחב רגוע ומכיל</span>, שבו ניתן לשחרר עומסים רגשיים ודפוסים מעכבים,
          <br className="hidden sm:block" />
          ולתמוך באיזון של הגוף והנפש בדרך נעימה, מכבדת ולא שיפוטית.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-6 animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            onClick={() => scrollToSection("questionnaire")}
            className="w-full sm:w-auto group relative bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 md:px-8 py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-2xl shadow-2xl hover:shadow-accent/20 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">בדקו אם התהליך מתאים לכם</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-4 sm:px-6 md:px-8 py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
          >
            שיחה בוואטסאפ
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent"></div>
    </section>
  );
};

export default HeroSection;
