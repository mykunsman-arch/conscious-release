import { Heart, Sparkles, Users, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTilt } from "@/hooks/use-tilt";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ variant: "fade-up", threshold: 0.1 });
  const tilt = useTilt({ maxTilt: 5, scale: 1.02 });

  return (
    <section ref={ref} id="about" className="snap-section py-24 bg-background/20 relative overflow-hidden" dir="rtl">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-peach/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className={`text-center space-y-8 section-slide-up ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
            <Heart className="h-5 w-5 text-sage transition-all" />
            <span className="text-sage font-semibold">הכירו אותנו</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-shimmer leading-tight px-4 font-varela">
            טל אסתר קונסמן
          </h2>
          
          <p className="text-xl md:text-2xl text-sage font-medium">
            מנהלת המרכז לריפוי תודעתי
          </p>

          <div className="h-1 w-24 bg-gradient-to-r from-sage to-peach rounded-full mx-auto"></div>

          <div className={`space-y-8 pt-8 max-w-4xl mx-auto grid-stagger ${isVisible ? 'visible' : ''}`}>
            {/* Main Story Card */}
            <div
              ref={tilt.ref}
              onMouseMove={tilt.handleMouseMove}
              onMouseLeave={tilt.handleMouseLeave}
              style={tilt.tiltStyle}
              className="bg-gradient-to-br from-muted/50 to-background p-6 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50"
            >
              <div className="text-base md:text-lg lg:text-xl text-foreground/80 text-center font-light space-y-6">
                <p className="leading-[1.8] md:leading-[1.9]">
                  הדרך שלי לעולם הריפוי התודעתי התחילה כשהייתי צריכה עזרה עבור הילדים שלי.
                  <span className="block mt-3 md:mt-4">התוצאות שראיתי היו כל כך מדהימות, שהחלטתי ללמוד את התחום לעומק.</span>
                </p>

                <p className="leading-[1.8] md:leading-[1.9]">
                  למדתי מגוון שיטות טיפוליות, ובמרכזן <span className="text-primary font-semibold">שיטת שלושת המימדים</span> – 
                  <span className="block mt-3 md:mt-4">גישה ייחודית שמשלבת עבודה עם הגוף, הנפש והתודעה כמכלול אחד.</span>
                </p>

                <p className="leading-[1.8] md:leading-[1.9]">
                  היום אני מנהלת את המרכז לריפוי תודעתי, עם צוות מטפלות מיומנות,
                  <span className="block mt-3 md:mt-4">ואני מונעת מתוך רצון עמוק לעזור לאנשים להשתחרר מכאב ולחזור לחיים מלאים.</span>
                </p>
              </div>
            </div>

            {/* Specializations */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-accent/10 to-peach/10 p-6 rounded-2xl border border-accent/20 hover:border-accent/40 transition-colors shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-2 rounded-xl">
                    <Star className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">התמחויות</h3>
                </div>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-sage" />
                    <span>טיפול בילדים</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-sage" />
                    <span>חרדה ופחדים</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-sage" />
                    <span>טראומה ועומס רגשי</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-sage" />
                    <span>זוגיות ותקשורת</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-muted/50 to-background p-6 rounded-2xl border border-border/50 hover:border-accent/30 transition-colors shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent/10 p-2 rounded-xl">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">הגישה שלנו</h3>
                </div>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-sage" />
                    <span>יחס אישי וחם</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-sage" />
                    <span>דאגה אמיתית לכל מטופל</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-sage" />
                    <span>התאמה אישית של הטיפול</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-sage" />
                    <span>ליווי צמוד לאורך התהליך</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-sage/20 via-primary/10 to-sage/20 p-6 md:p-8 rounded-2xl border border-sage/30">
              <p className="text-lg md:text-xl text-center text-primary font-medium italic leading-relaxed">
                "כל אדם שמגיע אלינו מקבל את מלוא תשומת הלב והדאגה. 
                <span className="block mt-2">זה לא רק מקצוע – זו שליחות."</span>
              </p>
              <p className="text-center text-sage mt-4 font-semibold">— טל אסתר קונסמן</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
