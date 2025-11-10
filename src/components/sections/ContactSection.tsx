import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Send, MessageCircle, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useMagnetic } from "@/hooks/use-magnetic";

const ContactSection = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation({ variant: "fade-down", threshold: 0.1 });
  const magneticSubmit = useMagnetic({ strength: 0.25, tolerance: 100 });
  const magneticWhatsApp = useMagnetic({ strength: 0.3, tolerance: 120 });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "הטופס נשלח בהצלחה",
      description: "נחזור אליכם בהקדם האפשרי",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום%20🌿%20הגעתי%20מהאתר%20mindcenter.co.il%20ורציתי%20לשמוע%20פרטים%20על%20התהליך", "_blank");
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
          
          <div className={`grid md:grid-cols-2 gap-6 md:gap-8 pt-12 px-4 grid-stagger ${isVisible ? 'visible' : ''}`}>
            {/* Form */}
            <Card className="p-6 md:p-10 bg-card/80 backdrop-blur-sm shadow-2xl rounded-3xl border-2 border-border/50 hover:border-accent/30 transition-all">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 text-right">
                <div>
                  <label htmlFor="name" className="block text-base font-semibold mb-3 text-foreground/80">
                    שם מלא
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-right text-lg p-6 rounded-xl border-2 focus:border-sage transition-all min-h-[56px] touch-manipulation"
                    dir="rtl"
                    placeholder="הכנס את שמך המלא"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-base font-semibold mb-3 text-foreground/80">
                    טלפון
                  </label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-sage transition-all pointer-events-none" />
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="text-right text-lg p-6 pl-14 rounded-xl border-2 focus:border-sage transition-all min-h-[56px] touch-manipulation"
                      dir="rtl"
                      placeholder="05X-XXX-XXXX"
                    />
                  </div>
                </div>
                
                
                <div>
                  <label htmlFor="message" className="block text-base font-semibold mb-3 text-foreground/80">
                    הודעה
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="text-right text-lg p-6 rounded-xl border-2 focus:border-sage transition-all resize-none min-h-[140px] touch-manipulation"
                    dir="rtl"
                    placeholder="ספרו לנו על מה שמעניין אתכם..."
                  />
                </div>
                
                <Button 
                  ref={magneticSubmit as any}
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground py-7 md:py-8 text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all group min-h-[56px] touch-manipulation active:scale-95"
                  style={{ transition: 'transform 0.2s ease-out' }}
                >
                  <Send className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  שלחו ונחזור אליכם
                </Button>
              </form>
            </Card>
            
            {/* Contact info and WhatsApp */}
            <div className="space-y-4 md:space-y-6 flex flex-col justify-center">
              <Button
                ref={magneticWhatsApp as any}
                onClick={handleWhatsAppClick}
                size="lg"
                className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white w-full py-8 md:py-10 text-xl md:text-2xl font-semibold rounded-2xl shadow-2xl hover:shadow-[#25D366]/30 transition-all overflow-hidden min-h-[56px] touch-manipulation active:scale-95"
                style={{ transition: 'transform 0.2s ease-out' }}
              >
                <MessageCircle className="ml-3 h-7 w-7 transition-all" />
                לפנייה ופרטים בווצאפ
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
              
              <Card className="p-6 md:p-8 bg-gradient-to-br from-sage/10 to-primary/10 rounded-3xl border-2 border-sage/20 shadow-xl group">
                <div className="space-y-4 md:space-y-6 text-center">
                  <MapPin className="h-10 w-10 md:h-12 md:w-12 text-sage mx-auto transition-all" />
                  <div>
                    <p className="text-lg md:text-xl font-semibold text-primary mb-3">איך מתחילים</p>
                    <div className="text-base md:text-lg text-foreground/70 space-y-3 md:space-y-4">
                      <p className="leading-[1.7] md:leading-relaxed">
                        הטיפול מתקיים בקליניקה או בזום, באווירה רגועה, בטוחה ומלאת אמון.
                      </p>
                      <p className="leading-[1.7] md:leading-relaxed">
                        אפשר להתחיל בשיחה קצרה ללא התחייבות, כדי להבין יחד מה מתאים לכם.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 bg-card/80 backdrop-blur-sm rounded-3xl border-2 border-border/50 shadow-xl group">
                <div className="space-y-3 md:space-y-4 text-center">
                  <Phone className="h-8 w-8 md:h-10 md:w-10 text-sage mx-auto transition-all" />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">צרו קשר</p>
                    <a href="tel:052-717-6000" className="text-lg md:text-xl font-bold text-primary hover:text-sage transition-colors">
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
      <footer className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-border/50" dir="rtl">
        <div className="container mx-auto px-4 text-center space-y-6 md:space-y-8 relative z-10">
          <div className="space-y-4 text-center">
            <p className="text-lg md:text-xl font-semibold text-primary">המרכז לריפוי תודעתי</p>
            <div className="text-base md:text-lg text-foreground/70 space-y-2">
              <p>כנרת 15, בני ברק</p>
              <p>📱 052-717-6000</p>
              <p>💬 <a href="https://wa.me/972527176000?text=שלום%20🌿%20הגעתי%20מהאתר%20mindcenter.co.il%20ורציתי%20לשמוע%20פרטים%20על%20התהליך" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">לחצו לשיחה בוואטסאפ</a></p>
            </div>
          </div>
          
          <div className="pt-6 md:pt-8 pb-4 border-t border-border/30 mt-8">
            <div className="text-sm text-muted-foreground space-y-1">
              <p>© כל הזכויות שמורות — המרכז לריפוי תודעתי 🌿</p>
              <p>mindcenter.co.il</p>
            </div>
            <div className="text-xs text-muted-foreground/60 mt-4 space-y-2 max-w-4xl mx-auto">
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
