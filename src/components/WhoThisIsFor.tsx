import { CheckCircle } from "lucide-react";
import BlueprintReveal from "./motion/BlueprintReveal";
import TextReveal from "./motion/TextReveal";
import FluidSlide from "./motion/FluidSlide";

const audiences = [
  "Landscapers and lawn care companies tired of losing jobs to competitors who look more professional online",
  "Tradespeople and contractors who rely on word-of-mouth but want a digital presence that backs it up",
  "Pet groomers, salons, and personal service businesses that need bookings to run on autopilot",
  "Professional services — accountants, consultants, therapists — who need a site that communicates trust before a prospect ever picks up the phone",
  "Any local business owner who's been burned by a cheap site or a developer who disappeared",
];

const WhoThisIsFor = () => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <BlueprintReveal className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">
            Sound like you?
          </p>
          <TextReveal as="h2" className="text-3xl md:text-5xl font-black tracking-tight text-foreground" delay={0.2}>
            Built specifically for Pembina Valley{" "}
            <span className="glow-text">business owners.</span>
          </TextReveal>
          <p className="text-muted-foreground text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Valley Digital Co. works with local service businesses across Altona,
            Winkler, Morden, and the surrounding communities. If you're any of
            the following, we were built for you:
          </p>
        </BlueprintReveal>

        <div className="space-y-4 mb-10">
          {audiences.map((item, i) => (
            <FluidSlide key={i} index={i} className="glass-card p-5 md:p-6 rounded-xl flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-secondary-foreground text-sm md:text-base leading-relaxed">
                {item}
              </p>
            </FluidSlide>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-base md:text-lg italic max-w-2xl mx-auto">
          If you've worked hard to build something real in this community, you
          deserve a website that reflects it.
        </p>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
