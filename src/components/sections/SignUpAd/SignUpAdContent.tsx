"use client";

import { cn } from "@/utils/cn";
import CtaButton from "./CtaButton";

export default function SignUpAdContent({ animate }: { animate: boolean }) {
  return (
    <div className="w-full lg:w-[46%] pt-16 pb-75 sm:pb-95 md:pb-115 lg:py-0 flex flex-col items-center text-center lg:items-start lg:text-left">
     
      <span className={cn("reveal-item inline-flex items-center gap-2 mb-4 text-[#1E3E85] font-bold text-[0.8rem] tracking-[0.12em] uppercase", animate && "is-visible duration-500 delay-100")}>
        Are you ready?
      </span>

      <h2
        className={cn(
          "reveal-item text-[#11142D] font-regular font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] mb-4 tracking-[-0.01em] max-w-120",
          animate && "is-visible duration-700 delay-200",
        )}
      >
        Help is only a few clicks away!
      </h2>

      <p className={cn("reveal-item text-[#767784] text-base leading-[1.7] mb-9 max-w-90", animate && "is-visible duration-700 delay-300")}>
        Click Below to get set up super quickly and find help now!
      </p>

      <div className={cn("reveal-item", animate && "is-visible duration-700 delay-400")}>
        <CtaButton>Get Started</CtaButton>
      </div>
    </div>
  );
}
