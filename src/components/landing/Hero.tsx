import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SignupModal } from "../signup/SignupModal";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { HeroTags } from "./hero/HeroTags";
import { HeroContent } from "./hero/HeroContent";
import { HeroAnimation } from "./hero/HeroAnimation";

export const Hero = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [userType, setUserType] = useState<'parent' | 'teacher' | 'school'>('parent');
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/profile');
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('section:has(h2:contains("Transparent, Ethical Pricing"))');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDemoClick = () => {
    window.open('https://calendly.com/shawnweb2020/yessigh-introduction-and-demo', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-custom-mint/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-custom-pink/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-custom-purple/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <HeroTags />
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-custom-pink via-custom-purple to-custom-blue bg-clip-text text-transparent">
                Empower Student Wellbeing,
              </span>
              <br />
              <span className="text-gray-800">Through Teacher-Parent Partnership</span>
            </h1>

            <HeroContent 
              scrollToPricing={scrollToPricing}
              handleDemoClick={handleDemoClick}
            />
          </motion.div>

          <HeroAnimation />
        </div>
      </div>

      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        userType={userType}
      />
    </section>
  );
};