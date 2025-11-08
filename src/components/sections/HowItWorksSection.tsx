import { Check, Flower2 } from "lucide-react";
import healingHandsImage from "@/assets/healing-hands.jpg";

const HowItWorksSection = () => {
  const challenges = [
    { text: "חרדות, חוסר שקט ופחדים", icon: "😰" },
    { text: "כאבים פיזיים, מתח כרוני או עייפות", icon: "🩹" },
    { text: "קשיים בזוגיות ותקשורת בין־אישית", icon: "💔" },
    { text: "חוסר איזון הורמונלי, קשיי שינה או עייפות מתמשכת", icon: "😴" },
    { text: "תופעות כמו טיקים, הרטבה, או קשיים רגשיים אצל ילדים", icon: "👶" },
    { text: "תחושת תקיעות, בלבול או חוסר חיבור פנימי", icon: "🌀" },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-card relative overflow-hidden" dir="rtl">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-[0.06] md:opacity-[0.06] bg-contain md:bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${healingHandsImage})` }}
      ></div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center space-y-10">
          <div className="inline-flex items-center gap-2 bg-peach/20 px-6 py-3 rounded-full">
            <Flower2 className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold">התהליך שלנו</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gradient leading-tight px-4">
            למי זה עשוי להתאים
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-accent via-peach to-accent mx-auto rounded-full"></div>
          
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto px-4">
            התהליך מתאים למבוגרים, נוער וילדים,
            <br />
            ומסייע בהתמודדות עם אתגרים רגשיים, מנטליים ופיזיים כמו:
          </p>
          
          <div className="pt-8 px-4 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-muted/50 to-background p-6 md:p-8 rounded-3xl shadow-lg border border-border/50 mb-8">
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed text-center">
                אין כאן התחייבות לריפוי מוחלט. התהליך נועד לתמוך באיזון, שקט ושיפור איכות החיים.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-muted/50 to-background p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-accent/30 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-gradient-to-br from-accent to-peach text-white w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform">
                  {challenge.icon}
                </div>
                
                <div className="flex items-start gap-3 md:gap-4 pt-2">
                  <div className="flex-shrink-0 bg-accent/10 text-accent rounded-full p-2 md:p-3 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Check className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <p className="text-base md:text-lg text-foreground/80 text-right flex-1 leading-relaxed group-hover:text-foreground transition-colors">
                    {challenge.text}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-peach/0 group-hover:from-accent/5 group-hover:to-peach/5 rounded-3xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
