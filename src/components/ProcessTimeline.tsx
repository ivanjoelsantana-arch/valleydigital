import { useEffect, useRef, useState } from "react";

const steps = [
  { phase: "01", title: "Discovery & Audit", desc: "Deep dive into your tech stack, business goals, and user flows." },
  { phase: "02", title: "Architecture Blueprint", desc: "System design, tech selection, and milestone planning." },
  { phase: "03", title: "Sprint Engineering", desc: "Agile development cycles with weekly demos and iterations." },
  { phase: "04", title: "Launch & Optimize", desc: "Deployment, monitoring, and continuous performance tuning." },
];

const ProcessTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = stepsRef.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveIndex((prev) => Math.max(prev, idx));
          }
        });
      },
      { threshold: 0.6 }
    );

    stepsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">Process</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            How We <span className="glow-text">Deliver</span>
          </h2>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
          <div
            className="absolute left-6 md:left-8 top-0 w-px transition-all duration-700 ease-out"
            style={{
              height: activeIndex >= 0 ? `${((activeIndex + 1) / steps.length) * 100}%` : "0%",
              background: "linear-gradient(to bottom, hsl(245 80% 62%), hsl(260 80% 55%))",
              boxShadow: "0 0 12px hsl(245 80% 62% / 0.6)",
            }}
          />
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.phase}
                ref={(el) => { stepsRef.current[i] = el; }}
                className="flex gap-6 md:gap-8 items-start"
              >
                <div
                  className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shrink-0 text-sm md:text-base font-bold transition-all duration-500 ${
                    i <= activeIndex
                      ? "bg-primary text-primary-foreground glow-border-strong"
                      : "bg-secondary text-muted-foreground border border-border"
                  }`}
                >
                  {step.phase}
                </div>
                <div className={`pt-2 md:pt-4 transition-opacity duration-500 ${i <= activeIndex ? "opacity-100" : "opacity-40"}`}>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
