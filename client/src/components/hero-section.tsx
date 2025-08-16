import { Download, Mail, Linkedin, Github } from "lucide-react";
import TypingEffect from "./typing-effect";
import SplineScene from "./spline-scene";
import VisitorCount from "./visitor-count";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HeroSection() {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/api/resume/download');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Aditya_Kumar_Mishra_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Failed to download resume');
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  const scrollToContact = () => {
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Himalayan Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/30 to-dark-bg"></div>
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-gray-800/30 via-gray-700/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2">
          <svg viewBox="0 0 1200 600" className="w-full h-full">
            <polygon points="0,600 200,200 400,300 600,150 800,250 1000,180 1200,220 1200,600" fill="rgba(79, 70, 229, 0.1)"/>
            <polygon points="0,600 150,350 350,400 550,280 750,320 950,290 1200,310 1200,600" fill="rgba(99, 102, 241, 0.15)"/>
            <polygon points="0,600 100,450 300,480 500,400 700,430 900,410 1200,420 1200,600" fill="rgba(67, 56, 202, 0.2)"/>
          </svg>
        </div>
      </div>
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 spline-container" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 100, rotateX: -90 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute top-20 left-10 animate-float"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-electric-blue/20 to-tech-purple/20 rounded-lg tech-glow transform rotate-12 backdrop-blur-sm border border-electric-blue/30"></div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 200, rotateY: 90 }}
          animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-40 right-20 animate-float animation-delay-2s"
        >
          <div className="w-24 h-16 bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded tech-glow transform -rotate-6 backdrop-blur-sm border border-neon-green/30"></div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1.8, delay: 0.6 }}
          className="absolute bottom-32 left-1/4 animate-float animation-delay-4s"
        >
          <div className="w-40 h-8 bg-gradient-to-r from-tech-purple/20 to-neon-green/20 rounded-full tech-glow backdrop-blur-sm border border-tech-purple/30"></div>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="text-electric-blue font-mono text-lg">Hello, I'm</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Aditya Kumar <span className="text-neon-green">Mishra</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mt-4 font-mono">
                Computer Science Engineer
              </p>
            </div>
            
            {/* Professional Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-8"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                Full-stack developer specializing in <span className="text-electric-blue font-semibold">AI/ML integration</span>, 
                <span className="text-neon-green font-semibold"> modern web technologies</span>, and 
                <span className="text-tech-purple font-semibold"> IoT systems</span>. 
                Passionate about building innovative solutions that drive real-world impact.
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-electric-blue to-tech-purple px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="border border-electric-blue text-electric-blue px-8 py-3 rounded-lg font-semibold hover:bg-electric-blue hover:text-dark-bg transition-colors"
                data-testid="button-contact"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
            
            

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex space-x-6 mt-6"
            >
              <a 
                href="https://linkedin.com/in/aditya-mishra-692791240/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-electric-blue transition-colors text-xl"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/aditya998800" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-electric-blue transition-colors text-xl"
                data-testid="link-github"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="mailto:akm998800hj@gmail.com"
                className="text-slate-400 hover:text-electric-blue transition-colors text-xl"
                data-testid="link-email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>

            {/* Visitor Count */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="mt-6"
            >
              <VisitorCount />
            </motion.div>
          </div>
          
          {/* 3D Scene Area */}
          <div className="order-1 lg:order-2 flex justify-center">
            <SplineScene />
          </div>
        </div>
      </div>
    </section>
  );
}
