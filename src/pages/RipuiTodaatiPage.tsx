import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Heart, Brain, Sparkles, Shield, ArrowLeft, CheckCircle, Zap, Flower2, Sun, Moon, Star } from "lucide-react";

const RipuiTodaatiPage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: whatRef, isVisible: whatVisible } = useScrollAnimation();
  const { ref: howRef, isVisible: howVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום%20הגעתי%20מעמוד%20ריפוי%20תודעתי%20ורציתי%20לשמוע%20פרטים", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>ריפוי תודעתי - המדריך המלא | המרכז לריפוי תודעתי</title>
        <meta name="description" content="מדריך מקיף לריפוי תודעתי: מהו, איך עובד, למי מתאים ומה היתרונות. גלו כיצד ריפוי תודעתי משחרר חרדות, טראומות ודפוסים רגשיים בזמן קצר." />
        <meta name="keywords" content="ריפוי תודעתי, מהו ריפוי תודעתי, טיפול תודעתי, שחרור רגשי, טיפול בתת מודע, ריפוי טראומה" />
        <link rel="canonical" href="https://www.mindcenter.co.il/ripui-todaati" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background" dir="rtl">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className={`relative pt-32 pb-20 px-4 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-sage/5 via-transparent to-transparent" />
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-sage/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-sage" />
              <span className="text-sm text-sage font-medium">המדריך המלא</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              ריפוי תודעתי
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed">
              מסע פנימי לשחרור, ריפוי והתחדשות
            </p>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              ריפוי תודעתי הוא גישה טיפולית מתקדמת שמאפשרת לשחרר דפוסים רגשיים עמוקים, 
              להתגבר על חסמים ולחוות שינוי אמיתי ומתמשך בחיים.
            </p>
          </div>
        </section>

        {/* What is Section */}
        <section 
          ref={whatRef}
          className={`py-16 px-4 transition-all duration-700 delay-100 ${whatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  מהו ריפוי תודעתי?
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    <strong className="text-primary">ריפוי תודעתי</strong> הוא תהליך טיפולי עמוק שמתמקד בשחרור 
                    שכבות רגשיות שהצטברו במהלך החיים. בניגוד לשיטות טיפול קונבנציונליות שעובדות 
                    בעיקר על המודע, ריפוי תודעתי פועל ישירות על התת-מודע ושדה האנרגיה של הגוף.
                  </p>
                  <p>
                    כל חוויה רגשית שלא עובדה במלואה נשמרת בגוף ובתודעה. עם השנים, שכבות אלו 
                    יוצרות דפוסי התנהגות, אמונות מגבילות ותגובות אוטומטיות שמשפיעות על איכות 
                    החיים, מערכות היחסים והתחושה הכללית.
                  </p>
                  <p>
                    בתהליך הריפוי התודעתי, אנו מאתרים את השורש האמיתי של הקושי - לא רק את 
                    הסימפטום - ומשחררים אותו בצורה עדינה ויסודית. התוצאה היא שינוי עמוק ומתמשך 
                    שמורגש בכל תחומי החיים.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-sage/10 to-sage/5 border-sage/20">
                  <CardContent className="p-6 text-center">
                    <Brain className="w-10 h-10 text-sage mx-auto mb-3" />
                    <h3 className="font-semibold text-primary mb-2">עבודה עם התת-מודע</h3>
                    <p className="text-sm text-foreground/70">גישה ישירה לשורש הבעיה</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                  <CardContent className="p-6 text-center">
                    <Heart className="w-10 h-10 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-primary mb-2">שחרור רגשי</h3>
                    <p className="text-sm text-foreground/70">פריקת עומסים רגשיים</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-peach/20 to-peach/10 border-peach/30">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-10 h-10 text-peach-foreground mx-auto mb-3" />
                    <h3 className="font-semibold text-primary mb-2">תהליך עדין</h3>
                    <p className="text-sm text-foreground/70">ללא פולשנות או כאב</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20">
                  <CardContent className="p-6 text-center">
                    <Zap className="w-10 h-10 text-gold-foreground mx-auto mb-3" />
                    <h3 className="font-semibold text-primary mb-2">תוצאות מהירות</h3>
                    <p className="text-sm text-foreground/70">שינוי מורגש תוך מפגשים בודדים</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section 
          ref={howRef}
          className={`py-16 px-4 bg-muted/30 transition-all duration-700 delay-200 ${howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              איך עובד ריפוי תודעתי?
            </h2>
            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
              התהליך מבוסס על עקרונות מדעיים של נוירופלסטיות, אפיגנטיקה ופיזיקה קוונטית
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sage font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">איתור השורש</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    בתחילת כל טיפול, מאתרים את האירוע או החוויה המקורית שיצרה את הדפוס הרגשי. 
                    זה יכול להיות אירוע מגיל צעיר, מההיריון, או אפילו מדורות קודמים. האיתור 
                    נעשה באמצעות טכניקות ייחודיות שמאפשרות לתת-מודע "לספר" היכן מוחזק הקושי.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">שחרור והתרה</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    לאחר איתור השורש, מתבצע תהליך שחרור עדין ומדויק. אין צורך להיזכר בפרטי האירוע 
                    או לחוות מחדש את הכאב. השחרור מתרחש ברמה אנרגטית ותודעתית, והמטופל מרגיש 
                    הקלה משמעותית לעתים כבר במהלך הטיפול עצמו.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-peach/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-peach-foreground font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">חיזוק ואיזון</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    לאחר השחרור, מחזקים את המשאבים הפנימיים ויוצרים איזון חדש. זה כולל עבודה על 
                    אמונות חדשות ומעצימות, חיזוק תחושת הביטחון והערך העצמי, והטמעת כלים שיאפשרו 
                    להמשיך ולשמור על השינוי לאורך זמן.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-foreground font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">אינטגרציה והטמעה</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    השינוי התודעתי משתלב בחיי היומיום. המטופלים מדווחים על תגובות שונות למצבים 
                    שבעבר היו מאתגרים, על תחושת קלות וחופש חדשה, ועל שיפור משמעותי במערכות 
                    יחסים, בעבודה ובתחושה הכללית.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section 
          ref={benefitsRef}
          className={`py-16 px-4 transition-all duration-700 delay-300 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              למי מתאים ריפוי תודעתי?
            </h2>
            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
              ריפוי תודעתי מתאים למגוון רחב של קשיים ואתגרים
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Moon, title: "חרדות ופחדים", desc: "חרדה כללית, התקפי חרדה, פחדים ספציפיים, חרדה חברתית" },
                { icon: Sun, title: "טראומה ופוסט-טראומה", desc: "אירועים קשים מהעבר, תאונות, אובדן, טראומות ילדות" },
                { icon: Heart, title: "קשיים רגשיים", desc: "דיכאון, עצב מתמשך, תחושת ריקנות, חוסר מוטיבציה" },
                { icon: Star, title: "בעיות במערכות יחסים", desc: "קשיי תקשורת, דפוסים חוזרים, קושי באינטימיות" },
                { icon: Flower2, title: "הערכה עצמית", desc: "ביטחון עצמי נמוך, תחושת חוסר ערך, ביקורתיות עצמית" },
                { icon: Zap, title: "חסמים והתמודדות", desc: "פרוקרסטינציה, קושי בקבלת החלטות, פחד מכישלון" },
              ].map((item, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="w-8 h-8 text-sage mb-4" />
                    <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-sage/5 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              היתרונות של ריפוי תודעתי
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "תוצאות מהירות - שינוי מורגש תוך מפגשים בודדים",
                "תהליך עדין ולא פולשני - ללא צורך לחוות מחדש את הכאב",
                "טיפול בשורש ולא בסימפטום - שינוי מתמשך לאורך זמן",
                "מתאים לכל הגילאים - מילדים ועד מבוגרים",
                "ללא תלות - המטופל רוכש כלים לחיים",
                "משלב גוף ונפש - טיפול הוליסטי ומקיף",
                "מבוסס מחקר - עקרונות מדעיים מוכחים",
                "התאמה אישית - כל טיפול מותאם למטופל"
              ].map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              מוכנים להתחיל את המסע?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              צרו קשר לשיחת היכרות ללא עלות וללא התחייבות
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="bg-sage hover:bg-sage/90 text-white px-8 py-6 text-lg rounded-xl"
              >
                שיחה בוואטסאפ
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = "tel:0527176000"}
                className="border-sage text-sage hover:bg-sage/10 px-8 py-6 text-lg rounded-xl"
              >
                התקשרו: 052-717-6000
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RipuiTodaatiPage;