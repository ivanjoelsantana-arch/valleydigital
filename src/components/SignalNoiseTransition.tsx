import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SignalNoiseTransition = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  const width = 1200;
  const midY = 40;
  const points: string[] = [`M 0 ${midY}`];

  for (let x = 0; x <= width; x += 4) {
    const t = x / width;
    const noiseAmp = 18 * (1 - t) * (1 - t);
    const signalAmp = 12 * t * t;
    const noise = noiseAmp * (Math.random() * 2 - 1 + Math.sin(x * 0.3) * 0.5);
    const signal = signalAmp * Math.sin(x * 0.04);
    points.push(`L ${x} ${midY + noise + signal}`);
  }

  const pathD = points.join(" ");

  return (
    <motion.div
      ref={ref}
      className="px-6 md:px-12 lg:px-20 py-10"
      initial={{ clipPath: "inset(50% 50% 50% 50%)", opacity: 0 }}
      animate={
        isInView
          ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
          : {}
      }
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between mb-3">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
            Market Noise.
          </span>
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
            Strategic Clarity.
          </span>
        </div>

        <svg
          viewBox={`0 0 ${width} 80`}
          className="w-full h-12 md:h-16"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="signal-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d={pathD}
            fill="none"
            stroke="hsl(210 100% 56%)"
            strokeWidth="1.5"
            filter="url(#signal-glow)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default SignalNoiseTransition;
