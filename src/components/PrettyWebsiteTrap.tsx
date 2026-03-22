import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";
import LetterSpacingReveal from "./motion/LetterSpacingReveal";

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
      <>
        DIY builders give you a "skin," but they don't give you a nervous system.
        They are often bloated with messy code that slows your site down, confusing
        layouts that frustrate your customers,{" "}
        <LetterSpacingReveal className="inline text-[1.2em] font-bold text-foreground" delay={0.3}>
          and zero strategy for how to actually turn a visitor into a lead.
        </LetterSpacingReveal>
      </>,
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

const NarrativeBlock = ({
  section,
  index,
}: {
  section: (typeof sections)[0];
  index: number;
}) => {
  return (
    <BlueprintReveal delay={index * 0.1}>
      {index > 0 && (
        <div className="flex items-center gap-4 mb-12">
          <span className="flex-1 h-px bg-border/50" />
          <span className="text-primary text-xs font-medium tracking-widest uppercase">
            {section.label}
          </span>
          <span className="flex-1 h-px bg-border/50" />
        </div>
      )}

      <TextReveal as="h3" className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-6" delay={index * 0.1 + 0.2}>
        {section.heading}
      </TextReveal>

      <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed" style={{ lineHeight: 1.85 }}>
        {section.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </BlueprintReveal>
  );
};

const PrettyWebsiteTrap = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(210 100% 56% / 0.04), transparent 70%), " +
            "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(220 20% 9%) 50%, hsl(var(--background)) 100%)",
        }}
      />

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
        <BlueprintReveal className="text-center mb-20">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            A Letter from the Architect
          </p>
          <TextReveal as="h2" className="font-sans text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6" delay={0.2}>
            The "Pretty Website"{" "}
            <span className="glow-text">Trap</span>
          </TextReveal>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            Before we build anything, there's a hard truth most agencies won't
            tell you. Consider this your honest briefing.
          </p>
        </BlueprintReveal>

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
