import { Heart, Shield, Users, Sparkles } from "lucide-react";
import healingHandsImage from "@/assets/healing-hands.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const WhyHereSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxOffset = useParallax(0.3);
  
  return (
    <section ref={ref} className="snap-section py-24 bg-card relative overflow-hidden" dir="rtl">
      {/* Background image with parallax */}
      <div 
        className="absolute inset-0 opacity-[0.06] md:opacity-[0.06] bg-contain md:bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
        style={{ 
          backgroundImage: `url(${healingHandsImage})`,
          transform: `translateY(${parallaxOffset}px)`
        }}
      ></div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`space-y-8 scroll-fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="inline-flex items-center gap-2 bg-peach/20 px-6 py-3 rounded-full">
              <Heart className="h-5 w-5 text-accent animate-pulse hover:scale-125 hover:rotate-12 transition-all" />
              <span className="text-accent font-semibold">הייחודיות שלנו</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient leading-tight">
              למה לבחור במרכז לריפוי תודעתי
            </h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-peach rounded-full"></div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 hover:border-accent/30 transition-all hover:scale-105 shadow-lg group">
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:scale-110 group-hover:animate-pulse transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80 font-semibold">
                    גישה רכה, רגישה ומכילה
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-accent/10 to-peach/10 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all hover:scale-105 shadow-lg group">
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:scale-110 transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80 font-semibold">
                    שילוב של עבודה תודעתית, רגשית ופיזית
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 hover:border-accent/30 transition-all hover:scale-105 shadow-lg group">
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:scale-110 transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80 font-semibold">
                    טיפול מותאם אישית – בקליניקה או בזום
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-accent/10 to-peach/10 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all hover:scale-105 shadow-lg group">
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:scale-110 group-hover:rotate-12 transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80 font-semibold">
                    תוצאות עמוקות ומחזיקות לאורך זמן
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 hover:border-accent/30 transition-all hover:scale-105 shadow-lg group">
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:scale-110 transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80 font-semibold">
                    דיסקרטיות מלאה ואמון מלא בתהליך
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-accent/10 to-peach/10 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all hover:scale-105 shadow-lg group">
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0 group-hover:bg-accent/20 transition-all">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-accent group-hover:scale-110 group-hover:animate-pulse transition-all" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80 font-semibold">
                    🕊️ מומלץ על־ידי אנשי מקצוע מתחום הנפש והבריאות
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 hover:border-accent/30 transition-all hover:scale-105 shadow-lg group">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHereSection;
