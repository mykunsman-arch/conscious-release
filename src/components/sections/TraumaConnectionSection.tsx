import { CircleDot, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useImageReveal } from "@/hooks/use-image-reveal";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import AccordionHowItWorks from "./AccordionHowItWorks";

const TraumaConnectionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ variant: "slide-right", threshold: 0.1 });
  const imageReveal = useImageReveal(200);
  const typingText = useTypingEffect({ 
    text: "איך זה עובד",
    speed: 150,
    delay: 300
  });
  
  return (
    <section ref={ref} id="trauma-connection" className="snap-section py-24 bg-background/20 relative overflow-hidden" dir="rtl">
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-10 w-2 h-32 bg-gradient-to-b from-accent to-transparent rounded-full"></div>
      <div className="absolute top-1/2 left-10 w-2 h-32 bg-gradient-to-b from-peach to-transparent rounded-full"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className={`text-center space-y-10 section-slide-right ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-peach/20 px-6 py-3 rounded-full">
            <Sparkles className="h-5 w-5 text-sage transition-all" />
            <span className="text-sage font-semibold">התהליך שלנו</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-shimmer leading-tight px-4 min-h-[2em] flex items-center justify-center font-varela">
            {typingText.displayedText}
            {!typingText.isComplete && <span className="inline-block w-1 h-[0.8em] bg-sage mr-1 animate-pulse"></span>}
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-sage via-primary to-sage mx-auto rounded-full"></div>
          
          <div className="space-y-6 pt-8 px-4 max-w-3xl mx-auto">
          <div className="text-lg md:text-xl lg:text-2xl text-foreground/80 font-light space-y-3 md:space-y-4">
            <p className="leading-[1.8] md:leading-[1.9]">
              בתהליך של ריפוי תודעתי אנחנו ניגשים למקום שבו נוצר הקושי – בתודעה, ברגש ובזיכרון.
            </p>
            <p className="leading-[1.8] md:leading-[1.9]">
              באמצעות הקשבה עמוקה ותהליך מודע, המטופל לומד לזהות את המקור, לשחרר אותו ולהרגיש שינוי אמיתי.
            </p>
          </div>
            
            {/* Desktop List */}
            <div className="hidden md:block bg-gradient-to-br from-muted/50 to-background p-6 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50">
              <ul className={`space-y-4 text-right grid-stagger ${isVisible ? 'visible' : ''}`}>
                <li className="flex items-start gap-3 group">
                  <CircleDot className="h-6 w-6 text-sage flex-shrink-0 mt-1 transition-all" />
                  <span className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">זיהוי דפוסים רגשיים ומחשבתיים חוזרים</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <CircleDot className="h-6 w-6 text-sage flex-shrink-0 mt-1 transition-all" />
                  <span className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">עבודה עם תת־המודע לשחרור עומסים ואמונות מגבילות</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <CircleDot className="h-6 w-6 text-sage flex-shrink-0 mt-1 transition-all" />
                  <span className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">איזון בין גוף, רגש ותודעה</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <CircleDot className="h-6 w-6 text-sage flex-shrink-0 mt-1 transition-all" />
                  <span className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">תמיכה בצמיחה רגשית, זוגית ופיזית</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <CircleDot className="h-6 w-6 text-sage flex-shrink-0 mt-1 transition-all" />
                  <span className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">התאמה אישית של השיטה לפי הצורך</span>
                </li>
              </ul>
            </div>

            {/* Mobile Accordion */}
            <AccordionHowItWorks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraumaConnectionSection;
