import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ClientLogos from "../components/ClientLogos";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import IndustrySolutions from "../components/IndustrySolutions";
import DashboardPreview from "../components/DashboardPreview";
import Testimonials from "../components/Testimonials";
import SustainabilityImpact from "../components/SustainabilityImpact";
import PricingSection from "../components/PricingSection";
import FaqSection from "../components/FaqSection";
import Cta from "../components/Cta";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="bg-sizer-background min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ClientLogos />
        <FeatureSection />
        <HowItWorks />
        <IndustrySolutions />
        <DashboardPreview />
        <Testimonials />
        <SustainabilityImpact />
        <PricingSection />
        <FaqSection />
        <Cta />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
