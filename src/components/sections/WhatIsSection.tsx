import { Heart, Brain, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useImageReveal } from "@/hooks/use-image-reveal";

const WhatIsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ variant: "fade-up", threshold: 0.1 });
  const imageReveal = useImageReveal(200);
  
  return (
    <section ref={ref} className="snap-section py-3 md:py-4 bg-gradient-to-b from-background/30 to-background/10 relative overflow-hidden pt-20" dir="rtl">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-peach/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className={`text-center space-y-2 md:space-y-3 section-slide-up ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
            <Sparkles className="h-4 w-4 text-sage transition-all" />
            <span className="text-sage font-semibold text-sm">הבסיס שלנו</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-shimmer leading-tight px-4 flex items-center justify-center font-varela">
            מהו ריפוי תודעתי
          </h2>
          
          <div className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-sage rounded-full"></div>
            <Heart className="h-5 w-5 text-sage transition-all cursor-pointer" />
            <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-sage rounded-full"></div>
          </div>
          
          <div className={`space-y-3 pt-3 px-4 max-w-4xl mx-auto grid-stagger ${isVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-br from-muted/50 to-background p-5 md:p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50">
              <div className="text-sm md:text-base lg:text-lg text-foreground/80 text-center font-light space-y-2 md:space-y-3">
                <p className="leading-[1.7] md:leading-[1.8]">
                  ריפוי תודעתי <span className="text-primary font-semibold">רואה את האדם כמכלול של גוף, נפש ותודעה</span>.
                  <span className="block mt-2">חוויות, טראומות, דפוסים ואמונות שנצרבו בעבר עשויים להשפיע עלינו גם היום.</span>
                </p>
                
                <p className="leading-[1.7] md:leading-[1.8]">
                  באמצעות הקשבה עדינה, עבודה עם התודעה ותת־המודע,
                  <span className="block mt-2">התהליך מסייע בשחרור מטענים רגשיים ואנרגטיים וביצירת תחושת הקלה, איזון וחיבור פנימי.</span>
                  <span className="block mt-2">התהליך עשוי לשמש תהליך תומך ומשלים לריפוי ולצמיחה אישית.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
