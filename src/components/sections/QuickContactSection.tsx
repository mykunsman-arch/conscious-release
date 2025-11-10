import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const QuickContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "הטופס נשלח בהצלחה",
      description: "נחזור אליכם בהקדם",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000?text=שלום%20🌿%20הגעתי%20מהאתר%20mindcenter.co.il", "_blank");
  };

  return (
    <section id="contact" className="py-4 md:py-6 bg-muted/30" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-2 mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            בואו נדבר
          </h2>
          <p className="text-sm md:text-base text-foreground/70">
            מתחילים בשיחה קצרה ללא התחייבות
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* WhatsApp CTA */}
          <div className="space-y-3 md:space-y-4">
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-6 md:py-7 text-lg md:text-xl font-semibold rounded-xl shadow-lg"
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              שיחה בוואטסאפ
            </Button>

            <Card className="p-4 md:p-5 bg-gradient-to-br from-sage/10 to-primary/10 border-sage/20">
              <div className="space-y-2 md:space-y-3 text-center">
                <Phone className="h-8 w-8 md:h-9 md:w-9 text-sage mx-auto" />
                <div>
                  <p className="text-xs md:text-sm font-semibold text-muted-foreground mb-1">או התקשרו</p>
                  <a href="tel:052-717-6000" className="text-xl md:text-2xl font-bold text-primary hover:text-sage transition-colors">
                    052-717-6000
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-5 bg-card border-border/50">
              <div className="space-y-2 text-center">
                <MapPin className="h-6 w-6 md:h-7 md:w-7 text-sage mx-auto" />
                <div className="text-xs md:text-sm text-foreground/70">
                  <p className="font-semibold mb-1">הטיפול מתקיים</p>
                  <p>בקליניקה או בזום</p>
                  <p className="text-[10px] md:text-xs mt-1">כנרת 15, בני ברק</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-4 md:p-6 bg-card/80 backdrop-blur-sm border-2 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-3 text-right">
              <div>
                <Input
                  placeholder="שם מלא"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-right text-sm md:text-base p-4 md:p-5 rounded-xl"
                  dir="rtl"
                />
              </div>
              
              <div>
                <Input
                  placeholder="טלפון"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="text-right text-sm md:text-base p-4 md:p-5 rounded-xl"
                  dir="rtl"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="הודעה (אופציונלי)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="text-right text-sm md:text-base p-4 md:p-5 rounded-xl resize-none"
                  dir="rtl"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 md:py-5 text-base md:text-lg rounded-xl"
              >
                <Send className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                שלחו ונחזור אליכם
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border/50 text-center space-y-2">
          <p className="text-base md:text-lg font-semibold text-primary">המרכז לריפוי תודעתי</p>
          <p className="text-xs md:text-sm text-muted-foreground">
            © כל הזכויות שמורות • mindcenter.co.il
          </p>
          <p className="text-[10px] md:text-xs text-muted-foreground/60 max-w-2xl mx-auto px-2">
            התוכן באתר נועד לתמיכה רגשית ותודעתית בלבד, ואינו מהווה טיפול רפואי
          </p>
          <p className="text-[10px] md:text-xs">
            <Link to="/terms-of-service" className="hover:text-accent transition-colors underline">
              תנאי שימוש
            </Link>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default QuickContactSection;
