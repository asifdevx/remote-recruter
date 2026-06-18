import { cn } from "@/utils/cn";
import { Check, X } from "lucide-react";

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  isPremium?: boolean;

  features: Feature[];
  ctaLabel: string;
  price: string;
  subtitle: string;
}

export const PricingCard = ({ isPremium = false, features, ctaLabel, price, subtitle }: PricingCardProps) => {
  return (
    <div className="w-full  bg-white rounded-4xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_50px_-15px_rgba(0,0,0,0.1)] border border-slate-100 transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
        <div className="relative w-full sm:w-37.5 aspect-4/3 sm:aspect-square rounded-2xl bg-[#ECF2FF] flex flex-col items-center justify-center p-4 shrink-0 ">
          {isPremium && (
            <div className="sm:w-[90%] w-1/3 absolute -top-5 px-1 py-1 rounded-full bg-[#C2EEFF] backdrop-blur-xs border border-blue-100 flex items-center gap-1.5 shadow-sm drop-shadow-[0_0_12px_rgba(30,62,133,0.25)]">
              <div className="py-2 px-3 bg-white rounded-full">
                <img src="assets/icon/premium.svg" alt="Premium" className="w-full h-full object-cover" />
              </div>
              <span className="text-[16px] font-bold text-slate-700 tracking-wide uppercase">Premium</span>
            </div>
          )}
          <div className="flex min-h-18 flex-col justify-center items-center">
            <span className={`text-3xl font-black ${isPremium ? "text-[#1d4ed8]" : "text-[#3b82f6]"}`}>{price}</span>
            <span className={`font-semibold text-lg text-[#11142D]/39 ${isPremium ? "text-xs " : "text-sm uppercase "}`}>{subtitle}</span>
          </div>
        </div>

        <ul className="w-full space-y-3.5">
          {features.map(({ text, included }, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm font-medium">
              <span className={cn("flex size-5 shrink-0 items-center justify-center rounded-full", included ? "bg-linear-45 from-[#52B4DA] to-[#1E3E85]" : "bg-[#979797]")}>
                {included ? <Check size={12} strokeWidth={3} className="text-white" /> : <X size={12} strokeWidth={3} className="text-white" />}
              </span>
              <span className={!included ? "text-[#808191]" : "text-[#323445]"}>{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={cn(
          "w-full py-4 font-bold text-base rounded-2xl cursor-pointer transition-all duration-200 active:scale-[0.99] hover:-translate-y-0.5",
          isPremium
            ? "bg-linear-[10deg] from-[#52B4DA] to-[#1E3E85] hover:bg-[#1e40af] text-white shadow-[0_8px_25px_rgba(29,78,216,0.35)]"
            : "bg-white border-2 border-[#1d4ed8] text-[#1d4ed8] hover:bg-blue-50/40",
        )}
      >
        {ctaLabel}
      </button>
    </div>
  );
};
