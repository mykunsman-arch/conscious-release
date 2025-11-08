import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted px-4 pt-24" dir="rtl">
      <div className="container mx-auto max-w-4xl text-center space-y-8 animate-fade-in">
        <img src={logo} alt="המרכז לריפוי תודעתי" className="h-32 w-32 mx-auto object-contain" />
        
        <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
          המרכז לריפוי תודעתי
        </h1>
        
        <p className="text-2xl md:text-3xl text-accent font-medium">
          להשתחרר. להתחבר. להתרפא.
        </p>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          כל ריפוי אמיתי מתחיל בתודעה.
          <br />
          כאן נוצר מרחב רגוע ומכיל, שבו אפשר לשחרר עומסים רגשיים ודפוסים מעכבים,
          <br />
          ולהתחבר מחדש לשקט ולחופש הפנימי.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("questionnaire")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
          >
            בדקו אם התהליך מתאים לכם
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={handleWhatsAppClick}
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg"
          >
            שיחה בוואטסאפ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
