import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 bg-dark-bg border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 mb-4 md:mb-0">
            <span className="font-mono">&copy; 2024 Aditya Kumar Mishra. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/aditya-mishra-692791240/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-electric-blue transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/aditya998800" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-electric-blue transition-colors"
              data-testid="footer-github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:akm998800hj@gmail.com"
              className="text-slate-400 hover:text-electric-blue transition-colors"
              data-testid="footer-email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
