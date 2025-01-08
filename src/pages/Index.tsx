import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Benefits } from "@/components/landing/Benefits";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";
import { SocialImpact } from "@/components/landing/SocialImpact";
import { InterfaceShowcase } from "@/components/landing/InterfaceShowcase";
import { FinancialProjectionsDialog } from "@/components/landing/FinancialProjectionsDialog";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSolution />
      <Features />
      <InterfaceShowcase />
      <Benefits />
      <Testimonials />
      <SocialImpact />
      <Pricing />
      <Footer />
      <FinancialProjectionsDialog />
    </div>
  );
};

export default Index;