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
    <section className="py-12 md:py-16 bg-muted/30" dir="rtl">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            בואו נדבר
          </h2>
          <p className="text-lg text-foreground/70">
            מתחילים בשיחה קצרה ללא התחייבות
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* WhatsApp CTA */}
          <div className="space-y-4">
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-8 text-xl font-semibold rounded-2xl shadow-lg"
            >
              <MessageCircle className="ml-2 h-6 w-6" />
              שיחה בוואטסאפ
            </Button>

            <Card className="p-6 bg-gradient-to-br from-sage/10 to-primary/10 border-sage/20">
              <div className="space-y-4 text-center">
                <Phone className="h-10 w-10 text-sage mx-auto" />
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">או התקשרו</p>
                  <a href="tel:052-717-6000" className="text-2xl font-bold text-primary hover:text-sage transition-colors">
                    052-717-6000
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="space-y-3 text-center">
                <MapPin className="h-8 w-8 text-sage mx-auto" />
                <div className="text-sm text-foreground/70">
                  <p className="font-semibold mb-1">הטיפול מתקיים</p>
                  <p>בקליניקה או בזום</p>
                  <p className="text-xs mt-2">כנרת 15, בני ברק</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-4 text-right">
              <div>
                <Input
                  placeholder="שם מלא"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-right text-lg p-6 rounded-xl"
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
                  className="text-right text-lg p-6 rounded-xl"
                  dir="rtl"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="הודעה (אופציונלי)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="text-right text-lg p-6 rounded-xl resize-none"
                  dir="rtl"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-xl"
              >
                <Send className="ml-2 h-5 w-5" />
                שלחו ונחזור אליכם
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-12 border-t border-border/50 text-center space-y-4">
          <p className="text-lg font-semibold text-primary">המרכז לריפוי תודעתי</p>
          <p className="text-sm text-muted-foreground">
            © כל הזכויות שמורות • mindcenter.co.il
          </p>
          <p className="text-xs text-muted-foreground/60 max-w-2xl mx-auto">
            התוכן באתר נועד לתמיכה רגשית ותודעתית בלבד, ואינו מהווה טיפול רפואי
          </p>
          <p className="text-xs">
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
