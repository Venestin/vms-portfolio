import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Palette, BarChart3 } from "lucide-react";

function CountUp({
  end,
  suffix = "+",
  duration = 800,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {count === end && suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576033897961-a9ee9479d78e?auto=format&fit=crop&q=80&w=1920"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] z-0 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] z-0 animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="max-w-4xl order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-8 animate-in delay-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">Available for new projects</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-8 leading-[1.1] animate-in delay-200">
              Transforming <br />
              <span className="text-gradient">Ideas into Functional</span> <br />
              <span className="text-gradient">Web Applications</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed animate-in delay-300">
              Junior Full-Stack Developer with a strong foundation in software engineering, experienced in building practical web applications using modern front-end and back-end technologies, and bringing excellent communication, teaching, and problem-solving skills to real-world projects.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 animate-in delay-400">
              <Button size="lg" className="rounded-full px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg group">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg glass">
                Get In Touch
              </Button>
            </div>

            {/* Core Roles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-16 sm:mt-20 animate-in delay-500">
              <div className="glass-card p-5 sm:p-6 rounded-2xl group hover:border-primary/50 transition-all duration-500">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display mb-2 sm:mb-3">Full-Stack Dev</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">HTML, CSS, JS, Node.js, C#, Bootstrap. Building robust backend and interactive frontends.</p>
              </div>

              <div className="glass-card p-5 sm:p-6 rounded-2xl group hover:border-primary/50 transition-all duration-500">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display mb-2 sm:mb-3">UI/UX Design</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Figma expert. Creating pixel-perfect designs that are intuitive and beautiful.</p>
              </div>

              <div className="glass-card p-5 sm:p-6 rounded-2xl group hover:border-primary/50 transition-all duration-500 sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display mb-2 sm:mb-3">Marketing</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Driving conversion and growth with data-driven marketing strategies.</p>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Photo Section - VISIBLE ON ALL SCREENS */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-in delay-300">
            <div className="relative group">
              {/* Glow Effect Behind Photo */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-primary/30 via-emerald-500/20 to-blue-500/30 rounded-full blur-2xl sm:blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

              {/* Photo Container */}
              <div className="relative">
                {/* Main Photo - Responsive sizes */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-3 sm:border-4 border-primary/20 shadow-2xl glass">
                  <div className="relative w-full h-full">
                    <img
                      src="/Profile-photo.webp"
                      alt="Developer Portfolio"
                      className="
                          w-full h-full
                          object-cover
                          object-[50%_-15%]
                          hover:scale-110
                          transition-transform
                          duration-700
                        "
                    />

                  </div>
                  {/* Subtle Bottom Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>

                {/* Floating Badge - Years of Experience */}
                <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 glass-card rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 sm:py-3 shadow-xl border-primary/30 animate-float">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      <CountUp end={3} />
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">Years Exp</div>
                  </div>
                </div>

                {/* Floating Badge - Projects */}
                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 glass-card rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 sm:py-3 shadow-xl border-emerald-500/30 animate-float-delayed">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-500">
                      <CountUp end={10} />
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">Projects</div>
                  </div>
                </div>

                {/* Decorative Animated Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-ping-slow pointer-events-none" />
                <div className="absolute inset-0 rounded-full border-2 border-emerald-500/10 scale-125 animate-ping-slower pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Add Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite;
          animation-delay: 2s;
        }

        @keyframes ping-slow {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0; 
            transform: scale(1.15); 
          }
        }

        .animate-ping-slow {
          animation: ping-slow 5s ease-in-out infinite;
        }

        @keyframes ping-slower {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0; 
            transform: scale(1.25); 
          }
        }

        .animate-ping-slower {
          animation: ping-slower 7s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}