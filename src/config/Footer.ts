import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

export const pricingPlans = [
  {
    id: "free",
    isPremium: false,
    price: "Free",
    subtitle: "Basic",
    ctaLabel: "Get Started",
    features: [
      { text: "1 Active Job", included: true },
      { text: "Basic List Placement", included: true },
      { text: "Unlimited Job Applicants", included: false },
      { text: "Invite Anyone to Apply to Your Jobs", included: false },
    ],
  },
  {
    id: "premium",
    isPremium: true,
      price: "$79.99",
    subtitle: "Per Month",
    ctaLabel: "Get Started",
    features: [
      { text: "Unlimited Job Posts", included: true },
      { text: "Instant Job Post Approval", included: true },
      { text: "Premium List Placement", included: true },
      { text: "Unlimited Job Applicants", included: true },
    ],
  },
];


export const socials = [
  { href: "#", Icon: FaFacebookF },
  { href: "#", Icon: BsTwitter },
  { href: "#", Icon: FaInstagram },
  { href: "#", Icon: FaSnapchatGhost },
  { href: "#", Icon: GrLinkedinOption },
];