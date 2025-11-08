import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.jpg";

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
    <section id="contact" className="py-20 bg-gradient-to-b from-muted to-background" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            צרו קשר
          </h2>
          
          <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6 text-right">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    שם מלא
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-right"
                    dir="rtl"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    טלפון
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="text-right"
                    dir="rtl"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    אימייל
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="text-right"
                    dir="rtl"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    הודעה
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="text-right"
                    dir="rtl"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  שלחו ונחזור אליכם
                </Button>
              </form>
            </Card>
            
            <div className="space-y-6 flex flex-col justify-center">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white w-full py-8 text-xl"
              >
                שיחה מיידית בוואטסאפ
              </Button>
              
              <div className="text-center p-6 bg-card rounded-lg">
                <p className="text-foreground/70">
                  הטיפול מתקיים בקליניקה (בני ברק)
                  <br />
                  ובמפגשי זום
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 pt-12 border-t border-border" dir="rtl">
        <div className="container mx-auto px-4 text-center space-y-6">
          <img src={logo} alt="המרכז לריפוי תודעתי" className="h-20 w-20 mx-auto object-contain" />
          <p className="text-2xl font-semibold text-primary">המרכז לריפוי תודעתי</p>
          <p className="text-lg text-accent">להשתחרר. להתחבר. להתרפא.</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} כל הזכויות שמורות
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
