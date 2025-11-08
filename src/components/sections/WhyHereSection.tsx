import healingImage from "@/assets/healing-woman.jpg";
import { Heart, Shield, Users } from "lucide-react";

const WhyHereSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden" dir="rtl">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-peach/20 px-6 py-3 rounded-full">
              <Heart className="h-5 w-5 text-accent" />
              <span className="text-accent font-semibold">הייחודיות שלנו</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gradient leading-tight">
              למה דווקא כאן
            </h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-peach rounded-full"></div>
            
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed">
              המרכז לריפוי תודעתי שם במרכז את <span className="text-primary font-semibold">האדם, לא את השיטה</span>.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 hover:border-accent/30 transition-all hover:scale-105 shadow-lg">
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80">
                    כלים עדינים ומדויקים במרחב <span className="text-primary font-semibold">מכיל ולא שיפוטי</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-accent/10 to-peach/10 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all hover:scale-105 shadow-lg">
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80">
                    מפגשים בקליניקה או אונליין – <span className="text-accent font-semibold">בקצב שנכון לכם</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2 group">
            <img
              src={healingImage}
              alt="ריפוי תודעתי"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            
            {/* Decorative overlay */}
            <div className="absolute inset-0 border-2 md:border-4 border-accent/20 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHereSection;
