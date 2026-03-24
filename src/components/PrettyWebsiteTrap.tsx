import { motion } from "framer-motion";
import FluidDrift from "./motion/FluidDrift";

import { useIsMobile } from "@/hooks/use-mobile";

const sections = [
  {
    label: "The Trap",
    heading: (
      <>
        Why a "Better Looking" Website is{" "}
        <span className="glow-text">Leaving You Behind</span>
      </>
    ),
    paragraphs: [
      "Most business owners start in the same place: You know you need a digital presence, so you try the DIY route. You spend late nights fighting with a website builder template, dragging boxes around, and trying to make it look \"professional.\"",
      <span key="trap-italic" className="italic font-semibold text-foreground">
        But here's the reality: A pretty website is just a digital layer of paint.
        It can't hide a weak structure, and it certainly won't support the weight
        of a growing business.
      </span>,
    ],
  },
  {
    label: "The Problem",
    heading: (
      <>
        The DIY Mess vs.{" "}
        <span className="glow-text">Strategic Architecture</span>
      </>
    ),
    paragraphs: [
      "DIY builders give you a \"skin,\" but they don't give you a nervous system. They are often bloated with messy code that slows your site down, confusing layouts that frustrate your customers, and zero strategy for how to actually turn a visitor into a lead.",
    ],
  },
  {
    label: "The Craft",
    heading: (
      <>
        The Silent Power of{" "}
        <span className="glow-text">Expert Copywriting</span>
      </>
    ),
    paragraphs: [
      "You could have the most beautiful site in Manitoba, but if the words don't resonate, your visitors will leave in seconds.",
      <>
        <span className="font-semibold text-foreground">The Problem:</span> Most
        sites talk at the customer about "Me, Me, Me."
      </>,
      <>
        <span className="font-semibold text-foreground">The Architecture:</span>{" "}
        We craft copy that speaks directly to your customer's pain points and
        positions your business as the only logical solution. Every word is
        engineered to build trust and drive action.
      </>,
    ],
  },
  {
    label: "The Investment",
    heading: (
      <>
        An investment designed to scale your business{" "}
        <span className="glow-text">while you sleep.</span>
      </>
    ),
    paragraphs: [
      "When you work with Valley Digital Architecture, you aren't paying for \"a website.\" You are investing in a high-performance business asset.",
      <>
        A poorly converting DIY site is a liability.
        <br />
        <span className="font-semibold text-foreground">
          Digital Architecture
        </span>{" "}
        is an investment designed to scale your business while you sleep.
      </>,
    ],
  },
];

// Alternating directions: index 1 (left), 2 (right), 3 (left)
const getDirection = (index: number) => (index % 2 === 1 ? -1 : 1);

const NarrativeBlock = ({
  section,
  index,
}: {
  section: (typeof sections)[0];
  index: number;
}) => {
  const isMobile = useIsMobile();

  // First block ("The Trap") keeps FluidDrift (no horizontal slide)
  if (index === 0) {
    return (
      <FluidDrift>
        <h3 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-6">
          {section.heading}
        </h3>
        <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed" style={{ lineHeight: 1.85 }}>
          {section.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </FluidDrift>
    );
  }

  const dir = getDirection(index);
  const xOffset = isMobile ? 0 : 50 * dir;
  const yOffset = isMobile ? 20 : 10;

  return (
    <motion.div
      style={{ willChange: "transform, opacity" }}
      initial={{ opacity: 0, x: xOffset, y: yOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-4 mb-12">
        <span className="flex-1 h-px bg-border/50" />
        <span className="text-primary text-xs font-medium tracking-widest uppercase">
          {section.label}
        </span>
        <span className="flex-1 h-px bg-border/50" />
      </div>

      <h3 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-6">
        {section.heading}
      </h3>

      <motion.div
        className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed"
        style={{ lineHeight: 1.85 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        {section.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </motion.div>
    </motion.div>
  );
};

const PrettyWebsiteTrap = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background with parallax */}
      <FluidDrift parallax className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(210 100% 56% / 0.04), transparent 70%), " +
              "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220 20% 9%) 50%, hsl(var(--background)) 100%)",
          }}
        />
      </FluidDrift>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="w-[500px] md:w-[700px] lg:w-[900px] opacity-[0.03] select-none"
          style={{ filter: "grayscale(1) brightness(2)" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <FluidDrift className="text-center mb-20">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            A Letter from the Architect
          </p>
          <h2 className="font-sans text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            The "Pretty Website"{" "}
            <span className="glow-text">Trap</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            To the Business Owner who is tired of "good enough" digital presence:
            Most websites are built to look pretty; ours are built to convert
            visitors into paying clients. We don't see your business as a
            "project"—We see it as a partnership. Investing in Valley Digital
            Architecture isn't about buying a website; it's about installing a
            24/7 sales expert into your business model. We are your trusted
            partner in seeing your growth through to the end.
          </p>
        </FluidDrift>

        <div className="space-y-16 md:space-y-20">
          {sections.map((section, i) => (
            <NarrativeBlock key={i} section={section} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrettyWebsiteTrap;
