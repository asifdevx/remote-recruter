import { memo } from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: (open: boolean) => void }) => {
  if (!mobileMenuOpen) return null;
  return (
    <div className="md:hidden mt-4 flex flex-col gap-4 px-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm">
      <Link to="/signin" className="text-white font-semibold text-sm text-center py-2" onClick={() => setMobileMenuOpen(false)}>
        Sign In
      </Link>
      <Link to="/signup" className="px-6 py-3 rounded-2xl font-semibold text-sm text-center text-white bg-[#4DA8CCE5]" onClick={() => setMobileMenuOpen(false)}>
        Sign Up
      </Link>
    </div>
  );
};

export default memo(MobileMenu);
