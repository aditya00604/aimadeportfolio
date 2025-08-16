import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Keyboard, Mouse, MonitorSpeaker, Cpu } from "lucide-react";

interface Keyboard3DProps {
  variant?: "keyboard" | "mouse" | "monitor" | "cpu";
  size?: "sm" | "md" | "lg";
  animationType?: "float" | "rotate" | "bounce" | "typewriter";
}

export default function Keyboard3D({ 
  variant = "keyboard", 
  size = "md", 
  animationType = "float" 
}: Keyboard3DProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const getIcon = () => {
    switch (variant) {
      case "mouse": return Mouse;
      case "monitor": return MonitorSpeaker;
      case "cpu": return Cpu;
      default: return Keyboard;
    }
  };

  const getSize = () => {
    switch (size) {
      case "sm": return "w-8 h-8";
      case "lg": return "w-16 h-16";
      default: return "w-12 h-12";
    }
  };

  const getAnimation = () => {
    switch (animationType) {
      case "rotate":
        return {
          rotateY: [0, 360],
          rotateX: [0, 15, 0],
        };
      case "bounce":
        return {
          y: [0, -20, 0],
          rotateZ: [0, 5, -5, 0],
        };
      case "typewriter":
        return {
          scale: [1, 1.1, 1],
          rotateY: [0, 10, -10, 0],
        };
      default:
        return {
          y: [0, -10, 0],
          rotateX: [0, 5, 0],
        };
    }
  };

  const IconComponent = getIcon();
  const sizeClass = getSize();
  const animation = getAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0, rotateY: -180 }}
      animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{
        duration: 1.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="relative perspective-1000 transform-3d"
    >
      {/* Main Icon */}
      <motion.div
        animate={inView ? animation : {}}
        transition={{
          duration: animationType === "typewriter" ? 1.5 : 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10"
      >
        <IconComponent className={`${sizeClass} text-electric-blue drop-shadow-lg`} />
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        animate={inView ? {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute inset-0 bg-electric-blue/20 rounded-lg blur-md ${sizeClass}`}
      />

      {/* Particles */}
      {animationType === "typewriter" && Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? {
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, (Math.cos(i * 90 * Math.PI / 180) * 30)],
            y: [0, (Math.sin(i * 90 * Math.PI / 180) * 30)]
          } : {}}
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="absolute top-1/2 left-1/2 w-1 h-1 bg-neon-green rounded-full"
        />
      ))}

      {/* Shadow */}
      <motion.div
        animate={inView ? {
          scaleX: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        } : {}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute top-full left-1/2 transform -translate-x-1/2 w-8 h-2 bg-electric-blue/20 rounded-full blur-sm`}
      />
    </motion.div>
  );
}