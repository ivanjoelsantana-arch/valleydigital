import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";

const PersuasionSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <BlueprintReveal className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Strategy
          </p>
          <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight text-foreground" delay={0.2}>
            The Power of <span className="glow-text">Persuasion</span>
          </TextReveal>
        </BlueprintReveal>

        <BlueprintReveal className="glass-card p-8 md:p-12 lg:p-16 glow-border" delay={0.2}>
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0 items-center">
            <div className="md:pr-12">
              <TextReveal as="h3" className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground" delay={0.4}>
                Design Captures Attention.
                <br />
                <span className="glow-text">Storytelling</span> Captures the Sale.
              </TextReveal>
            </div>

            <div className="hidden md:flex justify-center">
              <div
                className="w-px h-48 animate-pulse-glow"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, hsl(210 100% 56%), transparent)",
                }}
              />
            </div>

            <div className="md:pl-12">
              <p className="text-secondary-foreground leading-loose text-sm md:text-base">
                Copywriting is the strategic art of shifting a visitor from a
                spectator to a participant. It is not just about words—it is
                about{" "}
                <span className="font-semibold text-foreground">
                  Storytelling with intent
                </span>
                . By placing your customer as the hero of the narrative and your
                business as the essential guide, we use psychology-driven copy to
                bridge the gap between their problem and your solution. This
                narrative framework eliminates doubt, builds an emotional
                connection, and creates a logical path that leads directly to a
                transaction. We don't just fill space; we craft the{" "}
                <span className="font-semibold text-foreground">'Yes.'</span>
              </p>
            </div>
          </div>
        </BlueprintReveal>
      </div>
    </section>
  );
};

export default PersuasionSection;
