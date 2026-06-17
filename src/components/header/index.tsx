import { Menu, X } from "lucide-react";
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-12.75 py-7.25">
      <div className="flex items-center justify-between max-w-360 mx-auto">
        {/* Brand Logo Image */}
        <Link to="/" className="shrink-0">
          <img src="/assets/logo/RemoteRecruit.png" alt="RemoteRecruit Logo" className="w-30.75 h-12.5 object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/signin" className="text-white font-semibold text-sm tracking-wide hover:opacity-80 transition-opacity">
            Sign In
          </Link>
          <Link to="/signup" className="px-6 py-3 rounded-2xl font-semibold text-sm tracking-wide text-white transition-opacity hover:opacity-90" style={{ background: "rgba(77, 168, 204, 0.90)" }}>
            Sign Up
          </Link>
        </div>

      
        <button className="md:hidden text-white p-2 focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm">
          <Link to="/signin" className="text-white font-semibold text-sm text-center py-2" onClick={() => setMobileMenuOpen(false)}>
            Sign In
          </Link>
          <Link to="/signup" className="px-6 py-3 rounded-2xl font-semibold text-sm text-center text-white" style={{ background: "rgba(77, 168, 204, 0.90)" }} onClick={() => setMobileMenuOpen(false)}>
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default memo(Header)