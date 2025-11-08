import { useEffect, useRef, useState } from "react";

export type AnimationVariant = 
  | "fade-up"
  | "fade-down" 
  | "slide-left"
  | "slide-right"
  | "scale"
  | "zoom"
  | "diagonal";

interface UseScrollAnimationOptions {
  threshold?: number;
  variant?: AnimationVariant;
  delay?: number;
}

export const useScrollAnimation = (options?: UseScrollAnimationOptions | number) => {
  const threshold = typeof options === "number" ? options : options?.threshold ?? 0.1;
  const variant = typeof options === "object" ? options.variant : undefined;
  const delay = typeof options === "object" ? options.delay : undefined;
  
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  const getAnimationClass = () => {
    if (!variant) return "";
    
    const animationMap: Record<AnimationVariant, string> = {
      "fade-up": "animate-slide-up-fade",
      "fade-down": "animate-slide-down-fade",
      "slide-left": "animate-slide-left-fade",
      "slide-right": "animate-slide-right-fade",
      "scale": "animate-scale-fade",
      "zoom": "animate-zoom-in",
      "diagonal": "animate-reveal-diagonal"
    };
    
    return animationMap[variant] || "";
  };

  return { ref, isVisible, animationClass: getAnimationClass() };
};
