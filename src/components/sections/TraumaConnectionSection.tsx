import { CircleDot, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useImageReveal } from "@/hooks/use-image-reveal";
import AccordionHowItWorks from "./AccordionHowItWorks";

const TraumaConnectionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ variant: "slide-right", threshold: 0.1 });
  const imageReveal = useImageReveal(200);
  
  return (
    <section ref={ref} id="trauma-connection" className="snap-section py-3 md:py-4 bg-background/10 relative overflow-hidden" dir="rtl">
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-10 w-2 h-32 bg-gradient-to-b from-accent to-transparent rounded-full"></div>
      <div className="absolute top-1/2 left-10 w-2 h-32 bg-gradient-to-b from-peach to-transparent rounded-full"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className={`text-center space-y-2 md:space-y-3 section-slide-right ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-peach/20 px-4 py-2 rounded-full">
            <Sparkles className="h-4 w-4 text-sage transition-all" />
            <span className="text-sage font-semibold text-sm">התהליך שלנו</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-shimmer leading-tight px-4 flex items-center justify-center font-varela">
            איך זה עובד
          </h2>
          
          <div className="h-0.5 w-24 bg-gradient-to-r from-sage via-primary to-sage mx-auto rounded-full"></div>
          
          <div className="space-y-3 pt-3 px-4 max-w-3xl mx-auto">
          <div className="text-sm md:text-base lg:text-lg text-foreground/80 font-light space-y-2">
            <p className="leading-[1.7] md:leading-[1.8]">
              בתהליך של ריפוי תודעתי אנחנו ניגשים למקום שבו נוצר הקושי – בתודעה, ברגש ובזיכרון.
            </p>
            <p className="leading-[1.7] md:leading-[1.8]">
              באמצעות הקשבה עמוקה ותהליך מודע, המטופל לומד לזהות את המקור, לשחרר אותו ולהרגיש שינוי אמיתי.
            </p>
          </div>
            
            {/* Desktop List */}
            <div className="hidden md:block bg-gradient-to-br from-muted/50 to-background p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50">
              <ul className={`grid grid-cols-2 gap-x-6 gap-y-2 md:gap-y-3 text-right grid-stagger ${isVisible ? 'visible' : ''}`}>
                <li className="flex items-start gap-2 group">
                  <CircleDot className="h-5 w-5 text-sage flex-shrink-0 mt-0.5 transition-all" />
                  <span className="text-sm md:text-base text-foreground/80 leading-relaxed">זיהוי דפוסים רגשיים ומחשבתיים חוזרים</span>
                </li>
                <li className="flex items-start gap-2 group">
                  <CircleDot className="h-5 w-5 text-sage flex-shrink-0 mt-0.5 transition-all" />
                  <span className="text-sm md:text-base text-foreground/80 leading-relaxed">עבודה עם תת־המודע לשחרור עומסים ואמונות מגבילות</span>
                </li>
                <li className="flex items-start gap-2 group">
                  <CircleDot className="h-5 w-5 text-sage flex-shrink-0 mt-0.5 transition-all" />
                  <span className="text-sm md:text-base text-foreground/80 leading-relaxed">איזון בין גוף, רגש ותודעה</span>
                </li>
                <li className="flex items-start gap-2 group">
                  <CircleDot className="h-5 w-5 text-sage flex-shrink-0 mt-0.5 transition-all" />
                  <span className="text-sm md:text-base text-foreground/80 leading-relaxed">תמיכה בצמיחה רגשית, זוגית ופיזית</span>
                </li>
                <li className="flex items-start gap-2 group col-span-2">
                  <CircleDot className="h-5 w-5 text-sage flex-shrink-0 mt-0.5 transition-all" />
                  <span className="text-sm md:text-base text-foreground/80 leading-relaxed">התאמה אישית של השיטה לפי הצורך</span>
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
