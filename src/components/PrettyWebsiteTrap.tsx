import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertTriangle, Layers, PenTool, TrendingUp } from "lucide-react";
import blueprintImg from "@/assets/blueprint.jpg";

const zigZagBlocks = [
  {
    icon: AlertTriangle,
    label: "The Trap",
    heading: (
      <>
        Why a "Better Looking" Website is{" "}
        <span className="glow-text">Leaving You Behind</span>
      </>
    ),
    body: (
      <>
        <p>
          Most business owners start in the same place: You know you need a
          digital presence, so you try the DIY route. You spend late nights
          fighting with a website builder template, dragging boxes around, and
          trying to make it look "professional."
        </p>
        <p className="mt-4 font-semibold text-foreground italic">
          But here's the reality: A pretty website is just a digital brochure.
          It's a storefront in the middle of a desert.
        </p>
      </>
    ),
    imagePosition: "right" as const,
  },
  {
    icon: Layers,
    label: "The Problem",
    heading: (
      <>
        The DIY Mess vs.{" "}
        <span className="glow-text">Strategic Architecture</span>
      </>
    ),
    body: (
      <>
        <p>
          DIY builders give you a "skin," but they don't give you a nervous
          system. They are often bloated with messy code that slows your site
          down, confusing layouts that frustrate your customers, and zero
          strategy for how to actually turn a visitor into a lead.
        </p>
        <p className="mt-4 font-semibold text-foreground">
          Standard designers build for the eyes. We architect for the bottom
          line.
        </p>
      </>
    ),
    imagePosition: "left" as const,
  },
  {
    icon: PenTool,
    label: "The Craft",
    heading: (
      <>
        The Silent Power of{" "}
        <span className="glow-text">Expert Copywriting</span>
      </>
    ),
    body: (
      <>
        <p>
          You could have the most beautiful site in Manitoba, but if the words
          don't resonate, your visitors will leave in seconds.
        </p>
        <p className="mt-4">
          <span className="font-semibold text-foreground">The Problem:</span>{" "}
          Most sites talk at the customer about "Me, Me, Me."
        </p>
        <p className="mt-2">
          <span className="font-semibold text-foreground">
            The Architecture:
          </span>{" "}
          We craft copy that speaks directly to your customer's pain points and
          positions your business as the only logical solution. Every word is
          engineered to build trust and drive action.
        </p>
      </>
    ),
    imagePosition: "right" as const,
  },
  {
    icon: TrendingUp,
    label: "The Investment",
    heading: (
      <>
        An Investment in <span className="glow-text">Growth</span>, Not a
        Monthly Expense
      </>
    ),
    body: (
      <>
        <p>
          When you work with Valley Digital Architecture, you aren't paying for
          "a website." You are investing in a high-performance business asset.
        </p>
        <p className="mt-4">
          A DIY site is a liability that you have to constantly fix and manage.
          <br />
          <span className="font-semibold text-foreground">
            Digital Architecture
          </span>{" "}
          is an investment designed to scale your business while you sleep.
        </p>
        <p className="mt-4 text-foreground font-semibold">
          Our $6,500+ engagements aren't for everyone. They are for the business
          owner who is done playing small and is ready for a digital foundation
          that can actually support a multi-million dollar vision.
        </p>
      </>
    ),
    imagePosition: "left" as const,
  },
];

const ZigZagBlock = ({
  block,
  index,
}: {
  block: (typeof zigZagBlocks)[0];
  index: number;
}) => {
  const reveal = useScrollReveal();
  const Icon = block.icon;
  const isImageRight = block.imagePosition === "right";

  const imageEl = (
    <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none rounded-xl overflow-hidden glow-border">
      <img
        src={blueprintImg}
        alt="Digital architecture blueprint"
        className="w-full h-full object-cover opacity-60"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <div className="inline-flex items-center gap-2 glass-card px-3 py-1.5 text-xs text-primary font-medium">
          <Icon className="w-3.5 h-3.5" />
          {block.label}
        </div>
      </div>
    </div>
  );

  const textEl = (
    <div className="flex flex-col justify-center">
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="w-8 h-px bg-primary" />
        <span className="text-primary text-xs font-medium tracking-widest uppercase">
          {block.label}
        </span>
      </div>
      <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-6">
        {block.heading}
      </h3>
      <div className="text-secondary-foreground text-sm md:text-base leading-relaxed" style={{ lineHeight: 1.8 }}>
        {block.body}
      </div>
    </div>
  );

  return (
    <div
      ref={reveal.ref}
      className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
        reveal.isVisible ? "scroll-visible" : "scroll-hidden"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {isImageRight ? (
        <>
          {textEl}
          {imageEl}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{imageEl}</div>
          <div className="order-1 lg:order-2">{textEl}</div>
        </>
      )}
    </div>
  );
};

const PrettyWebsiteTrap = () => {
  const header = useScrollReveal();

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={header.ref}
          className={`text-center mb-20 ${
            header.isVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            A Letter from the Architect
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            The "Pretty Website"{" "}
            <span className="glow-text">Trap</span>
          </h2>
          <p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            style={{ lineHeight: 1.7 }}
          >
            Before we build anything, there's a hard truth most agencies won't
            tell you. Consider this your honest briefing.
          </p>
        </div>

        {/* Zig-zag blocks */}
        <div className="space-y-24 md:space-y-32">
          {zigZagBlocks.map((block, i) => (
            <ZigZagBlock key={i} block={block} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrettyWebsiteTrap;
