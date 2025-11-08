import { useState, useEffect } from "react";

interface TypingEffectOptions {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
}

export const useTypingEffect = ({ text, speed = 80, delay = 0, loop = false }: TypingEffectOptions) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setShouldStart(true);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!shouldStart) return;

    let currentIndex = 0;
    setDisplayedText("");
    setIsComplete(false);

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
        
        if (loop) {
          setTimeout(() => {
            setDisplayedText("");
            setIsComplete(false);
            currentIndex = 0;
          }, 2000);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, shouldStart, loop]);

  return { displayedText, isComplete };
};
