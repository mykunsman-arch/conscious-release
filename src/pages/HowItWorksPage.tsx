import { Heart, Brain, Sparkles, CheckCircle2 } from "lucide-react";
import CTAContactSection from "@/components/sections/CTAContactSection";

const HowItWorksPage = () => {
  const steps = [
    {
      title: "פגישת היכרות",
      description: "נתחיל בשיחה פתוחה ומכילה כדי להבין את המצב והצרכים שלך"
    },
    {
      title: "זיהוי המקור",
      description: "יחד נאתר את העומסים הרגשיים והדפוסים המעכבים"
    },
    {
      title: "תהליך השחרור",
      description: "עבודה עדינה עם התודעה לשחרור עומסים ויצירת שינוי"
    },
    {
      title: "אינטגרציה",
      description: "ליווי והטמעה של השינוי בחיי היומיום"
    }
  ];

  const benefits = [
    "שחרור מתחים וחרדות",
    "הקלה בכאבים פיזיים",
    "שיפור איכות השינה",
    "חיזוק הביטחון העצמי",
    "יצירת איזון רגשי",
    "שיפור קשרים בינאישיים"
  ];

  return (
    <div className="pt-20" dir="rtl">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 bg-sage/10 px-4 py-2 rounded-full">
            <Brain className="h-4 w-4 text-sage" />
            <span className="text-sage font-semibold text-sm">איך זה עובד</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            תהליך הריפוי התודעתי
          </h1>
          
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            ריפוי תודעתי הוא תהליך עדין ומכיל שעוזר לשחרר עומסים רגשיים ודפוסים מעכבים שנוצרו במהלך החיים. 
            דרך עבודה עם התודעה והתת-מודע, אנחנו יוצרים שינוי אמיתי ומתמשך.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground">
            שלבי התהליך
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-sage/5 to-primary/5 p-6 md:p-8 rounded-2xl border border-sage/20 relative"
              >
                <div className="absolute -top-3 -right-3 bg-sage text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-bold text-sm md:text-base">
                  {index + 1}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-peach/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 md:mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-sage/10 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-sage" />
              <span className="text-sage font-semibold text-sm">תוצאות</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              מה אפשר לצפות מהתהליך?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-sage/10"
              >
                <div className="bg-sage/10 p-2 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-sage" />
                </div>
                <span className="text-sm md:text-base text-foreground/80">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-gradient-to-br from-sage/5 to-primary/5 p-6 md:p-8 rounded-2xl border border-sage/20 space-y-4">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-sage" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">חשוב לדעת</h3>
            </div>
            
            <div className="space-y-3 text-sm md:text-base text-foreground/80 leading-relaxed">
              <p>
                התהליך מותאם באופן אישי לכל אדם ולצרכים שלו. אין שני טיפולים זהים, כי כל אדם הוא עולם ומלואו.
              </p>
              <p>
                משך הטיפול משתנה בהתאם למטופל - יש מי שחש שינוי משמעותי כבר אחרי פגישה אחת, 
                ויש מי שצריך מספר פגישות כדי להגיע לשינוי המיוחל.
              </p>
              <p>
                הטיפול מתאים לילדים, מתבגרים ומבוגרים. ניתן להגיע לקליניקה או לקיים את הפגישות בזום.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAContactSection />
    </div>
  );
};

export default HowItWorksPage;
