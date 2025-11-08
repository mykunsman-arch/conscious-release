import { useState, useEffect } from "react";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollProgressDots from "@/components/ScrollProgressDots";
import StickyCTA from "@/components/StickyCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingWhatsAppCTA from "@/components/FloatingWhatsAppCTA";
import FloatingBubbles from "@/components/FloatingBubbles";
import LogoIntro from "@/components/LogoIntro";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import TraumaConnectionSection from "@/components/sections/TraumaConnectionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import StatsSection from "@/components/sections/StatsSection";
import QuestionnaireSection from "@/components/sections/QuestionnaireSection";
import WhyHereSection from "@/components/sections/WhyHereSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  useSmoothScroll();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }
  
  return (
    <div className="min-h-screen snap-container">
      <FloatingBubbles />
      <LogoIntro />
      <ScrollProgressBar />
      <ScrollProgressDots />
      <Header />
      <MobileMenu />
      <StickyCTA />
      <WhatsAppButton />
      <FloatingWhatsAppCTA />
      <HeroSection />
      <WhatIsSection />
      <TraumaConnectionSection />
      <HowItWorksSection />
      <StatsSection />
      <QuestionnaireSection />
      <WhyHereSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Index;
