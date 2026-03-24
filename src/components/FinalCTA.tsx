import { Link } from "react-router-dom";
import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";

const FinalCTA = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <BlueprintReveal className="glass-card glow-border-strong p-12 md:p-20">
          <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4" delay={0.2}>
            Ready to build something that actually{" "}
            <span className="glow-text">works</span>?
          </TextReveal>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Limited local partner spots available for Q2/Q3 2026.
          </p>
          <Link
            to="/discovery#discovery-section"
            className="btn-primary-glow btn-hover-lift text-base md:text-lg px-10 py-4 inline-block"
          >
            Start the conversation →
          </Link>
        </BlueprintReveal>
      </div>
    </section>
  );
};

export default FinalCTA;
