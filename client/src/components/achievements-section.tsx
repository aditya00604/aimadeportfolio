import { Trophy, Code, Brain, Plane } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "11th Rank",
      description: "SAE Competition National Level",
      detail: "Among 150+ teams",
      icon: <Trophy className="text-white text-2xl" />,
      gradient: "from-electric-blue to-tech-purple"
    },
    {
      title: "167th Rank",
      description: "Codeforces Round 1016",
      detail: "Out of 12,000+ participants",
      icon: <Code className="text-white text-2xl" />,
      gradient: "from-neon-green to-electric-blue"
    },
    {
      title: "900+ Problems",
      description: "DSA Problem Solving",
      detail: "GeeksforGeeks, LeetCode",
      icon: <Brain className="text-white text-2xl" />,
      gradient: "from-tech-purple to-neon-green"
    },
    {
      title: "Boeing Finalist",
      description: "Aeromodelling Competition",
      detail: "Techfest, IIT Bombay",
      icon: <Plane className="text-white text-2xl" />,
      gradient: "from-electric-blue to-neon-green"
    }
  ];

  return (
    <section id="achievements" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-electric-blue">Achievements</span> & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-neon-green mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className="bg-dark-bg/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-electric-blue transition-colors"
              data-testid={`achievement-${index}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2" data-testid={`achievement-title-${index}`}>
                {achievement.title}
              </h3>
              <p className="text-slate-300">{achievement.description}</p>
              <p className="text-sm text-slate-400 mt-2">{achievement.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
