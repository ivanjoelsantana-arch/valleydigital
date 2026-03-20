const valueProps = [
  {
    num: "01",
    title: "The Conversion Multiplier",
    desc: "A standard website converts at ~1%. An engineered platform with strategic storytelling targets 3%+. That 2% difference isn't just a number—it represents a 200% increase in lead flow without spending an extra dollar on marketing.",
  },
  {
    num: "02",
    title: "Brand Equity & Authority",
    desc: "Premium pricing requires premium positioning. By architecting a world-class digital presence, we move your business out of the commodity trap, allowing you to command higher rates and attract higher-quality clients.",
  },
  {
    num: "03",
    title: "The Automated Sales Force",
    desc: "This platform works 24/7 to educate, persuade, and qualify leads before they ever call you. It replaces manual outreach with automated authority, saving you dozens of hours in the sales cycle every month.",
  },
];

const ROIArchitectureSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Value
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            The ROI of High-Performance{" "}
            <span className="glow-text">Architecture</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
          {/* Left: Headline */}
          <div className="md:sticky md:top-32">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground">
              A Strategic Investment,
              <br />
              Not a Digital{" "}
              <span className="glow-text">Expense.</span>
            </h3>
          </div>

          {/* Right: Value propositions */}
          <div className="space-y-4">
            {valueProps.map((item) => (
              <div
                key={item.num}
                className="glass-card p-6 md:p-8 rounded-xl transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-glow-sm)] group"
              >
                <div className="flex gap-5">
                  <span className="glow-text text-2xl md:text-3xl font-black shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <p className="text-center md:text-left text-muted-foreground text-sm italic pt-4">
              Most of our partners see a full return on their investment within
              the first 2–3 high-value client acquisitions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROIArchitectureSection;
