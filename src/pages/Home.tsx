import Footer from "@/components/footer";
import Header from "@/components/header";
import FAQ from "@/components/sections/FAQ";
import Feature from "@/components/sections/Feature";
import HeroSection from "@/components/sections/HeroSection";
import SignUpAd from "@/components/sections/SignUpAd";

const Home = () => {
  return (
    <div className="flex flex-col font-sans bg-white">
      <div className="relative">
        <Header />
        <HeroSection />
        <Feature />
        <SignUpAd />
        <FAQ />
      </div>
      <div className="pt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
