import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";
import FluidSlide from "./motion/FluidSlide";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const valueProps = [
  {
    num: "01",
    title: "More leads without more ad spend",
    desc: "The average DIY website converts around 1% of visitors into inquiries. A professionally built, strategically written site targets 3% or more. That's not a minor improvement — that's potentially tripling your lead flow without spending another dollar on advertising.",
  },
  {
    num: "02",
    title: "Charge what your work is worth",
    desc: "There's a direct link between how professional your digital presence looks and how much you can charge. When your site looks like a premium operation, clients expect — and accept — premium pricing. We move you out of the 'cheapest quote wins' game.",
  },
  {
    num: "03",
    title: "Stop losing hours to the wrong inquiries",
    desc: "A well-built site pre-qualifies your prospects before they ever call you. By the time someone reaches out, they've already seen your work, understood your pricing range, and decided you're the right fit. Less time on tire-kickers. More time on jobs that matter.",
  },
];

const ROIArchitectureSection = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const headlineInView = useInView(headlineRef, { once: true, margin: "0px" });

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <BlueprintReveal className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Why it matters
          </p>
          <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight text-foreground" delay={0.2}>
            A good website isn't a cost. It's the employee that{" "}
            <span className="glow-text">never calls in sick.</span>
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
              <FluidSlide
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
              </FluidSlide>
            ))}

            <div className="flex flex-col items-center gap-4 pt-4">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 glow-border text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                Serving local service businesses across Southern Manitoba
              </div>
              <p className="text-center mt-8 italic" style={{ color: 'hsl(210, 14%, 60%)', opacity: 0.8, fontSize: '0.95rem' }}>
                Our mission is to bridge the gap between where your business is today and the world-class digital presence your brand deserves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROIArchitectureSection;
