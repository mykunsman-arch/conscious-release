import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Baby, Heart, Sparkles, Shield, ArrowLeft, CheckCircle, Star, Moon, Sun, CloudRain, Frown, Users } from "lucide-react";

const RipuiYeladimPage = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation();
  const { ref: issuesRef, isVisible: issuesVisible } = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום%20הגעתי%20מעמוד%20ריפוי%20תודעתי%20לילדים%20ורציתי%20לשמוע%20פרטים", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>ריפוי תודעתי לילדים | טיפול רגשי עדין לילדים | המרכז לריפוי תודעתי</title>
        <meta name="description" content="ריפוי תודעתי לילדים - טיפול עדין ומותאם לילדים עם חרדות, פחדים, קשיי התנהגות ובעיות רגשיות. תוצאות מהירות ללא פולשנות. טל אסתר קונסמן." />
        <meta name="keywords" content="ריפוי תודעתי לילדים, טיפול רגשי ילדים, חרדות ילדים, פחדים ילדים, טיפול התנהגותי ילדים, מטפלת ילדים בני ברק" />
        <link rel="canonical" href="https://www.mindcenter.co.il/ripui-yeladim" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background" dir="rtl">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className={`relative pt-32 pb-20 px-4 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-peach/10 via-transparent to-transparent" />
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-peach/20 rounded-full px-4 py-2 mb-6">
              <Baby className="w-4 h-4 text-peach-foreground" />
              <span className="text-sm text-peach-foreground font-medium">טיפול מיוחד לילדים</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              ריפוי תודעתי לילדים
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed">
              טיפול עדין, יעיל ומותאם לעולם הילדים
            </p>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              ילדים מגיבים נפלא לריפוי תודעתי. הטיפול מותאם לגיל הילד, מתבצע בצורה משחקית ונעימה, 
              ומביא לתוצאות מפתיעות בזמן קצר.
            </p>
          </div>
        </section>

        {/* Why Children Section */}
        <section 
          ref={whyRef}
          className={`py-16 px-4 transition-all duration-700 delay-100 ${whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              למה ריפוי תודעתי מתאים במיוחד לילדים?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  ילדים הם מועמדים מצוינים לריפוי תודעתי מכמה סיבות. ראשית, הם עדיין לא 
                  "מגודרים" רגשית כמו מבוגרים - הם פתוחים יותר, פחות ספקניים, ומאפשרים 
                  לתהליך להתרחש בצורה טבעית.
                </p>
                <p>
                  שנית, לילדים יש פחות שנים של הצטברות שכבות רגשיות, ולכן השחרור מהיר ויעיל 
                  יותר. מה שלוקח למבוגר 6 מפגשים, יכול לקרות אצל ילד תוך 2-3 מפגשים.
                </p>
                <p>
                  חשוב להבין: ילדים לא תמיד יודעים לבטא מה מפריע להם, אבל הגוף והנפש שלהם 
                  "מדברים" בדרכים אחרות - התנהגות, תסמינים פיזיים, שינויים במצב הרוח. 
                  ריפוי תודעתי יודע "לקרוא" את השפה הזו ולעבוד איתה ישירות.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-peach/20 to-peach/10 border-peach/30">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-10 h-10 text-peach-foreground mx-auto mb-3" />
                    <h3 className="font-semibold text-primary mb-2">עדין ובטוח</h3>
                    <p className="text-sm text-foreground/70">טיפול לא פולשני</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-sage/10 to-sage/5 border-sage/20">
                  <CardContent className="p-6 text-center">
                    <Sparkles className="w-10 h-10 text-sage mx-auto mb-3" />
                    <h3 className="font-semibold text-primary mb-2">משחקי</h3>
                    <p className="text-sm text-foreground/70">מותאם לעולם הילדים</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20">
                  <CardContent className="p-6 text-center">
                    <Star className="w-10 h-10 text-gold-foreground mx-auto mb-3" />
                    <h3 className="font-semibold text-primary mb-2">מהיר</h3>
                    <p className="text-sm text-foreground/70">תוצאות תוך מפגשים בודדים</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                  <CardContent className="p-6 text-center">
                    <Heart className="w-10 h-10 text-accent mx-auto mb-3" />
                    <h3 className="font-semibold text-primary mb-2">מכיל</h3>
                    <p className="text-sm text-foreground/70">יחס אישי וחם</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Issues Section */}
        <section 
          ref={issuesRef}
          className={`py-16 px-4 bg-muted/30 transition-all duration-700 delay-200 ${issuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
              באילו מצבים הטיפול יעיל?
            </h2>
            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
              ריפוי תודעתי לילדים מתאים למגוון רחב של קשיים
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Moon, title: "פחדים ובעיות שינה", desc: "פחד מהחושך, סיוטים, קושי להירדם, פחדים ספציפיים" },
                { icon: CloudRain, title: "חרדות", desc: "חרדת פרידה, חרדה חברתית, חרדה מבחנים, חרדה כללית" },
                { icon: Frown, title: "קשיים רגשיים", desc: "עצב, כעס, התפרצויות, חוסר ויסות רגשי" },
                { icon: Users, title: "קשיים חברתיים", desc: "ביישנות, קושי בקשרים חברתיים, בידוד" },
                { icon: Sun, title: "בעיות התנהגות", desc: "אי-ציות, עקשנות, התנגדות, קושי בגבולות" },
                { icon: Star, title: "קשיי למידה", desc: "חוסר ריכוז, קושי בבית הספר, חוסר מוטיבציה" },
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

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              איך נראה הטיפול?
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-peach/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-peach-foreground font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">שיחה עם ההורים</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    הטיפול מתחיל בשיחה עם ההורים (בדרך כלל בזום או בטלפון) כדי להבין את הרקע, 
                    את הקושי ואת הציפיות. זה עוזר להכין את הקרקע ולהתאים את הטיפול.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-peach/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-peach-foreground font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">היכרות עם הילד</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    המפגש הראשון עם הילד מתמקד ביצירת קשר ואמון. הילד מרגיש בנוח, משחק, 
                    ומתחיל להכיר את הסביבה והמטפלת. אין לחץ, אין ציפיות - רק יצירת מרחב בטוח.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-peach/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-peach-foreground font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">העבודה הטיפולית</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    הטיפול עצמו מתבצע בצורה משחקית ונעימה. הילד לא צריך לדבר על מה שמפריע לו 
                    או להיזכר באירועים קשים. אנחנו עובדים עם הגוף, עם הנשימה, עם דמיון מודרך - 
                    והילד פשוט נהנה בזמן שהשחרור מתרחש.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-peach/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-peach-foreground font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">ליווי ההורים</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    ההורים מקבלים עדכונים וכלים להמשך. חשוב שהסביבה הביתית תתמוך בתהליך, 
                    ולכן ניתנות הנחיות פשוטות שעוזרות להטמיע את השינוי.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-peach/5 to-transparent">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              מה הורים אומרים
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">
                    "הבן שלי (7) סבל מחרדות קשות לקראת השינה. אחרי 3 מפגשים אצל טל, 
                    הוא נרדם לבד ללא פחדים. לא האמנו שזה אפשרי."
                  </p>
                  <p className="text-sm text-foreground/60">- רונית, רמת גן</p>
                </CardContent>
              </Card>
              
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">
                    "הבת שלי הייתה ביישנית מאוד ונמנעה מאינטראקציות חברתיות. 
                    לאחר התהליך היא משחקת עם ילדים אחרים ומשתתפת בכיתה. תודה!"
                  </p>
                  <p className="text-sm text-foreground/60">- מיכל, בני ברק</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              הילד שלכם יכול להרגיש אחרת
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              צרו קשר לשיחת ייעוץ חינם וגלו איך נוכל לעזור
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

export default RipuiYeladimPage;