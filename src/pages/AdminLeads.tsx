import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Eye, ChevronDown } from "lucide-react";
import { toast } from "sonner";

type Inquiry = {
  id: string;
  name: string;
  business: string;
  email: string;
  service_interest: string | null;
  current_status: string | null;
  bottleneck: string | null;
  vision: string | null;
  status: string;
  created_at: string;
};

const serviceLabels: Record<string, string> = {
  "web-copy": "Web + Copy Overhaul",
  logo: "Professional Logo",
  rebrand: "The Complete Rebrand",
};

const statusColors: Record<string, string> = {
  new: "bg-primary/20 text-primary",
  "in-progress": "bg-yellow-500/20 text-yellow-400",
  archived: "bg-muted text-muted-foreground",
};

const AdminLeads = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
      if (sess) checkAdmin(sess.user.id);
      else { setIsAdmin(false); setLoading(false); }
    });
    supabase.auth.getSession().then(({ data: { session: sess } }) => {
      setSession(sess);
      if (sess) checkAdmin(sess.user.id);
      else setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  const checkAdmin = async (userId: string) => {
    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .eq("role", "admin")
      .maybeSingle();
    setIsAdmin(!!data);
    if (data) fetchInquiries();
    setLoading(false);
  };

  const fetchInquiries = async () => {
    const { data, error } = await supabase
      .from("project_inquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error(error);
      toast.error("Failed to load inquiries");
    } else {
      setInquiries(data as Inquiry[]);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from("project_inquiries")
      .update({ status: newStatus })
      .eq("id", id);
    if (error) {
      toast.error("Failed to update status");
    } else {
      setInquiries((prev) =>
        prev.map((i) => (i.id === id ? { ...i, status: newStatus } : i))
      );
      if (selected?.id === id) setSelected({ ...selected, status: newStatus });
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) toast.error(error.message);
      else toast.success("Account created! You're now signed in.");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) toast.error(error.message);
    }
    setAuthLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setIsAdmin(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm"
        >
          <h1 className="text-2xl font-black text-foreground text-center mb-2">Admin Access</h1>
          <p className="text-muted-foreground text-sm text-center mb-8">
            {isSignUp ? "Create your admin account." : "Sign in to view project inquiries."}
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border border-border/60 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors text-sm"
            />
            <input
              type="password"
              required
              minLength={6}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border border-border/60 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors text-sm"
            />
            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3 rounded-lg font-semibold text-sm text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] disabled:opacity-50"
              style={{ background: "var(--gradient-blue)" }}
            >
              {authLoading ? (isSignUp ? "Creating account..." : "Signing in...") : (isSignUp ? "Create Account" : "Sign In")}
            </button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-4">
            {isSignUp ? "Already have an account?" : "Need an account?"}{" "}
            <button onClick={() => setIsSignUp(!isSignUp)} className="text-primary hover:underline">
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </p>
        </motion.div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-2xl font-black text-foreground mb-2">Access Denied</h1>
          <p className="text-muted-foreground text-sm mb-6">Your account does not have admin privileges.</p>
          <button onClick={handleLogout} className="text-primary text-sm hover:underline">Sign out</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-2xl font-black tracking-tight">Project Inquiries</h1>
              <p className="text-muted-foreground text-sm mt-1">{inquiries.length} total leads</p>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <LogOut className="w-4 h-4" /> Sign out
            </button>
          </div>

          {inquiries.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">No inquiries yet.</div>
          ) : (
            <div className="space-y-3">
              {inquiries.map((inq) => (
                <motion.div
                  key={inq.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl p-5 bg-card flex flex-col md:flex-row md:items-center gap-4"
                  style={{ border: "1px solid hsl(var(--border))" }}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-foreground truncate">{inq.name}</p>
                    <p className="text-muted-foreground text-sm truncate">{inq.business}</p>
                  </div>
                  <div className="flex-1 min-w-0 hidden md:block">
                    <p className="text-sm text-muted-foreground truncate">{inq.email}</p>
                  </div>
                  <div className="flex-shrink-0 w-40">
                    <p className="text-sm text-foreground">
                      {inq.service_interest ? serviceLabels[inq.service_interest] || inq.service_interest : "—"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <StatusDropdown status={inq.status} onChange={(s) => updateStatus(inq.id, s)} />
                    <button
                      onClick={() => setSelected(inq)}
                      className="inline-flex items-center gap-1.5 text-primary text-sm hover:text-primary/80 transition-colors"
                    >
                      <Eye className="w-4 h-4" /> View
                    </button>
                  </div>
                  <div className="flex-shrink-0 text-xs text-muted-foreground hidden lg:block w-24 text-right">
                    {new Date(inq.created_at).toLocaleDateString()}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card rounded-xl p-8 max-w-lg w-full max-h-[80vh] overflow-y-auto"
                style={{ border: "1px solid hsl(var(--border))" }}
              >
                <h2 className="text-xl font-bold text-foreground mb-1">{selected.name}</h2>
                <p className="text-muted-foreground text-sm mb-6">{selected.business} · {selected.email}</p>

                <div className="space-y-5">
                  <DetailBlock label="Service Interest" value={selected.service_interest ? serviceLabels[selected.service_interest] || selected.service_interest : "Not specified"} />
                  <DetailBlock label="Current Status" value={selected.current_status || "Not specified"} />
                  <DetailBlock label="The Goal (Bottleneck)" value={selected.bottleneck || "No response"} />
                  <DetailBlock label="The Vision (12 Months)" value={selected.vision || "No response"} />
                  <DetailBlock label="Submitted" value={new Date(selected.created_at).toLocaleString()} />
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-8 w-full py-2.5 rounded-lg text-sm font-medium border border-border/60 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const DetailBlock = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-xs font-medium text-muted-foreground mb-1">{label}</p>
    <p className="text-sm text-foreground leading-relaxed">{value}</p>
  </div>
);

const StatusDropdown = ({ status, onChange }: { status: string; onChange: (s: string) => void }) => {
  const [open, setOpen] = useState(false);
  const options = ["new", "in-progress", "archived"];
  const labels: Record<string, string> = { new: "New", "in-progress": "In Progress", archived: "Archived" };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${statusColors[status] || statusColors.new}`}
      >
        {labels[status] || "New"} <ChevronDown className="w-3 h-3" />
      </button>
      {open && (
        <div
          className="absolute top-full mt-1 right-0 bg-card rounded-lg shadow-lg z-20 py-1 min-w-[120px]"
          style={{ border: "1px solid hsl(var(--border))" }}
        >
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className="block w-full text-left px-3 py-1.5 text-sm text-foreground hover:bg-muted transition-colors"
            >
              {labels[opt]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminLeads;
