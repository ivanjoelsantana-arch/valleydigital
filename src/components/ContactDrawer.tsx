import { X, Send } from "lucide-react";
import { useState, useEffect } from "react";

interface ContactDrawerProps {
  open: boolean;
  onClose: () => void;
}

const ContactDrawer = ({ open, onClose }: ContactDrawerProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  const handleAnimationEnd = () => {
    if (!open) setMounted(false);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        onAnimationEnd={handleAnimationEnd}
        className={`fixed right-0 top-0 bottom-0 z-50 w-full max-w-md glass-card border-l border-border/50 flex flex-col ${
          open ? "animate-slide-in-right" : "animate-slide-out-right"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <h2 className="text-xl font-bold text-foreground">Let's Talk Scale</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 p-6 overflow-y-auto">
          <p className="text-muted-foreground text-sm mb-8">
            Tell us about your project. We'll respond within 24 hours with a tailored game plan.
          </p>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <Field label="Full Name" placeholder="Jane Smith" />
            <Field label="Email" placeholder="jane@company.com" type="email" />
            <Field label="Company" placeholder="Acme Corp" />
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Project Brief</label>
              <textarea
                placeholder="We need to scale our platform to handle..."
                rows={4}
                className="w-full rounded-lg bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground p-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 resize-none"
              />
            </div>
            <button type="submit" className="btn-primary-glow w-full flex items-center justify-center gap-2 text-sm">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const Field = ({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) => (
  <div>
    <label className="text-sm font-medium text-foreground mb-1.5 block">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg bg-secondary border border-border/50 text-foreground placeholder:text-muted-foreground p-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
    />
  </div>
);

export default ContactDrawer;
