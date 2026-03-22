import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface LetterSpacingRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Text that starts with wide letter-spacing and "locks" into final position */
const LetterSpacingReveal = ({ children, className, delay = 0 }: LetterSpacingRevealProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ letterSpacing: "0.15em", opacity: 0.4, filter: "blur(4px)" }}
      animate={
        isInView
          ? { letterSpacing: "0em", opacity: 1, filter: "blur(0px)" }
          : { letterSpacing: "0.15em", opacity: 0.4, filter: "blur(4px)" }
      }
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.span>
  );
};

export default LetterSpacingReveal;
