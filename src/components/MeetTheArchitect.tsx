import ivanHeadshot from "@/assets/ivan-headshot.png";
import logo from "@/assets/logo.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./motion/TextReveal";

const MeetTheArchitect = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        backgroundColor: "hsl(220 20% 8%)",
        borderTop: "1px solid hsl(215 25% 22% / 0.6)",
        borderBottom: "1px solid hsl(215 25% 22% / 0.6)",
      }}
    >
      {/* Watermark logo — perfectly centered, no rotation */}
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          width: "80%",
          opacity: 0.03,
          zIndex: 0,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(0deg)",
        }}
      />
      <div className="max-w-7xl mx-auto relative" style={{ zIndex: 1 }}>
        <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-center">
          {/* Left: Headshot */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : {}
            }
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
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
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <span className="inline-block glow-text text-xs font-bold tracking-widest uppercase">
              Lead Architect
            </span>
            <TextReveal as="h2" className="text-2xl md:text-4xl font-bold tracking-tight text-foreground leading-tight" delay={0.3}>
              Strategy First. Architecture Second.
            </TextReveal>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheArchitect;
