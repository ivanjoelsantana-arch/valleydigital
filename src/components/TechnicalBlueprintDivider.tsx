const terms = "0ms Latency // CDN Edge // 4:4:4 Color Precision // SSL L4 // PostgreSQL Stack // WebSocket Ready // TTFB <100ms // Edge Functions // HTTP/3 // Brotli Compression // ";

const TechnicalBlueprintDivider = () => {
  return (
    <div className="h-[100px] flex flex-col justify-center overflow-hidden select-none">
      <div className="h-px w-full bg-primary/30" />
      <div className="flex-1 flex items-center overflow-hidden">
        <div className="animate-[marquee_30s_linear_infinite] whitespace-nowrap font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground/10">
          {terms}{terms}{terms}
        </div>
      </div>
      <div className="h-px w-full bg-primary/30" />
    </div>
  );
};

export default TechnicalBlueprintDivider;
