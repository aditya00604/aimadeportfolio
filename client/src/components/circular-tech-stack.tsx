import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  SiReact, 
  SiJavascript, 
  SiPython, 
  SiTypescript, 
  SiNodedotjs, 
  SiHtml5, 
  SiCss3, 
  SiMongodb, 
  SiMysql, 
  SiExpress, 
  SiNextdotjs, 
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiLinux,
  SiCplusplus
} from "react-icons/si";

interface TechItem {
  icon: React.ComponentType<any>;
  name: string;
  color: string;
  radius: number;
  angle: number;
  size: number;
}

export default function CircularTechStack() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const techStack: TechItem[] = [
    // Inner circle (largest icons)
    { icon: SiReact, name: "React", color: "#61DAFB", radius: 80, angle: 0, size: 48 },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", radius: 80, angle: 90, size: 48 },
    { icon: SiPython, name: "Python", color: "#3776AB", radius: 80, angle: 180, size: 48 },
    { icon: SiCplusplus, name: "C++", color: "#00599C", radius: 80, angle: 270, size: 48 },
    
    // Middle circle (medium icons)
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6", radius: 120, angle: 45, size: 36 },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933", radius: 120, angle: 135, size: 36 },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26", radius: 120, angle: 225, size: 36 },
    { icon: SiCss3, name: "CSS3", color: "#1572B6", radius: 120, angle: 315, size: 36 },
    
    // Outer circle (smaller icons)
    { icon: SiMongodb, name: "MongoDB", color: "#47A248", radius: 160, angle: 30, size: 28 },
    { icon: SiMysql, name: "MySQL", color: "#4479A1", radius: 160, angle: 90, size: 28 },
    { icon: SiExpress, name: "Express", color: "#000000", radius: 160, angle: 150, size: 28 },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000", radius: 160, angle: 210, size: 28 },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4", radius: 160, angle: 270, size: 28 },
    { icon: SiGit, name: "Git", color: "#F05032", radius: 160, angle: 330, size: 28 },
    
    // Outermost circle (smallest icons)
    { icon: SiDocker, name: "Docker", color: "#2496ED", radius: 200, angle: 60, size: 20 },
    { icon: SiLinux, name: "Linux", color: "#FCC624", radius: 200, angle: 180, size: 20 },
  ];

  const getPosition = (radius: number, angle: number) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: radius * Math.cos(radian),
      y: radius * Math.sin(radian)
    };
  };

  return (
    <div ref={ref} className="relative w-full h-96 flex items-center justify-center perspective-1000">
      {/* Center Element */}
      <motion.div
        initial={{ scale: 0, rotateY: -180 }}
        animate={inView ? { scale: 1, rotateY: 0 } : {}}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="absolute z-20 bg-gradient-to-br from-electric-blue/20 to-tech-purple/20 rounded-full w-16 h-16 flex items-center justify-center border-2 border-electric-blue/30 backdrop-blur-sm"
      >
        <motion.span 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-electric-blue font-bold text-sm"
        >
          2025
        </motion.span>
      </motion.div>

      {/* Tech Stack Icons */}
      {techStack.map((tech, index) => {
        const position = getPosition(tech.radius, tech.angle);
        const IconComponent = tech.icon;
        
        return (
          <motion.div
            key={tech.name}
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: 0,
              y: 0,
              rotateZ: -180
            }}
            animate={inView ? {
              opacity: 1,
              scale: 1,
              x: position.x,
              y: position.y,
              rotateZ: 0
            } : {}}
            transition={{
              duration: 1.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 80
            }}
            whileHover={{
              scale: 1.3,
              rotateZ: 15,
              zIndex: 50
            }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
          >
            {/* Icon Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2 + (index * 0.1),
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full blur-md"
              style={{ 
                backgroundColor: tech.color,
                width: tech.size + 8,
                height: tech.size + 8,
                left: -4,
                top: -4
              }}
            />
            
            {/* Main Icon */}
            <div 
              className="relative bg-dark-bg/80 backdrop-blur-sm rounded-full p-2 border border-slate-700 group-hover:border-electric-blue transition-all duration-300"
              style={{
                width: tech.size + 8,
                height: tech.size + 8
              }}
            >
              <IconComponent 
                size={tech.size - 8}
                color={tech.color}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: -10 }}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-dark-bg/90 backdrop-blur-sm border border-electric-blue/30 rounded text-xs text-white whitespace-nowrap pointer-events-none"
            >
              {tech.name}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Orbital Rings */}
      {[80, 120, 160, 200].map((radius, index) => (
        <motion.div
          key={radius}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ duration: 2, delay: index * 0.3 }}
          className="absolute border border-electric-blue/10 rounded-full"
          style={{
            width: radius * 2,
            height: radius * 2
          }}
        />
      ))}

      {/* Rotating Ring Effect */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute border-2 border-dashed border-electric-blue/20 rounded-full w-80 h-80"
      />
      
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute border border-neon-green/20 rounded-full w-96 h-96"
      />
    </div>
  );
}