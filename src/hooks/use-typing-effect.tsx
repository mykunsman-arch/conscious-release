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

    setDisplayedText("");
    setIsComplete(false);
    let currentIndex = 0;
    let interval: NodeJS.Timeout;

    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        
        if (loop) {
          setTimeout(() => {
            setDisplayedText("");
            setIsComplete(false);
            currentIndex = 0;
          }, 2000);
        }
      }
    };

    interval = setInterval(typeNextChar, speed);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [text, speed, shouldStart, loop]);

  return { displayedText, isComplete };
};
