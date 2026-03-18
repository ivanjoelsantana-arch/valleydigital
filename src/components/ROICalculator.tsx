import { useState, useMemo } from "react";

const ROICalculator = () => {
  const [revenue, setRevenue] = useState(50000);
  const [convRate, setConvRate] = useState(2);
  const [traffic, setTraffic] = useState(10000);

  const results = useMemo(() => {
    const improvedConv = convRate * 1.45;
    const improvedTraffic = traffic * 1.3;
    const currentRevenue = revenue;
    const projectedRevenue = (currentRevenue / (convRate / 100) * (improvedConv / 100)) * (improvedTraffic / traffic);
    const gain = projectedRevenue - currentRevenue;
    return {
      improvedConv: improvedConv.toFixed(1),
      projectedRevenue: Math.round(projectedRevenue).toLocaleString(),
      gain: Math.round(gain).toLocaleString(),
      roi: ((gain / 15000) * 100).toFixed(0),
    };
  }, [revenue, convRate, traffic]);

  return (
    <section id="roi" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-3">ROI Estimator</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            Quantify Your <span className="glow-text">Growth</span>
          </h2>
        </div>
        <div className="glass-card glow-border p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <SliderInput label="Monthly Revenue" value={revenue} onChange={setRevenue} min={5000} max={500000} prefix="$" />
              <SliderInput label="Current Conversion Rate" value={convRate} onChange={setConvRate} min={0.5} max={10} step={0.1} suffix="%" />
              <SliderInput label="Monthly Visitors" value={traffic} onChange={setTraffic} min={1000} max={500000} />
            </div>
            <div className="space-y-6">
              <ResultCard label="Projected Conversion" value={`${results.improvedConv}%`} subtitle={`+45% improvement`} />
              <ResultCard label="Projected Monthly Revenue" value={`$${results.projectedRevenue}`} highlight />
              <ResultCard label="Monthly Revenue Gain" value={`+$${results.gain}`} subtitle={`${results.roi}% ROI on engagement`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SliderInput = ({
  label, value, onChange, min, max, step = 1, prefix = "", suffix = "",
}: {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step?: number; prefix?: string; suffix?: string;
}) => (
  <div>
    <div className="flex justify-between text-sm mb-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground font-semibold">{prefix}{value.toLocaleString()}{suffix}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary accent-primary"
    />
  </div>
);

const ResultCard = ({ label, value, subtitle, highlight }: { label: string; value: string; subtitle?: string; highlight?: boolean }) => (
  <div className={`rounded-xl p-5 ${highlight ? "bg-primary/10 border border-primary/30" : "bg-secondary/50 border border-border/50"}`}>
    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{label}</p>
    <p className={`text-2xl font-bold ${highlight ? "text-blue-dim" : "text-foreground"}`} style={highlight ? { color: 'hsl(220 80% 38%)' } : undefined}>{value}</p>
    {subtitle && <p className="text-muted-foreground text-xs mt-1">{subtitle}</p>}
  </div>
);

export default ROICalculator;
