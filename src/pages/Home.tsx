import FAQ from "@/components/sections/FAQ";
import Feature from "@/components/sections/Feature";
import HeroSection from "@/components/sections/HeroSection";
import SignUpAd from "@/components/sections/SignUpAd";
const Home = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="relative">
        <HeroSection />
        <Feature />
        <SignUpAd />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
