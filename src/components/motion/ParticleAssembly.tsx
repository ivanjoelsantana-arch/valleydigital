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

const PARTICLE_COUNT = 150;
const SCATTER_RADIUS = 40;
const STAGGER_MS = 80;
const CONVERGE_DURATION = 600;
const COLORS = [
  "hsl(220, 18%, 10%)",
  "hsl(220, 14%, 18%)",
  "hsl(210, 100%, 56%)",
  "hsl(215, 80%, 32%)",
  "hsl(220, 16%, 14%)",
];

function easeOut(t: number): number {
  // Power Out curve: [0.16, 1, 0.3, 1]
  const p1x = 0.16, p1y = 1, p2x = 0.3, p2y = 1;
  const t2 = 1 - t;
  return 3 * t2 * t2 * t * p1y + 3 * t2 * t * t * p2y + t * t * t * 1;
}

const ParticleAssembly = ({ children, className, index = 0 }: ParticleAssemblyProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });
  const [assembled, setAssembled] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const animStarted = useRef(false);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * SCATTER_RADIUS;
      particles.push({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        homeX: 0,
        homeY: 0,
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

      particles.forEach((p) => {
        p.homeX = Math.random() * w;
        p.homeY = Math.random() * h;
      });

      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const rawT = Math.min(elapsed / CONVERGE_DURATION, 1);
        const t = easeOut(rawT);

        ctx.clearRect(0, 0, w, h);

        for (const p of particles) {
          const startX = cx + p.x;
          const startY = cy + p.y;
          const curX = startX + (p.homeX - startX) * t;
          const curY = startY + (p.homeY - startY) * t;

          ctx.fillStyle = COLORS[p.colorIdx];
          ctx.globalAlpha = 0.5 + 0.5 * t;
          const s = p.size * (1 - t * 0.4);
          ctx.fillRect(curX, curY, s, s);
        }

        ctx.globalAlpha = 1;

        if (rawT < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
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
      {!assembled && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-10 pointer-events-none rounded-xl"
        />
      )}

      {showFlash && (
        <div className="absolute inset-0 z-20 pointer-events-none rounded-xl overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(210 100% 56% / 0.08) 2px, hsl(210 100% 56% / 0.08) 4px)`,
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
