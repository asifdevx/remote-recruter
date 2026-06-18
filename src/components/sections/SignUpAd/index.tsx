"use client";
import { useRef } from "react";
import DashboardPanel from "./DashboardPanel";
import "./SignUp.css";

import { useInView } from "@/hooks/useInView";
import SignUpAdContent from "./SignUpAdContent";

const SignUpAd = () => {
   const ref = useRef<HTMLElement | null>(null);
   const isInView = useInView(ref);
  return (
    <section aria-label="RemoteRecruit CTA" className="signUpAd_section" ref={ref}>
      <DashboardPanel animate={isInView} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-end min-h-160">
        <SignUpAdContent animate={isInView} />
      </div>
    </section>
  );
};

export default SignUpAd;
