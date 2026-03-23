import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Globe, Code2, BarChart3, Zap, Shield, BoltIcon, X } from "lucide-react";
import { motion, useInView } from "framer-motion";
import TextReveal from "./motion/TextReveal";
import LetterSpacingReveal from "./motion/LetterSpacingReveal";

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
      className="fixed inset-0 z-[60] flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="fixed inset-0 w-screen h-screen bg-background/70 backdrop-blur-[12px]" />
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

  useLayoutEffect(() => {
    const el = ribbonRef.current;
    if (!el) return;
    const scrollWidth = el.scrollWidth;
    const clientWidth = el.clientWidth;
    if (scrollWidth > clientWidth) {
      el.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

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
      <div className="w-full md:w-[95%] lg:max-w-3xl mx-auto relative p-[10px] overflow-visible">
        <div className="pointer-events-none absolute left-[10px] top-[10px] bottom-[10px] w-6 z-10 bg-gradient-to-r from-background/80 to-transparent md:hidden" />
        <div className="pointer-events-none absolute right-[10px] top-[10px] bottom-[10px] w-6 z-10 bg-gradient-to-l from-background/80 to-transparent md:hidden" />
        <div className="glass-card glow-border relative overflow-visible">
          <div
            ref={ribbonRef}
            className="w-full overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none hide-scrollbar rounded-xl"
          >
            <div
              className="absolute inset-0 pointer-events-none rounded-xl"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, hsl(210 100% 56% / 0.08) 50%, transparent 100%)",
                backgroundSize: "30% 100%",
                animation: "ribbon-scan 5s ease-in-out infinite",
              }}
            />
            <div className="relative flex items-center divide-x divide-border/50 px-2 py-4 md:px-3 md:py-3 lg:px-6 lg:py-4 md:justify-between w-max md:w-full">
              {ribbonItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveItem(item)}
                  className={`flex items-center gap-3 md:gap-2 lg:gap-3 px-5 md:px-3 lg:px-5 md:flex-1 cursor-pointer transition-all hover:opacity-80 text-left snap-center ${
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
                  <item.icon className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-foreground text-xs md:text-[0.7rem] lg:text-sm font-semibold leading-tight whitespace-nowrap">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground text-[10px] md:text-[9px] lg:text-xs leading-tight mt-0.5 whitespace-nowrap">
                      {item.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="flex flex-col justify-center section-padding pt-32 py-[100px]">
      <div ref={ref} className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 space-y-6">
          <motion.div
            className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            Accepting Q2 2026 engagements
          </motion.div>

          <TextReveal as="h1" className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]" delay={0.15}>
             We Don't Just Design Websites. We Architect the Systems That{" "}
             <span className="glow-text">Grow Your Business.</span>
          </TextReveal>

          <TextReveal as="p" className="text-muted-foreground text-xl md:text-2xl max-w-[800px] mx-auto opacity-90" delay={0.3} style={{ lineHeight: 1.6 }}>
            Most agencies deliver a digital brochure. We engineer a conversion-focused
            infrastructure designed to attract your ideal clients and drive your growth.
          </TextReveal>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            <PerformanceRibbon />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { bentoItems };

export default HeroSection;
