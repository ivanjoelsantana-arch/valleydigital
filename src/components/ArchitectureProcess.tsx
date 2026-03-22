import { Compass, Wrench, Rocket } from "lucide-react";
import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";
import ParticleAssembly from "./motion/ParticleAssembly";

const steps = [
  {
    num: "01",
    title: "Strategic Discovery",
    desc: "Aligning your goals with a narrative that resonates with your ideal customer and positions your brand as the authority.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Precision Engineering",
    desc: "Building the high-performance UI with obsessive attention to speed, storytelling, and conversion architecture.",
    icon: Wrench,
  },
  {
    num: "03",
    title: "Market Launch",
    desc: "Deploying for maximum conversion with data-driven optimizations and strategic go-to-market positioning.",
    icon: Rocket,
  },
];

const ArchitectureProcess = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <BlueprintReveal className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Method
          </p>
          <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight text-foreground" delay={0.2}>
            The 3-Step Architecture{" "}
            <span className="glow-text">Process</span>
          </TextReveal>
        </BlueprintReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <LiquidReveal
              key={step.num}
              index={i}
              className="glass-card p-8 md:p-10 text-center group hover:border-primary/40 hover:shadow-[var(--shadow-glow-sm)] transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="glow-text text-3xl font-black">{step.num}</span>
              <h3 className="text-xl font-bold text-foreground mt-3 mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>
            </LiquidReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureProcess;
