import { faqs } from "@/config/FAQ";
import { useState } from "react";
import FaqRows from "./FaqRows";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-label="Frequently Asked Questions" className="w-full bg-white py-32 px-6 sm:px-12 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <h2 className="text-[#11142D] font-semibold text-3xl sm:text-4xl tracking-tight mb-12">Common Questions</h2>

        <div className="w-full flex flex-col gap-8 mb-10">
          {faqs.map((faq, index) => (
            <FaqRows key={index} currentIndex={index} openIndex={openIndex} setOpenIndex={setOpenIndex} faq={faq} />
          ))}
        </div>

        <button className="inline-flex items-center justify-center border border-[#53B4DA]/69 hover:bg-linear-[10deg] from-[#52B4DA] to-[#1E3E85] text-[#1E3E85] hover:text-white font-semibold text-sm rounded-xl px-6 py-3 transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.98]">
          More Questions
        </button>
      </div>
    </section>
  );
}
