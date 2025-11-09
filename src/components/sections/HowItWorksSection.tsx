import { Check, Flower2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTilt } from "@/hooks/use-tilt";
import { useTypingEffect } from "@/hooks/use-typing-effect";

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation({ variant: "slide-left", threshold: 0.1 });
  const typingText = useTypingEffect({
    text: "למי זה עשוי להתאים",
    speed: 120,
    delay: 300
  });
  
  const challenges = [
    { text: "חרדות, חוסר שקט ופחדים" },
    { text: "כאבים פיזיים, מתח כרוני או עייפות" },
    { text: "קשיים בזוגיות ותקשורת בין־אישית" },
    { text: "חוסר איזון הורמונלי, קשיי שינה או עייפות מתמשכת" },
    { text: "תופעות כמו טיקים, הרטבה, או קשיים רגשיים אצל ילדים" },
    { text: "תחושת תקיעות, בלבול או חוסר חיבור פנימי" },
  ];

  return (
    <section ref={ref} id="how-it-works" className="snap-section py-24 bg-background/20 relative overflow-hidden" dir="rtl">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className={`text-center space-y-10 section-slide-left ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-peach/20 px-6 py-3 rounded-full">
            <Flower2 className="h-5 w-5 text-sage transition-all" />
            <span className="text-sage font-semibold">התהליך שלנו</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-shimmer leading-tight px-4 min-h-[2em] flex items-center justify-center font-varela">
            {typingText.displayedText}
            {!typingText.isComplete && <span className="inline-block w-1 h-[0.8em] bg-sage mr-1 animate-pulse"></span>}
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-sage via-primary to-sage mx-auto rounded-full"></div>
          
          <div className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto px-4 font-light space-y-2 md:space-y-3">
            <p className="leading-[1.8] md:leading-[1.9]">
              התהליך מתאים למבוגרים, נוער וילדים,
            </p>
            <p className="leading-[1.8] md:leading-[1.9]">
              ומסייע בהתמודדות עם אתגרים רגשיים, מנטליים ופיזיים כמו:
            </p>
          </div>
          
          <div className={`grid md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4 grid-stagger ${isVisible ? 'visible' : ''}`}>
            {challenges.map((challenge, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const tilt = useTilt({ maxTilt: 10, scale: 1.05 });
              return (
              <div
                key={index}
                ref={tilt.ref}
                onMouseMove={tilt.handleMouseMove}
                onMouseLeave={tilt.handleMouseLeave}
                style={tilt.tiltStyle}
                className="group relative bg-gradient-to-br from-muted/50 to-background p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-border/50 hover:border-sage/30"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 bg-sage/10 text-sage rounded-full p-2 md:p-3 group-hover:bg-sage group-hover:text-white transition-all">
                    <Check className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-base md:text-lg text-foreground/80 text-right flex-1 leading-relaxed group-hover:text-foreground transition-colors">
                    {challenge.text}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-sage/0 to-primary/0 group-hover:from-sage/5 group-hover:to-primary/5 rounded-3xl transition-all duration-300 pointer-events-none"></div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
