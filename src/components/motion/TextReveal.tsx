import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

/** Slide-from-bottom text reveal with overflow hidden mask */
const TextReveal = ({ children, className, delay = 0, as = "div" }: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const Tag = motion[as] as typeof motion.div;

  return (
    <div ref={ref} className="overflow-hidden pb-1">
      <Tag
        className={className}
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
      >
        {children}
      </Tag>
    </div>
  );
};

export default TextReveal;
