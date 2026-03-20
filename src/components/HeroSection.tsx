import { Globe, Code2, BarChart3, Zap, Shield, BoltIcon } from "lucide-react";

const ribbonItems = [
  {
    icon: BoltIcon,
    title: "99+ PageSpeed Score",
    subtitle: "Optimized Core Web Vitals",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    subtitle: "SSL & Database Encryption",
  },
  {
    icon: Zap,
    title: "Instant Global Edge",
    subtitle: "Sub-200ms Response Times",
  },
];

const PerformanceRibbon = () => {
  return (
    <div className="glass-card max-w-3xl w-full mx-auto glow-border relative overflow-hidden">
      {/* Scanning light effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, hsl(210 100% 56% / 0.08) 50%, transparent 100%)",
          backgroundSize: "30% 100%",
          animation: "ribbon-scan 5s ease-in-out infinite",
        }}
      />
      <div className="relative flex items-center justify-between divide-x divide-border/50 px-2 py-4 md:px-6">
        {ribbonItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 flex-1 px-3 md:px-5"
          >
            <item.icon className="w-5 h-5 text-primary shrink-0" />
            <div className="min-w-0">
              <p className="text-foreground text-xs md:text-sm font-semibold leading-tight whitespace-nowrap">
                {item.title}
              </p>
              <p className="text-muted-foreground text-[10px] md:text-xs leading-tight mt-0.5 whitespace-nowrap">
                {item.subtitle}
              </p>
            </div>
          </div>
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
          <PerformanceRibbon />
        </div>
      </div>
    </section>);

};

export { bentoItems };


export default HeroSection;