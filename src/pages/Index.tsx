import { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingBubbles from "@/components/FloatingBubbles";
import Header from "@/components/Header";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollProgressDots from "@/components/ScrollProgressDots";
import StickyCTA from "@/components/StickyCTA";
import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import TraumaConnectionSection from "@/components/sections/TraumaConnectionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyHereSection from "@/components/sections/WhyHereSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    // Start continuous smooth scroll after 2 seconds
    const startDelay = setTimeout(() => {
      startAutoScroll();
    }, 2000);

    // Pause scrolling on any user interaction
    const pauseScrolling = () => {
      isPausedRef.current = true;
      setTimeout(() => {
        isPausedRef.current = false;
      }, 3000); // Resume after 3 seconds of no interaction
    };

    // Add listeners for user interactions
    document.addEventListener('mousedown', pauseScrolling);
    document.addEventListener('touchstart', pauseScrolling);
    document.addEventListener('wheel', pauseScrolling);

    return () => {
      clearTimeout(startDelay);
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      document.removeEventListener('mousedown', pauseScrolling);
      document.removeEventListener('touchstart', pauseScrolling);
      document.removeEventListener('wheel', pauseScrolling);
    };
  }, []);

  const startAutoScroll = () => {
    // Continuous smooth scroll - 1 pixel every 50ms = very slow and readable
    scrollIntervalRef.current = setInterval(() => {
      // Skip if paused
      if (isPausedRef.current) {
        return;
      }

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (currentScroll >= maxScroll) {
        // Stop scrolling when reaching the end
        if (scrollIntervalRef.current) {
          clearInterval(scrollIntervalRef.current);
        }
        // Wait 5 seconds before reloading
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        // Scroll down by 2 pixels for smooth movement
        window.scrollBy({ top: 2, behavior: "auto" });
      }
    }, 50); // 50ms interval = smooth 20fps scrolling
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
      <Header isFullscreen={isFullscreen} onToggleFullscreen={toggleFullscreen} />
      <ScrollProgressBar />
      <ScrollProgressDots />
      <StickyCTA />
      
      {/* Fullscreen Button - subtle and non-intrusive */}
      <div className="fixed bottom-6 left-6 z-[200]">
        <Button
          onClick={toggleFullscreen}
          variant="ghost"
          size="icon"
          className="bg-background/50 backdrop-blur-sm hover:bg-background/80 border border-border/30 shadow-lg transition-all h-9 w-9 opacity-30 hover:opacity-100"
        >
          {isFullscreen ? (
            <Minimize2 className="h-4 w-4" />
          ) : (
            <Maximize2 className="h-4 w-4" />
          )}
        </Button>
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

export default Index;
