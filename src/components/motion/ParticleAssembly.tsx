import { useRef, useEffect, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface ParticleAssemblyProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

interface Particle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  size: number;
  colorIdx: number;
}

const PARTICLE_COUNT = 200;
const SCATTER_RADIUS = 50;
const STAGGER_MS = 200;
const CONVERGE_DURATION = 1200; // ms
const COLORS = [
  "hsl(220, 18%, 10%)",   // Midnight Slate (card bg)
  "hsl(220, 14%, 18%)",   // Border tone
  "hsl(210, 100%, 56%)",  // Blue-Steel / primary
  "hsl(215, 80%, 32%)",   // Blue dim
  "hsl(220, 16%, 14%)",   // Secondary
];

function cubicBezier(t: number): number {
  // Attempt to approximate [0.19, 1, 0.22, 1] with a fast-start, smooth-finish curve
  const t2 = 1 - t;
  // Simple approximation using the bezier control points
  const p0 = 0, p1 = 1, p2 = 1, p3 = 1;
  // For y given t on a standard cubic bezier y(t)
  return 3 * t2 * t2 * t * p1 + 3 * t2 * t * t * p2 + t * t * t * p3;
}

const ParticleAssembly = ({ children, className, index = 0 }: ParticleAssemblyProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const [assembled, setAssembled] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const animStarted = useRef(false);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  // Initialize particles
  useEffect(() => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * SCATTER_RADIUS;
      particles.push({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        homeX: (Math.random() - 0.5) * 2, // normalized -1 to 1
        homeY: (Math.random() - 0.5) * 2,
        size: 1.5 + Math.random() * 2.5,
        colorIdx: Math.floor(Math.random() * COLORS.length),
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    if (!isInView || animStarted.current) return;

    const delay = index * STAGGER_MS;
    const timeout = setTimeout(() => {
      animStarted.current = true;
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;
      const particles = particlesRef.current;

      // Map home positions to actual card coordinates
      particles.forEach((p) => {
        p.homeX = Math.random() * w;
        p.homeY = Math.random() * h;
      });

      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const rawT = Math.min(elapsed / CONVERGE_DURATION, 1);
        const t = cubicBezier(rawT);

        ctx.clearRect(0, 0, w, h);

        for (const p of particles) {
          const startX = cx + p.x;
          const startY = cy + p.y;
          const curX = startX + (p.homeX - startX) * t;
          const curY = startY + (p.homeY - startY) * t;

          ctx.fillStyle = COLORS[p.colorIdx];
          ctx.globalAlpha = 0.6 + 0.4 * t;
          ctx.fillRect(curX, curY, p.size * (1 - t * 0.4), p.size * (1 - t * 0.4));
        }

        ctx.globalAlpha = 1;

        if (rawT < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          // Animation complete — solidify
          ctx.clearRect(0, 0, w, h);
          setAssembled(true);
          setShowFlash(true);
          setTimeout(() => setShowFlash(false), 100);
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isInView, index]);

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`} style={{ willChange: "transform, opacity" }}>
      {/* Particle canvas overlay */}
      {!assembled && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 pointer-events-none rounded-xl"
        />
      )}

      {/* Scanline flash on solidify */}
      {showFlash && (
        <div className="absolute inset-0 z-20 pointer-events-none rounded-xl overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                hsl(210 100% 56% / 0.08) 2px,
                hsl(210 100% 56% / 0.08) 4px
              )`,
              mixBlendMode: "screen",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, hsl(210 100% 56% / 0.15), transparent 50%, hsl(210 100% 56% / 0.1))",
            }}
          />
        </div>
      )}

      {/* The actual card content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={assembled ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParticleAssembly;
