import { ChevronDown } from "lucide-react";

type Props = {
  currentIndex: number;
  openIndex: number | null;
  setOpenIndex: (currentIndex: number | null) => void;
  faq: {
    q: string;
    a: string;
  };
};
const FaqRows = ({ currentIndex, openIndex, setOpenIndex, faq }: Props) => {
  const isOpen = openIndex === currentIndex;

  const toggleFaq = (currentIndex: number) => {
    setOpenIndex(openIndex === currentIndex ? null : currentIndex);
  };

  return (
    <div key={currentIndex} className="w-full border-b border-slate-200 pb-6 last:border-none">
      <button onClick={() => toggleFaq(currentIndex)} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer">
        <span className="text-[#11142D] font-medium text-base sm:text-lg tracking-tight group-hover:text-[#3b82f6] transition-colors duration-200">{faq.q}</span>
        <ChevronDown size={18} className={`text-slate-400 shrink-0 transition-transform duration-300 ease-out ${isOpen ? "rotate-180 text-[#3b82f6]" : ""}`} />
      </button>

      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="text-[#6D6E7A] font-normal text-sm sm:text-base leading-relaxed pt-3 ">{faq.a}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqRows;
