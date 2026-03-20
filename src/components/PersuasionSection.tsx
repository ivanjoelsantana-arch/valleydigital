const PersuasionSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Strategy
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            The Architecture of <span className="glow-text">Persuasion</span>
          </h2>
        </div>

        <div className="glass-card p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0 items-center">
            {/* Left: Headline */}
            <div className="md:pr-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground">
                Code Builds the Structure.
                <br />
                Copy Builds the{" "}
                <span className="glow-text">Revenue.</span>
              </h3>
            </div>

            {/* Divider */}
            <div className="hidden md:flex justify-center">
              <div
                className="w-px h-48 animate-pulse-glow"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, hsl(210 100% 56%), transparent)",
                }}
              />
            </div>

            {/* Right: Body copy */}
            <div className="md:pl-12">
              <p className="text-secondary-foreground leading-relaxed text-sm md:text-base">
                Copywriting is the strategic engineering of your customer's
                journey. While design captures attention, copy captures the
                sale. We treat every headline and call-to-action as a
                high-performance script designed to eliminate friction,
                establish authority, and compound your ROI. It is the
                difference between a digital brochure and a 24/7 automated
                sales force.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersuasionSection;
