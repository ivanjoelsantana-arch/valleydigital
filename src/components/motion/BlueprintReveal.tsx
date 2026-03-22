import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface BlueprintRevealProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

const BlueprintReveal = ({ children, className, style, delay = 0 }: BlueprintRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ clipPath: "inset(50% 50% 50% 50%)", opacity: 0 }}
      animate={
        isInView
          ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
          : { clipPath: "inset(50% 50% 50% 50%)", opacity: 0 }
      }
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default BlueprintReveal;
