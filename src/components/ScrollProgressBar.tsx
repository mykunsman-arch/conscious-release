import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-muted/20 via-muted/30 to-muted/20 z-[100] shadow-lg">
      <div
        className="h-full bg-gradient-to-r from-accent via-gold to-peach transition-all duration-150 ease-out relative overflow-hidden"
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-slide"></div>
      </div>
    </div>
  );
};

export default ScrollProgressBar;
