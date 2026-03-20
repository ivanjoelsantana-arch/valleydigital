import { useState, useEffect, useRef } from "react";
import { Globe, Code2, BarChart3, Zap, Shield, BoltIcon, X } from "lucide-react";

const ribbonItems = [
  {
    icon: BoltIcon,
    title: "99+ PageSpeed Score",
    subtitle: "Optimized Core Web Vitals",
    modalIcon: BoltIcon,
    modalHeadline: "Performance Engineering",
    modalBody:
      "We architect every site with a 'Performance-First' philosophy. By eliminating legacy bloat and optimizing Core Web Vitals, we ensure your brand loads instantly, improving both SEO rankings and user retention.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    subtitle: "SSL & Database Encryption",
    modalIcon: Shield,
    modalHeadline: "Enterprise-Grade Security",
    modalBody:
      "Our solutions utilize a decoupled, headless architecture. By separating the frontend from the data layer and using encrypted API endpoints, we eliminate 99% of common web vulnerabilities found in traditional platforms.",
  },
  {
    icon: Zap,
    title: "Instant Global Edge",
    subtitle: "Sub-200ms Response Times",
    modalIcon: Globe,
    modalHeadline: "Global Edge Delivery",
    modalBody:
      "Your site lives on a high-performance Global Content Delivery Network (CDN). We cache your data in hundreds of edge locations worldwide, ensuring a sub-200ms response time for users in the Pembina Valley and beyond.",
  },
];

const RibbonModal = ({
  item,
  onClose,
}: {
  item: (typeof ribbonItems)[0];
  onClose: () => void;
}) => {
  const Icon = item.modalIcon;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[8px]" />
      <div
        className="relative glass-card glow-border max-w-lg w-full p-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:text-primary/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 mb-5">
          <Icon className="w-7 h-7 text-primary" />
          <h3 className="text-foreground text-xl font-bold">{item.modalHeadline}</h3>
        </div>
        <p className="text-secondary-foreground text-sm leading-relaxed" style={{ lineHeight: 1.7 }}>
          {item.modalBody}
        </p>
      </div>
    </div>
  );
};

const PerformanceRibbon = () => {
  const [activeItem, setActiveItem] = useState<(typeof ribbonItems)[0] | null>(null);
  const [litSegments, setLitSegments] = useState<boolean[]>([false, false, false]);
  const ribbonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ribbonRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ribbonItems.forEach((_, i) => {
            setTimeout(() => {
              setLitSegments((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 200);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={ribbonRef}
        className="glass-card max-w-3xl w-full mx-auto glow-border relative overflow-hidden"
      >
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
            <button
              key={i}
              onClick={() => setActiveItem(item)}
              className={`flex items-center gap-3 flex-1 px-3 md:px-5 cursor-pointer transition-all hover:opacity-80 text-left ${
                litSegments[i]
                  ? "ribbon-segment-visible"
                  : "ribbon-segment-hidden"
              }`}
              style={{
                animation: litSegments[i]
                  ? "ribbon-shimmer 0.6s ease-out"
                  : undefined,
              }}
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
            </button>
          ))}
        </div>
      </div>
      {activeItem && (
        <RibbonModal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </>
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
    <section className="flex flex-col justify-center section-padding pt-32 py-[100px]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs text-muted-foreground mb-4 scroll-hidden scroll-visible">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Accepting Q2 2026 engagements
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            Architecting <span className="glow-text">Scale</span>,<br />
            Not Just Websites.
          </h1>
          <p
            className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto"
            style={{ lineHeight: 1.7 }}
          >
            A stunning website without masterful copy is a building without a
            foundation. We engineer both.
          </p>
          <PerformanceRibbon />
        </div>
      </div>
    </section>
  );
};

export { bentoItems };

export default HeroSection;
