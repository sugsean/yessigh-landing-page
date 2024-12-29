import { motion } from "framer-motion";
import { PricingPlans } from "./pricing/PricingPlans";

export const Pricing = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-custom-mint/20 via-custom-yellow/10 to-custom-purple/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-custom-pink via-custom-purple to-custom-blue bg-clip-text text-transparent">
            Transparent, Ethical Pricing
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Choose the plan that best fits your institution's needs. Early access members get 50% off until January 30th, 2025.
          </p>
        </motion.div>

        <PricingPlans />
      </div>
    </section>
  );
};