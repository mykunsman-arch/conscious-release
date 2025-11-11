import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingBubbles from "@/components/FloatingBubbles";
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

const sections = [
  "hero",
  "what-is",
  "trauma-connection",
  "how-it-works",
  "stats",
  "questionnaire",
  "why-here",
  "testimonials",
  "faq",
  "contact"
];

const AutoDisplayPage = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    // Start auto-scroll after 2 seconds
    const startDelay = setTimeout(() => {
      scrollToNextSection();
    }, 2000);

    return () => clearTimeout(startDelay);
  }, []);

  const scrollToNextSection = () => {
    if (isScrollingRef.current) return;
    
    isScrollingRef.current = true;
    
    setCurrentSection(prev => {
      const nextIndex = (prev + 1) % sections.length;
      const element = document.getElementById(sections[nextIndex]);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
      
      // Schedule next scroll after viewing time
      setTimeout(() => {
        isScrollingRef.current = false;
        scrollToNextSection();
      }, 8000); // 8 seconds per section
      
      return nextIndex;
    });
  };

  const handleExit = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen relative">
      {/* Exit Button */}
      <Button
        onClick={handleExit}
        variant="outline"
        size="lg"
        className="fixed top-6 left-6 z-[200] bg-background/95 backdrop-blur-sm hover:bg-destructive hover:text-destructive-foreground border-2 shadow-xl transition-all"
      >
        <X className="h-5 w-5 ml-2" />
        יציאה ממצב תצוגה
      </Button>

      {/* Progress Indicator */}
      <div className="fixed top-6 right-6 z-[200] bg-background/95 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-primary/20 shadow-xl">
        <span className="text-sm font-semibold text-primary">
          {currentSection + 1} / {sections.length}
        </span>
      </div>

      {/* Content */}
      <div className="snap-container">
        <HeroSection />
        <FloatingBubbles />
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
    </div>
  );
};

export default AutoDisplayPage;
