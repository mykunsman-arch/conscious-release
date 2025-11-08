import { Heart, Shield, Users, Sparkles } from "lucide-react";
import healingHandsImage from "@/assets/healing-hands.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";
import { useTilt } from "@/hooks/use-tilt";
import { useImageReveal } from "@/hooks/use-image-reveal";
import AccordionWhyHere from "./AccordionWhyHere";

const WhyHereSection = () => {
  const { ref, isVisible } = useScrollAnimation({ variant: "diagonal", threshold: 0.1 });
  const parallaxOffset = useParallax(0.3);
  const imageReveal = useImageReveal(200);
  const tilt1 = useTilt({ maxTilt: 8, scale: 1.03 });
  const tilt2 = useTilt({ maxTilt: 8, scale: 1.03 });
  const tilt3 = useTilt({ maxTilt: 8, scale: 1.03 });
  const tilt4 = useTilt({ maxTilt: 8, scale: 1.03 });
  const tilt5 = useTilt({ maxTilt: 8, scale: 1.03 });
  const tilt6 = useTilt({ maxTilt: 8, scale: 1.03 });
  const tilt7 = useTilt({ maxTilt: 8, scale: 1.03 });
  
  return (
    <section ref={ref} className="snap-section py-24 bg-card relative overflow-hidden" dir="rtl">
      {/* Background image with parallax and reveal */}
      <div 
        ref={imageReveal.ref}
        className="absolute inset-0 image-reveal-wrapper"
      >
        <div 
          className={`absolute inset-0 opacity-[0.06] md:opacity-[0.06] bg-contain md:bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out image-reveal ${imageReveal.isRevealed ? 'revealed' : ''}`}
          style={{ 
            backgroundImage: `url(${healingHandsImage})`,
            transform: `translateY(${parallaxOffset}px)`
          }}
        ></div>
        <div className={`image-reveal-mask ${imageReveal.isRevealed ? 'revealed' : ''}`}></div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-8 section-diagonal ${isVisible ? 'visible' : ''}`}>
            <div className="inline-flex items-center gap-2 bg-peach/20 px-6 py-3 rounded-full">
              <Heart className="h-5 w-5 text-sage transition-all" />
              <span className="text-sage font-semibold">הייחודיות שלנו</span>
            </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-shimmer leading-tight font-varela">
            למה לבחור במרכז לריפוי תודעתי
          </h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-sage to-peach rounded-full"></div>

            {/* Desktop List */}
            <div className={`hidden md:block space-y-4 md:space-y-6 grid-stagger ${isVisible ? 'visible' : ''}`}>
              <div 
                ref={tilt1.ref}
                onMouseMove={tilt1.handleMouseMove}
                onMouseLeave={tilt1.handleMouseLeave}
                style={tilt1.tiltStyle}
                className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 hover:border-accent/30 transition-colors shadow-lg group"
              >
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:scale-110 group-hover:animate-pulse transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80 font-semibold">
                    גישה רכה, רגישה ומכילה
                  </p>
                </div>
              </div>

              <div 
                ref={tilt2.ref}
                onMouseMove={tilt2.handleMouseMove}
                onMouseLeave={tilt2.handleMouseLeave}
                style={tilt2.tiltStyle}
                className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-accent/10 to-peach/10 rounded-2xl border border-accent/20 hover:border-accent/40 transition-colors shadow-lg group"
              >
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:scale-110 transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80 font-semibold">
                    שילוב של עבודה תודעתית, רגשית ופיזית
                  </p>
                </div>
              </div>

              <div 
                ref={tilt3.ref}
                onMouseMove={tilt3.handleMouseMove}
                onMouseLeave={tilt3.handleMouseLeave}
                style={tilt3.tiltStyle}
                className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 hover:border-accent/30 transition-colors shadow-lg group"
              >
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:scale-110 transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80 font-semibold">
                    טיפול מותאם אישית – בקליניקה או בזום
                  </p>
                </div>
              </div>

              <div 
                ref={tilt4.ref}
                onMouseMove={tilt4.handleMouseMove}
                onMouseLeave={tilt4.handleMouseLeave}
                style={tilt4.tiltStyle}
                className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-accent/10 to-peach/10 rounded-2xl border border-accent/20 hover:border-accent/40 transition-colors shadow-lg group"
              >
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:scale-110 group-hover:rotate-12 transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80 font-semibold">
                    תוצאות עמוקות ומחזיקות לאורך זמן
                  </p>
                </div>
              </div>

              <div 
                ref={tilt5.ref}
                onMouseMove={tilt5.handleMouseMove}
                onMouseLeave={tilt5.handleMouseLeave}
                style={tilt5.tiltStyle}
                className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 hover:border-accent/30 transition-colors shadow-lg group"
              >
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:scale-110 transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80 font-semibold">
                    דיסקרטיות מלאה ואמון מלא בתהליך
                  </p>
                </div>
              </div>

              <div 
                ref={tilt6.ref}
                onMouseMove={tilt6.handleMouseMove}
                onMouseLeave={tilt6.handleMouseLeave}
                style={tilt6.tiltStyle}
                className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-accent/10 to-peach/10 rounded-2xl border border-accent/20 hover:border-accent/40 transition-colors shadow-lg group"
              >
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:scale-110 group-hover:animate-pulse transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80 font-semibold">
                    🕊️ מומלץ על־ידי אנשי מקצוע מתחום הנפש והבריאות
                  </p>
                </div>
              </div>

              <div 
                ref={tilt7.ref}
                onMouseMove={tilt7.handleMouseMove}
                onMouseLeave={tilt7.handleMouseLeave}
                style={tilt7.tiltStyle}
                className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 hover:border-accent/30 transition-colors shadow-lg group"
              >
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:scale-110 group-hover:rotate-12 transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80 font-semibold">
                    ברכות והמלצות התקבלו מרבנים ויועצים רוחניים
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
