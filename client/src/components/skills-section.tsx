import { Code, GraduationCap, Calendar, Award, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Keyboard3D from "./keyboard-3d";
import AppleWatchTechStack from "./apple-watch-tech-stack";

export default function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const languages = [
    { name: "C++", proficiency: 90, projects: "900+ DSA Problems" },
    { name: "Python", proficiency: 90, projects: "ML, AI & Backend" },
    { name: "Java", proficiency: 85, projects: "DSA & Enterprise" },
    { name: "SQL", proficiency: 85, projects: "Database Design" },
  ];

  const achievements = [
    "900+ DSA problems solved across platforms",
    "Ranked 167th out of 12,000+ in Codeforces Round 1016",
    "11th rank nationally in SAE competition (150+ teams)",
    "Qualified for Boeing Aeromodelling final round at IIT Bombay"
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
          <div className="flex items-center justify-center gap-4 mt-4 mb-2">
            <div className="flex items-center gap-2 bg-gradient-to-r from-neon-green/20 to-electric-blue/20 px-4 py-2 rounded-full border border-neon-green/30">
              <GraduationCap className="w-5 h-5 text-neon-green" />
              <span className="text-white font-semibold">Fresher</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-electric-blue/20 to-tech-purple/20 px-4 py-2 rounded-full border border-electric-blue/30">
              <Calendar className="w-5 h-5 text-electric-blue" />
              <span className="text-white font-semibold">2025 Batch</span>
            </div>
          </div>
          <p className="text-lg text-slate-300 mt-2 max-w-2xl mx-auto">
            Ready to contribute with modern tech stack and fresh perspective
          </p>
        </motion.div>
        
        {/* Apple Watch Style Tech Stack Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-20"
        >
          <AppleWatchTechStack />
        </motion.div>

        {/* Enhanced Skills Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Programming Proficiency */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="tech-card rounded-xl p-6 text-center group hover:scale-105 transform-3d"
          >
            <motion.div 
              whileHover={{ rotateY: 15 }}
              className="w-16 h-16 bg-gradient-to-br from-electric-blue to-tech-purple rounded-full flex items-center justify-center mx-auto mb-4 glow-pulse"
            >
              <Code className="text-white text-2xl" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-3">Programming</h3>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-sm font-medium">{lang.name}</span>
                    <span className="text-xs text-slate-400">{lang.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.proficiency}%` } : {}}
                      transition={{ duration: 1, delay: 1 + (languages.indexOf(lang) * 0.1) }}
                      className="h-full bg-gradient-to-r from-electric-blue to-neon-green"
                      data-testid={`skill-${lang.name.toLowerCase()}`}
                    />
                  </div>
                  <div className="text-xs text-slate-500">{lang.projects}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Project Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="tech-card rounded-xl p-6 text-center group hover:scale-105 transform-3d"
          >
            <motion.div 
              whileHover={{ rotateY: -15 }}
              className="w-16 h-16 bg-gradient-to-br from-neon-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4 glow-pulse"
            >
              <Target className="text-white text-2xl" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-3">Project Impact</h3>
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                <span className="text-sm text-slate-300">6 Full-Stack Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                <span className="text-sm text-slate-300">AI/ML Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-tech-purple rounded-full"></div>
                <span className="text-sm text-slate-300">IoT & Edge Computing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                <span className="text-sm text-slate-300">40% Yield Improvement</span>
              </div>
            </div>
          </motion.div>
          
          {/* Achievements */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="tech-card rounded-xl p-6 text-center group hover:scale-105 transform-3d"
          >
            <motion.div 
              whileHover={{ rotateY: 15 }}
              className="w-16 h-16 bg-gradient-to-br from-tech-purple to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4 glow-pulse"
            >
              <Award className="text-white text-2xl" />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-3">Achievements</h3>
            <div className="space-y-2 text-left">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 + (index * 0.1) }}
                  className="flex items-start gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-xs text-slate-300 leading-relaxed">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
