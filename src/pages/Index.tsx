import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2 } from "lucide-react";
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
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reloadTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Start continuous smooth scroll after 2 seconds
    const startDelay = setTimeout(() => {
      startAutoScroll();
    }, 2000);

    // Stop scrolling on any user interaction and resume after delay
    const stopScrolling = () => {
      // Don't interrupt if we're already at the end and waiting to reload
      if (reloadTimeoutRef.current) {
        return;
      }
      
      // Clear existing interval
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
      
      // Clear existing resume timeout
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
      
      // Resume after 3 seconds of no interaction
      resumeTimeoutRef.current = setTimeout(() => {
        startAutoScroll();
      }, 3000);
    };

    // Add listeners for user interactions
    document.addEventListener('mousedown', stopScrolling);
    document.addEventListener('touchstart', stopScrolling);
    document.addEventListener('wheel', stopScrolling);
    document.addEventListener('keydown', stopScrolling);

    return () => {
      clearTimeout(startDelay);
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
      if (reloadTimeoutRef.current) {
        clearTimeout(reloadTimeoutRef.current);
      }
      document.removeEventListener('mousedown', stopScrolling);
      document.removeEventListener('touchstart', stopScrolling);
      document.removeEventListener('wheel', stopScrolling);
      document.removeEventListener('keydown', stopScrolling);
    };
  }, []);

  const startAutoScroll = () => {
    // Don't start if already running
    if (scrollIntervalRef.current) {
      return;
    }

    // Continuous smooth scroll - 2 pixels every 50ms = very slow and readable
    scrollIntervalRef.current = setInterval(() => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (currentScroll >= maxScroll) {
        // Stop scrolling when reaching the end
        if (scrollIntervalRef.current) {
          clearInterval(scrollIntervalRef.current);
          scrollIntervalRef.current = null;
        }
        // Wait 5 seconds before reloading
        reloadTimeoutRef.current = setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          setTimeout(() => {
            window.location.reload();
          }, 100);
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
      {/* Fullscreen Button */}
      <div className="fixed top-6 left-6 z-[200] hidden md:block">
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

      <Header />
      <ScrollProgressBar />
      <ScrollProgressDots />
      <StickyCTA />

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
