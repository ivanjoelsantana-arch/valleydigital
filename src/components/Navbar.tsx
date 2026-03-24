import { useState } from "react";
import { Link } from "react-router-dom";
import ContactDrawer from "./ContactDrawer";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 cursor-pointer transition-opacity duration-200 hover:opacity-80"
          >
            <img src={logo} alt="Valley Digital Co." className="h-[72px] w-[72px]" />
            <span className="font-semibold text-foreground tracking-tight">Valley Digital Co.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Get in Touch</a>
          </div>
          <Link to="/discovery" className="btn-primary-glow text-[0.75rem] px-4 py-1.5 font-semibold md:text-sm md:px-6 md:py-3 md:font-medium w-auto whitespace-nowrap">
            Book a Free Chat
          </Link>
        </div>
      </nav>
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Navbar;
