import { useState, useEffect } from "react";
import { Monitor, Keyboard, Mouse, Cpu, HardDrive } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SplineScene() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const floatingElements = [
    { icon: Keyboard, delay: 0, position: { x: 0, y: 0 }, color: "text-electric-blue" },
    { icon: Mouse, delay: 0.2, position: { x: 50, y: -30 }, color: "text-neon-green" },
    { icon: Cpu, delay: 0.4, position: { x: -40, y: 40 }, color: "text-tech-purple" },
    { icon: HardDrive, delay: 0.6, position: { x: 30, y: 50 }, color: "text-electric-blue" },
    { icon: Monitor, delay: 0.8, position: { x: -50, y: -20 }, color: "text-neon-green" }
  ];

  return (
    <div ref={ref} className="relative w-96 h-96 flex items-center justify-center">
      {/* Main 3D Container */}
      <motion.div 
        initial={{ scale: 0, rotateY: -180 }}
        animate={inView ? { scale: 1, rotateY: 0 } : { scale: 0, rotateY: -180 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
        className="relative w-80 h-80 bg-gradient-to-br from-electric-blue/20 to-tech-purple/20 rounded-full tech-glow backdrop-blur-sm border border-electric-blue/30"
        style={{
          background: `conic-gradient(from 0deg, 
            rgba(0, 212, 255, 0.1), 
            rgba(138, 92, 246, 0.1), 
            rgba(34, 197, 94, 0.1), 
            rgba(0, 212, 255, 0.1))`
        }}
      >
        {/* Central Keyboard */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={isLoaded ? { 
            scale: [0, 1.2, 1], 
            rotate: [0, 360, 0] 
          } : {}}
          transition={{ 
            duration: 2, 
            times: [0, 0.6, 1],
            type: "spring",
            stiffness: 200 
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative">
            <Keyboard className="w-20 h-20 text-electric-blue drop-shadow-lg" />
            {/* Typing Effect */}
            <motion.div
              animate={inView ? {
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-2 bg-electric-blue/20 rounded-lg blur-sm"
            />
          </div>
        </motion.div>

        {/* Floating Elements */}
        {floatingElements.map((element, index) => {
          const IconComponent = element.icon;
          return (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                scale: 0,
                x: 0,
                y: 0,
                rotateX: -90
              }}
              animate={inView ? {
                opacity: [0, 1, 0.8],
                scale: [0, 1.2, 1],
                x: element.position.x,
                y: element.position.y,
                rotateX: 0,
                rotateY: [0, 180, 360]
              } : {}}
              transition={{
                duration: 2,
                delay: element.delay,
                type: "spring",
                stiffness: 100
              }}
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            >
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  rotateZ: [-10, 10, -10]
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <IconComponent className={`w-8 h-8 ${element.color} drop-shadow-md`} />
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: element.delay
                  }}
                  className={`absolute -inset-1 ${element.color.replace('text-', 'bg-')}/10 rounded blur-sm`}
                />
              </motion.div>
            </motion.div>
          );
        })}

        {/* Particle Effect */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? {
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, (Math.cos(i * 45 * Math.PI / 180) * 150)],
              y: [0, (Math.sin(i * 45 * Math.PI / 180) * 150)]
            } : {}}
            transition={{
              duration: 4,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-electric-blue/60 rounded-full"
          />
        ))}

        {/* Rotating Ring */}
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-4 border-2 border-dashed border-electric-blue/30 rounded-full"
        />
      </motion.div>
      
      {/* Loading State */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center bg-dark-bg/80 rounded-full"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Monitor className="w-12 h-12 text-electric-blue" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
