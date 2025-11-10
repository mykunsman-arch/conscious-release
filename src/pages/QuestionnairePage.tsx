import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsAppCTA from "@/components/FloatingWhatsAppCTA";
import QuestionnaireSection from "@/components/sections/QuestionnaireSection";
import ContactSection from "@/components/sections/ContactSection";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const QuestionnairePage = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen">
      <Header />
      <MobileMenu />
      <FloatingWhatsAppCTA />
      <ScrollToTop />
      
      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20"></div>
      
      <QuestionnaireSection />
      <ContactSection />
    </div>
  );
};

export default QuestionnairePage;
