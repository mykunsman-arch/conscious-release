import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useMagnetic } from "@/hooks/use-magnetic";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ variant: "fade-down", threshold: 0.1 });
  const magneticWhatsApp = useMagnetic({ strength: 0.3, tolerance: 120 });
  const magneticPhone = useMagnetic({ strength: 0.3, tolerance: 120 });

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:052-717-6000";
  };

  return (
    <section ref={ref} id="contact" className="snap-section py-24 bg-background/20 relative overflow-hidden" dir="rtl">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-peach/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className={`text-center space-y-10 section-slide-down ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
            <Mail className="h-5 w-5 text-sage transition-all" />
            <span className="text-sage font-semibold">בואו נדבר</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-shimmer leading-tight px-4 font-varela">
            צרו קשר
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-sage via-peach to-sage mx-auto rounded-full"></div>
          
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            צרו איתנו קשר בדרך שהכי נוחה לכם
          </p>

          {/* Contact Buttons */}
          <div className={`max-w-4xl mx-auto pt-8 px-4 grid-stagger ${isVisible ? 'visible' : ''}`}>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {/* WhatsApp Button */}
              <Button
                ref={magneticWhatsApp as any}
                onClick={handleWhatsAppClick}
                size="lg"
                className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white w-full py-10 md:py-12 text-xl md:text-2xl font-semibold rounded-3xl shadow-2xl hover:shadow-[#25D366]/40 transition-all overflow-hidden min-h-[80px] touch-manipulation active:scale-95"
                style={{ transition: 'transform 0.2s ease-out' }}
              >
                <div className="flex flex-col items-center gap-3">
                  <MessageCircle className="h-10 w-10 md:h-12 md:w-12 group-hover:scale-110 transition-all" />
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl md:text-3xl font-bold">וואטסאפ</span>
                    <span className="text-sm md:text-base font-normal opacity-90">לשיחה מהירה</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>

              {/* Phone Button */}
              <Button
                ref={magneticPhone as any}
                onClick={handlePhoneClick}
                size="lg"
                className="group relative bg-gradient-to-br from-primary via-sage to-primary hover:from-primary/90 hover:via-sage/90 hover:to-primary/90 text-primary-foreground w-full py-10 md:py-12 text-xl md:text-2xl font-semibold rounded-3xl shadow-2xl hover:shadow-primary/40 transition-all overflow-hidden min-h-[80px] touch-manipulation active:scale-95"
                style={{ transition: 'transform 0.2s ease-out' }}
              >
                <div className="flex flex-col items-center gap-3">
                  <Phone className="h-10 w-10 md:h-12 md:w-12 group-hover:scale-110 group-hover:rotate-12 transition-all" />
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl md:text-3xl font-bold">052-717-6000</span>
                    <span className="text-sm md:text-base font-normal opacity-90">התקשרו עכשיו</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
            </div>

            {/* Info Card */}
            <Card className="mt-8 md:mt-10 p-8 md:p-10 bg-gradient-to-br from-sage/10 to-primary/10 rounded-3xl border-2 border-sage/20 shadow-xl">
              <div className="text-center space-y-4 md:space-y-5">
                <p className="text-xl md:text-2xl font-semibold text-primary">איך מתחילים?</p>
                <div className="text-base md:text-lg text-foreground/70 space-y-4 max-w-2xl mx-auto leading-relaxed">
                  <p>
                    הטיפול מתקיים בקליניקה או בזום, באווירה רגועה, בטוחה ומלאת אמון.
                  </p>
                  <p>
                    אפשר להתחיל בשיחה קצרה ללא התחייבות, כדי להבין יחד מה מתאים לכם.
                  </p>
                  <div className="pt-4 space-y-2 text-base text-foreground/60">
                    <p>📍 כנרת 15, בני ברק</p>
                    <p>⏰ ימים א'-ה': 9:00-20:00</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border/50" dir="rtl">
        <div className="container mx-auto px-4 text-center space-y-6 md:space-y-8 relative z-10">
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
    </section>
  );
};

export default ContactSection;
