"use client";

import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function CtaButton({ children, className = "", ...props }: CtaButtonProps) {
  return (
    <button
      className={`group inline-flex items-center gap-0 bg-[#52B4DA]/16 hover:bg-[#2563eb] border-none rounded-full p-1.5 pr-5 cursor-pointer no-underline transition-all duration-300 ease-out hover:shadow-[0_10px_30px_rgba(59,130,246,0.45)] hover:-translate-y-0.5 active:scale-[0.97] motion-reduce:transform-none motion-reduce:shadow-none ${className}`}
      {...props}
    >
      <span
        className="w-10 h-10 rounded-full bg-[#52B4DA] flex items-center justify-center shrink-0 text-[#3b82f6] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.75 group-hover:rotate-42 motion-reduce:transform-none"
        aria-hidden="true"
      >
        <ArrowRight size={18} strokeWidth={2.5} className="text-white"  />
      </span>

      <span className="text-[#1E3E85] group-hover:text-white font-semibold text-base pl-3.5 whitespace-nowrap">{children}</span>
    </button>
  );
}
