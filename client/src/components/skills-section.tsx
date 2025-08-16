import { Code, Globe, Database } from "lucide-react";

export default function SkillsSection() {
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
    <section id="skills" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="text-electric-blue">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-dark-bg/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-electric-blue transition-colors group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-tech-purple rounded-lg flex items-center justify-center mr-4">
                <Code className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Languages</h3>
            </div>
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
          </div>
          
          {/* Web Development */}
          <div className="bg-dark-bg/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-electric-blue transition-colors group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-electric-blue rounded-lg flex items-center justify-center mr-4">
                <Globe className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Web Development</h3>
            </div>
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
          </div>
          
          {/* Databases */}
          <div className="bg-dark-bg/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-electric-blue transition-colors group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-tech-purple to-neon-green rounded-lg flex items-center justify-center mr-4">
                <Database className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">Databases</h3>
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
