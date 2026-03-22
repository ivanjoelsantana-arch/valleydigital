import ivanHeadshot from "@/assets/ivan-headshot.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const MeetTheArchitect = () => {
  const headshot = useScrollReveal();
  const textBlock = useScrollReveal();

  return (
    <section
      className="section-padding"
      style={{
        backgroundColor: "#1E2329",
        borderTop: "1px solid #2A2A2A",
        borderBottom: "1px solid #2A2A2A",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-center">
          {/* Left: Headshot */}
          <div
            ref={headshot.ref}
            className={`flex justify-center md:justify-start ${
              headshot.isVisible ? "scroll-visible-scale" : "scroll-hidden-scale"
            }`}
          >
            <div
              className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0"
              style={{
                border: "1px solid hsl(210 100% 56%)",
                boxShadow:
                  "0 0 24px -4px hsl(210 100% 56% / 0.45), 0 0 8px -2px hsl(210 100% 56% / 0.25)",
              }}
            >
              <img
                src={ivanHeadshot}
                alt="Ivan — Lead Architect at Valley Digital Architecture"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right: Copy */}
          <div
            ref={textBlock.ref}
            className={`space-y-6 ${
              textBlock.isVisible ? "scroll-visible-right" : "scroll-hidden-right"
            }`}
          >
            <span className="inline-block glow-text text-xs font-bold tracking-widest uppercase">
              Lead Architect
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Strategy First. Architecture Second.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-[1.85] max-w-2xl">
              I'm Ivan—a Web Solutions Architect dedicated to helping businesses
              in the Pembina Valley scale through high-performance digital
              engineering. I don't just build websites; I design conversion
              systems that turn local browsers into loyal partners. My approach
              combines deep technical architecture with the psychology of
              storytelling to ensure your brand doesn't just look premium—it
              performs at a premium level.
            </p>
            <p className="text-muted-foreground/60 text-sm italic">
              Based in Altona, MB. Serving the Southern Manitoba business community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheArchitect;
