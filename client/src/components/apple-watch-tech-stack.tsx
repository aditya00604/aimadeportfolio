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
  SiCplusplus,
  SiFlask,
  SiFastapi,
  SiFirebase,
  SiSqlite,
  SiScikitlearn,
  SiKaggle,
  SiOpencv,
  SiPytorch,
  SiTensorflow,
  SiPrisma,
  SiJsonwebtokens,
  SiAxios,
  SiJetbrains
} from "react-icons/si";
import { BrainCircuit, Database, Cloud, Cpu, Gamepad2, Bot, Eye, Zap } from "lucide-react";

interface TechItem {
  icon: React.ComponentType<any>;
  name: string;
  color: string;
  category: string;
  isCustomIcon?: boolean;
}

export default function AppleWatchTechStack() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Comprehensive tech stack from resume projects
  const techStack: TechItem[] = [
    // Core Programming Languages
    { icon: SiPython, name: "Python", color: "#3776AB", category: "languages" },
    { icon: SiCplusplus, name: "C++", color: "#00599C", category: "languages" },
    { icon: SiCplusplus, name: "Java", color: "#ED8B00", category: "languages" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", category: "languages" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6", category: "languages" },
    
    // Frontend Technologies
    { icon: SiReact, name: "React.js", color: "#61DAFB", category: "frontend" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000", category: "frontend" },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26", category: "frontend" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6", category: "frontend" },
    { icon: SiTailwindcss, name: "TailwindCSS", color: "#06B6D4", category: "frontend" },
    
    // Backend Technologies
    { icon: SiFlask, name: "Flask", color: "#000000", category: "backend" },
    { icon: SiFastapi, name: "FastAPI", color: "#009688", category: "backend" },
    { icon: SiExpress, name: "Express.js", color: "#000000", category: "backend" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933", category: "backend" },
    
    // Databases
    { icon: SiMysql, name: "MySQL", color: "#4479A1", category: "database" },
    { icon: SiSqlite, name: "SQLite", color: "#003B57", category: "database" },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28", category: "database" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248", category: "database" },
    { icon: SiPrisma, name: "Prisma", color: "#2D3748", category: "database" },
    
    // Machine Learning & AI
    { icon: SiScikitlearn, name: "Scikit-learn", color: "#F7931E", category: "ml" },
    { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C", category: "ml" },
    { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00", category: "ml" },
    { icon: BrainCircuit, name: "XGBoost", color: "#FF6B6B", category: "ml", isCustomIcon: true },
    { icon: Bot, name: "LangChain", color: "#1C3A5B", category: "ml", isCustomIcon: true },
    { icon: Eye, name: "YOLOv11", color: "#FF4081", category: "ml", isCustomIcon: true },
    { icon: Bot, name: "Gemini API", color: "#4285F4", category: "ml", isCustomIcon: true },
    { icon: Database, name: "Pinecone", color: "#7C3AED", category: "ml", isCustomIcon: true },
    { icon: Cpu, name: "MobileNetV2", color: "#FF9800", category: "ml", isCustomIcon: true },
    
    // DevOps & Tools
    { icon: SiDocker, name: "Docker", color: "#2496ED", category: "devops" },
    { icon: SiGit, name: "Git", color: "#F05032", category: "devops" },
    { icon: SiLinux, name: "Linux", color: "#FCC624", category: "devops" },
    { icon: SiKaggle, name: "Kaggle", color: "#20BEFF", category: "devops" },
    { icon: SiJetbrains, name: "Jetson Nano", color: "#000000", category: "devops" },
    
    // Additional Tools
    { icon: SiAxios, name: "Axios", color: "#5A29E4", category: "tools" },
    { icon: SiJsonwebtokens, name: "JWT", color: "#000000", category: "tools" },
    { icon: Cloud, name: "MQTT", color: "#660066", category: "tools", isCustomIcon: true },
    { icon: Zap, name: "NextAuth", color: "#BD34FE", category: "tools", isCustomIcon: true },
  ];

  // Apple Watch style hexagonal grid positioning
  const getHexPosition = (index: number, total: number) => {
    const layers = Math.ceil(Math.sqrt(total / 3));
    const itemsPerLayer = Math.max(6, Math.ceil(total / layers));
    const layer = Math.floor(index / itemsPerLayer);
    const positionInLayer = index % itemsPerLayer;
    
    const radius = 40 + (layer * 60); // Reduced radius for smaller layout
    const angleStep = (2 * Math.PI) / Math.max(itemsPerLayer, 6);
    const angle = positionInLayer * angleStep;
    
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle)
    };
  };

  const categoryColors = {
    languages: "#FF6B6B",
    frontend: "#4ECDC4", 
    backend: "#45B7D1",
    database: "#96CEB4",
    ml: "#FFEAA7",
    devops: "#DDA0DD",
    tools: "#98D8C8"
  };

  return (
    <div ref={ref} className="relative w-full h-[600px] flex items-center justify-center perspective-1000 overflow-hidden">
      {/* Central Hub */}
      <motion.div
        initial={{ scale: 0, rotateY: -180 }}
        animate={inView ? { scale: 1, rotateY: 0 } : {}}
        transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
        className="absolute z-30 bg-gradient-to-br from-electric-blue/30 to-tech-purple/30 rounded-full w-20 h-20 flex items-center justify-center border-2 border-electric-blue/50 backdrop-blur-sm shadow-2xl"
      >
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-center"
        >
          <div className="text-electric-blue font-bold text-xs">AKM</div>
          <div className="text-neon-green font-bold text-xs">2025</div>
        </motion.div>
      </motion.div>

      {/* Tech Stack Icons in Apple Watch Style */}
      {techStack.map((tech, index) => {
        const position = getHexPosition(index, techStack.length);
        const IconComponent = tech.icon;
        const categoryColor = categoryColors[tech.category as keyof typeof categoryColors];
        
        return (
          <motion.div
            key={tech.name}
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: 0,
              y: 0,
              rotateY: -90
            }}
            animate={inView ? {
              opacity: 1,
              scale: 1,
              x: position.x,
              y: position.y,
              rotateY: 0
            } : {}}
            transition={{
              duration: 1.8,
              delay: index * 0.08,
              type: "spring",
              stiffness: 60
            }}
            whileHover={{
              scale: 1.4,
              rotateY: 10,
              zIndex: 100
            }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
          >
            {/* Glowing Ring Effect */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 3 + (index * 0.05),
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full blur-sm"
              style={{ 
                backgroundColor: categoryColor,
                width: 44,
                height: 44,
                left: -2,
                top: -2
              }}
            />
            
            {/* Icon Container */}
            <motion.div 
              className="relative bg-gradient-to-br from-dark-bg/90 to-slate-800/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center border border-slate-600 group-hover:border-electric-blue transition-all duration-300 shadow-lg"
              whileHover={{
                boxShadow: `0 0 20px ${categoryColor}40`
              }}
            >
              {tech.isCustomIcon ? (
                <IconComponent 
                  size={20}
                  color={tech.color}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <IconComponent 
                  size={20}
                  color={tech.color}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              )}
            </motion.div>
            
            {/* Floating Label */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              whileHover={{ opacity: 1, y: -15, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-3 py-1 bg-gradient-to-r from-dark-bg/95 to-slate-800/95 backdrop-blur-md border border-electric-blue/40 rounded-lg text-xs text-white whitespace-nowrap pointer-events-none shadow-xl z-50"
              style={{
                borderColor: categoryColor + "60"
              }}
            >
              <div className="font-semibold">{tech.name}</div>
              <div className="text-xs opacity-75 capitalize">{tech.category}</div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Category Legend */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-3 p-4"
      >
        {Object.entries(categoryColors).map(([category, color]) => (
          <motion.div
            key={category}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-dark-bg/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-700 hover:border-electric-blue/50 transition-all duration-300"
          >
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-xs text-slate-300 capitalize font-medium">
              {category === 'ml' ? 'AI/ML' : category}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Background Orbital Rings */}
      {[100, 160, 220, 280].map((radius, index) => (
        <motion.div
          key={radius}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 0.05, scale: 1 } : {}}
          transition={{ duration: 3, delay: index * 0.5 }}
          className="absolute border border-electric-blue/20 rounded-full"
          style={{
            width: radius * 2,
            height: radius * 2
          }}
        />
      ))}

      {/* Animated Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute border border-dashed border-neon-green/20 rounded-full w-[560px] h-[560px]"
      />
    </div>
  );
}