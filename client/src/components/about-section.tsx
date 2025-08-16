import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, MapPin, Calendar, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 bg-space-blue/30 relative overflow-hidden">
      {/* Nepal Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 400 600" className="w-full h-full">
          <polygon points="50,500 150,200 250,300 350,150 400,0 400,600 0,600" fill="rgba(34, 197, 94, 0.2)"/>
          <polygon points="0,600 100,350 200,400 300,280 400,200 400,600" fill="rgba(59, 130, 246, 0.15)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-electric-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto"></div>
          <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">
            From the beautiful hills of Nepal to the tech corridors of Karnataka
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="bg-dark-bg/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-electric-blue transition-colors">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-electric-blue mr-3" />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="border-l-4 border-electric-blue pl-6 space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-neon-green">Bachelor of Engineering</h4>
                  <p className="text-slate-300 font-medium">Computer Science Engineering</p>
                  <div className="flex items-center text-slate-400 mt-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Siddaganga Institute of Technology, Tumkur</span>
                  </div>
                  <div className="flex items-center text-slate-400 mt-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Dec 2021 – Jul 2025</span>
                  </div>
                  <p className="text-electric-blue font-semibold mt-2">CGPA: 8.63/10</p>
                </div>
                
                {/* College Achievements */}
                <div className="bg-gradient-to-r from-electric-blue/10 to-neon-green/10 p-4 rounded-lg mt-4">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 text-neon-green mr-2" />
                    <span className="text-white font-semibold">Institute Highlights</span>
                  </div>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>• NIRF Ranking: #100 in Engineering (2024)</li>
                    <li>• NAAC A++ Grade | NBA Accredited</li>
                    <li>• 99% Placement Rate | Est. 1963</li>
                    <li>• 65 Acres Campus | 5000+ Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-neon-green rounded-full mr-3 animate-pulse"></span>
                From Nepal to Innovation
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Born in the scenic landscapes of Nepal, I've carried the spirit of determination and resilience 
                to Karnataka, India, where I'm pursuing my passion for Computer Science Engineering. My journey 
                in technology is driven by curiosity and the desire to create innovative solutions that make a real impact.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/20 to-green-900/20 p-6 rounded-xl border border-blue-500/30">
              <p className="text-lg text-slate-300 leading-relaxed">
                With expertise in full-stack development, AI/ML, and IoT systems, I've built projects ranging from 
                intelligent farming systems to advanced intrusion detection models. I believe in continuous learning 
                and pushing the boundaries of what's possible with code, just like scaling the peaks of the Himalayas.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8"
            >
              <div className="text-center p-4 bg-gradient-to-br from-electric-blue/20 to-tech-purple/20 rounded-lg border border-electric-blue/30 hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-electric-blue" data-testid="stat-dsa-problems">900+</div>
                <div className="text-sm text-slate-400">DSA Problems</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-lg border border-neon-green/30 hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-neon-green" data-testid="stat-codeforces-rank">167th</div>
                <div className="text-sm text-slate-400">Codeforces Rank</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-tech-purple/20 to-neon-green/20 rounded-lg border border-tech-purple/30 hover:scale-105 transition-transform col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-tech-purple" data-testid="stat-sae-rank">11th</div>
                <div className="text-sm text-slate-400">SAE National</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
