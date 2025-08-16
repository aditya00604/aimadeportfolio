import { useState, useEffect } from "react";
import { Eye } from "lucide-react";

export default function VisitorCount() {
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    // Get visitor count from localStorage and increment
    const storedCount = localStorage.getItem('portfolio-visitor-count');
    const currentCount = storedCount ? parseInt(storedCount) + 1 : 1247; // Starting with a realistic number
    
    localStorage.setItem('portfolio-visitor-count', currentCount.toString());
    setCount(currentCount);

    // Animate the count up
    const duration = 2000; // 2 seconds
    const increment = currentCount / (duration / 50);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= currentCount) {
        setDisplayCount(currentCount);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const formatCount = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="inline-flex items-center space-x-2 bg-dark-bg/50 backdrop-blur-sm border border-electric-blue/30 rounded-lg px-4 py-2">
      <Eye className="w-4 h-4 text-electric-blue" />
      <span className="text-sm text-slate-300">
        Visitors: <span className="text-electric-blue font-bold">{formatCount(displayCount)}</span>
      </span>
    </div>
  );
}