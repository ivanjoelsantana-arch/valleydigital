import { useState } from "react";
import { Globe, Code2, BarChart3 } from "lucide-react";

const solutions = [
  { label: "Web Architecture", icon: Globe },
  { label: "Sales Narrative", icon: Code2 },
  { label: "Brand Identity", icon: BarChart3 },
];

const CoreSolutionsSelector = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="glass-card p-1.5 max-w-xl w-full mx-auto glow-border rounded-full">
      <div className="flex items-center gap-1">
        {solutions.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActive(active === label ? null : label)}
            className={`
              flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
              transition-all duration-300 cursor-pointer
              ${active === label
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
              }
            `}
            style={active === label ? {
              background: "linear-gradient(180deg, hsl(210 100% 60%), hsl(215 80% 42%))",
              boxShadow: "0 0 20px -5px hsl(210 100% 56% / 0.5), inset 0 1px 0 hsl(210 100% 72% / 0.3)",
            } : undefined}
            onMouseEnter={(e) => {
              if (active !== label) {
                e.currentTarget.style.boxShadow = "0 0 15px -5px hsl(210 100% 56% / 0.3)";
                e.currentTarget.style.background = "hsl(220 16% 14%)";
              }
            }}
            onMouseLeave={(e) => {
              if (active !== label) {
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.background = "";
              }
            }}
          >
            <Icon className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
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
  accent: true
},
{
  title: "SaaS Development",
  desc: "Ship faster. Multi-tenant, API-first products that grow with you.",
  icon: Code2,
  className: "md:col-span-1",
  accent: false
},
{
  title: "Strategic Consulting",
  desc: "Data-driven digital strategy that converts browsers into buyers.",
  icon: BarChart3,
  className: "md:col-span-1",
  accent: false
}];


const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center section-padding pt-32 py-[100px]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs text-muted-foreground mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Accepting Q2 2026 engagements
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            Architecting <span className="glow-text">Scale</span>,<br />
            Not Just Websites.
          </h1>
          <p className="text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
            Premium digital architecture for the modern business. We transform local brands through world-class web design, masterful sales copy, and stunning logo design that convert browsers into partners.
          </p>
          <CommandKSearch />
        </div>
      </div>
    </section>);

};

export { bentoItems };


export default HeroSection;