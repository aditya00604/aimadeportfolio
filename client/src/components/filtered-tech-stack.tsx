import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
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
  SiPytorch,
  SiTensorflow,
  SiPrisma,
  SiJsonwebtokens,
  SiAxios,
  SiJetbrains
} from "react-icons/si";
import { BrainCircuit, Database, Cloud, Cpu, Bot, Eye, Zap, Filter } from "lucide-react";

interface TechItem {
  icon: React.ComponentType<any>;
  name: string;
  color: string;
  category: string;
  proficiency: number;
  projects: string[];
  isCustomIcon?: boolean;
}

interface FilterCategory {
  id: string;
  name: string;
  color: string;
  icon: React.ComponentType<any>;
  description: string;
}

export default function FilteredTechStack() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterCategories: FilterCategory[] = [
    { id: "all", name: "All Technologies", color: "#8B5CF6", icon: Filter, description: "Complete tech stack overview" },
    { id: "programming", name: "Programming", color: "#EF4444", icon: Cpu, description: "Core programming languages" },
    { id: "web", name: "Web Development", color: "#10B981", icon: SiReact, description: "Frontend & backend web technologies" },
    { id: "database", name: "Database & Storage", color: "#3B82F6", icon: Database, description: "Data management systems" },
    { id: "ai", name: "AI & Machine Learning", color: "#F59E0B", icon: BrainCircuit, description: "Artificial intelligence & ML frameworks" },
    { id: "devops", name: "DevOps & Tools", color: "#8B5CF6", icon: Cloud, description: "Development operations & productivity tools" }
  ];

  const techStack: TechItem[] = [
    // Programming Languages
    { icon: SiPython, name: "Python", color: "#3776AB", category: "programming", proficiency: 90, projects: ["NSL-KDD IDS", "PDF AI Chat", "Coconut Farming"] },
    { icon: SiCplusplus, name: "C++", color: "#00599C", category: "programming", proficiency: 90, projects: ["900+ DSA Problems", "Codeforces 167th rank"] },
    { icon: SiCplusplus, name: "Java", color: "#ED8B00", category: "programming", proficiency: 85, projects: ["DSA Problems", "Enterprise Applications"] },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", category: "programming", proficiency: 88, projects: ["All Web Projects"] },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6", category: "programming", proficiency: 85, projects: ["Code Editor", "Portfolio"] },
    
    // Web Development
    { icon: SiReact, name: "React.js", color: "#61DAFB", category: "web", proficiency: 90, projects: ["API Tester", "Code Editor", "Portfolio"] },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000", category: "web", proficiency: 88, projects: ["Code Editor", "SE-Inventory"] },
    { icon: SiFlask, name: "Flask", color: "#000000", category: "web", proficiency: 85, projects: ["PDF AI Chat", "Coconut Farming"] },
    { icon: SiFastapi, name: "FastAPI", color: "#009688", category: "web", proficiency: 82, projects: ["PDF AI Chat", "API Development"] },
    { icon: SiExpress, name: "Express.js", color: "#000000", category: "web", proficiency: 85, projects: ["API Tester", "Backend Services"] },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933", category: "web", proficiency: 85, projects: ["Multiple Backend Projects"] },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26", category: "web", proficiency: 95, projects: ["All Web Projects"] },
    { icon: SiCss3, name: "CSS3", color: "#1572B6", category: "web", proficiency: 90, projects: ["All Frontend Projects"] },
    { icon: SiTailwindcss, name: "TailwindCSS", color: "#06B6D4", category: "web", proficiency: 90, projects: ["SE-Inventory", "Portfolio"] },
    
    // Database & Storage
    { icon: SiMysql, name: "MySQL", color: "#4479A1", category: "database", proficiency: 85, projects: ["SE-Inventory", "Data Management"] },
    { icon: SiSqlite, name: "SQLite", color: "#003B57", category: "database", proficiency: 80, projects: ["Local Development", "Prototyping"] },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28", category: "database", proficiency: 75, projects: ["Real-time Applications"] },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248", category: "database", proficiency: 82, projects: ["SE-Inventory", "NoSQL Projects"] },
    { icon: SiPrisma, name: "Prisma", color: "#2D3748", category: "database", proficiency: 78, projects: ["Type-safe DB Operations"] },
    { icon: Database, name: "Pinecone", color: "#7C3AED", category: "database", proficiency: 75, projects: ["PDF AI Chat Vector DB"], isCustomIcon: true },
    
    // AI & Machine Learning
    { icon: SiScikitlearn, name: "Scikit-learn", color: "#F7931E", category: "ai", proficiency: 88, projects: ["NSL-KDD IDS", "ML Models"] },
    { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C", category: "ai", proficiency: 75, projects: ["Deep Learning Models"] },
    { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00", category: "ai", proficiency: 70, projects: ["Neural Networks"] },
    { icon: BrainCircuit, name: "XGBoost", color: "#FF6B6B", category: "ai", proficiency: 85, projects: ["NSL-KDD IDS", "Coconut Farming"], isCustomIcon: true },
    { icon: Bot, name: "LangChain", color: "#1C3A5B", category: "ai", proficiency: 80, projects: ["PDF AI Chat RAG"], isCustomIcon: true },
    { icon: Eye, name: "YOLOv11", color: "#FF4081", category: "ai", proficiency: 75, projects: ["Coconut Counting"], isCustomIcon: true },
    { icon: Bot, name: "Gemini API", color: "#4285F4", category: "ai", proficiency: 82, projects: ["PDF AI Chat"], isCustomIcon: true },
    { icon: Cpu, name: "MobileNetV2", color: "#FF9800", category: "ai", proficiency: 70, projects: ["Disease Detection"], isCustomIcon: true },
    
    // DevOps & Tools
    { icon: SiDocker, name: "Docker", color: "#2496ED", category: "devops", proficiency: 80, projects: ["PDF AI Chat", "Containerization"] },
    { icon: SiGit, name: "Git", color: "#F05032", category: "devops", proficiency: 90, projects: ["All Projects", "Version Control"] },
    { icon: SiLinux, name: "Linux", color: "#FCC624", category: "devops", proficiency: 85, projects: ["Server Management", "Development"] },
    { icon: SiKaggle, name: "Kaggle", color: "#20BEFF", category: "devops", proficiency: 75, projects: ["NSL-KDD Dataset", "Competitions"] },
    { icon: SiJetbrains, name: "Jetson Nano", color: "#000000", category: "devops", proficiency: 78, projects: ["Edge Computing", "IoT"] },
    { icon: SiAxios, name: "Axios", color: "#5A29E4", category: "devops", proficiency: 85, projects: ["API Integrations"] },
    { icon: SiJsonwebtokens, name: "JWT", color: "#000000", category: "devops", proficiency: 80, projects: ["Authentication"] },
    { icon: Cloud, name: "MQTT", color: "#660066", category: "devops", proficiency: 75, projects: ["IoT Communication"], isCustomIcon: true },
    { icon: Zap, name: "NextAuth", color: "#BD34FE", category: "devops", proficiency: 78, projects: ["SE-Inventory Auth"], isCustomIcon: true },
  ];

  const filteredTech = activeFilter === "all" 
    ? techStack 
    : techStack.filter(tech => tech.category === activeFilter);

  const getGridPosition = (index: number, total: number) => {
    const cols = Math.ceil(Math.sqrt(total * 1.2));
    const row = Math.floor(index / cols);
    const col = index % cols;
    
    // Offset alternating rows for hexagonal pattern
    const offsetX = (row % 2) * 30;
    
    return {
      x: col * 60 + offsetX,
      y: row * 60
    };
  };

  return (
    <div ref={ref} className="w-full max-w-6xl mx-auto">
      {/* Filter Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {filterCategories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeFilter === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl border transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-electric-blue/20 to-tech-purple/20 border-electric-blue text-electric-blue' 
                    : 'bg-dark-bg/50 border-slate-600 text-slate-300 hover:border-electric-blue/50 hover:text-electric-blue'
                }`}
              >
                <IconComponent size={16} />
                <span className="font-medium text-sm">{category.name}</span>
                <span className="text-xs bg-slate-700 px-2 py-0.5 rounded-full">
                  {category.id === "all" ? techStack.length : techStack.filter(t => t.category === category.id).length}
                </span>
              </motion.button>
            );
          })}
        </div>
        
        {/* Active Filter Description */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-slate-400 text-sm">
            {filterCategories.find(cat => cat.id === activeFilter)?.description}
          </p>
        </motion.div>
      </motion.div>

      {/* Tech Stack Grid */}
      <div className="relative min-h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="relative"
            style={{
              width: Math.ceil(Math.sqrt(filteredTech.length * 1.2)) * 60 + 60,
              height: Math.ceil(filteredTech.length / Math.ceil(Math.sqrt(filteredTech.length * 1.2))) * 60 + 60
            }}
          >
            {filteredTech.map((tech, index) => {
              const position = getGridPosition(index, filteredTech.length);
              const IconComponent = tech.icon;
              const category = filterCategories.find(cat => cat.id === tech.category);
              
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    x: position.x, 
                    y: position.y 
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.3,
                    zIndex: 100
                  }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                >
                  {/* Proficiency Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2"
                    style={{
                      borderColor: category?.color + "40",
                      width: 50,
                      height: 50,
                      left: -5,
                      top: -5
                    }}
                    animate={{
                      rotate: 360,
                      strokeDasharray: `${(tech.proficiency / 100) * 157} 157`
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.1
                    }}
                  />
                  
                  {/* Glow Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="absolute inset-0 rounded-full blur-sm"
                    style={{ 
                      backgroundColor: tech.color,
                      width: 44,
                      height: 44,
                      left: -2,
                      top: -2
                    }}
                  />
                  
                  {/* Icon Container */}
                  <div 
                    className="relative bg-gradient-to-br from-dark-bg/95 to-slate-800/95 rounded-full w-10 h-10 flex items-center justify-center border border-slate-600 group-hover:border-electric-blue transition-all duration-300 shadow-lg"
                  >
                    <IconComponent 
                      size={20}
                      color={tech.color}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Detailed Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.8 }}
                    whileHover={{ opacity: 1, y: -20, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-5 p-4 bg-gradient-to-br from-dark-bg/95 to-slate-800/95 backdrop-blur-md border border-electric-blue/40 rounded-lg text-white whitespace-nowrap pointer-events-none shadow-2xl z-50 min-w-[200px]"
                  >
                    <div className="text-center">
                      <div className="font-bold text-sm mb-1">{tech.name}</div>
                      <div className="text-xs text-slate-400 mb-2 capitalize">{tech.category}</div>
                      
                      {/* Proficiency Bar */}
                      <div className="mb-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Proficiency</span>
                          <span>{tech.proficiency}%</span>
                        </div>
                        <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileHover={{ width: `${tech.proficiency}%` }}
                            transition={{ duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-electric-blue to-neon-green"
                          />
                        </div>
                      </div>
                      
                      {/* Projects */}
                      <div className="text-left">
                        <div className="text-xs font-medium mb-1">Key Projects:</div>
                        <div className="space-y-1">
                          {tech.projects.slice(0, 3).map((project, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-electric-blue rounded-full"></div>
                              <span className="text-xs text-slate-300">{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {filterCategories.slice(1).map((category) => {
          const categoryTech = techStack.filter(tech => tech.category === category.id);
          const avgProficiency = Math.round(
            categoryTech.reduce((sum, tech) => sum + tech.proficiency, 0) / categoryTech.length
          );
          
          return (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-dark-bg/50 to-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-electric-blue/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <category.icon size={16} color={category.color} />
                <span className="font-medium text-sm text-white">{category.name}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <span>{categoryTech.length} technologies</span>
                <span>{avgProficiency}% avg proficiency</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}