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
        className="h-full bg-gradient-to-r from-primary via-sage to-primary transition-all duration-150 ease-out relative overflow-hidden"
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{
          transform: `translateX(${scrollProgress}%)`,
          transition: 'transform 0.15s ease-out'
        }}></div>
      </div>
    </div>
  );
};

export default ScrollProgressBar;
