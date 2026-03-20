import { useState } from "react";
import ContactDrawer from "./ContactDrawer";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Valley Digital Architecture" className="h-[72px] w-[72px]" />
            <span className="font-semibold text-foreground tracking-tight">Valley Digital Architecture</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#process" className="hover:text-foreground transition-colors">Process</a>
            <a href="#roi" className="hover:text-foreground transition-colors">ROI</a>
          </div>
          <a href="#pricing" className="btn-primary-glow text-xs px-3 py-1.5 md:text-sm md:px-6 md:py-3 w-auto">
            Get Started
          </a>
        </div>
      </nav>
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Navbar;
