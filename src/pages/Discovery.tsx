import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const fieldClasses =
  "w-full bg-transparent border border-border/60 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors text-sm";

const labelClasses = "block text-sm font-medium text-muted-foreground mb-2";

const Discovery = () => {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    service: "",
    status: "",
    bottleneck: "",
    vision: "",
  });

  useEffect(() => {
    const service = searchParams.get("service");
    if (service && ["web-copy", "logo", "rebrand"].includes(service)) {
      setForm((f) => ({ ...f, service }));
    }
  }, [searchParams]);

  useEffect(() => {
    if (window.location.hash === "#discovery-section") {
      setTimeout(() => {
        const el = document.getElementById("discovery-section");
        if (el) {
          const navHeight = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const inquiryId = crypto.randomUUID();
      const { error } = await supabase.from("project_inquiries").insert({
        id: inquiryId,
        name: form.name.trim(),
        business: form.business.trim(),
        email: form.email.trim(),
        service_interest: form.service || null,
        current_status: form.status || null,
        bottleneck: form.bottleneck.trim() || null,
        vision: form.vision.trim() || null,
      });

      if (error) throw error;

      // Trigger notification email to admin
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "new-inquiry-notification",
          recipientEmail: "ivan@valleydigital.co",
          idempotencyKey: `inquiry-notify-${inquiryId}`,
          templateData: {
            name: form.name.trim(),
            business: form.business.trim(),
            email: form.email.trim(),
            service: form.service,
            bottleneck: form.bottleneck.trim() || "",
            vision: form.vision.trim() || "",
          },
        },
      });


      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
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
              <div id="discovery-section" className="text-center mb-14">
                <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                  Let's talk about{" "}
                  <span className="glow-text">your business.</span>
                </h1>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto" style={{ opacity: 0.85 }}>
                  Fill this out and Ivan will reach out within one business day to set up your free 15-minute call. No pitch — just an honest look at where you're at and what would actually help.
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
                    <label className={labelClasses}>Business Name *</label>
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
                </div>

                <div>
                  <label className={labelClasses}>Email Address *</label>
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClasses}>Service Interest</label>
                    <select value={form.service} onChange={update("service")} className={fieldClasses}>
                      <option value="" className="bg-card">Select a service</option>
                      <option value="web-copy" className="bg-card">Web + Copy Overhaul</option>
                      <option value="logo" className="bg-card">Professional Logo</option>
                      <option value="rebrand" className="bg-card">The Complete Rebrand</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses}>Current Status</label>
                    <select value={form.status} onChange={update("status")} className={fieldClasses}>
                      <option value="" className="bg-card">Select your status</option>
                      <option value="established" className="bg-card">Established Business looking to scale</option>
                      <option value="new-venture" className="bg-card">New Venture building a foundation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>What's your biggest frustration with your current online presence?</label>
                  <textarea
                    maxLength={1000}
                    rows={4}
                    placeholder="What is the #1 bottleneck in your current digital presence?"
                    value={form.bottleneck}
                    onChange={update("bottleneck")}
                    className={`${fieldClasses} resize-none`}
                  />
                </div>

                <div>
                  <label className={labelClasses}>The Vision</label>
                  <textarea
                    maxLength={1000}
                    rows={4}
                    placeholder="Where do you want your business to be in 12 months?"
                    value={form.vision}
                    onChange={update("vision")}
                    className={`${fieldClasses} resize-none`}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-lg font-bold text-base tracking-wide text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)] disabled:opacity-50"
                    style={{ background: "var(--gradient-blue)" }}
                  >
                    {submitting ? "Submitting..." : "Request Your Discovery Call"}
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
