import { useEffect, useState } from "react";
import logo from "@/assets/logo-full.png";

const LogoBloom = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Background overlay that fades out */}
      <div className="absolute inset-0 bg-background animate-logo-bloom-bg" />
      
      {/* Logo that blooms like a flower */}
      <div className="relative z-10 animate-logo-bloom">
        <img 
          src={logo} 
          alt="המרכז לריפוי תודעתי" 
          className="w-48 md:w-72 h-auto object-contain drop-shadow-2xl"
        />
        
        {/* Soft glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-sage/30 via-peach/20 to-transparent blur-3xl animate-logo-bloom-glow" />
      </div>
      
      {/* Petals effect - subtle circles that expand */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-32 h-32 rounded-full bg-sage/10 animate-logo-bloom-petal-1" />
        <div className="absolute w-32 h-32 rounded-full bg-peach/10 animate-logo-bloom-petal-2" />
        <div className="absolute w-32 h-32 rounded-full bg-primary/10 animate-logo-bloom-petal-3" />
      </div>
    </div>
  );
};

export default LogoBloom;
