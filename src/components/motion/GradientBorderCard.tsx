import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

interface GradientBorderCardProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
}

/** Card with animated gradient "snake" border on hover */
const GradientBorderCard = ({ children, className = "", active = false }: GradientBorderCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl p-[1px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: active
            ? "conic-gradient(from 0deg, hsl(210 100% 56%), hsl(174 72% 56%), hsl(215 90% 48%), hsl(210 100% 56%))"
            : "conic-gradient(from 0deg, hsl(210 100% 56%), hsl(174 72% 56%), hsl(215 90% 48%), hsl(210 100% 56%))",
        }}
        animate={{
          rotate: hovered || active ? 360 : 0,
          opacity: hovered || active ? 1 : 0.3,
        }}
        transition={{
          rotate: { duration: 3, repeat: Infinity, ease: "linear" },
          opacity: { duration: 0.3 },
        }}
      />
      {/* Inner content */}
      <div className={`relative rounded-xl bg-card ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default GradientBorderCard;
