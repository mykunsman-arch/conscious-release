import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface IntroTextProps {
  showIntro: boolean;
  onContinue: () => void;
}

const IntroText = ({ showIntro, onContinue }: IntroTextProps) => {
  const [autoHideTimer, setAutoHideTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (showIntro) {
      // Auto-hide after 10 seconds
      const timer = setTimeout(() => {
        onContinue();
      }, 10000);
      setAutoHideTimer(timer);
      
      return () => {
        if (timer) clearTimeout(timer);
      };
    }
  }, [showIntro, onContinue]);

  if (!showIntro) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background backdrop-blur-sm" dir="rtl">
      <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-6 px-4 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-shimmer leading-tight font-varela">
            ריפוי תודעתי, בגישה עדינה ומדויקת.
          </h1>
          
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="text-sage h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gradient-accent">
              להשתחרר. להתחבר. להתרפא.
            </p>
            <Sparkles className="text-sage h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
          </div>
        </div>
        
        <div className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto space-y-4 pt-4">
          <p className="leading-[1.7] md:leading-[1.8]">
            כל תהליך של שינוי וריפוי אמיתי מתחיל בתודעה.
          </p>
          <p className="leading-[1.7] md:leading-[1.8]">
            כאן נוצר <span className="text-primary font-semibold">מרחב רגוע ומכיל</span>, שבו ניתן לשחרר עומסים רגשיים ודפוסים מעכבים, ולתמוך באיזון של הגוף והנפש בדרך נעימה, מכבדת ולא שיפוטית.
          </p>
        </div>

        <div className="pt-8">
          <Button
            size="lg"
            onClick={onContinue}
            className="group relative bg-primary hover:bg-primary/90 text-primary-foreground px-8 md:px-12 py-6 md:py-7 text-lg md:text-xl rounded-2xl shadow-2xl hover:shadow-sage/20 transition-all duration-300 overflow-hidden min-h-[56px] touch-manipulation active:scale-95"
          >
            <span className="relative z-10">להמשך</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </Button>
        </div>

        <p className="text-sm text-foreground/50 pt-4">
          ממשיך אוטומטית בעוד מספר שניות...
        </p>
      </div>
    </div>
  );
};

export default IntroText;
