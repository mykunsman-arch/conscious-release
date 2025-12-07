import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-main.png";
import { Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { useMagnetic } from "@/hooks/use-magnetic";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const heroText = "ריפוי תודעתי, בגישה עדינה ומדויקת.";
  const { displayedText } = useTypingEffect({ text: heroText, speed: 80, delay: 1800 });
  const magneticBtn1 = useMagnetic({ strength: 0.25, tolerance: 120 });
  const magneticBtn2 = useMagnetic({ strength: 0.25, tolerance: 120 });
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום%20הגעתי%20מהאתר%20mindcenter.co.il%20ורציתי%20לשמוע%20פרטים%20על%20התהליך", "_blank");
  };

  return (
    <section ref={ref} className="snap-section relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-4 pb-12 md:pt-6 md:pb-0" dir="rtl">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background opacity-0" style={{ animation: 'fade-in 1s ease-out 2s forwards' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-peach/10 via-transparent to-transparent"></div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl floating opacity-0" style={{ animation: 'fade-in 1s ease-out 2s forwards' }}></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-peach/5 rounded-full blur-3xl floating opacity-0" style={{ animation: 'fade-in 1s ease-out 2.5s forwards', animationDelay: '1s' }}></div>

      <div className="container mx-auto max-w-5xl text-center space-y-0 relative z-10">
        {/* Logo - fades in first */}
        <div id="hero" className="opacity-0 flex flex-col items-center" style={{ animation: 'fade-in 1.5s ease-out forwards' }}>
          <img 
            src={logo} 
            alt="המרכז לריפוי תודעתי" 
            className="h-auto w-48 sm:w-64 md:w-80 lg:w-96 max-w-full mx-auto object-contain drop-shadow-2xl" 
          />
          <span className="text-[0.5rem] sm:text-[0.55rem] md:text-[0.65rem] tracking-[0.35em] text-muted-foreground/50 font-light uppercase -mt-12 sm:-mt-14 md:-mt-16 lg:-mt-20">
            BY TAL ESTER KUNSMAN
          </span>
        </div>
        
        {/* Content - fades in after logo */}
        <div className="space-y-1 opacity-0" style={{ animation: 'fade-in 1s ease-out 1.8s forwards' }}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight px-4 flex items-center justify-center font-varela min-h-[1.2em]">
            {displayedText}
          </h1>
          
          <div className="flex items-center justify-center gap-2 md:gap-3 px-4">
            <Sparkles className="text-sage h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient-accent">
              להשתחרר. להתחבר. להתרפא.
            </p>
            <Sparkles className="text-sage h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
          </div>
        </div>
        
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto px-4 space-y-1 opacity-0" style={{ animation: 'fade-in 1s ease-out 2.3s forwards' }}>
          <p className="leading-[1.7] md:leading-relaxed">
            כל תהליך של שינוי וריפוי אמיתי מתחיל בתודעה.
          </p>
          <p className="leading-[1.7] md:leading-relaxed">
            כאן נוצר <span className="text-primary font-medium">מרחב רגוע ומכיל</span>, שבו ניתן לשחרר עומסים רגשיים ודפוסים מעכבים, ולתמוך באיזון של הגוף והנפש בדרך נעימה, מכבדת ולא שיפוטית.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-2 md:pt-3 px-4 opacity-0" style={{ animation: 'fade-in 1s ease-out 2.8s forwards' }}>
          <Button
            ref={magneticBtn1 as any}
            size="lg"
            onClick={() => scrollToSection("questionnaire")}
            className="w-full sm:w-auto group relative bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 md:px-10 py-6 md:py-8 text-base sm:text-lg md:text-xl rounded-2xl shadow-2xl hover:shadow-sage/20 transition-all duration-300 overflow-hidden min-h-[56px] touch-manipulation active:scale-95"
            style={{ transition: 'transform 0.2s ease-out' }}
          >
            <span className="relative z-10">בדקו אם התהליך מתאים לכם</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </Button>
          
          <Button
            ref={magneticBtn2 as any}
            size="lg"
            variant="outline"
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto border-2 border-sage text-sage hover:bg-sage hover:text-white px-6 sm:px-8 md:px-10 py-6 md:py-8 text-base sm:text-lg md:text-xl rounded-2xl shadow-lg hover:shadow-sage/30 transition-all duration-300 min-h-[56px] touch-manipulation active:scale-95"
            style={{ transition: 'transform 0.2s ease-out' }}
          >
            שיחה בוואטסאפ
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent opacity-0" style={{ animation: 'fade-in 1s ease-out 2s forwards' }}></div>
    </section>
  );
};

export default HeroSection;
