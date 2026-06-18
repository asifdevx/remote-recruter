"use client";

import CtaButton from "./CtaButton";

export default function SignUpAdContent() {
  return (
    <div className="w-full lg:w-[46%] pt-16 pb-75 sm:pb-95 md:pb-115 lg:py-0 flex flex-col items-center text-center lg:items-start lg:text-left animate-[hero-from-right_0.75s_cubic-bezier(0.22,1,0.36,1)_0.15s_both] motion-reduce:transform-none motion-reduce:opacity-100">
      <span className="animate-[hero-item-up_0.6s_cubic-bezier(0.22,1,0.36,1)_0.30s_both] motion-reduce:transform-none motion-reduce:opacity-100 inline-flex items-center gap-2 mb-4 text-[#1E3E85] font-bold text-[0.8rem] tracking-[0.12em] uppercase">
        Are you ready?
      </span>
      <h2 className="animate-[hero-item-up_0.6s_cubic-bezier(0.22,1,0.36,1)_0.44s_both] motion-reduce:transform-none motion-reduce:opacity-100 text-[#11142D] font-regular font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] mb-4 tracking-[-0.01em] max-w-120">
        Help is only a few clicks away!
      </h2>
      <p className="animate-[hero-item-up_0.6s_cubic-bezier(0.22,1,0.36,1)_0.58s_both] motion-reduce:transform-none motion-reduce:opacity-100 text-[#767784] text-base leading-[1.7] mb-9 max-w-90">
        Click Below to get set up super quickly and find help now!
      </p>
      <div className="animate-[hero-item-up_0.6s_cubic-bezier(0.22,1,0.36,1)_0.72s_both] motion-reduce:transform-none motion-reduce:opacity-100">
        <CtaButton>Get Started</CtaButton>
      </div>
    </div>
  );
}
