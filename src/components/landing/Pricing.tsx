import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PricingCard } from "./pricing/PricingCard";
import { schoolPlans, additionalPlans } from "@/data/pricing";

export const Pricing = () => {
  const [isUK, setIsUK] = useState(false);

  useEffect(() => {
    const userLocale = navigator.language || navigator.languages[0];
    setIsUK(userLocale.includes('GB') || userLocale.includes('UK'));
  }, []);

  return (
    <section id="pricing" className="py-12 bg-gradient-to-b from-custom-mint/20 via-custom-yellow/10 to-custom-purple/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-custom-pink via-custom-purple to-custom-blue bg-clip-text text-transparent">
            Transparent, Ethical Pricing
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Choose the plan that best fits your institution's needs. Early access discount of 50% available until January 30th, 2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {schoolPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
              isUK={isUK}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
              isUK={isUK}
            />
          ))}
        </div>
      </div>
    </section>
  );
};