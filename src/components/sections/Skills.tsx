import { Code2, Palette, Terminal, Globe, Github, Database, Laptop, Layers } from 'lucide-react';
import { Activity } from "lucide-react";

export function Skills() {
  const categories = [
    {
      title: "Development",
      icon: <Code2 className="w-5 h-5" />,
      skills: ["HTML5", "CSS3", "JavaScript", "C#", "Node.js", "Bootstrap", "React", "SQL"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Design Tools",
      icon: <Palette className="w-5 h-5" />,
      skills: ["Figma", "Adobe XD", "Photoshop", "Relume", "Canva", "UI/UX Research"],
      color: "from-rose-500/20 to-orange-500/20",
    },
    {
      title: "Analysis & Modeling",
      icon: <Activity className="w-5 h-5" />,
      skills: ["analysis, design, and modeling of information systems (IS)", "Merise analysis language", "UML modeling language"],
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      title: "Tools & Workflow",
      icon: <Terminal className="w-5 h-5" />,
      skills: ["VS Code", "GitHub", "Git", "NPM", "Insomnia", "Postman", "DevTools", "Visual Studio"],
      color: "from-purple-500/20 to-indigo-500/20",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-background overflow-hidden"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6"
            >
              Expertise & <span className="text-primary">Toolbox</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-lg text-muted-foreground"
            >
              A comprehensive list of technologies and tools I master to bring ideas
              to life across development, design, and marketing.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <div
              key={category.title}
              data-aos="zoom-out"
              data-aos-delay={idx * 120}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-primary/40 transition-all duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  data-aos="flip-left"
                  data-aos-delay={idx * 120 + 100}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-primary group-hover:text-white transition-all duration-500"
                >
                  {category.icon}
                </div>

                {/* Title */}
                <h3
                  data-aos="fade-up"
                  data-aos-delay={idx * 120 + 150}
                  className="text-xl font-bold font-display mb-6"
                >
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skill}
                      data-aos="fade-up"
                      data-aos-delay={idx * 120 + skillIdx * 50}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 group-hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Icons */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-20 pt-12 border-t border-border flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <Github className="w-10 h-10" />
          <Laptop className="w-10 h-10" />
          <Database className="w-10 h-10" />
          <Terminal className="w-10 h-10" />
          <Globe className="w-10 h-10" />
          <Code2 className="w-10 h-10" />
        </div>
      </div>
    </section>
  );
}

