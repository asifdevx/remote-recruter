import Header from "@/components/header";
import Feature from "@/components/sections/feature";
import HeroSection from "@/components/sections/HeroSection";

const Home = () => {
  return (
    <div className="flex flex-col font-sans">
      <div className="relative">
        <Header />
        <HeroSection />
        <Feature/>
      </div>
      {/* <SmartFeatures /> */}
      {/* <CtaSection /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home