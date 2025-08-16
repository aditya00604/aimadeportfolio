import { Download, Mail, Linkedin, Github } from "lucide-react";
import TypingEffect from "./typing-effect";
import SplineScene from "./spline-scene";
import { Button } from "@/components/ui/button";

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

  return (
    <section id="hero" className="min-h-screen flex items-center gradient-bg relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 spline-container">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-32 h-32 bg-gradient-to-br from-electric-blue/20 to-tech-purple/20 rounded-lg tech-glow transform rotate-12"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float animation-delay-2s">
          <div className="w-24 h-16 bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded tech-glow transform -rotate-6"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float animation-delay-4s">
          <div className="w-40 h-8 bg-gradient-to-r from-tech-purple/20 to-neon-green/20 rounded-full tech-glow"></div>
        </div>
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
            
            {/* Animated Quote */}
            <div className="bg-space-blue/50 backdrop-blur-sm border border-electric-blue/30 rounded-lg p-6 mb-8">
              <blockquote className="text-lg italic text-slate-300 leading-relaxed">
                <span className="text-electric-blue font-mono text-2xl">"</span>
                <TypingEffect 
                  text="Coding is how I tell stories. Each line is a sentence, every bug a twist, and every fix moves the story forward. With code, I turn ideas into real experiences."
                  className="inline-block"
                />
                <span className="text-electric-blue font-mono text-2xl">"</span>
              </blockquote>
            </div>
            
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
            <div className="flex space-x-6 mt-8">
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
            </div>
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
