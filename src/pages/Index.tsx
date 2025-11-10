import { useState, useEffect } from "react";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import StickyCTA from "@/components/StickyCTA";
import FloatingWhatsAppCTA from "@/components/FloatingWhatsAppCTA";
import FloatingBubbles from "@/components/FloatingBubbles";
import CombinedIntro from "@/components/CombinedIntro";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import ScrollToTop from "@/components/ScrollToTop";
import WhatIsSection from "@/components/sections/WhatIsSection";
import TraumaConnectionSection from "@/components/sections/TraumaConnectionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyHereSection from "@/components/sections/WhyHereSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  useSmoothScroll();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    setShowIntro(false);
  };

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  
  return (
    <div className="min-h-screen snap-container">
      <CombinedIntro showIntro={showIntro} onContinue={handleContinue} />
      <div className={`transition-all duration-500 ${showIntro ? 'invisible pointer-events-none' : 'visible pointer-events-auto'}`}>
        <FloatingBubbles />
        <ScrollProgressBar />
        <Header />
        <MobileMenu />
        <StickyCTA />
        <FloatingWhatsAppCTA />
        <ScrollToTop />
        <WhatIsSection />
        <TraumaConnectionSection />
        <HowItWorksSection />
        <WhyHereSection />
        <TestimonialsSection />
        <StatsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
