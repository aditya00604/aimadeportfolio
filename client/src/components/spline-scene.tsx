import { useState, useEffect } from "react";
import { Monitor } from "lucide-react";

export default function SplineScene() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for Spline scene
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-96 h-96 bg-gradient-to-br from-electric-blue/10 to-tech-purple/10 rounded-full flex items-center justify-center tech-glow animate-pulse-slow">
      {/* Spline scene will be integrated here */}
      {!isLoaded ? (
        <div className="text-6xl text-electric-blue animate-pulse">
          <Monitor />
        </div>
      ) : (
        <div className="text-6xl text-electric-blue">
          <Monitor />
        </div>
      )}
      
      {/* Placeholder for Spline 3D Scene */}
      <div className="absolute inset-0 rounded-full opacity-30">
        {/* Future Spline integration point */}
        {/* <SplineViewer url="https://prod.spline.design/YOUR_SCENE_URL" /> */}
      </div>
    </div>
  );
}
