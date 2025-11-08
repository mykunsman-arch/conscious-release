import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 group bg-gradient-to-br from-sage to-primary hover:from-sage/90 hover:to-primary/90 text-white rounded-full p-4 md:p-5 shadow-2xl hover:shadow-sage/30 transition-all duration-300 min-h-[56px] min-w-[56px] touch-manipulation active:scale-95 flex items-center justify-center ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
      }`}
      aria-label="חזרה למעלה"
    >
      <ArrowUp className="h-6 w-6 md:h-7 md:w-7 transition-transform group-hover:-translate-y-1" />
    </Button>
  );
};

export default ScrollToTop;
