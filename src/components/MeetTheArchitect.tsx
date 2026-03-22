import ivanHeadshot from "@/assets/ivan-headshot.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useParallax } from "@/hooks/useParallax";

const MeetTheArchitect = () => {
  const headshot = useScrollReveal();
  const textBlock = useScrollReveal();
  const parallax = useParallax(0.15);

  return (
    <section
      ref={parallax.ref as React.RefObject<HTMLElement>}
      className="section-padding relative overflow-hidden border-shimmer"
      style={{
        backgroundColor: "#15191E",
      }}
    >
      {/* Parallax ghost logo */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          transform: `translateY(${parallax.offset}px)`,
          willChange: "transform",
        }}
      >
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="w-[500px] md:w-[700px] lg:w-[900px] opacity-[0.03] select-none"
          style={{ filter: "grayscale(1) brightness(2)" }}
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
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
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Copy */}
          <div
            ref={textBlock.ref}
            className={`${
              textBlock.isVisible ? "scroll-visible-right" : "scroll-hidden-right"
            }`}
          >
            <span className="inline-block glow-text text-xs font-bold tracking-widest uppercase stagger-child stagger-1">
              Lead Architect
            </span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mt-6 stagger-child stagger-2">
              Strategy First. Architecture Second.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-[1.85] max-w-2xl mt-6 stagger-child stagger-3">
              I'm Ivan—a Web Solutions Architect dedicated to helping businesses
              in the Pembina Valley scale through high-performance digital
              engineering. I don't just build websites; I design conversion
              systems that turn local browsers into loyal partners. My approach
              combines deep technical architecture with the psychology of
              storytelling to ensure your brand doesn't just look premium—it
              performs at a premium level.
            </p>
            <p className="text-muted-foreground/60 text-sm italic mt-6 stagger-child stagger-4">
              Based in Altona, MB. Serving the Southern Manitoba business community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheArchitect;
