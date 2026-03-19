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
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">V</span>
            </div>
            <span className="font-semibold text-foreground tracking-tight">Valley Digital</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#capabilities" className="hover:text-foreground transition-colors">Capabilities</a>
            <a href="#process" className="hover:text-foreground transition-colors">Process</a>
            <a href="#roi" className="hover:text-foreground transition-colors">ROI</a>
          </div>
          <button onClick={() => setDrawerOpen(true)} className="btn-primary-glow text-sm">
            Get in Touch
          </button>
        </div>
      </nav>
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Navbar;
