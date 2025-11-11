import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingBubbles from "@/components/FloatingBubbles";
import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import TraumaConnectionSection from "@/components/sections/TraumaConnectionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyHereSection from "@/components/sections/WhyHereSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

const AutoDisplayPage = () => {
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start continuous smooth scroll after 2 seconds
    const startDelay = setTimeout(() => {
      startAutoScroll();
    }, 2000);

    return () => {
      clearTimeout(startDelay);
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  const startAutoScroll = () => {
    // Continuous smooth scroll - 1 pixel every 50ms = very slow and readable
    scrollIntervalRef.current = setInterval(() => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (currentScroll >= maxScroll) {
        // Loop back to top smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Scroll down by 2 pixels for smooth movement
        window.scrollBy({ top: 2, behavior: "auto" });
      }
    }, 50); // 50ms interval = smooth 20fps scrolling
  };

  const handleExit = () => {
    navigate("/");
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.error("Error entering fullscreen:", err);
      }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } catch (err) {
        console.error("Error exiting fullscreen:", err);
      }
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen relative">
      {/* Control Buttons */}
      <div className="fixed top-6 left-6 z-[200] flex gap-3">
        <Button
          onClick={handleExit}
          variant="outline"
          size="icon"
          className="bg-background/95 backdrop-blur-sm hover:bg-destructive hover:text-destructive-foreground border-2 shadow-xl transition-all h-11 w-11"
        >
          <X className="h-5 w-5" />
        </Button>
        
        <Button
          onClick={toggleFullscreen}
          variant="outline"
          size="icon"
          className="bg-background/95 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground border-2 shadow-xl transition-all h-11 w-11"
        >
          {isFullscreen ? (
            <Minimize2 className="h-5 w-5" />
          ) : (
            <Maximize2 className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Auto-scroll Indicator */}
      <div className="fixed top-6 right-6 z-[200] bg-background/95 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-sage/30 shadow-xl">
        <span className="text-sm font-semibold text-sage flex items-center gap-2">
          <span className="w-2 h-2 bg-sage rounded-full animate-pulse"></span>
          גלילה אוטומטית
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
        <WhyHereSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default AutoDisplayPage;
