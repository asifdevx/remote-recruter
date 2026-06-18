import { lazy, Suspense } from "react";

import { FAQSkeleton, FeatureSkeleton, SignUpAdSkeleton } from "@/components/common/Skeleton";
import HeroSection from "@/components/sections/HeroSection";

const Feature = lazy(() => import("@/components/sections/Feature"));
const FAQ = lazy(() => import("@/components/sections/FAQ"));
const SignUpAd = lazy(() => import("@/components/sections/SignUpAd"));

const Home = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="relative">
        <HeroSection />

        <Suspense fallback={<FeatureSkeleton />}>
          <Feature />
        </Suspense>

        <Suspense fallback={<SignUpAdSkeleton />}>
          <SignUpAd />
        </Suspense>

        <Suspense fallback={<FAQSkeleton />}>
          <FAQ />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
