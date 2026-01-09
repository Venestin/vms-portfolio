import { useEffect, useRef, useState } from "react";

/* ---------- Composant compteur animé ---------- */
function CountUp({
  end,
  suffix = "",
  duration = 800,
  start,
}: {
  end: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return (
    <span>
      {count}
      {count === end && suffix}
    </span>
  );
}

/* ---------- Section Stats ---------- */
export function Stats() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Projects Completed", value: 10, suffix: "+" },
    { label: "Marketing ROI", value: 300, suffix: "%" },
    { label: "Design Tools", value: 12, suffix: "" },
  ];

  /* ---------- Observer scroll ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-background py-12 border-y border-border"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center animate-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <p className="text-3xl md:text-5xl font-bold font-display text-primary mb-2">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  start={isVisible}
                />
              </p>
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
