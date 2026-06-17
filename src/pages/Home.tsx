import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/sections/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-[Poppins,sans-serif]">
      <div className="relative">
        <Header />
        <HeroSection />
      </div>
      {/* <SmartFeatures /> */}
      {/* <CtaSection /> */}
      <Footer />
    </div>
  );
}

export default Home