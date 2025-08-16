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
            Academic excellence and professional development foundation
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="bg-dark-bg/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-electric-blue transition-colors">
              <div className="flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-electric-blue mr-3" />
                <h3 className="text-2xl font-bold text-white">Education & Credentials</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Education */}
                <div className="text-center">
                  <div className="border border-electric-blue/30 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-neon-green mb-2">Bachelor of Engineering</h4>
                    <p className="text-slate-300 font-medium mb-3">Computer Science Engineering</p>
                    <div className="flex items-center justify-center text-slate-400 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">Siddaganga Institute of Technology</span>
                    </div>
                    <div className="flex items-center justify-center text-slate-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Dec 2021 – Jul 2025</span>
                    </div>
                    <div className="bg-gradient-to-r from-electric-blue/20 to-neon-green/20 rounded-lg p-3">
                      <p className="text-electric-blue font-bold">CGPA: 8.63/10</p>
                    </div>
                  </div>
                </div>

                {/* Institute Highlights */}
                <div className="text-center">
                  <div className="border border-neon-green/30 rounded-xl p-6">
                    <div className="flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-neon-green mr-2" />
                      <span className="text-white font-semibold">Institute Rankings</span>
                    </div>
                    <div className="space-y-3 text-sm text-slate-300">
                      <div className="bg-gradient-to-r from-neon-green/10 to-electric-blue/10 rounded-lg p-2">
                        <strong className="text-neon-green">NIRF #100</strong> in Engineering 2024
                      </div>
                      <div className="bg-gradient-to-r from-tech-purple/10 to-neon-green/10 rounded-lg p-2">
                        <strong className="text-tech-purple">NAAC A++</strong> Grade Accredited
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          
        </div>
      </div>
    </section>
  );
}
