import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";
import LiquidReveal from "./motion/LiquidReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const valueProps = [
  {
    num: "01",
    title: "The Conversion Multiplier",
    desc: "A standard website converts at ~1%. An engineered platform with strategic storytelling targets 3%+. That 2% difference isn't just a number—it represents a 200% increase in lead flow without spending an extra dollar on marketing.",
  },
  {
    num: "02",
    title: "Brand Equity & Authority",
    desc: "Premium pricing requires premium positioning. By architecting a world-class digital presence, we move your business out of the commodity trap, allowing you to command higher rates and attract higher-quality clients.",
  },
  {
    num: "03",
    title: "The Automated Sales Force",
    desc: "This platform works 24/7 to educate, persuade, and qualify leads before they ever call you. It replaces manual outreach with automated authority, saving you dozens of hours in the sales cycle every month.",
  },
];

const ROIArchitectureSection = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const headlineInView = useInView(headlineRef, { once: true, margin: "-10%" });

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <BlueprintReveal className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Value
          </p>
          <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight text-foreground" delay={0.2}>
            The ROI of High-Performance{" "}
            <span className="glow-text">Architecture</span>
          </TextReveal>
        </BlueprintReveal>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
          <motion.div
            ref={headlineRef}
            className="md:sticky md:top-32"
            initial={{ opacity: 0, y: 30 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground">
              A Strategic Investment,
              <br />
              Not a Digital <span className="glow-text">Expense.</span>
            </h3>
          </motion.div>

          <div className="space-y-4">
            {valueProps.map((item, i) => (
              <LiquidReveal
                key={item.num}
                index={i}
                className="glass-card p-6 md:p-8 rounded-xl transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-glow-sm)] group"
              >
                <div className="flex gap-5">
                  <span className="glow-text text-2xl md:text-3xl font-black shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SpringCard>
            ))}

            <div className="flex flex-col items-center md:items-start gap-4 pt-4">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 glow-border text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                Featured Project: Digital Infrastructure for Southern Manitoba Service Providers
              </div>
              <p className="text-center md:text-left text-muted-foreground text-sm italic">
                Most of our partners see a full return on their investment within
                the first 2–3 high-value client acquisitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROIArchitectureSection;
