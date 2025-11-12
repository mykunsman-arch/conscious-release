import { useEffect, useState, useRef } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(() => {
        const now = Date.now();
        // Throttle to max 60fps
        if (now - lastUpdateRef.current < 16) return;
        
        lastUpdateRef.current = now;
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-muted/20 via-muted/30 to-muted/20 z-[99] shadow-lg pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary via-sage to-primary will-change-[width]"
        style={{ 
          width: `${scrollProgress}%`,
          transition: 'width 0.1s linear'
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
