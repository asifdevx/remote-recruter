"use client";

import { pricingPlans, socials } from "@/config/Footer";
import { PricingCard } from "./PriceCard";

export default function Footer() {
  return (
    <footer className="relative footer-section pt-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center mb-20 -mt-24 sm:-mt-32 lg:-mt-40 relative z-10 px-6">
        <h2 className="text-[#11142D] font-semibold text-3xl sm:text-4xl text-center mb-12 lg:mb-16 tracking-tight">Help Is One Click Away</h2>

        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center  lg:flex-row gap-6 lg:gap-8 ">
          {pricingPlans.map((plan) => (
            <PricingCard isPremium={plan.isPremium} price={plan.price} subtitle={plan.subtitle} features={plan.features} ctaLabel={plan.ctaLabel} />
          ))}
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 px-6 pb-8">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 pb-2">
          {/* Logo brand structure */}
          <div className="flex items-center gap-1.5 select-none text-white font-black text-2xl tracking-tight pointer-events-none">
            <img src="/assets/logo/RemoteRecruit.webp" alt="RemoteRecruit Logo" className="w-full h-full object-contain" />
          </div>

          {/* Social Links Grid */}
          <div className="flex items-center gap-3">
            {socials.map(({ href, label, Icon }, idx) => (
              <a
                key={idx}
                href={href}
                aria-label={label}
                title={label}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {Icon && <Icon size={15} className="text-white" aria-hidden="true" />}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full border-t border-white/10 h-full pt-10 items-center flex justify-center">
          <img src="/assets/logo/logo.webp" alt=" Logo" className="w-10 h-10 object-contain" />
        </div>
      </div>
    </footer>
  );
}
