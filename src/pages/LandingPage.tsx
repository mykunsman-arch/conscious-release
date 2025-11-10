import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Users, Sparkles, CheckCircle } from "lucide-react";
import landingBg from "@/assets/landing-background.jpg";
import logoHeader from "@/assets/logo-header.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום 🌿 הגעתי מהמודעה ורציתי לשמוע פרטים על התהליך", "_blank");
  };

  const steps = [
    {
      icon: Heart,
      title: "מתחילים בהקשבה",
      description: "להבין מה יוצר את הקושי"
    },
    {
      icon: Sparkles,
      title: "משחררים את המטען הרגשי",
      description: "מתת־המודע"
    },
    {
      icon: Users,
      title: "מרגישים קלילים",
      description: "מאוזנים ובהירים יותר"
    }
  ];

  const suitableFor = [
    "חרדה, עומס או מתח נפשי",
    "כאבים גופניים ללא רקע רפואי",
    "קשיי שינה או עייפות מתמשכת",
    "תחושת תקיעות או בלבול",
    "קשיים בזוגיות או מול הילדים"
  ];

  const testimonials = [
    "אחרי שנים של מתח וכאב, סוף־סוף אני מרגישה חופשית באמת.",
    "הבן שלנו הפסיק טיקים אחרי ארבעה מפגשים בלבד.",
    "השקט חזר גם לגוף וגם לנפש."
  ];

  const whyUs = [
    "גישה רכה ומדויקת",
    "טיפול מותאם אישית – גם בזום",
    "דיסקרטיות מלאה ואמון",
    "ניסיון של מעל 7 שנים"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden font-assistant" dir="rtl">
      {/* Background with 20% opacity */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${landingBg})`,
          opacity: 0.25,
          zIndex: -1
        }}
      />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-background/70 via-background/70 to-background/70 backdrop-blur-sm" style={{ zIndex: -1 }} />

      {/* Header with logo */}
      <header className="py-6 px-4 md:px-8">
        <Link to="/" className="inline-block">
          <img src={logoHeader} alt="המרכז לריפוי תודעתי" className="h-48 md:h-60 hover:opacity-80 transition-opacity" />
        </Link>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        
        {/* Hero Section */}
        <section className="text-center space-y-6 mb-16 md:mb-24">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            🌿 המרכז לריפוי תודעתי
          </h1>
          
          <p className="text-2xl md:text-4xl font-semibold text-sage">
            להשתחרר. להתחבר. להתרפא.
          </p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              🩵 <strong>מרגישים תקיעות רגשית, עומס או מתח שלא עוזב?</strong>
            </p>
            
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              ריפוי תודעתי הוא תהליך עדין ומדויק
              שעוזר לשחרר רגשות ודפוסים שמגבילים אתכם —
              וליצור איזון ושקט פנימי אמיתי.
            </p>
            
            <p className="text-base md:text-lg text-foreground/70">
              הטיפול מתקיים בקליניקה או בזום,
              באווירה רגועה, אישית ומכילה.
            </p>
          </div>
          
          <div className="pt-6">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-[#25D366]/40 transition-all"
            >
              <MessageCircle className="ml-2 h-6 w-6" />
              לחצו לשיחה בוואטסאפ
            </Button>
          </div>
        </section>

        {/* What is it */}
        <section className="mb-16 md:mb-20 bg-sage/5 rounded-3xl p-6 md:p-10 border border-sage/20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-sage">
            💫 מה זה ריפוי תודעתי
          </h2>
          <p className="text-base md:text-lg text-center text-foreground/70 leading-relaxed">
            תהליך טיפולי עדין המשחרר מטען רגשי עמוק, מביא לאיזון פנימי ומאפשר חיבור מחדש לעצמי האמיתי שלכם.
          </p>
        </section>

        {/* How it works */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            💫 איך זה עובד
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center space-y-4 p-6 rounded-2xl bg-card/40 border border-border/30 hover:border-sage/40 transition-all">
                  <div className="flex justify-center">
                    <div className="bg-sage/10 p-4 rounded-full">
                      <Icon className="h-8 w-8 text-sage" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xl font-bold text-foreground">{index + 1}️⃣ {step.title}</div>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-foreground/70 mt-8 text-sm md:text-base">
            תהליך קצר, עמוק ולא פולשני – עם תוצאות שמורגשות מהר.
          </p>
        </section>

        {/* Who is it for */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            🌸 למי זה מתאים
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {suitableFor.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card/30 border border-border/20 hover:border-sage/30 transition-all">
                <CheckCircle className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <p className="text-base md:text-lg text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            💬 אנשים מספרים
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/30 shadow-sm">
                <p className="text-foreground/80 italic leading-relaxed text-sm md:text-base">"{testimonial}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why choose us */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            🌿 למה לבחור בנו
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {whyUs.map((reason, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-sage/5 border border-sage/20">
                <span className="text-sage text-xl">✔️</span>
                <p className="text-foreground/80 text-base md:text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center space-y-6 mb-12 bg-gradient-to-br from-sage/10 to-peach/10 rounded-3xl p-8 md:p-12 border-2 border-sage/20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            📞 רוצים לדעת אם זה מתאים לכם?
          </h2>
          <p className="text-lg text-foreground/70">
            אפשר להתחיל בשיחה קצרה, ללא התחייבות:
          </p>
          <div className="space-y-3">
            <p className="text-xl font-semibold text-foreground">📱 052-717-6000</p>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-[#25D366]/40 transition-all"
            >
              <MessageCircle className="ml-2 h-6 w-6" />
              💬 לחצו לשיחה בוואטסאפ
            </Button>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-4">
            <p className="text-sm text-foreground/60 leading-relaxed max-w-2xl mx-auto">
              ⚖️ <strong>הערה חשובה:</strong> התהליך נועד לתמיכה רגשית ותודעתית בלבד ואינו מהווה טיפול רפואי.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-foreground/50">
              <span>© כל הזכויות שמורות — המרכז לריפוי תודעתי 🌿</span>
            </div>
            <div className="text-xs text-foreground/40">
              הטיפול בהתאם ל<Link to="/terms-of-service" className="underline hover:text-sage transition-colors">תנאי השימוש</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
