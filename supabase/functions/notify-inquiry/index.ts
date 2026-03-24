import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const NOTIFY_EMAIL = "hello@valleydigital.co";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const serviceLabels: Record<string, string> = {
  "web-copy": "Web + Copy Overhaul",
  logo: "Professional Logo",
  rebrand: "The Complete Rebrand",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, business, email, service } = await req.json();

    const serviceLabel = service ? serviceLabels[service] || service : "Not specified";

    const text = `New Discovery Inquiry\n\nName: ${name}\nBusiness: ${business}\nEmail: ${email}\nService Interest: ${serviceLabel}\n\nView all inquiries in your Lovable Cloud dashboard.`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #3b82f6; padding-bottom: 12px;">New Discovery Inquiry</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px 0; color: #666; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Business</td><td style="padding: 8px 0; font-weight: 600;">${business}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;">Service Interest</td><td style="padding: 8px 0; font-weight: 600;">${serviceLabel}</td></tr>
        </table>
        <p style="color: #999; font-size: 13px; margin-top: 30px;">View full details in your Lovable Cloud dashboard → project_inquiries table.</p>
      </div>
    `;

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Valley Digital <notifications@valleydigital.co>",
          to: [NOTIFY_EMAIL],
          subject: `New Inquiry: ${business} — ${serviceLabel}`,
          html,
          text,
        }),
      });
      const data = await res.json();
      console.log("Email sent:", JSON.stringify(data));
    } else {
      console.log("RESEND_API_KEY not set. Inquiry logged:", text);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Notify error:", err);
    return new Response(JSON.stringify({ error: "Failed to send notification" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
