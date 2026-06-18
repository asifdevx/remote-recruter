import { useRef } from "react";
// Assuming your useInView hook is saved in a hooks folder
import { useInView } from "@/hooks/useInView";
import { cn } from "@/utils/cn";

type Props = {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
};

export default function FeatureRow({ badge, title, description, imageSrc, imageAlt, imagePosition = "right" }: Props) {
  const isImageLeft = imagePosition === "left";

  const rowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, 0.15);

  return (
    <div ref={rowRef} className="w-full max-w-7xl mx-auto px-6 py-10 font-sans font-normal overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div
          className={cn(
            "flex flex-col items-start  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isImageLeft ? "lg:order-2" : "lg:order-1",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="inline-block p-3 text-xs font-semibold tracking-wide text-[#11142D]/80 bg-[#C2EEFF] rounded-full mb-4">{badge}</span>
          <h2 className="text-[#1e293b] font-medium text-2xl sm:text-3xl md:text-4xl leading-tight mb-6 max-w-xl">{title}</h2>
          <p className="text-[#11142D]/64 font-medium text-sm sm:text-lg leading-relaxed max-w-lg">{description}</p>
        </div>

        {/* IMAGE COLUMN */}
        <div
          className={cn(
            "flex justify-center items-center  transition-all duration-700 delay-150 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isImageLeft ? "lg:order-1" : "lg:order-2",
            isInView ? "opacity-100 translate-y-0" : "opacity-80 translate-y-4",
          )}
        >
          <div className="relative w-full max-w-120 transition-transform duration-500 hover:scale-[1.02]">
            <img src={imageSrc} alt={imageAlt ?? title} className="w-full h-auto object-contain drop-shadow-xl" loading="eager" />
          </div>
        </div>
      </div>
    </div>
  );
}
