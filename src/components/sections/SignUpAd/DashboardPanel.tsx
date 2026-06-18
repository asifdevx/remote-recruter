import { cn } from "@/utils/cn";
import { memo, useState } from "react";

function DashboardPanel({ animate }: { animate: boolean }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "absolute -bottom-20 lg:-bottom-5 2xl:-bottom-30 left-0 right-0 lg:-left-10 mx-auto w-[92%] sm:w-[80%] md:w-[70%] z-20",
        "lg:right-auto lg:mx-0 lg:w-1/2",
        "transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)",
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none",
      )}
    >
      <div className={cn("w-full h-full", animate && "animate-[hero-float_6s_ease-in-out_1s_infinite] motion-reduce:transform-none")}>
        <div className="bg-white rounded-t-2xl overflow-hidden p-1.5 pb-0 shadow-[0_-20px_90px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.05)]">
          <div className="relative rounded-t-xl overflow-hidden aspect-4/3">
            <div
              className={cn(
                "absolute inset-0 rounded-t-xl bg-linear-to-r from-white/5 via-white/15 to-white/5 bg-size-[200%_100%] animate-[hero-shimmer_1.8s_ease-in-out_infinite] transition-opacity duration-500",
                loaded ? "opacity-0 pointer-events-none" : "opacity-100",
              )}
            />

            <img
              src="/assets/signUpAd/dashboard.webp"
              alt="dashboard preview"
              className={cn("absolute inset-0 w-full h-full object-cover rounded-t-xl transition-opacity duration-700", loaded ? "opacity-100" : "opacity-0")}
              loading="eager"
              decoding="async"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </div>

        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-blue-400/10 blur-2xl rounded-full pointer-events-none" />
      </div>
    </div>
  );
}

export default memo(DashboardPanel);
