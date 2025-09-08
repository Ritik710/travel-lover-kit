import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TopDestinations from "@/components/TopDestinations";
import SpecialOffers from "@/components/SpecialOffers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TopDestinations />
      <SpecialOffers />
      <Footer />
    </div>
  );
};

export default Index;
