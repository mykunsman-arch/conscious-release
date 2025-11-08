import { Heart, Shield, Users, Sparkles } from "lucide-react";

const WhyHereSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden" dir="rtl">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-peach/20 px-6 py-3 rounded-full">
              <Heart className="h-5 w-5 text-accent" />
              <span className="text-accent font-semibold">הייחודיות שלנו</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gradient leading-tight">
              למה לבחור במרכז לריפוי תודעתי
            </h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-peach rounded-full"></div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 hover:border-accent/30 transition-all hover:scale-105 shadow-lg">
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80">
                    <span className="text-primary font-semibold">גישה רכה, רגישה ומכילה</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-accent/10 to-peach/10 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all hover:scale-105 shadow-lg">
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80">
                    <span className="text-primary font-semibold">שילוב של עבודה תודעתית, רגשית ופיזית</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 hover:border-accent/30 transition-all hover:scale-105 shadow-lg">
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80">
                    <span className="text-accent font-semibold">טיפול מותאם אישית – בקליניקה או בזום</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-accent/10 to-peach/10 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all hover:scale-105 shadow-lg">
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0">
                  <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80">
                    <span className="text-primary font-semibold">תוצאות עמוקות ומחזיקות לאורך זמן</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 hover:border-accent/30 transition-all hover:scale-105 shadow-lg">
                <div className="bg-accent/10 p-2 md:p-3 rounded-xl flex-shrink-0">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div className="flex-1 text-right">
                  <p className="text-base md:text-lg text-foreground/80">
                    <span className="text-accent font-semibold">דיסקרטיות מלאה ואמון מלא בתהליך</span>
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
