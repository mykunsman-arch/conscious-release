import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import logo from "@/assets/logo-main.png";

interface CombinedIntroProps {
  showIntro: boolean;
  onContinue: () => void;
}

const CombinedIntro = ({ showIntro, onContinue }: CombinedIntroProps) => {
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (showIntro) {
      // Show text after 3 seconds
      const textTimer = setTimeout(() => {
        setShowText(true);
      }, 3000);

      // Start fade-out before auto-continue
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 12500);

      // Auto-continue after 13 seconds total
      const autoTimer = setTimeout(() => {
        onContinue();
      }, 13000);
      
      return () => {
        clearTimeout(textTimer);
        clearTimeout(fadeTimer);
        clearTimeout(autoTimer);
      };
    }
  }, [showIntro, onContinue]);

  const handleContinueClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      onContinue();
    }, 500);
  };

  if (!showIntro) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center bg-background backdrop-blur-sm px-4"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 700ms ease-in-out'
      }}
      dir="rtl"
    >
      <div className="flex flex-col items-center justify-center w-full max-w-4xl">
        {/* Logo - always visible, just fades in at start */}
        <div 
          className="mb-6 md:mb-8"
          style={{
            opacity: 1,
            transition: 'opacity 1000ms ease-in-out'
          }}
        >
          <img 
            src={logo} 
            alt="המרכז לריפוי תודעתי" 
            className="w-48 md:w-64 h-auto object-contain mx-auto"
          />
        </div>

        {/* Text - appears after 3 seconds */}
        <div 
          className="text-center space-y-4 md:space-y-6 w-full"
          style={{
            opacity: showText ? 1 : 0,
            transition: 'opacity 1000ms ease-in-out',
            pointerEvents: showText ? 'auto' : 'none'
          }}
        >
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-shimmer leading-tight font-varela px-4">
              ריפוי תודעתי, בגישה עדינה ומדויקת.
            </h1>
            
            <div className="flex items-center justify-center gap-2 md:gap-3 px-4">
              <Sparkles className="text-sage h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gradient-accent">
                להשתחרר. להתחבר. להתרפא.
              </p>
              <Sparkles className="text-sage h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
            </div>
          </div>
          
          <div className="text-sm sm:text-base md:text-lg text-foreground/80 max-w-3xl mx-auto space-y-3 px-4">
            <p className="leading-[1.6] md:leading-[1.7]">
              כל תהליך של שינוי וריפוי אמיתי מתחיל בתודעה.
            </p>
            <p className="leading-[1.6] md:leading-[1.7]">
              כאן נוצר <span className="text-primary font-semibold">מרחב רגוע ומכיל</span>, שבו ניתן לשחרר עומסים רגשיים ודפוסים מעכבים, ולתמוך באיזון של הגוף והנפש בדרך נעימה, מכבדת ולא שיפוטית.
            </p>
          </div>

          <div className="pt-4 md:pt-6">
            <Button
              size="lg"
              onClick={handleContinueClick}
              className="group relative bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-10 py-5 md:py-6 text-base md:text-lg rounded-2xl shadow-2xl hover:shadow-sage/20 transition-all duration-300 overflow-hidden min-h-[56px] touch-manipulation active:scale-95"
            >
              <span className="relative z-10">להמשך</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
          </div>

          <p className="text-xs md:text-sm text-foreground/50 pt-2">
            ממשיך אוטומטית בעוד מספר שניות...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CombinedIntro;
