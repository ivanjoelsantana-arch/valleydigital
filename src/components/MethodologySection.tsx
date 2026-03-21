import { Search, Zap, Target, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    icon: Search,
    title: "Structural Discovery & Blueprinting",
    desc: "We don't start with colors; we start with objectives. Before a single pixel is moved, we map your customer's journey and define the technical requirements needed to support your growth.",
    goal: "Eliminate technical debt before it starts.",
  },
  {
    icon: Zap,
    title: "Performance-First Engineering",
    desc: "In the age of instant gratification, speed is a ranking factor. We architect sites with a 'Clean Code' philosophy\u2014optimizing for core web vitals to ensure your site is lightning-fast on every device, from the Pembina Valley to a global audience.",
    goal: "Sub-second load times and flawless mobile responsiveness.",
  },
  {
    icon: Target,
    title: "Conversion-Centric Layouts",
    desc: "A beautiful site that doesn't sell is a failed project. We use data-driven design patterns to guide your visitors toward the 'Buy' or 'Contact' button, turning passive traffic into active leads.",
    goal: "A measurable ROI on your digital investment.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Scalability",
    desc: "Your business will look different in two years. We build on modern, flexible stacks that allow your site to evolve without requiring a total rebuild.",
    goal: "A future-proof asset that grows with you.",
  },
];

const PillarCard = ({ pillar, index }: { pillar: (typeof pillars)[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`glass-card p-8 group hover:border-primary/40 hover:-translate-y-2 hover:shadow-[var(--shadow-glow-sm)] transition-all duration-300 ${
        isVisible ? "scroll-visible" : "scroll-hidden"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 mb-6 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
        <pillar.icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-3">{pillar.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{pillar.desc}</p>
      <p className="text-xs font-semibold text-primary tracking-wide uppercase">
        The Goal: <span className="text-secondary-foreground">{pillar.goal}</span>
      </p>
    </div>
  );
};

const MethodologySection = () => {
  const header = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div
          ref={header.ref}
          className={`text-center mb-16 max-w-3xl mx-auto ${
            header.isVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Methodology
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-5">
            The Valley Digital Framework:{" "}
            <span className="glow-text">Architecture Over Design</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Most websites are built as static brochures. We build them as high-performance
            business engines. Our architectural approach ensures your digital presence is
            scalable, secure, and engineered for conversion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
