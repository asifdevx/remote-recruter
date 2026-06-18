import { featuresData } from "@/config/Feature";
import FeatureRow from "./FeatureRow";

const Feature = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 overflow-hidden">
      <div className="space-y-4 md:space-y-0">
        {featuresData.map((feature, index) => (
          <FeatureRow
            key={index}
            badge={feature.badge}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
            imagePosition={feature.imagePosition!}
          />
        ))}
      </div>
    </section>
  );
};

export default Feature;
