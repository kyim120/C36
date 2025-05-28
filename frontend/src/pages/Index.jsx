import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeatureSlideshow from "../components/FeatureSlideshow";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Full Page Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80&w=1920')`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <FeatureSlideshow />
        <CTASection />
        <Footer />
      </div>
    </div>
 

  );
};

export default Index;