import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const fieldClasses =
  "w-full bg-transparent border border-border/60 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors text-sm";

const labelClasses = "block text-sm font-medium text-muted-foreground mb-2";

const Discovery = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    website: "",
    goals: "",
    budget: "",
    timeline: "",
  });

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-center mb-14">
                <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                  The Discovery Phase:{" "}
                  <span className="glow-text">Architecting Your Future.</span>
                </h1>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto" style={{ opacity: 0.85 }}>
                  Please provide the context needed to ensure our partnership aligns with your growth goals. This takes 2 minutes.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClasses}>Full Name *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Your name"
                      value={form.name}
                      onChange={update("name")}
                      className={fieldClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Email *</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={update("email")}
                      className={fieldClasses}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClasses}>Business / Brand Name *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Your business name"
                      value={form.business}
                      onChange={update("business")}
                      className={fieldClasses}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Current Website</label>
                    <input
                      type="url"
                      maxLength={255}
                      placeholder="https://yoursite.com"
                      value={form.website}
                      onChange={update("website")}
                      className={fieldClasses}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>What are your primary growth goals? *</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={4}
                    placeholder="Describe the outcomes you're looking for — more leads, higher-quality clients, brand repositioning, etc."
                    value={form.goals}
                    onChange={update("goals")}
                    className={`${fieldClasses} resize-none`}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClasses}>Investment Range</label>
                    <select value={form.budget} onChange={update("budget")} className={fieldClasses}>
                      <option value="" className="bg-card">Select a range</option>
                      <option value="3k-5k" className="bg-card">$3,000 – $5,000</option>
                      <option value="5k-10k" className="bg-card">$5,000 – $10,000</option>
                      <option value="10k-20k" className="bg-card">$10,000 – $20,000</option>
                      <option value="20k+" className="bg-card">$20,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses}>Ideal Timeline</label>
                    <select value={form.timeline} onChange={update("timeline")} className={fieldClasses}>
                      <option value="" className="bg-card">Select a timeline</option>
                      <option value="asap" className="bg-card">As soon as possible</option>
                      <option value="1-2months" className="bg-card">1–2 months</option>
                      <option value="3-6months" className="bg-card">3–6 months</option>
                      <option value="planning" className="bg-card">Just planning ahead</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg font-semibold text-sm tracking-wide text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
                    style={{ background: "var(--gradient-blue)" }}
                  >
                    Submit Discovery Brief
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center py-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-8" />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4 text-foreground">
                Discovery Brief <span className="glow-text">Received.</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mx-auto italic" style={{ opacity: 0.85 }}>
                Your project details have been received. I personally review every inquiry and will reach out within 24 hours to schedule our strategy session.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 mt-10 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Return Home
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Discovery;
