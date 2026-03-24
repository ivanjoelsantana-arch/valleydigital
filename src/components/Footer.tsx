import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "ROI", href: "#roi" },
  { label: "Process", href: "#process" },
];

const Footer = () => (
  <footer className="border-t border-border/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Logo & tagline */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Valley Digital Architecture" className="h-10 w-10" />
            <span className="font-semibold text-foreground tracking-tight">Valley Digital Co.</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs text-center md:text-left">
            High-performance digital architecture for businesses that refuse to blend in.
          </p>
        </div>

        {/* Nav */}
        <nav className="flex gap-8 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <div className="text-center md:text-right">
          <p className="text-muted-foreground text-sm mb-1">Get in touch</p>
          <a
            href="mailto:hello@valleydigital.co"
            className="text-primary text-sm font-medium hover:underline"
          >
            hello@valleydigital.co
          </a>
        </div>
      </div>

      <div className="border-t border-border/30 mt-12 pt-8 flex flex-col items-center gap-4 text-xs text-muted-foreground">
        <p className="text-center max-w-md leading-relaxed">
          Elevating the digital landscape of Altona and the Pembina Valley. Dedicated to Southern Manitoba's economic growth.
        </p>
        <p className="italic">Founded by Ivan. Architecting digital growth in Altona, MB.</p>
        <p>© {new Date().getFullYear()} Valley Digital Architecture. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
