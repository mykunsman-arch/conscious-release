import { useEffect, useState } from "react";
import logo from "@/assets/logo-full.png";

const LogoIntro = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the intro after 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background logo-intro-overlay">
      <div className="logo-intro-content">
        <img 
          src={logo} 
          alt="המרכז לריפוי תודעתי" 
          className="w-64 md:w-96 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default LogoIntro;
