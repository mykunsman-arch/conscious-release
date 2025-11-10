import { Heart, Shield, Users, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTilt } from "@/hooks/use-tilt";
import AccordionWhyHere from "./AccordionWhyHere";

const WhyHereSection = () => {
  const { ref, isVisible } = useScrollAnimation({ variant: "diagonal", threshold: 0.1 });
  const tilt1 = useTilt({ maxTilt: 8, scale: 1.03 });
  const tilt2 = useTilt({ maxTilt: 8, scale: 1.03 });
  const tilt3 = useTilt({ maxTilt: 8, scale: 1.03 });
  const tilt4 = useTilt({ maxTilt: 8, scale: 1.03 });
  const tilt5 = useTilt({ maxTilt: 8, scale: 1.03 });
  const tilt6 = useTilt({ maxTilt: 8, scale: 1.03 });
  
  return (
    <section ref={ref} id="why-here" className="snap-section py-4 md:py-6 bg-background/10 relative overflow-hidden" dir="rtl">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-4 section-diagonal ${isVisible ? 'visible' : ''}`}>
            <div className="inline-flex items-center gap-2 bg-peach/20 px-4 py-2 rounded-full">
              <Heart className="h-4 w-4 text-sage transition-all" />
              <span className="text-sage font-semibold text-sm">הייחודיות שלנו</span>
            </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-shimmer leading-tight font-varela">
            למה לבחור במרכז לריפוי תודעתי
          </h2>
            
            <div className="h-0.5 w-20 bg-gradient-to-r from-sage to-peach rounded-full"></div>

            {/* Desktop Grid */}
            <div className={`hidden md:grid md:grid-cols-2 gap-3 grid-stagger ${isVisible ? 'visible' : ''}`}>
              <div 
                ref={tilt1.ref}
                onMouseMove={tilt1.handleMouseMove}
                onMouseLeave={tilt1.handleMouseLeave}
                style={tilt1.tiltStyle}
                className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-gradient-to-br from-muted/50 to-background rounded-xl border border-border/50 hover:border-accent/30 transition-colors shadow-lg group"
              >
                <div className="bg-accent/10 p-1.5 md:p-2 rounded-lg flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Heart className="h-4 w-4 md:h-5 md:w-5 text-accent group-hover:scale-110 group-hover:animate-pulse transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-sm md:text-base text-foreground/80 font-semibold">
                    גישה רכה, רגישה ומכילה
                  </p>
                </div>
              </div>

              <div 
                ref={tilt2.ref}
                onMouseMove={tilt2.handleMouseMove}
                onMouseLeave={tilt2.handleMouseLeave}
                style={tilt2.tiltStyle}
                className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-gradient-to-br from-accent/10 to-peach/10 rounded-xl border border-accent/20 hover:border-accent/40 transition-colors shadow-lg group"
              >
                <div className="bg-accent/10 p-1.5 md:p-2 rounded-lg flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Shield className="h-4 w-4 md:h-5 md:w-5 text-accent group-hover:scale-110 transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-sm md:text-base text-foreground/80 font-semibold">
                    שילוב של עבודה תודעתית, רגשית ופיזית
                  </p>
                </div>
              </div>

              <div 
                ref={tilt3.ref}
                onMouseMove={tilt3.handleMouseMove}
                onMouseLeave={tilt3.handleMouseLeave}
                style={tilt3.tiltStyle}
                className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-gradient-to-br from-muted/50 to-background rounded-xl border border-border/50 hover:border-accent/30 transition-colors shadow-lg group"
              >
                <div className="bg-accent/10 p-1.5 md:p-2 rounded-lg flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Users className="h-4 w-4 md:h-5 md:w-5 text-accent group-hover:scale-110 transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-sm md:text-base text-foreground/80 font-semibold">
                    טיפול מותאם אישית – בקליניקה או בזום
                  </p>
                </div>
              </div>

              <div 
                ref={tilt4.ref}
                onMouseMove={tilt4.handleMouseMove}
                onMouseLeave={tilt4.handleMouseLeave}
                style={tilt4.tiltStyle}
                className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-gradient-to-br from-accent/10 to-peach/10 rounded-xl border border-accent/20 hover:border-accent/40 transition-colors shadow-lg group"
              >
                <div className="bg-accent/10 p-1.5 md:p-2 rounded-lg flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-accent group-hover:scale-110 group-hover:rotate-12 transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-sm md:text-base text-foreground/80 font-semibold">
                    תוצאות עמוקות ומחזיקות לאורך זמן
                  </p>
                </div>
              </div>

              <div 
                ref={tilt5.ref}
                onMouseMove={tilt5.handleMouseMove}
                onMouseLeave={tilt5.handleMouseLeave}
                style={tilt5.tiltStyle}
                className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-gradient-to-br from-muted/50 to-background rounded-xl border border-border/50 hover:border-accent/30 transition-colors shadow-lg group"
              >
                <div className="bg-accent/10 p-1.5 md:p-2 rounded-lg flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Shield className="h-4 w-4 md:h-5 md:w-5 text-accent group-hover:scale-110 transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-sm md:text-base text-foreground/80 font-semibold">
                    דיסקרטיות מלאה ואמון מלא בתהליך
                  </p>
                </div>
              </div>

              <div 
                ref={tilt6.ref}
                onMouseMove={tilt6.handleMouseMove}
                onMouseLeave={tilt6.handleMouseLeave}
                style={tilt6.tiltStyle}
                className="flex items-start gap-2 md:gap-3 p-3 md:p-4 bg-gradient-to-br from-accent/10 to-peach/10 rounded-xl border border-accent/20 hover:border-accent/40 transition-colors shadow-lg group"
              >
                <div className="bg-accent/10 p-1.5 md:p-2 rounded-lg flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Heart className="h-4 w-4 md:h-5 md:w-5 text-accent group-hover:scale-110 group-hover:animate-pulse transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-sm md:text-base text-foreground/80 font-semibold">
                    מומלץ על־ידי רבנים ואנשי מקצוע
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Accordion */}
            <AccordionWhyHere />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHereSection;
