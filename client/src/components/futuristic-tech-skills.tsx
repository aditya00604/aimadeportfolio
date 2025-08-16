import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
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
import { 
  BrainCircuit, 
  Database, 
  Cloud, 
  Cpu, 
  Bot, 
  Eye, 
  Zap, 
  Filter,
  Code2,
  Globe,
  Server,
  Layers,
  Settings,
  TrendingUp,
  Star,
  Award,
  Target
} from "lucide-react";

interface TechItem {
  icon: React.ComponentType<any>;
  name: string;
  color: string;
  category: string;
  proficiency: number;
  experience: string;
  projects: string[];
  trending: boolean;
  isCustomIcon?: boolean;
}

interface SkillCategory {
  id: string;
  name: string;
  color: string;
  gradient: string;
  icon: React.ComponentType<any>;
  description: string;
  count: number;
}

export default function FuturisticTechSkills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const techStack: TechItem[] = [
    // Core Programming
    { icon: SiPython, name: "Python", color: "#3776AB", category: "programming", proficiency: 90, experience: "3+ years", projects: ["NSL-KDD IDS", "PDF AI Chat", "Coconut Farming System"], trending: true },
    { icon: SiCplusplus, name: "C++", color: "#00599C", category: "programming", proficiency: 90, experience: "4+ years", projects: ["900+ DSA Problems", "Competitive Programming"], trending: false },
    { icon: SiCplusplus, name: "Java", color: "#ED8B00", category: "programming", proficiency: 85, experience: "2+ years", projects: ["Enterprise Applications", "DSA Solutions"], trending: false },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", category: "programming", proficiency: 88, experience: "2+ years", projects: ["All Web Projects", "API Development"], trending: true },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6", category: "programming", proficiency: 85, experience: "1+ years", projects: ["Code Editor", "Type-safe Applications"], trending: true },

    // Frontend Development
    { icon: SiReact, name: "React.js", color: "#61DAFB", category: "frontend", proficiency: 90, experience: "2+ years", projects: ["API Tester", "Real-time Editor", "Portfolio"], trending: true },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000", category: "frontend", proficiency: 88, experience: "1+ years", projects: ["Code Editor", "SE-Inventory"], trending: true },
    { icon: SiHtml5, name: "HTML5", color: "#E34F26", category: "frontend", proficiency: 95, experience: "3+ years", projects: ["All Web Projects"], trending: false },
    { icon: SiCss3, name: "CSS3", color: "#1572B6", category: "frontend", proficiency: 90, experience: "3+ years", projects: ["Responsive Designs"], trending: false },
    { icon: SiTailwindcss, name: "TailwindCSS", color: "#06B6D4", category: "frontend", proficiency: 90, experience: "1+ years", projects: ["Modern UI Designs"], trending: true },

    // Backend Development
    { icon: SiFlask, name: "Flask", color: "#000000", category: "backend", proficiency: 85, experience: "2+ years", projects: ["PDF AI Chat", "Coconut Farming API"], trending: false },
    { icon: SiFastapi, name: "FastAPI", color: "#009688", category: "backend", proficiency: 82, experience: "1+ years", projects: ["High-performance APIs"], trending: true },
    { icon: SiExpress, name: "Express.js", color: "#000000", category: "backend", proficiency: 85, experience: "1+ years", projects: ["RESTful APIs", "Backend Services"], trending: false },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933", category: "backend", proficiency: 85, experience: "2+ years", projects: ["Server Applications"], trending: true },

    // Database & Storage
    { icon: SiMysql, name: "MySQL", color: "#4479A1", category: "database", proficiency: 85, experience: "2+ years", projects: ["SE-Inventory", "Data Management"], trending: false },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248", category: "database", proficiency: 82, experience: "1+ years", projects: ["NoSQL Applications"], trending: true },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28", category: "database", proficiency: 75, experience: "1+ years", projects: ["Real-time Apps"], trending: false },
    { icon: SiPrisma, name: "Prisma", color: "#2D3748", category: "database", proficiency: 78, experience: "6+ months", projects: ["Type-safe DB Operations"], trending: true },
    { icon: Database, name: "Pinecone", color: "#7C3AED", category: "database", proficiency: 75, experience: "6+ months", projects: ["Vector Database"], trending: true, isCustomIcon: true },

    // AI & Machine Learning
    { icon: SiScikitlearn, name: "Scikit-learn", color: "#F7931E", category: "ai", proficiency: 88, experience: "2+ years", projects: ["NSL-KDD IDS", "ML Models"], trending: true },
    { icon: BrainCircuit, name: "XGBoost", color: "#FF6B6B", category: "ai", proficiency: 85, experience: "1+ years", projects: ["Ensemble Learning"], trending: true, isCustomIcon: true },
    { icon: Bot, name: "LangChain", color: "#1C3A5B", category: "ai", proficiency: 80, experience: "6+ months", projects: ["RAG Applications"], trending: true, isCustomIcon: true },
    { icon: Bot, name: "Gemini API", color: "#4285F4", category: "ai", proficiency: 82, experience: "6+ months", projects: ["AI Integration"], trending: true, isCustomIcon: true },
    { icon: Eye, name: "YOLOv11", color: "#FF4081", category: "ai", proficiency: 75, experience: "6+ months", projects: ["Object Detection"], trending: true, isCustomIcon: true },
    { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C", category: "ai", proficiency: 75, experience: "1+ years", projects: ["Deep Learning"], trending: true },

    // DevOps & Tools
    { icon: SiDocker, name: "Docker", color: "#2496ED", category: "devops", proficiency: 80, experience: "1+ years", projects: ["Containerization"], trending: true },
    { icon: SiGit, name: "Git", color: "#F05032", category: "devops", proficiency: 90, experience: "3+ years", projects: ["Version Control"], trending: false },
    { icon: SiLinux, name: "Linux", color: "#FCC624", category: "devops", proficiency: 85, experience: "2+ years", projects: ["Server Management"], trending: false },
    { icon: SiJetbrains, name: "Jetson Nano", color: "#000000", category: "devops", proficiency: 78, experience: "6+ months", projects: ["Edge Computing"], trending: true },
    { icon: Cloud, name: "MQTT", color: "#660066", category: "devops", proficiency: 75, experience: "6+ months", projects: ["IoT Communication"], trending: false, isCustomIcon: true },
  ];

  const categories: SkillCategory[] = [
    { 
      id: "all", 
      name: "All Skills", 
      color: "#8B5CF6", 
      gradient: "from-purple-500 to-indigo-600",
      icon: Layers, 
      description: "Complete technical skill overview", 
      count: techStack.length 
    },
    { 
      id: "programming", 
      name: "Programming", 
      color: "#EF4444", 
      gradient: "from-red-500 to-orange-500",
      icon: Code2, 
      description: "Core programming languages & algorithms", 
      count: techStack.filter(t => t.category === "programming").length 
    },
    { 
      id: "frontend", 
      name: "Frontend", 
      color: "#10B981", 
      gradient: "from-emerald-500 to-teal-500",
      icon: Globe, 
      description: "User interface & experience technologies", 
      count: techStack.filter(t => t.category === "frontend").length 
    },
    { 
      id: "backend", 
      name: "Backend", 
      color: "#3B82F6", 
      gradient: "from-blue-500 to-cyan-500",
      icon: Server, 
      description: "Server-side development & APIs", 
      count: techStack.filter(t => t.category === "backend").length 
    },
    { 
      id: "database", 
      name: "Database", 
      color: "#8B5CF6", 
      gradient: "from-purple-500 to-violet-600",
      icon: Database, 
      description: "Data storage & management systems", 
      count: techStack.filter(t => t.category === "database").length 
    },
    { 
      id: "ai", 
      name: "AI & ML", 
      color: "#F59E0B", 
      gradient: "from-amber-500 to-yellow-500",
      icon: BrainCircuit, 
      description: "Artificial intelligence & machine learning", 
      count: techStack.filter(t => t.category === "ai").length 
    },
    { 
      id: "devops", 
      name: "DevOps", 
      color: "#EC4899", 
      gradient: "from-pink-500 to-rose-500",
      icon: Settings, 
      description: "Development operations & infrastructure", 
      count: techStack.filter(t => t.category === "devops").length 
    }
  ];

  const filteredTech = techStack.filter(tech => {
    const matchesCategory = activeCategory === "all" || tech.category === activeCategory;
    const matchesSearch = tech.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = {
    totalSkills: techStack.length,
    avgProficiency: Math.round(techStack.reduce((sum, tech) => sum + tech.proficiency, 0) / techStack.length),
    trendingSkills: techStack.filter(tech => tech.trending).length,
    totalProjects: [...new Set(techStack.flatMap(tech => tech.projects))].length
  };

  return (
    <div ref={ref} className="w-full max-w-7xl mx-auto">
      {/* Header with Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Skills", value: stats.totalSkills, icon: Target, color: "from-blue-500 to-cyan-500" },
            { label: "Avg Proficiency", value: `${stats.avgProficiency}%`, icon: TrendingUp, color: "from-green-500 to-emerald-500" },
            { label: "Trending Skills", value: stats.trendingSkills, icon: Star, color: "from-yellow-500 to-orange-500" },
            { label: "Total Projects", value: stats.totalProjects, icon: Award, color: "from-purple-500 to-pink-500" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 rounded-xl blur-xl group-hover:opacity-30 transition-opacity duration-300`} />
              <div className="relative bg-dark-bg/90 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-electric-blue/50 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}`}>
                    <stat.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-1 max-w-md"
          >
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-dark-bg/90 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
            />
            <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-sm text-slate-400">
              Showing {filteredTech.length} of {techStack.length} technologies
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Category Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8"
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative group px-6 py-3 rounded-xl border transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r ' + category.gradient + ' border-transparent text-white shadow-lg' 
                    : 'bg-dark-bg/50 border-slate-700 text-slate-300 hover:border-electric-blue/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconComponent size={18} />
                  <span className="font-medium">{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    isActive ? 'bg-white/20' : 'bg-slate-700'
                  }`}>
                    {category.count}
                  </span>
                </div>
                
                {!isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Tech Skills Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchTerm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {filteredTech.map((tech, index) => {
              const IconComponent = tech.icon;
              const category = categories.find(cat => cat.id === tech.category);
              
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    zIndex: 50
                  }}
                  onHoverStart={() => setHoveredTech(tech.name)}
                  onHoverEnd={() => setHoveredTech(null)}
                  className="relative group"
                >
                  {/* Glow Effect */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-all duration-300 ${category?.gradient}`}
                  />
                  
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-dark-bg/90 to-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-electric-blue/50 transition-all duration-300 h-full">
                    {/* Trending Badge */}
                    {tech.trending && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Star size={10} />
                        Hot
                      </div>
                    )}
                    
                    {/* Icon */}
                    <div className="flex justify-center mb-3">
                      <div 
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: tech.color + '20' }}
                      >
                        <IconComponent 
                          size={24}
                          color={tech.color}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    
                    {/* Name */}
                    <div className="text-center mb-2">
                      <div className="font-bold text-white text-sm mb-1">{tech.name}</div>
                      <div className="text-xs text-slate-400 capitalize">{tech.category}</div>
                    </div>
                    
                    {/* Proficiency Bar */}
                    <div className="mb-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">Skill</span>
                        <span className="text-slate-300">{tech.proficiency}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.proficiency}%` }}
                          transition={{ duration: 1, delay: index * 0.05 }}
                          className="h-full bg-gradient-to-r from-electric-blue to-neon-green"
                        />
                      </div>
                    </div>
                    
                    {/* Experience */}
                    <div className="text-xs text-slate-400 text-center">
                      {tech.experience}
                    </div>
                  </div>

                  {/* Detailed Tooltip */}
                  <AnimatePresence>
                    {hoveredTech === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: -10, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 p-4 bg-gradient-to-br from-dark-bg/95 to-slate-800/95 backdrop-blur-md border border-electric-blue/40 rounded-lg text-white shadow-2xl z-50 min-w-[250px]"
                      >
                        <div className="text-center">
                          <div className="font-bold text-sm mb-2">{tech.name}</div>
                          
                          {/* Experience & Proficiency */}
                          <div className="grid grid-cols-2 gap-4 mb-3 text-xs">
                            <div>
                              <div className="text-slate-400">Experience</div>
                              <div className="text-electric-blue font-medium">{tech.experience}</div>
                            </div>
                            <div>
                              <div className="text-slate-400">Proficiency</div>
                              <div className="text-neon-green font-medium">{tech.proficiency}%</div>
                            </div>
                          </div>
                          
                          {/* Key Projects */}
                          <div className="text-left">
                            <div className="text-xs font-medium mb-2 text-slate-300">Key Projects:</div>
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
                        
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-transparent border-t-electric-blue/40"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* No Results */}
      {filteredTech.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-slate-400 text-lg mb-2">No technologies found</div>
          <div className="text-slate-500 text-sm">Try adjusting your search or filter criteria</div>
        </motion.div>
      )}
    </div>
  );
}