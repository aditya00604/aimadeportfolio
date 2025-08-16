import { ExternalLink, Github, TrendingUp, Brain, Sprout, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Keyboard3D from "./keyboard-3d";

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: "NSL-KDD Intrusion Detection System",
      description: "Machine learning-based IDS using ensemble methods with Random Forest, Gradient Boosting, and XGBoost. Achieved 79.3% accuracy with balanced detection across traffic classes.",
      technologies: ["Python", "Scikit-learn", "XGBoost"],
      icon: <Shield className="text-white text-xl" />,
      metric: "79.3% accuracy achieved",
      metricIcon: <TrendingUp className="mr-2 w-4 h-4" />,
      githubUrl: "https://github.com/aditya998800/NSL-KDD-Intrusion-Detection",
      gradient: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30"
    },
    {
      title: "PDF AI Chat Reader",
      description: "Conversational RAG-based document reader using LangChain and Gemini-1.5-flash models with vector embeddings. Improved response accuracy to 92%.",
      technologies: ["LangChain", "FastAPI", "Pinecone"],
      icon: <Brain className="text-white text-xl" />,
      metric: "92% response accuracy",
      metricIcon: <Brain className="mr-2 w-4 h-4" />,
      githubUrl: "https://github.com/aditya998800/PDF-AI-Chat-Reader",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      title: "Intelligent Coconut Farming System",
      description: "IoT-based precision farming system with YOLOv11 for coconut counting, MobileNetV2 for disease detection, and XGBoost for crop recommendation. Deployed on Jetson Nano.",
      technologies: ["React.js", "Flask", "YOLOv11", "MQTT"],
      icon: <Sprout className="text-white text-xl" />,
      metric: "40% yield improvement",
      metricIcon: <Sprout className="mr-2 w-4 h-4" />,
      githubUrl: "https://github.com/aditya998800/Intelligent-Coconut-Farming",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      title: "Real-Time Code Editor",
      description: "Lightweight, privacy-preserving code editor supporting HTML, CSS, and JS with live preview and screen-size simulation. No server-side storage required.",
      technologies: ["Next.js 14", "TypeScript", "Monaco Editor"],
      icon: <ExternalLink className="text-white text-xl" />,
      metric: "Complete privacy protection",
      metricIcon: <Shield className="mr-2 w-4 h-4" />,
      githubUrl: "https://github.com/aditya998800/Real-Time-Code-Editor",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-space-blue/30 relative overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-10">
          <Keyboard3D variant="monitor" size="sm" animationType="rotate" />
        </div>
        <div className="absolute bottom-40 left-20">
          <Keyboard3D variant="cpu" size="sm" animationType="float" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-shadow-glow">
            Featured <span className="text-electric-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto animate-shimmer"></div>
          <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">
            Innovative solutions powered by AI, ML, and cutting-edge technology
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, rotateY: 2 }}
              className={`bg-gradient-to-br ${project.gradient} backdrop-blur-sm border ${project.borderColor} rounded-xl p-6 transition-all duration-300 group transform-3d hover:shadow-2xl`}
              data-testid={`project-${index}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">{project.title}</h3>
                <motion.a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotateZ: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-electric-blue hover:text-neon-green transition-colors"
                  data-testid={`project-github-${index}`}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
              </div>
              <p className="text-slate-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-sm"
                    data-testid={`project-tech-${tech.toLowerCase().replace('.', '-')}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: (index * 0.2) + 0.5 }}
                className="flex items-center text-sm text-neon-green bg-dark-bg/30 rounded-lg p-3 mt-4"
              >
                {project.metricIcon}
                <span className="font-semibold">{project.metric}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border border-electric-blue text-electric-blue px-8 py-3 rounded-lg font-semibold hover:bg-electric-blue hover:text-dark-bg transition-all duration-300 hover:scale-105 glow-pulse"
            data-testid="button-view-all-projects"
            onClick={() => window.open('https://github.com/aditya998800', '_blank')}
          >
            <Github className="mr-2 w-4 h-4" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
