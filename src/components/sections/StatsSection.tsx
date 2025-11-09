import { useEffect, useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Users, Heart, Star, Award } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  isVisible: boolean;
}

const Counter = ({ end, duration = 2000, suffix = "", isVisible }: CounterProps) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    
    hasAnimated.current = true;
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return (
    <span className="text-gradient-shimmer font-black text-5xl md:text-6xl lg:text-7xl">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ variant: "scale", threshold: 0.2 });

  const stats = [
    { icon: Users, value: 500, suffix: "+", label: "לקוחות מרוצים", color: "text-sage" },
    { icon: Heart, value: 95, suffix: "%", label: "שביעות רצון", color: "text-primary" },
    { icon: Star, value: 15, suffix: "+", label: "שנות ניסיון", color: "text-accent" },
    { icon: Award, value: 98, suffix: "%", label: "המלצות חוזרות", color: "text-sage" },
  ];

  return (
    <section ref={ref} className="snap-section py-16 md:py-20 bg-background/20 relative overflow-hidden" dir="rtl">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 section-scale ${isVisible ? 'visible' : ''}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-effect p-6 md:p-8 rounded-3xl text-center space-y-3 md:space-y-4 hover:scale-105 transition-transform duration-300 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <stat.icon className={`h-10 w-10 md:h-12 md:w-12 mx-auto ${stat.color} transition-all`} />
              <div>
                <Counter end={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <p className="text-sm md:text-base font-semibold text-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
