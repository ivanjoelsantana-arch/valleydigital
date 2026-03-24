import { Link } from "react-router-dom";
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
          First step is free
        </p>
        <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight text-foreground mb-4" delay={0.2}>
          The first conversation is{" "}
          <span className="glow-text">on us</span>.
        </TextReveal>
        <p className="text-muted-foreground text-base md:text-lg leading-[1.85] max-w-2xl mx-auto mb-10">
          Before you spend a dollar, let's make sure we're the right fit. Book a
          free 15-minute call with Ivan. He'll take an honest look at your
          current online presence, tell you exactly what's working and what
          isn't, and give you a clear picture of what your next step should be —
          whether that's working with us or not.
          <br /><br />
          No sales pressure. No obligation. Just a straight answer from someone
          who knows this community.
        </p>
        <a
          href="mailto:ivan@valleydigital.co?subject=Booking%20a%20Free%2015-Minute%20Call&body=Hi%20Ivan%2C%0A%0AI'd%20like%20to%20book%20a%20free%2015-minute%20call.%0A%0AMy%20business%3A%20%5BInsert%20Name%5D%0AMy%20website%20(if%20any)%3A%20%5BInsert%20URL%5D"
          className="btn-primary-glow btn-hover-lift text-base md:text-lg px-12 py-5 inline-block font-bold"
        >
          Book your free 15-minute call →
        </a>
        <p className="text-muted-foreground text-sm mt-4 italic">
          Spots are limited — we only take on a handful of new projects each quarter.
        </p>
      </BlueprintReveal>
    </section>
  );
};

export default ArchitectureAuditCTA;
