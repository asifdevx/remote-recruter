"use client";
import DashboardPanel from "./DashboardPanel";
import "./SignUp.css";

import SignUpAdContent from "./SignUpAdContent";

const SignUpAd = () => {
  return (
    <section aria-label="RemoteRecruit CTA" className="signUpAd_section">
      <DashboardPanel />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-end min-h-160">
        <SignUpAdContent />
      </div>
    </section>
  );
};

export default SignUpAd;
