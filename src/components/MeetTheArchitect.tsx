import { useEffect, useRef } from "react";
import ivanHeadshot from "@/assets/ivan-headshot.png";
import logo from "@/assets/logo.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const MeetTheArchitect = () => {
  const headshot = useScrollReveal();
  const label = useScrollReveal();
  const heading = useScrollReveal();
  const body = useScrollReveal();
  const location = useScrollReveal();
  const ghostLogoRef = useRef<HTMLImageElement>(null);

  // Parallax effect on ghost logo
  useEffect(() => {
    const handleScroll = () => {
      const el = ghostLogoRef.current;
      if (!el) return;
      const section = el.closest("section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const offset = rect.top * 0.1;
      el.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        backgroundColor: "#15191E",
        borderTop: "1px solid rgba(45, 55, 72, 0.6)",
        borderBottom: "1px solid rgba(45, 55, 72, 0.6)",
      }}
    >
      {/* Watermark logo with parallax */}
      <img
        ref={ghostLogoRef}
        src={logo}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 m-auto pointer-events-none select-none"
        style={{ width: "80%", opacity: 0.03, zIndex: 0, willChange: "transform" }}
      />
      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
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

          {/* Right: Copy — staggered reveals */}
          <div className="space-y-6">
            <span
              ref={label.ref}
              className={`inline-block glow-text text-xs font-bold tracking-widest uppercase ${
                label.isVisible ? "scroll-visible" : "scroll-hidden"
              }`}
            >
              Lead Architect
            </span>
            <h2
              ref={heading.ref}
              className={`text-2xl md:text-4xl font-bold tracking-tight text-foreground leading-tight ${
                heading.isVisible ? "scroll-visible" : "scroll-hidden"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Strategy First. Architecture Second.
            </h2>
            <p
              ref={body.ref}
              className={`text-muted-foreground text-base md:text-lg leading-[1.85] max-w-2xl ${
                body.isVisible ? "scroll-visible" : "scroll-hidden"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              I'm Ivan—a Web Solutions Architect dedicated to helping businesses
              in the Pembina Valley scale through high-performance digital
              engineering. I don't just build websites; I design conversion
              systems that turn local browsers into loyal partners. My approach
              combines deep technical architecture with the psychology of
              storytelling to ensure your brand doesn't just look premium—it
              performs at a premium level.
            </p>
            <p
              ref={location.ref}
              className={`text-muted-foreground/60 text-sm italic ${
                location.isVisible ? "scroll-visible" : "scroll-hidden"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Based in Altona, MB. Serving the Southern Manitoba business community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheArchitect;
