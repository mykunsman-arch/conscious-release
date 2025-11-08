import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo-full.png";
import { Mail, Phone, Send, MessageCircle, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
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
    window.open("https://wa.me/972527176000", "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-soft relative overflow-hidden" dir="rtl">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-peach/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center space-y-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
            <Mail className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold">בואו נדבר</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gradient leading-tight px-4">
            צרו קשר
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-accent via-peach to-accent mx-auto rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 pt-12 px-4">
            {/* Form */}
            <Card className="p-6 md:p-10 bg-card/80 backdrop-blur-sm shadow-2xl rounded-3xl border-2 border-border/50 hover:border-accent/30 transition-all">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 text-right">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 md:mb-3 text-foreground/80">
                    שם מלא
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-right text-base md:text-lg p-4 md:p-6 rounded-xl border-2 focus:border-accent transition-all"
                    dir="rtl"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 md:mb-3 text-foreground/80">
                    טלפון
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="text-right text-base md:text-lg p-4 md:p-6 pl-10 md:pl-12 rounded-xl border-2 focus:border-accent transition-all"
                      dir="rtl"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 md:mb-3 text-foreground/80">
                    אימייל
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="text-right text-base md:text-lg p-4 md:p-6 pl-10 md:pl-12 rounded-xl border-2 focus:border-accent transition-all"
                      dir="rtl"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 md:mb-3 text-foreground/80">
                    הודעה
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="text-right text-base md:text-lg p-4 md:p-6 rounded-xl border-2 focus:border-accent transition-all resize-none"
                    dir="rtl"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground py-5 md:py-7 text-lg md:text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Send className="ml-2 h-5 w-5" />
                  שלחו ונחזור אליכם
                </Button>
              </form>
            </Card>
            
            {/* Contact info and WhatsApp */}
            <div className="space-y-4 md:space-y-6 flex flex-col justify-center">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white w-full py-6 md:py-10 text-lg md:text-2xl rounded-2xl shadow-2xl hover:shadow-[#25D366]/30 transition-all hover:scale-105 overflow-hidden"
              >
                <MessageCircle className="ml-2 md:ml-3 h-6 w-6 md:h-7 md:w-7" />
                שיחה מיידית בוואטסאפ
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
              
              <Card className="p-6 md:p-8 bg-gradient-to-br from-accent/10 to-peach/10 rounded-3xl border-2 border-accent/20 shadow-xl">
                <div className="space-y-4 md:space-y-6 text-center">
                  <MapPin className="h-10 w-10 md:h-12 md:w-12 text-accent mx-auto" />
                  <div>
                    <p className="text-lg md:text-xl font-semibold text-primary mb-2">מיקום הטיפולים</p>
                    <p className="text-base md:text-lg text-foreground/70">
                      קליניקה בבני ברק
                      <br />
                      או מפגשי זום
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8 bg-card/80 backdrop-blur-sm rounded-3xl border-2 border-border/50 shadow-xl">
                <div className="space-y-3 md:space-y-4 text-center">
                  <Phone className="h-8 w-8 md:h-10 md:w-10 text-accent mx-auto" />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">צרו קשר</p>
                    <a href="tel:052-717-6000" className="text-lg md:text-xl font-bold text-primary hover:text-accent transition-colors">
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
          <div className="flex justify-center">
            <img src={logo} alt="המרכז לריפוי תודעתי" className="h-24 md:h-32 w-auto mx-auto object-contain" />
          </div>
          
          <div className="pt-6 md:pt-8 pb-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} כל הזכויות שמורות
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
