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

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-10 lg:py-12 font-sans font-normal" >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}>
        <div className={`flex flex-col items-start ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-[#3b82f6] bg-[#e0f2fe] rounded-full mb-4">{badge}</span>

          <h2 className="text-[#1e293b] font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-6 max-w-xl">{title}</h2>

          <p className="text-[#64748b] font-medium text-sm sm:text-base leading-relaxed max-w-lg">{description}</p>
        </div>

        <div className={`flex justify-center items-center ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
          <div className="relative w-full max-w-120 transition-transform duration-500 hover:scale-[1.02]">
            <img src={imageSrc} alt={imageAlt || title} className="w-full h-auto object-contain drop-shadow-xl" loading="eager" />
          </div>
        </div>
      </div>
    </div>
  );
}
