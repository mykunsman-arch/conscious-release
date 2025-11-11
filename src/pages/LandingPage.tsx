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
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import FloatingBubbles from "@/components/FloatingBubbles";

const LandingPage = () => {
  useSmoothScroll();
  const heroText = "המרכז לריפוי תודעתי";
  const { displayedText } = useTypingEffect({ text: heroText, speed: 80, delay: 1800 });
  
  const howItWorksRef = useScrollAnimation({ threshold: 0.2, variant: "fade-up" });
  const testimonialsRef = useScrollAnimation({ threshold: 0.2, variant: "fade-up" });
  const whyUsRef = useScrollAnimation({ threshold: 0.2, variant: "scale" });
  const ctaRef = useScrollAnimation({ threshold: 0.2, variant: "zoom" });
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום ראיתי את הפרסום ואשמח לקבל מידע נוסף על התהליך", "_blank");
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
      <FloatingBubbles />
      
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

      {/* Main content */}
      <div className="container mx-auto px-4 py-4 md:py-6 max-w-5xl">
        
        {/* Hero Section */}
        <section className="text-center space-y-4 mb-8 md:mb-12">
          {/* Logo - fades in first */}
          <div className="opacity-0" style={{ animation: 'fade-in 1.5s ease-out forwards' }}>
            <Link to="/" className="inline-block">
              <img src={logoHeader} alt="המרכז לריפוי תודעתי" className="h-48 md:h-60 hover:opacity-80 transition-opacity mx-auto" />
            </Link>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight opacity-0 min-h-[1.2em]" style={{ animation: 'fade-in 1s ease-out 1.8s forwards' }}>
            {displayedText}
          </h1>
          
          <p className="text-2xl md:text-4xl font-semibold text-sage opacity-0" style={{ animation: 'fade-in 1s ease-out 1.8s forwards' }}>
            להשתחרר. להתחבר. להתרפא.
          </p>
          
          <div className="max-w-3xl mx-auto space-y-3 opacity-0" style={{ animation: 'fade-in 1s ease-out 2.3s forwards' }}>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              <strong>כשהגוף מבקש שקט, והנפש רוצה ריפוי.</strong>
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
          
          <div className="pt-4 opacity-0" style={{ animation: 'fade-in 1s ease-out 2.8s forwards' }}>
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
        <section 
          ref={howItWorksRef.ref}
          className={`mb-8 md:mb-12 bg-sage/5 rounded-3xl p-4 md:p-6 border border-sage/20 transition-all duration-700 ${
            howItWorksRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-sage opacity-0" style={{ animation: 'fade-in 1s ease-out 3.3s forwards' }}>
            💫 איך זה עובד
          </h2>
          <div className="space-y-3 max-w-3xl mx-auto text-center opacity-0" style={{ animation: 'fade-in 1s ease-out 3.8s forwards' }}>
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
          </div>
        </section>


        {/* Testimonials */}
        <section 
          ref={testimonialsRef.ref}
          className={`mb-8 md:mb-12 transition-all duration-700 ${
            testimonialsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground opacity-0" style={{ animation: 'fade-in 1s ease-out 4.3s forwards' }}>
            💬 סיפורי הצלחה
          </h2>
          <p className="text-center text-foreground/60 mb-6 text-sm md:text-base opacity-0" style={{ animation: 'fade-in 1s ease-out 4.8s forwards' }}>
            אנשים אמיתיים. תהליכים אמיתיים. תוצאות שמרגישים בלב ובגוף.
          </p>
          <div className="max-w-4xl mx-auto px-4 md:px-12 opacity-0" style={{ animation: 'fade-in 1s ease-out 5.3s forwards' }}>
            <Carousel
              opts={{
                align: "start",
                loop: true,
                direction: "rtl",
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
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
        <section 
          ref={whyUsRef.ref}
          className={`mb-8 md:mb-12 transition-all duration-700 ${
            whyUsRef.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground">
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
        <section 
          ref={ctaRef.ref}
          className={`text-center space-y-4 mb-8 bg-gradient-to-br from-sage/10 to-peach/10 rounded-3xl p-6 md:p-8 border-2 border-sage/20 transition-all duration-700 ${
            ctaRef.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            📞 רוצים לדעת אם זה מתאים לכם?
          </h2>
          <p className="text-lg text-foreground/70">
            אפשר להתחיל בשיחה קצרה או בהודעה, ללא התחייבות:
          </p>
          <div className="space-y-3">
            <Button
              onClick={() => window.location.href = 'tel:052-717-6000'}
              size="lg"
              variant="outline"
              className="px-10 py-6 text-lg font-semibold rounded-2xl border-2 hover:bg-accent/10 transition-all"
            >
              📱 052-717-6000
            </Button>
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
      <footer className="mt-8 md:mt-12 pt-8 md:pt-10 border-t border-border/50" dir="rtl">
        <div className="container mx-auto px-4 text-center space-y-4 md:space-y-6 relative z-10 max-w-5xl">
          <div className="space-y-4 text-center">
            <p className="text-lg md:text-xl font-semibold text-primary">המרכז לריפוי תודעתי</p>
            <div className="text-base md:text-lg text-foreground/70 space-y-2">
              <p>כנרת 15, בני ברק</p>
              <a 
                href="tel:052-717-6000"
                className="block hover:text-sage transition-colors cursor-pointer"
              >
                📱 052-717-6000
              </a>
              <p>💬 <a href="https://wa.me/972527176000" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors inline-flex items-center gap-1">
                <MessageCircle className="h-4 w-4 inline" />
                לחצו לשיחה בוואטסאפ
              </a></p>
            </div>
          </div>
          
          <div className="pt-4 md:pt-6 pb-3 border-t border-border/30 mt-6">
            <div className="text-sm text-muted-foreground space-y-1">
              <p>© כל הזכויות שמורות — המרכז לריפוי תודעתי</p>
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

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all hover:scale-110 active:scale-95 group"
        aria-label="שלח הודעת וואטסאפ"
      >
        <MessageCircle className="h-7 w-7 group-hover:animate-pulse" />
      </button>
    </div>
  );
};

export default LandingPage;
