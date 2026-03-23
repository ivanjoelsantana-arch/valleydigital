import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    const validate = async () => {
      try {
        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`;
        const res = await fetch(url, {
          headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
        });
        const data = await res.json();
        if (!res.ok) setStatus("invalid");
        else if (data.valid === false && data.reason === "already_unsubscribed") setStatus("already");
        else if (data.valid) setStatus("valid");
        else setStatus("invalid");
      } catch {
        setStatus("invalid");
      }
    };
    validate();
  }, [token]);

  const handleUnsubscribe = async () => {
    setProcessing(true);
    try {
      const { data } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (data?.success) setStatus("success");
      else if (data?.reason === "already_unsubscribed") setStatus("already");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
    setProcessing(false);
  };

  const messages: Record<Status, { title: string; desc: string }> = {
    loading: { title: "Loading...", desc: "Validating your request." },
    valid: { title: "Unsubscribe", desc: "Click below to stop receiving emails from us." },
    already: { title: "Already Unsubscribed", desc: "You've already been removed from our mailing list." },
    invalid: { title: "Invalid Link", desc: "This unsubscribe link is invalid or has expired." },
    success: { title: "Unsubscribed", desc: "You've been successfully removed. You won't receive any more emails." },
    error: { title: "Something Went Wrong", desc: "Please try again later or contact us directly." },
  };

  const { title, desc } = messages[status];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm text-center"
      >
        <h1 className="text-2xl font-black text-foreground mb-2">{title}</h1>
        <p className="text-muted-foreground text-sm mb-8">{desc}</p>
        {status === "valid" && (
          <button
            onClick={handleUnsubscribe}
            disabled={processing}
            className="w-full py-3 rounded-lg font-semibold text-sm text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] disabled:opacity-50"
            style={{ background: "var(--gradient-blue)" }}
          >
            {processing ? "Processing..." : "Confirm Unsubscribe"}
          </button>
        )}
        {status === "loading" && (
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        )}
      </motion.div>
    </div>
  );
};

export default Unsubscribe;
