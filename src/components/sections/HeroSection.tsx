import { Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTypingEffect } from "@/hooks/use-typing-effect";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const typingText = useTypingEffect({ 
    text: "ריפוי תודעתי, בגישה עדינה ומדויקת.",
    speed: 100,
    delay: 6200
  });

  return (
    <section ref={ref} className="snap-section relative min-h-[70vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden px-4 py-2 md:py-3" dir="rtl">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-peach/10 via-transparent to-transparent"></div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-peach/5 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto max-w-5xl text-center relative z-10 space-y-0.5 md:space-y-1">
        <div className="space-y-0 animate-fade-in" id="hero">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gradient-shimmer leading-tight px-4 flex items-center justify-center font-varela">
            {typingText.displayedText}
            {!typingText.isComplete && <span className="inline-block w-1 h-[0.8em] bg-sage ml-1 animate-pulse"></span>}
          </h1>
          
          <div className="flex items-center justify-center gap-2 px-4">
            <Sparkles className="text-sage h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 flex-shrink-0" />
            <p className="text-xl sm:text-2xl md:text-2xl font-semibold text-gradient-accent">
              להשתחרר. להתחבר. להתרפא.
            </p>
            <Sparkles className="text-sage h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 flex-shrink-0" />
          </div>
        </div>
        
        <div className="text-sm sm:text-base md:text-lg text-foreground/70 max-w-3xl mx-auto animate-fade-in px-4 space-y-0.5" style={{ animationDelay: '0.2s' }}>
          <p className="leading-[1.6] md:leading-relaxed">
            כל תהליך של שינוי וריפוי אמיתי מתחיל בתודעה.
          </p>
          <p className="leading-[1.6] md:leading-relaxed">
            כאן נוצר <span className="text-primary font-medium">מרחב רגוע ומכיל</span>, שבו ניתן לשחרר עומסים רגשיים ודפוסים מעכבים, ולתמוך באיזון של הגוף והנפש בדרך נעימה, מכבדת ולא שיפוטית.
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent"></div>
    </section>
  );
};

export default HeroSection;
