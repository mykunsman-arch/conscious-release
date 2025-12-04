import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { CloudLightning, Heart, Sparkles, Shield, ArrowLeft, CheckCircle, Brain, Activity, AlertCircle, Zap } from "lucide-react";

const HaradotPage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: typesRef, isVisible: typesVisible } = useScrollAnimation();
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום%20הגעתי%20מעמוד%20חרדות%20ורציתי%20לשמוע%20פרטים", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>טיפול בחרדות ומתחים | ריפוי תודעתי | המרכז לריפוי תודעתי</title>
        <meta name="description" content="טיפול בחרדות ומתחים בריפוי תודעתי - שחרור חרדה כללית, התקפי חרדה, חרדה חברתית ומתחים. תוצאות מהירות ומתמשכות. טל אסתר קונסמן, בני ברק." />
        <meta name="keywords" content="טיפול בחרדות, חרדה כללית, התקפי חרדה, חרדה חברתית, מתחים, שחרור חרדה, ריפוי תודעתי חרדה" />
        <link rel="canonical" href="https://www.mindcenter.co.il/haradot" />
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
              <CloudLightning className="w-4 h-4 text-sage" />
              <span className="text-sm text-sage font-medium">שחרור חרדות</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              חרדות ומתחים
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed">
              איך תהליך תודעתי משחרר ומחזיר את השקט
            </p>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              חרדה היא לא גזירה משמיים. היא תגובה של הגוף והנפש למצבים שנחוו בעבר. 
              ריפוי תודעתי מאפשר לשחרר את השורש ולחזור לחיים שקטים ונינוחים.
            </p>
          </div>
        </section>

        {/* Understanding Anxiety */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              להבין את החרדה
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-primary">חרדה</strong> היא תגובה טבעית של מערכת העצבים למצבי סכנה. 
                  הבעיה מתחילה כשמערכת ההגנה הזו נשארת "דרוכה" גם כשאין סכנה אמיתית.
                </p>
                <p>
                  בדרך כלל, השורש נמצא באירוע או חוויה מהעבר שגרמו לגוף "ללמוד" שהעולם מסוכן. 
                  מאז, כל מצב דומה מעורר את אותה תגובת לחימה-או-בריחה, גם אם הסיטואציה הנוכחית 
                  בטוחה לחלוטין.
                </p>
                <p>
                  ריפוי תודעתי מאפשר להגיע לאירוע המקורי, לשחרר את הטעינה הרגשית שנותרה ממנו, 
                  ולאפשר למערכת העצבים לחזור למצב של שקט ואיזון.
                </p>
              </div>
              
              <div className="space-y-4">
                <Card className="bg-gradient-to-r from-destructive/5 to-destructive/10 border-destructive/20">
                  <CardContent className="p-4 flex items-center gap-4">
                    <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary">תסמינים פיזיים</h3>
                      <p className="text-sm text-foreground/70">דופק מהיר, הזעה, רעד, קוצר נשימה</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
                  <CardContent className="p-4 flex items-center gap-4">
                    <Brain className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary">תסמינים מחשבתיים</h3>
                      <p className="text-sm text-foreground/70">מחשבות מטרידות, קטסטרופיזציה, חוסר ריכוז</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-sage/5 to-sage/10 border-sage/20">
                  <CardContent className="p-4 flex items-center gap-4">
                    <Heart className="w-8 h-8 text-sage flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary">תסמינים רגשיים</h3>
                      <p className="text-sm text-foreground/70">פחד, דאגה מתמדת, עצבנות, תחושת חנק</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Anxiety */}
        <section 
          ref={typesRef}
          className={`py-16 px-4 bg-muted/30 transition-all duration-700 delay-100 ${typesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              סוגי חרדות שאנחנו מטפלים בהם
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  title: "חרדה כללית (GAD)", 
                  desc: "דאגה מתמדת על דברים יומיומיים, קושי להירגע, מתח שרירים, בעיות שינה",
                  color: "sage"
                },
                { 
                  title: "התקפי חרדה (פאניקה)", 
                  desc: "התקפים פתאומיים של פחד עז, דופק מהיר, קוצר נשימה, תחושת מוות קרב",
                  color: "accent"
                },
                { 
                  title: "חרדה חברתית", 
                  desc: "פחד ממצבים חברתיים, חשש משיפוטיות, הימנעות מאירועים ומפגשים",
                  color: "peach"
                },
                { 
                  title: "פוביות ספציפיות", 
                  desc: "פחד עז מדבר מסוים: טיסות, גובה, עכבישים, מרחבים סגורים ועוד",
                  color: "gold"
                },
                { 
                  title: "חרדת בריאות", 
                  desc: "דאגה מוגזמת לגבי מצב הבריאות, פחד ממחלות, בדיקות חוזרות",
                  color: "sage"
                },
                { 
                  title: "מתח כרוני", 
                  desc: "תחושת לחץ מתמדת, שחיקה, קושי להירגע, תשישות",
                  color: "accent"
                },
              ].map((item, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-3">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section 
          ref={processRef}
          className={`py-16 px-4 transition-all duration-700 delay-200 ${processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              איך ריפוי תודעתי משחרר חרדות?
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sage font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">איתור השורש</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    כל חרדה התחילה ממקום מסוים. אולי זה היה אירוע טראומטי, אולי סדרה של 
                    חוויות, ואולי משהו שקרה עוד לפני הלידה. אנחנו מאתרים את הנקודה המקורית 
                    שממנה החרדה התפתחה.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sage font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">שחרור הטעינה</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    לאחר איתור השורש, אנחנו משחררים את האנרגיה הרגשית שנותרה תקועה. 
                    אין צורך להיזכר בפרטים או לחוות מחדש את הכאב. השחרור מתרחש ברמה 
                    תודעתית ואנרגטית.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sage font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">איפוס מערכת העצבים</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    לאחר שחרור השורש, מערכת העצבים לומדת מחדש שהמצב בטוח. התגובות 
                    האוטומטיות של חרדה פוחתות, והגוף חוזר למצב של רגיעה ואיזון.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sage font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">חיזוק משאבים</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    מעבר לשחרור, אנחנו בונים ומחזקים משאבים פנימיים: תחושת ביטחון, 
                    אמונה בעצמי, יכולת להתמודד. כך השינוי נשמר לאורך זמן.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-sage/5 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              תוצאות שניתן לצפות להן
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "הפחתה משמעותית בתדירות ועוצמת החרדה",
                "שינה טובה יותר, פחות מחשבות מטרידות בלילה",
                "יכולת להתמודד עם מצבים שבעבר עוררו פחד",
                "תחושת רוגע ושליטה בגוף",
                "שיפור במערכות יחסים וביכולת ליהנות מהחיים",
                "כלים להתמודדות עם מצבי לחץ בעתיד",
                "חזרה לפעילויות שנמנעו מהן",
                "תחושת חופש וקלות"
              ].map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-sage flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              החרדה לא צריכה לשלוט בחיים שלך
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              צרו קשר עכשיו לשיחה ראשונית וגלו איך נוכל לעזור
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

export default HaradotPage;