import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";

const ArchitectureAuditCTA = () => {
  return (
    <section
      className="section-padding"
      style={{
        backgroundColor: "hsl(215 18% 13%)",
        borderTop: "1px solid hsl(215 25% 22% / 0.6)",
        borderBottom: "1px solid hsl(215 25% 22% / 0.6)",
      }}
    >
      <BlueprintReveal className="max-w-3xl mx-auto text-center">
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
          The Architecture Audit
        </p>
        <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4" delay={0.2}>
          The First Blueprint is{" "}
          <span className="glow-text">on Us</span>.
        </TextReveal>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          An investment of this scale requires a solid foundation. We don't
          start building until we've analyzed the ground you're standing on.
        </p>
        <TextReveal as="h3" className="text-xl md:text-2xl font-bold text-foreground mb-4" delay={0.3}>
          Book a 15-Minute Architecture Audit
        </TextReveal>
        <p className="text-muted-foreground text-base md:text-lg leading-[1.85] max-w-2xl mx-auto mb-10">
          In this brief, high-impact session, the Lead Architect will personally
          audit your current digital presence and identify the structural gaps
          costing you leads. No sales pitch—just a professional blueprint for
          your next stage of growth.
        </p>
        <a
          href="mailto:ivan@valleydigital.agency?subject=Requesting%20a%20Digital%20Architecture%20Audit&body=Hi%20Ivan%2C%0A%0AI'm%20interested%20in%20the%2015-minute%20Digital%20Architecture%20Audit.%0A%0AHere%20is%20my%20website%20URL%3A%20%5BInsert%20URL%5D%0A%0AA%20brief%20note%20on%20my%20current%20conversion%20goals%3A%20%5BInsert%20Goals%5D"
          className="btn-primary-glow btn-hover-lift text-base md:text-lg px-12 py-5 inline-block font-bold"
        >
          Schedule Your Architecture Audit
        </a>
      </BlueprintReveal>
    </section>
  );
};

export default ArchitectureAuditCTA;
