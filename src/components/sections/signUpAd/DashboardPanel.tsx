import { cn } from "@/utils/cn";
import { memo, useState } from "react";

function DashboardPanel() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "absolute bottom-0 lg:bottom-30 2xl:bottom-0 left-0 right-0 lg:-left-10  mx-auto w-[92%] sm:w-[80%] md:w-[70%] z-20",
        "lg:right-auto lg:mx-0 lg:w-1/2",
        "animate-[hero-from-left_0.9s_cubic-bezier(0.22,1,0.36,1)_0.1s_both] motion-reduce:transform-none motion-reduce:opacity-100",
      )}
    >
      <div className="animate-[hero-float_6s_ease-in-out_1.2s_infinite] motion-reduce:animation-none">
        <div className="bg-white rounded-t-2xl overflow-hidden p-1.5 pb-0 shadow-[0_-20px_90px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.15)] md:shadow-[0_-20px_90px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.15)]">
          <div className="relative rounded-t-xl overflow-hidden aspect-4/3">
            <div
              className={cn(
                "absolute inset-0 rounded-t-xl bg-linear-to-r from-white/5 via-white/15 to-white/5 bg-size-[200%_100%] animate-[hero-shimmer_1.8s_ease-in-out_infinite] transition-opacity duration-500",
                loaded ? "opacity-0 pointer-events-none" : "opacity-100",
              )}
            />

            <img
              src="/assets/signUpAd/dashboard.png"
              alt="dashboard preview"
              className={cn("absolute inset-0 w-full h-full object-cover rounded-t-xl transition-opacity duration-700", loaded ? "opacity-100" : "opacity-0")}
              loading="eager"
              decoding="async"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>

        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-blue-400/20 blur-2xl rounded-full pointer-events-none" />
      </div>
    </div>
  );
}

export default memo(DashboardPanel);