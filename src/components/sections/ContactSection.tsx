import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useMagnetic } from "@/hooks/use-magnetic";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ variant: "fade-down", threshold: 0.1 });
  const magneticWhatsApp = useMagnetic({ strength: 0.3, tolerance: 120 });

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום%20🌿%20הגעתי%20מהאתר%20mindcenter.co.il%20ורציתי%20לשמוע%20פרטים%20על%20התהליך", "_blank");
  };

  return (
    <section ref={ref} id="contact" className="snap-section py-3 md:py-4 bg-gradient-to-b from-background/10 to-background/30 relative overflow-hidden" dir="rtl">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-peach/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className={`text-center space-y-2 md:space-y-3 section-slide-down ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
            <Mail className="h-4 w-4 text-sage transition-all" />
            <span className="text-sage font-semibold text-sm">בואו נדבר</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-shimmer leading-tight px-4 font-varela">
            צרו קשר
          </h2>
          
          <div className="h-0.5 w-24 bg-gradient-to-r from-sage via-peach to-sage mx-auto rounded-full"></div>
          
          <div className={`grid-stagger ${isVisible ? 'visible' : ''}`}>
            {/* Contact info and WhatsApp */}
            <div className="space-y-3 md:space-y-4 flex flex-col justify-center max-w-2xl mx-auto">
              <Button
                ref={magneticWhatsApp as any}
                onClick={handleWhatsAppClick}
                size="lg"
                className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white w-full py-6 md:py-7 text-lg md:text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-[#25D366]/30 transition-all overflow-hidden min-h-[48px] touch-manipulation active:scale-95"
                style={{ transition: 'transform 0.2s ease-out' }}
              >
                <MessageCircle className="ml-3 h-6 w-6 transition-all" />
                לפנייה ופרטים בווצאפ
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
              
              <Card className="p-4 md:p-6 bg-gradient-to-br from-sage/10 to-primary/10 rounded-2xl border-2 border-sage/20 shadow-xl group">
                <div className="space-y-3 md:space-y-4 text-center">
                  <MapPin className="h-8 w-8 md:h-10 md:w-10 text-sage mx-auto transition-all" />
                  <div>
                    <p className="text-base md:text-lg font-semibold text-primary mb-2">איך מתחילים</p>
                    <div className="text-sm md:text-base text-foreground/70 space-y-2">
                      <p className="leading-[1.6] md:leading-relaxed">
                        הטיפול מתקיים בקליניקה או בזום, באווירה רגועה, בטוחה ומלאת אמון.
                      </p>
                      <p className="leading-[1.6] md:leading-relaxed">
                        אפשר להתחיל בשיחה קצרה ללא התחייבות, כדי להבין יחד מה מתאים לכם.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 md:p-6 bg-card/80 backdrop-blur-sm rounded-2xl border-2 border-border/50 shadow-xl group">
                <div className="space-y-2 md:space-y-3 text-center">
                  <Phone className="h-6 w-6 md:h-8 md:w-8 text-sage mx-auto transition-all" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">צרו קשר</p>
                    <a href="tel:052-717-6000" className="text-base md:text-lg font-bold text-primary hover:text-sage transition-colors">
                      052-717-6000
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border/50" dir="rtl">
        <div className="container mx-auto px-4 text-center space-y-3 md:space-y-4 relative z-10">
          <div className="space-y-3 text-center">
            <p className="text-base md:text-lg font-semibold text-primary">המרכז לריפוי תודעתי</p>
            <div className="text-sm md:text-base text-foreground/70 space-y-1">
              <p>כנרת 15, בני ברק</p>
              <p>📱 052-717-6000</p>
              <p>💬 <a href="https://wa.me/972527176000?text=שלום%20🌿%20הגעתי%20מהאתר%20mindcenter.co.il%20ורציתי%20לשמוע%20פרטים%20על%20התהליך" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">לחצו לשיחה בוואטסאפ</a></p>
            </div>
          </div>
          
          <div className="pt-4 md:pt-6 pb-3 border-t border-border/30 mt-6">
            <div className="text-xs text-muted-foreground space-y-1">
              <p>© כל הזכויות שמורות — המרכז לריפוי תודעתי 🌿</p>
              <p>mindcenter.co.il</p>
            </div>
            <div className="text-xs text-muted-foreground/60 mt-3 space-y-1 max-w-4xl mx-auto">
              <p className="font-medium">התוכן והשירותים באתר נועדו לתמיכה רגשית ותודעתית בלבד, ואינם מהווים טיפול רפואי או התחייבות לתוצאה.</p>
              <p>
                <Link to="/terms-of-service" className="hover:text-accent transition-colors underline font-medium">
                  תנאי שימוש
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
