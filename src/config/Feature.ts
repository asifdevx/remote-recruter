
type FeatureData = {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
};
export const featuresData:FeatureData[] = [
  {
    badge: "Global Reach",
    title: "The First Fully Global Job Board, Anywhere, Ever",
    description:
      "RemoteRecruit connects candidates with opportunities around the world. With today's remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.",
    imageSrc: "/assets/feature/feature-1.svg",
    imageAlt: "Global job board tracking dashboard interface representation",
    imagePosition: "right",
  },
  {
    badge: "Actually Free Flow",
    title: "Fee-Free Forever",
    description: "We don't charge you fees and we don't put up paywalls. We're the bridge that connects job opportunities with the best candidates, with no middleman involved.",
    imageSrc: "/assets/feature/feature-2.svg",
    imageAlt: "Premium subscription features card overview",
    imagePosition: "left", 
  },
  {
    badge: "Custom Profile",
    title: "Showcase Your Talents",
    description: "Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.",
    imageSrc: "/assets/feature/feature-3.svg",
    imageAlt: "Candidate portfolio and video feedback card showcase",
    imagePosition: "right",
  },
];
