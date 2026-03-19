import { useState, useEffect } from "react";
import { Search, ArrowRight, Globe, Code2, BarChart3 } from "lucide-react";

const commands = [
  "Scale my SaaS to 10k users...",
  "Architect a microservices platform...",
  "Build a high-conversion funnel...",
  "Optimize cloud infrastructure...",
];

const CommandKSearch = () => {
  const [currentCmd, setCurrentCmd] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const text = commands[currentCmd];
    let i = 0;
    setDisplayText("");
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setCurrentCmd((c) => (c + 1) % commands.length), 1500);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [currentCmd]);

  return (
    <div className="glass-card p-4 max-w-xl w-full mx-auto glow-border">
      <div className="flex items-center gap-3">
        <Search className="w-5 h-5 text-muted-foreground shrink-0" />
        <span className="text-foreground/90 text-sm md:text-base">{displayText}</span>
        <span className="w-0.5 h-5 bg-primary animate-blink" />
        <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md shrink-0">
          <span>⌘</span><span>K</span>
        </div>
      </div>
    </div>
  );
};

const bentoItems = [
  {
    title: "Web Solutions Architecture",
    desc: "Enterprise-grade platforms built for scale. From monoliths to microservices.",
    icon: Globe,
    className: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    title: "SaaS Development",
    desc: "Ship faster. Multi-tenant, API-first products that grow with you.",
    icon: Code2,
    className: "md:col-span-1",
    accent: false,
  },
  {
    title: "Strategic Consulting",
    desc: "Data-driven digital strategy that converts browsers into buyers.",
    icon: BarChart3,
    className: "md:col-span-1",
    accent: false,
  },
];

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center section-padding pt-32 pb-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs text-muted-foreground mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Accepting Q3 2026 engagements
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            Architecting <span className="glow-text">Scale</span>,<br />
            Not Just Websites.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Valley Digital Consulting engineers high-performance digital systems that compound growth. Strategy. Code. Results.
          </p>
          <CommandKSearch />
        </div>
      </div>
    </section>
  );
};

export { bentoItems };


export default HeroSection;
