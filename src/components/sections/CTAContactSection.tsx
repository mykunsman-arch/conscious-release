import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const CTAContactSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page and then scroll to contact
      navigate("/?scrollTo=contact");
    }
  };

  // Handle scroll after navigation
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo === "contact") {
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <section className="py-6 md:py-8 bg-gradient-to-br from-sage/5 to-primary/5" dir="rtl">
      <div className="container mx-auto max-w-4xl text-center space-y-3 md:space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          מוכנים לצאת לדרך?
        </h2>
        <p className="text-base md:text-lg text-foreground/80">
          נשמח לענות על כל שאלה ולתאם פגישת היכרות ללא התחייבות
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-sage hover:bg-sage/90 text-white px-8 py-5 md:py-6 text-base md:text-lg rounded-xl shadow-lg group"
        >
          בואו נדבר
          <ArrowLeft className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:-translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default CTAContactSection;
