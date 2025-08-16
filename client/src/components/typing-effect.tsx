import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypingEffect({ text, speed = 50, className = "" }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // Animate cursor after typing is complete
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 600);
      
      return () => clearInterval(cursorTimer);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={`${className} inline-block relative max-w-full break-words whitespace-normal leading-relaxed`}>
      <span className="inline">{displayedText}</span>
      <span 
        className={`inline-block w-0.5 h-6 bg-neon-green ml-1 transition-opacity duration-200 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
}
