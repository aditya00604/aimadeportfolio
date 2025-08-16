export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-space-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-electric-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-dark-bg/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              <div className="border-l-4 border-electric-blue pl-6">
                <h4 className="text-xl font-semibold text-neon-green">Bachelor of Engineering</h4>
                <p className="text-slate-300">Computer Science Engineering</p>
                <p className="text-slate-400">Siddaganga Institute of Technology, Tumkur</p>
                <p className="text-electric-blue font-semibold">CGPA: 8.63/10 | Dec 2021 – Jul 2025</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate Computer Science Engineering student with a strong foundation in software development, 
              machine learning, and system design. My journey in technology is driven by curiosity and the desire to 
              create innovative solutions that make a real impact.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              With expertise in full-stack development, AI/ML, and IoT systems, I've built projects ranging from 
              intelligent farming systems to advanced intrusion detection models. I believe in continuous learning 
              and pushing the boundaries of what's possible with code.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-dark-bg/30 rounded-lg border border-slate-700">
                <div className="text-2xl font-bold text-electric-blue" data-testid="stat-dsa-problems">900+</div>
                <div className="text-sm text-slate-400">DSA Problems</div>
              </div>
              <div className="text-center p-4 bg-dark-bg/30 rounded-lg border border-slate-700">
                <div className="text-2xl font-bold text-neon-green" data-testid="stat-codeforces-rank">167th</div>
                <div className="text-sm text-slate-400">Codeforces Rank</div>
              </div>
              <div className="text-center p-4 bg-dark-bg/30 rounded-lg border border-slate-700">
                <div className="text-2xl font-bold text-tech-purple" data-testid="stat-sae-rank">11th</div>
                <div className="text-sm text-slate-400">SAE National</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
