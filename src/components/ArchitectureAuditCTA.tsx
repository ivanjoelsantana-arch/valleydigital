import { useScrollReveal } from "@/hooks/useScrollReveal";

const ArchitectureAuditCTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="section-padding"
      style={{
        backgroundColor: "#15191E",
        borderTop: "1px solid rgba(45, 55, 72, 0.6)",
        borderBottom: "1px solid rgba(45, 55, 72, 0.6)",
      }}
    >
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center ${
          isVisible ? "scroll-visible" : "scroll-hidden"
        }`}
      >
        <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
          The Architecture Audit
        </p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4">
          The First Blueprint is{" "}
          <span className="glow-text">on Us</span>.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          An investment of this scale requires a solid foundation. We don't
          start building until we've analyzed the ground you're standing on.
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          Book a 15-Minute Architecture Audit
        </h3>
        <p className="text-muted-foreground text-base md:text-lg leading-[1.85] max-w-2xl mx-auto mb-10">
          In this brief, high-impact session, the Lead Architect will personally
          audit your current digital presence and identify the structural gaps
          costing you leads. No sales pitch—just a professional blueprint for
          your next stage of growth.
        </p>
        <a
          href="#contact"
          className="btn-primary-glow text-base md:text-lg px-12 py-5 inline-block font-bold"
        >
          Schedule Your Architecture Audit
        </a>
      </div>
    </section>
  );
};

export default ArchitectureAuditCTA;
