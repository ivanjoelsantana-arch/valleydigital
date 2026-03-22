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
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-center">
          {/* Left Column (40%): Headshot */}
          <div
            ref={headshot.ref}
            className={`flex justify-center ${
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

          {/* Right Column (60%): Copy */}
          <div
            ref={textBlock.ref}
            className={`text-left ${
              textBlock.isVisible ? "scroll-visible-right" : "scroll-hidden-right"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight stagger-child stagger-1">
              Lead Architect
            </h2>
            <h3
              className="text-lg md:text-xl font-semibold mt-4 stagger-child stagger-2"
              style={{ color: "#2D3748" }}
            >
              Meet the Visionary Behind Your Blueprint
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-[1.85] max-w-2xl mt-6 stagger-child stagger-3">
              Our architectural approach isn't a fit for every business. It is
              designed specifically for the established owner who is ready to
              move past temporary fixes and{" "}
              <span className="text-foreground font-semibold">
                build a digital foundation capable of supporting their
                multi-million dollar vision.
              </span>
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
