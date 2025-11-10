import { Heart, Brain, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useImageReveal } from "@/hooks/use-image-reveal";
import { useTypingEffect } from "@/hooks/use-typing-effect";

const WhatIsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ variant: "fade-up", threshold: 0.1 });
  const imageReveal = useImageReveal(200);
  const typingText = useTypingEffect({ 
    text: "מהו ריפוי תודעתי",
    speed: 120,
    delay: 300
  });
  
  return (
    <section ref={ref} id="what-is" className="snap-section py-24 bg-background/20 relative overflow-hidden" dir="rtl">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-peach/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className={`text-center space-y-8 section-slide-up ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
            <Sparkles className="h-5 w-5 text-sage transition-all" />
            <span className="text-sage font-semibold">הבסיס שלנו</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-shimmer leading-tight px-4 min-h-[2em] flex items-center justify-center font-varela">
            {typingText.displayedText}
            {!typingText.isComplete && <span className="inline-block w-1 h-[0.8em] bg-sage mr-1 animate-pulse"></span>}
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-sage rounded-full"></div>
            <Heart className="h-6 w-6 text-sage transition-all cursor-pointer" />
            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-sage rounded-full"></div>
          </div>
          
          <div className={`space-y-8 pt-12 px-4 max-w-4xl mx-auto grid-stagger ${isVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-br from-muted/50 to-background p-6 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50">
              <div className="text-base md:text-lg lg:text-xl text-foreground/80 text-center font-light space-y-4 md:space-y-6">
                <p className="leading-[1.8] md:leading-[1.9]">
                  ריפוי תודעתי <span className="text-primary font-semibold">רואה את האדם כמכלול של גוף, נפש ותודעה</span>.
                  <span className="block mt-3 md:mt-4">חוויות, טראומות, דפוסים ואמונות שנצרבו בעבר עשויים להשפיע עלינו גם היום.</span>
                </p>
                
                <p className="leading-[1.8] md:leading-[1.9]">
                  באמצעות הקשבה עדינה, עבודה עם התודעה ותת־המודע,
                  <span className="block mt-3 md:mt-4">התהליך מסייע בשחרור מטענים רגשיים ואנרגטיים וביצירת תחושת הקלה, איזון וחיבור פנימי.</span>
                  <span className="block mt-3 md:mt-4">התהליך עשוי לשמש תהליך תומך ומשלים לריפוי ולצמיחה אישית.</span>
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
