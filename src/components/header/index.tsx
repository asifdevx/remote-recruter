import { cn } from "@/utils/cn";
import { Menu, X } from "lucide-react";
import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-12.75 py-5 md:py-7.25  transition-all duration-300 ",
        scrolled ? "bg-[#0a1446bf] backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)]" : "bg-transparent",
      )}
    >
      <div className="flex items-center justify-between max-w-360 mx-auto">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img src="/assets/logo/RemoteRecruit.webp" alt="RemoteRecruit Logo" className="w-30.75 h-12.5 object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/signin" className="text-white font-semibold text-sm tracking-wide hover:opacity-80 transition-opacity">
            Sign In
          </Link>
          <Link to="/signup" className="px-6 py-3 rounded-2xl font-semibold text-sm tracking-wide text-white transition-opacity hover:opacity-90 bg-[#4DA8CCE5]">
            Sign Up
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white p-2 focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </nav>
  );
};

export default memo(Header);
