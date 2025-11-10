import { Button } from "@/components/ui/button";
import { MessageCircle, Forward, CheckCheck } from "lucide-react";
import landingBg from "@/assets/landing-background.jpg";
import logoHeader from "@/assets/logo-header.png";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const LandingPage = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום 🌿 הגעתי מהמודעה ורציתי לשמוע פרטים על התהליך", "_blank");
  };



  const testimonials = [
    {
      name: "מ.ר., בת 29",
      issue: "חרדות ולחץ מתמשך",
      text: "לא הצלחתי להרגיע את הגוף גם כשניסיתי הכל. כבר אחרי שני מפגשים הרגשתי שהלב נפתח והנשימה חוזרת."
    },
    {
      name: "ד.ג., בן 43",
      issue: "בעיות שינה ומתח כרוני",
      text: "אחרי שנים של לילות בלי שינה, השקט סוף סוף חזר. למדתי להקשיב לגוף במקום להילחם בו."
    },
    {
      name: "ש.ה., בת 35",
      issue: "קשיים בזוגיות ותקשורת",
      text: "הגעתי עם תחושת ריחוק וכעס. היום הבית רגוע, ואני מרגישה קרובה באמת."
    },
    {
      name: "י.צ., בן 12",
      issue: "טיקים ומתח רגשי",
      text: "הבן שלי עבר שינוי עצום. הפנים רגועות, הגוף שקט, והוא שוב צוחק."
    },
    {
      name: "ח.ל., בת 47",
      issue: "כאבים גופניים ללא ממצא רפואי",
      text: "הכאב שהיה איתי שנים פשוט נעלם. הרגשתי שמישהו סוף סוף מבין את השורש ולא רק את הסימפטום."
    }
  ];

  const whyUs = [
    "גישה רגישה, מדויקת ומותאמת אישית",
    "שילוב של עבודה תודעתית, רגשית ופיזית",
    "דיסקרטיות מלאה ואמון",
    "ניסיון של מעל 7 שנים ותוצאות שמדברות בעד עצמן"
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
              🩵 <strong>כשהגוף מבקש שקט, והנפש רוצה ריפוי.</strong>
            </p>
            
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              ריפוי תודעתי הוא תהליך עדין ומדויק
              המסייע לשחרור מטענים רגשיים, דפוסים ואמונות שמנהלים אותנו —
              ולהחזרת איזון, בהירות וחיבור פנימי בין גוף, נפש ותודעה.
            </p>
            
            <p className="text-base md:text-lg text-foreground/70">
              הטיפול מתקיים בקליניקה או בזום, באווירה רגועה, חמה ומכילה.
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

        {/* How it works */}
        <section className="mb-16 md:mb-20 bg-sage/5 rounded-3xl p-6 md:p-10 border border-sage/20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-sage">
            💫 איך זה עובד
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              בתהליך אישי נזהה את שורש הקושי – בתודעה, ברגש ובזיכרון –
              נשחרר את המטען שמנהל את הגוף, וניצור רוגע ואיזון אמיתי מבפנים.
            </p>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              התהליך מתאים למבוגרים, נוער וילדים,
              ומסייע בהתמודדות עם מצבים כמו:
              חרדה, מתח, כאבים גופניים ללא סיבה רפואית, בעיות שינה,
              חוסר איזון הורמונלי, תקיעות רגשית, קשיים בזוגיות או פחדים אצל ילדים.
            </p>
            <p className="text-sm md:text-base text-foreground/60 italic mt-6">
              התהליך נועד לתמיכה רגשית ותודעתית ואינו מהווה טיפול רפואי.
            </p>
          </div>
        </section>


        {/* Testimonials */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
            💬 סיפורי הצלחה
          </h2>
          <p className="text-center text-foreground/60 mb-10 text-sm md:text-base">
            אנשים אמיתיים. תהליכים אמיתיים. תוצאות שמרגישים בלב ובגוף.
          </p>
          <div className="max-w-4xl mx-auto px-4 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                direction: "rtl",
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                })
              ]}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2 h-full">
                      <div className="relative space-y-3">
                        {/* Patient info above the message */}
                        <div className="text-right space-y-1 px-2">
                          <p className="text-sm font-semibold text-sage">
                            {testimonial.issue}
                          </p>
                          <h3 className="font-bold text-base text-foreground">
                            {testimonial.name}
                          </h3>
                        </div>

                        {/* WhatsApp-style message bubble */}
                        <div className="bg-[#DCF8C6] rounded-lg p-4 shadow-lg relative hover:shadow-xl transition-shadow">
                          {/* Tail/Triangle */}
                          <div className="absolute left-0 top-3 w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-[#DCF8C6] border-b-[8px] border-b-transparent -translate-x-3"></div>
                          
                          <div className="space-y-3">
                            {/* Forwarded indicator */}
                            <div className="flex items-center gap-1 text-gray-500 text-xs pb-2 border-b border-gray-300/30">
                              <Forward className="h-3 w-3" />
                              <span className="font-medium">הועברה</span>
                            </div>

                            {/* Message text */}
                            <p className="text-gray-800 leading-relaxed text-sm md:text-base text-right">
                              {testimonial.text}
                            </p>

                            {/* Time and checkmarks (WhatsApp style) */}
                            <div className="flex items-center justify-end gap-1 text-xs text-gray-600">
                              <span>15:42</span>
                              <CheckCheck className="h-4 w-4 text-[#53BDEB]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>

        {/* Why choose us */}
        <section className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
            🌸 למה לבחור במרכז לריפוי תודעתי
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
      <footer className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border/50" dir="rtl">
        <div className="container mx-auto px-4 text-center space-y-6 md:space-y-8 relative z-10 max-w-5xl">
          <div className="space-y-4 text-center">
            <p className="text-lg md:text-xl font-semibold text-primary">המרכז לריפוי תודעתי</p>
            <div className="text-base md:text-lg text-foreground/70 space-y-2">
              <p>כנרת 15, בני ברק</p>
              <p>📱 052-717-6000</p>
              <p>💬 <a href="https://wa.me/972527176000" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">לחצו לשיחה בוואטסאפ</a></p>
            </div>
          </div>
          
          <div className="pt-6 md:pt-8 pb-4 border-t border-border/30 mt-8">
            <div className="text-sm text-muted-foreground space-y-1">
              <p>© כל הזכויות שמורות — המרכז לריפוי תודעתי 🌿</p>
              <p>mindcenter.co.il</p>
            </div>
            <div className="text-xs text-muted-foreground/60 mt-4 space-y-2">
              <p>התוכן והשירותים באתר נועדו לתמיכה רגשית ותודעתית בלבד, ואינם מהווים טיפול רפואי או התחייבות לתוצאה.</p>
              <p className="flex items-center justify-center gap-2 flex-wrap">
                <Link to="/terms-of-service" className="hover:text-accent transition-colors underline">
                  הטיפול בהתאם לתנאי השימוש
                </Link>
                <span>•</span>
                <Link to="/landing" className="hover:text-accent transition-colors underline">
                  נחיתה
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
