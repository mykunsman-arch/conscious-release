import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Layers, Brain, Heart, Sparkles, ArrowLeft, CheckCircle, Zap, Target, Users, Clock } from "lucide-react";

const ShitatShloshetHamimadimPage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: methodRef, isVisible: methodVisible } = useScrollAnimation();
  const { ref: dimensionsRef, isVisible: dimensionsVisible } = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום%20הגעתי%20מעמוד%20שיטת%20שלושת%20המימדים%20ורציתי%20לשמוע%20פרטים", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>שיטת שלושת המימדים - איך זה עובד | המרכז לריפוי תודעתי</title>
        <meta name="description" content="שיטת שלושת המימדים לריפוי תודעתי: גישה ייחודית שעובדת על גוף, נפש ותודעה במקביל. גלו כיצד השיטה משחררת דפוסים רגשיים בשורש." />
        <meta name="keywords" content="שיטת שלושת המימדים, ריפוי תודעתי, טיפול גוף נפש, טיפול הוליסטי, שחרור דפוסים רגשיים" />
        <link rel="canonical" href="https://www.mindcenter.co.il/shitat-shloshet-hamimadim" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background" dir="rtl">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className={`relative pt-32 pb-20 px-4 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
              <Layers className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">השיטה המלאה</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              שיטת שלושת המימדים
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed">
              גוף. נפש. תודעה. – ריפוי שלם ומקיף
            </p>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              שיטת שלושת המימדים היא גישה טיפולית ייחודית שפותחה מתוך הבנה עמוקה 
              שריפוי אמיתי חייב לכלול את כל מרכיבי האדם: הגוף הפיזי, הנפש הרגשית והתודעה העליונה.
            </p>
          </div>
        </section>

        {/* Method Explanation */}
        <section 
          ref={methodRef}
          className={`py-16 px-4 transition-all duration-700 delay-100 ${methodVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              מהי שיטת שלושת המימדים?
            </h2>
            
            <div className="space-y-6 text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-12">
              <p>
                <strong className="text-primary">שיטת שלושת המימדים</strong> היא שיטת ריפוי תודעתי מתקדמת 
                שמשלבת עבודה מקבילה על שלושה מישורים: הגוף הפיזי, הנפש הרגשית והתודעה. 
                השיטה מבוססת על ההבנה שכל קושי או חסימה בחיים באה לידי ביטוי בכל שלושת המישורים, 
                ולכן הריפוי חייב להתייחס לכולם.
              </p>
              <p>
                בניגוד לשיטות טיפול רבות שמתמקדות בהיבט אחד בלבד – כמו הגוף בפיזיותרפיה, 
                הרגש בפסיכולוגיה, או הרוח במדיטציה – שיטת שלושת המימדים מאחדת את כל ההיבטים 
                לתהליך ריפוי אחד מקיף ויעיל.
              </p>
              <p>
                השיטה פותחה על ידי מטפלים מנוסים שהבינו שרבים מהמטופלים שלהם לא הגיעו לריפוי 
                מלא כי הטיפול התמקד רק בחלק מהאדם. כשעובדים על כל שלושת המימדים במקביל, 
                התוצאות מהירות, עמוקות ומתמשכות יותר.
              </p>
            </div>
          </div>
        </section>

        {/* Three Dimensions */}
        <section 
          ref={dimensionsRef}
          className={`py-16 px-4 bg-muted/30 transition-all duration-700 delay-200 ${dimensionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              שלושת המימדים
            </h2>
            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
              כל מימד מהווה שער לריפוי, וכשעובדים על שלושתם יחד – מתרחש הקסם
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Dimension 1 - Body */}
              <Card className="border-sage/30 bg-gradient-to-b from-sage/5 to-transparent overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mb-6 mx-auto">
                    <Target className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary text-center mb-4">מימד הגוף</h3>
                  <div className="space-y-3 text-foreground/70">
                    <p>
                      הגוף שלנו מחזיק זיכרונות ורגשות בתוך התאים, השרירים והרקמות. 
                      מתחים, כאבים ותסמינים פיזיים הם לעתים קרובות ביטוי לעומסים רגשיים.
                    </p>
                    <p>
                      <strong className="text-primary">בעבודה על מימד הגוף:</strong>
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• שחרור מתחים פיזיים</li>
                      <li>• איזון מערכת העצבים</li>
                      <li>• חיזוק הקשר גוף-נפש</li>
                      <li>• הקלה בתסמינים פיזיים</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Dimension 2 - Soul */}
              <Card className="border-accent/30 bg-gradient-to-b from-accent/5 to-transparent overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 mx-auto">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary text-center mb-4">מימד הנפש</h3>
                  <div className="space-y-3 text-foreground/70">
                    <p>
                      הנפש היא מושבם של הרגשות, המחשבות והאמונות. דפוסים רגשיים מהעבר 
                      משפיעים על האופן שבו אנחנו חווים את ההווה.
                    </p>
                    <p>
                      <strong className="text-primary">בעבודה על מימד הנפש:</strong>
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• שחרור רגשות כבושים</li>
                      <li>• שינוי אמונות מגבילות</li>
                      <li>• ריפוי פצעים רגשיים</li>
                      <li>• חיזוק הביטחון העצמי</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Dimension 3 - Consciousness */}
              <Card className="border-gold/30 bg-gradient-to-b from-gold/5 to-transparent overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6 mx-auto">
                    <Brain className="w-8 h-8 text-gold-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary text-center mb-4">מימד התודעה</h3>
                  <div className="space-y-3 text-foreground/70">
                    <p>
                      התודעה היא המרחב הרחב ביותר – הקשר שלנו לעצמי העליון, למשמעות 
                      ולמטרה בחיים. ברמה זו מתרחשים השינויים העמוקים ביותר.
                    </p>
                    <p>
                      <strong className="text-primary">בעבודה על מימד התודעה:</strong>
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• הרחבת מודעות</li>
                      <li>• חיבור לתכלית ומשמעות</li>
                      <li>• שחרור דפוסי נשמה</li>
                      <li>• טרנספורמציה עמוקה</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              מהלך הטיפול בשיטת שלושת המימדים
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sage">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">שיחת היכרות</h3>
                    <p className="text-foreground/70 text-sm">
                      פגישה ראשונית להכרות, הבנת הקושי והצבת מטרות לתהליך
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sage">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">אבחון רב-מימדי</h3>
                    <p className="text-foreground/70 text-sm">
                      בדיקה מעמיקה של המצב בכל שלושת המימדים ואיתור השורש
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sage">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">עבודה טיפולית</h3>
                    <p className="text-foreground/70 text-sm">
                      שחרור ואיזון בכל שלושת המימדים במקביל
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-accent">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">חיזוק והעצמה</h3>
                    <p className="text-foreground/70 text-sm">
                      בניית משאבים פנימיים והטמעת דפוסים חדשים ובריאים
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-accent">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">אינטגרציה</h3>
                    <p className="text-foreground/70 text-sm">
                      הטמעת השינויים בחיי היומיום ומתן כלים להמשך
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-accent">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">מעקב וליווי</h3>
                    <p className="text-foreground/70 text-sm">
                      בדיקת התקדמות והתאמות לפי הצורך
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-accent/5 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              למה לבחור בשיטת שלושת המימדים?
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Clock, title: "תוצאות מהירות", desc: "שינוי מורגש תוך 3-8 מפגשים" },
                { icon: Target, title: "טיפול בשורש", desc: "לא רק בסימפטומים" },
                { icon: Users, title: "מתאים לכולם", desc: "מילדים ועד מבוגרים" },
                { icon: Zap, title: "שינוי מתמשך", desc: "תוצאות שנשמרות לאורך זמן" },
              ].map((item, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-sage" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                      <p className="text-sm text-foreground/70">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              רוצים לחוות את שיטת שלושת המימדים?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              צרו קשר עכשיו לשיחת היכרות ללא עלות
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

export default ShitatShloshetHamimadimPage;