import { Code, Globe, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Keyboard3D from "./keyboard-3d";

export default function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const languages = [
    { name: "C++", proficiency: 90 },
    { name: "Python", proficiency: 90 },
    { name: "Java", proficiency: 85 },
    { name: "SQL", proficiency: 85 },
  ];

  const webTechnologies = [
    "React.js", "Next.js", "Flask", "FastAPI", "Express.js"
  ];

  const databases = [
    "MongoDB", "MySQL", "Firebase", "SQLite"
  ];

  return (
    <section id="skills" className="py-20 gradient-bg relative overflow-hidden">
      {/* 3D Floating Keyboards */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10">
          <Keyboard3D variant="keyboard" size="sm" animationType="typewriter" />
        </div>
        <div className="absolute top-40 right-20">
          <Keyboard3D variant="mouse" size="sm" animationType="rotate" />
        </div>
        <div className="absolute bottom-32 left-1/4">
          <Keyboard3D variant="cpu" size="sm" animationType="bounce" />
        </div>
        <div className="absolute bottom-20 right-1/3">
          <Keyboard3D variant="monitor" size="sm" animationType="float" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-shadow-glow">
            Technical <span className="text-electric-blue">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto animate-shimmer"></div>
          <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">
            Mastering the art of code with powerful tools and technologies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="tech-card rounded-xl p-6 hover:border-electric-blue transition-all duration-300 group hover:scale-105 transform-3d"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="flex items-center mb-4"
            >
              <motion.div 
                whileHover={{ rotateZ: 15 }}
                className="w-12 h-12 bg-gradient-to-br from-electric-blue to-tech-purple rounded-lg flex items-center justify-center mr-4 glow-pulse"
              >
                <Code className="text-white text-xl" />
              </motion.div>
              <h3 className="text-xl font-bold text-white">Languages</h3>
              <div className="ml-auto">
                <Keyboard3D variant="keyboard" size="sm" animationType="typewriter" />
              </div>
            </motion.div>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center">
                  <span className="text-slate-300">{lang.name}</span>
                  <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-electric-blue to-neon-green transition-all duration-1000"
                      style={{ width: `${lang.proficiency}%` }}
                      data-testid={`skill-${lang.name.toLowerCase()}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Web Development */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="tech-card rounded-xl p-6 hover:border-neon-green transition-all duration-300 group hover:scale-105 transform-3d"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: -5 }}
              className="flex items-center mb-4"
            >
              <motion.div 
                whileHover={{ rotateZ: -15 }}
                className="w-12 h-12 bg-gradient-to-br from-neon-green to-electric-blue rounded-lg flex items-center justify-center mr-4 glow-pulse"
              >
                <Globe className="text-white text-xl" />
              </motion.div>
              <h3 className="text-xl font-bold text-white">Web Development</h3>
              <div className="ml-auto">
                <Keyboard3D variant="mouse" size="sm" animationType="rotate" />
              </div>
            </motion.div>
            <div className="flex flex-wrap gap-2">
              {webTechnologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-electric-blue/20 text-electric-blue rounded-full text-sm"
                  data-testid={`tech-${tech.toLowerCase().replace('.', '-')}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          
          {/* Databases */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="tech-card rounded-xl p-6 hover:border-tech-purple transition-all duration-300 group hover:scale-105 transform-3d"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="flex items-center mb-4"
            >
              <motion.div 
                whileHover={{ rotateZ: 15 }}
                className="w-12 h-12 bg-gradient-to-br from-tech-purple to-neon-green rounded-lg flex items-center justify-center mr-4 glow-pulse"
              >
                <Database className="text-white text-xl" />
              </motion.div>
              <h3 className="text-xl font-bold text-white">Databases</h3>
              <div className="ml-auto">
                <Keyboard3D variant="cpu" size="sm" animationType="bounce" />
              </div>
            </motion.div>
            <div className="flex flex-wrap gap-2">
              {databases.map((db) => (
                <span 
                  key={db}
                  className="px-3 py-1 bg-tech-purple/20 text-tech-purple rounded-full text-sm"
                  data-testid={`db-${db.toLowerCase()}`}
                >
                  {db}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
