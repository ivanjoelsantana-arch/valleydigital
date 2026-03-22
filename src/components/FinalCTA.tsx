import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";

const FinalCTA = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <BlueprintReveal className="glass-card glow-border-strong p-12 md:p-20">
          <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4" delay={0.2}>
            Ready to Architect Your{" "}
            <span className="glow-text">Growth</span>?
          </TextReveal>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Limited Local Partner spots available for Q2 2026.
          </p>
          <a
            href="#pricing"
            className="btn-primary-glow btn-hover-lift text-base md:text-lg px-10 py-4 inline-block"
          >
            Start Your Build
          </a>
        </BlueprintReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
