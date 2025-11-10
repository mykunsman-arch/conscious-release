import { Heart, Sparkles, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const QuickInfoSection = () => {
  const features = [
    { icon: Heart, text: "גישה עדינה ומכילה" },
    { icon: Sparkles, text: "תוצאות משמעותיות" },
    { icon: Users, text: "בקליניקה או בזום" },
    { icon: CheckCircle2, text: "מותאם אישית" }
  ];

  const suitableFor = [
    "חרדות ומתחים",
    "כאבים פיזיים",
    "קשיי שינה",
    "בעיות זוגיות",
    "טיקים והרטבה בילדים",
    "תחושת תקיעות"
  ];

  return (
    <section className="py-6 md:py-10 bg-background" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-6 md:space-y-8">
          {/* מהו ריפוי תודעתי */}
          <div className="text-center space-y-3 md:space-y-4">
            <div className="inline-flex items-center gap-2 bg-sage/10 px-3 py-1.5 rounded-full">
              <Sparkles className="h-3.5 w-3.5 text-sage" />
              <span className="text-sage font-semibold text-xs md:text-sm">מהו ריפוי תודעתי</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              שינוי מבפנים
            </h2>
            
            <p className="text-sm md:text-base text-foreground/80 max-w-2xl mx-auto leading-snug">
              תהליך עדין שעוזר לשחרר עומסים רגשיים ודפוסים מעכבים.
              <span className="hidden md:inline"> עבודה עם התודעה והתת-מודע ליצירת איזון.</span>
            </p>
          </div>

          {/* למי זה מתאים */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-sage/5 to-primary/5 p-4 md:p-6 rounded-2xl border border-sage/20">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground">למי זה מתאים?</h3>
              <div className="grid grid-cols-2 gap-2">
                {suitableFor.map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5 text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-sage flex-shrink-0" />
                    <span className="text-xs md:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-peach/5 p-4 md:p-6 rounded-2xl border border-primary/20">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground">למה כאן?</h3>
              <div className="space-y-2.5 md:space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-sage/10 p-1.5 rounded-lg">
                      <feature.icon className="h-4 w-4 text-sage" />
                    </div>
                    <span className="text-sm md:text-base text-foreground/80">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-2 md:space-y-3">
            <p className="text-sm md:text-base text-foreground/70">רוצים לדעת עוד?</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link to="/how-it-works" className="w-full sm:w-auto">
                <Button className="w-full bg-sage hover:bg-sage/90 text-white px-6 py-4 md:py-5 text-sm md:text-base rounded-xl">
                  איך זה עובד
                </Button>
              </Link>
              <Link to="/questionnaire" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full border-2 border-sage text-sage hover:bg-sage hover:text-white px-6 py-4 md:py-5 text-sm md:text-base rounded-xl">
                  שאלון התאמה
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInfoSection;
