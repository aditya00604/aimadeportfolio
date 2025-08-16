import { ExternalLink, Github, TrendingUp, Brain, Sprout, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "NSL-KDD Intrusion Detection System",
      description: "Machine learning-based IDS using ensemble methods with Random Forest, Gradient Boosting, and XGBoost. Achieved 79.3% accuracy with balanced detection across traffic classes.",
      technologies: ["Python", "Scikit-learn", "XGBoost"],
      icon: <Shield className="text-white text-xl" />,
      metric: "79.3% accuracy achieved",
      metricIcon: <TrendingUp className="mr-2 w-4 h-4" />
    },
    {
      title: "PDF AI Chat Reader",
      description: "Conversational RAG-based document reader using LangChain and Gemini-1.5-flash models with vector embeddings. Improved response accuracy to 92%.",
      technologies: ["LangChain", "FastAPI", "Pinecone"],
      icon: <Brain className="text-white text-xl" />,
      metric: "92% response accuracy",
      metricIcon: <Brain className="mr-2 w-4 h-4" />
    },
    {
      title: "Intelligent Coconut Farming System",
      description: "IoT-based precision farming system with YOLOv11 for coconut counting, MobileNetV2 for disease detection, and XGBoost for crop recommendation. Deployed on Jetson Nano.",
      technologies: ["React.js", "Flask", "YOLOv11", "MQTT"],
      icon: <Sprout className="text-white text-xl" />,
      metric: "40% yield improvement",
      metricIcon: <Sprout className="mr-2 w-4 h-4" />
    },
    {
      title: "Real-Time Code Editor",
      description: "Lightweight, privacy-preserving code editor supporting HTML, CSS, and JS with live preview and screen-size simulation. No server-side storage required.",
      technologies: ["Next.js 14", "TypeScript", "Monaco Editor"],
      icon: <ExternalLink className="text-white text-xl" />,
      metric: "Complete privacy protection",
      metricIcon: <Shield className="mr-2 w-4 h-4" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-space-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-electric-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-dark-bg/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-electric-blue transition-all duration-300 hover:scale-105 group"
              data-testid={`project-${index}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <a 
                  href="#" 
                  className="text-electric-blue hover:text-neon-green transition-colors"
                  data-testid={`project-github-${index}`}
                >
                  <Github className="w-6 h-6" />
                </a>
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
              <div className="flex items-center text-sm text-slate-400">
                {project.metricIcon}
                {project.metric}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border border-electric-blue text-electric-blue px-8 py-3 rounded-lg font-semibold hover:bg-electric-blue hover:text-dark-bg transition-colors"
            data-testid="button-view-all-projects"
          >
            <Github className="mr-2 w-4 h-4" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
