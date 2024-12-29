import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Benefits } from "@/components/landing/Benefits";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;