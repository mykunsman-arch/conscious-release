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
    <section className="py-12 md:py-16 bg-background" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-12">
          {/* מהו ריפוי תודעתי */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-sage/10 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-sage" />
              <span className="text-sage font-semibold text-sm">מהו ריפוי תודעתי</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              שינוי מבפנים
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              תהליך עדין שעוזר לשחרר עומסים רגשיים, דפוסים מעכבים ומטענים מהעבר.
              <span className="block mt-2">עבודה עם התודעה והתת-מודע ליצירת איזון בין הגוף, הרגש והנפש.</span>
            </p>
          </div>

          {/* למי זה מתאים */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-sage/5 to-primary/5 p-8 rounded-3xl border border-sage/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">למי זה מתאים?</h3>
              <div className="grid grid-cols-2 gap-3">
                {suitableFor.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 className="h-5 w-5 text-sage flex-shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-peach/5 p-8 rounded-3xl border border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">למה כאן?</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-sage/10 p-2 rounded-lg">
                      <feature.icon className="h-5 w-5 text-sage" />
                    </div>
                    <span className="text-base md:text-lg text-foreground/80">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-4">
            <p className="text-lg text-foreground/70">רוצים לדעת עוד?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/questionnaire">
                <Button className="w-full sm:w-auto bg-sage hover:bg-sage/90 text-white px-8 py-6 text-lg rounded-xl">
                  שאלון התאמה
                </Button>
              </Link>
              <Link to="/faq">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-sage text-sage hover:bg-sage hover:text-white px-8 py-6 text-lg rounded-xl">
                  שאלות נפוצות
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
