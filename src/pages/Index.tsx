import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import TraumaConnectionSection from "@/components/sections/TraumaConnectionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import QuestionnaireSection from "@/components/sections/QuestionnaireSection";
import WhyHereSection from "@/components/sections/WhyHereSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />
      <HeroSection />
      <WhatIsSection />
      <TraumaConnectionSection />
      <HowItWorksSection />
      <QuestionnaireSection />
      <WhyHereSection />
      <ContactSection />
    </div>
  );
};

export default Index;
