import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsAppCTA from "@/components/FloatingWhatsAppCTA";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const FAQPage = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen">
      <Header />
      <MobileMenu />
      <FloatingWhatsAppCTA />
      <ScrollToTop />
      
      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20"></div>
      
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default FAQPage;
