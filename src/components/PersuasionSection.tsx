const PersuasionSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 md:py-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Strategy
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            The Architecture of <span className="glow-text">Persuasion</span>
          </h2>
        </div>

        <div className="glass-card p-8 md:p-12 lg:p-16 glow-border">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-0 items-center">
            {/* Left: Headline */}
            <div className="md:pr-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground">
                Design Captures Attention.
                <br />
                <span className="glow-text">Storytelling</span> Captures the Sale.
              </h3>
            </div>

            {/* Divider */}
            <div className="hidden md:flex justify-center">
              <div
                className="w-px h-48 animate-pulse-glow"
                style={{
                  background:
                  "linear-gradient(180deg, transparent, hsl(210 100% 56%), transparent)"
                }} />
              
            </div>

            {/* Right: Body copy */}
            <div className="md:pl-12">
              <p className="text-secondary-foreground leading-loose text-sm md:text-base">
                Copywriting is the strategic art of shifting a visitor from a
                spectator to a participant. It is not just about words—it is
                about <span className="font-semibold text-foreground">Storytelling with intent</span>.
                By placing your customer as the hero of the narrative and your
                business as the essential guide, we use psychology-driven copy
                to bridge the gap between their problem and your solution. This
                narrative framework eliminates doubt, builds an emotional
                connection, and creates a logical path that leads directly to a
                transaction. We don't just fill space; we engineer the{" "}
                <span className="font-semibold text-foreground">'Yes.'</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default PersuasionSection;