import Header from "@/components/header";
import Feature from "@/components/sections/feature";
import HeroSection from "@/components/sections/HeroSection";
import SignUpAd from "@/components/sections/signUpAd";

const Home = () => {
  return (
    <div className="flex flex-col font-sans">
      <div className="relative">
        <Header />
        <HeroSection />
        <Feature/>
        <SignUpAd />
        <div className="min-h-screen bg-white " />
      </div>
      {/* <SmartFeatures /> */}
      {/* <CtaSection /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home