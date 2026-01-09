import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Projects() {
  const projects = [
    {
      title: "Pharmaceutical Office Management Dashboard",
      description:
        "A comprehensive dashboard for managing a pharmaceutical office, including inventory tracking, sales management, and real-time operational insights.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "REST API", "Chart.js"],
      image:
        "/iMac-and-iPhone-Pro-Showcase-Screens-Free-psd-Mockup.webp",
      link: "#",
      github: "#",
    },
    {
      title: "English Training Center Website",
      description:
        "A modern website for an English training center, showcasing courses, supporting learner engagement, and promoting language skill development.",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "Figma", "Responsive Design"],

      image:
        "/Macbook-Pro-Showcase-Screen-Scene-Free-psd-Mockup.webp",
      link: "#",
      github: "#",
    },
    {
      title: "Dynamic Association Website",
      description:
        "Designed and developed a dynamic platform that presents the association’s details and marketing content, with a customized blog and a dedicated admin panel for content management.",
      tags: ["UI/UX", "JavaScript", "HTML5/CSS", "Bootstrap"],
      image:
        "/iPad-Proand-iPhone-Pro-Showcase-Screens-Free-psd-Mockup.webp",
      link: "#",
      github: "#",
    },
    {
      title: "Smart Pharmacy Management System",
      description:
        "An intelligent dashboard for pharmacies that centralizes sales history, stock monitoring, low-stock and expiration alerts, and operational analytics. Built with a user-friendly and responsive interface, it helps pharmacists manage inventory, prescriptions, and sales workflows efficiently in real-world environments.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "REST API", "Chart.js"],
      image:
        "/Macbook-Air-and-iPad-Pro-Showcase-Screens-psd-Mockup.webp",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-secondary/20 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6"
            >
              Featured <span className="text-primary">Projects</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-lg text-muted-foreground"
            >
              A collection of projects where I've combined technical development
              with strategic marketing and human-centric design.
            </p>
          </div>

          <Button
            data-aos="fade-left"
            variant="outline"
            className="rounded-full glass hidden md:flex"
          >
            Explore All Projects
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              data-aos="zoom-out"
              data-aos-delay={idx * 150}
              className="group glass-card rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div
                data-aos="fade-in"
                data-aos-delay={idx * 150 + 100}
                className="relative aspect-[16/10] overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>

                <div className="absolute top-6 right-6 flex gap-3">
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tag}
                      data-aos="fade-up"
                      data-aos-delay={idx * 150 + tagIdx * 60}
                      className="text-[10px] uppercase tracking-widest font-bold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  data-aos="fade-up"
                  className="text-2xl font-bold font-display mb-4 group-hover:text-primary transition-colors"
                >
                  {project.title}
                </h3>

                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-muted-foreground mb-8 leading-relaxed"
                >
                  {project.description}
                </p>

                <div data-aos="fade-right">
                  <Button
                    variant="link"
                    className="p-0 text-primary font-bold group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile button */}
        <div
          data-aos="fade-up"
          className="mt-16 flex justify-center md:hidden"
        >
          <Button variant="outline" className="rounded-full glass w-full py-6">
            View All Work
          </Button>
        </div>
      </div>
    </section>
  );
}


function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
