import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const plans = [
  {
    name: "Teachers",
    priceUSD: 29,
    priceGBP: 23,
    features: [
      "Personal wellbeing dashboard",
      "Real-time monitoring",
      "Basic analytics",
      "Email support",
    ],
    color: "custom-mint",
  },
  {
    name: "Parents",
    priceUSD: 19,
    priceGBP: 15,
    features: [
      "Child wellbeing tracking",
      "Teacher communication",
      "Progress reports",
      "Mobile app access",
    ],
    color: "custom-yellow",
  },
  {
    name: "Schools",
    price: "Contact Us",
    features: [
      "Full platform access",
      "Advanced analytics",
      "Custom integrations",
      "Priority support",
    ],
    color: "custom-blue",
  },
];

export const Pricing = () => {
  const [isUK, setIsUK] = useState(false);

  useEffect(() => {
    const userLocale = navigator.language || navigator.languages[0];
    setIsUK(userLocale.includes('GB') || userLocale.includes('UK'));
  }, []);

  const formatPrice = (plan: typeof plans[0]) => {
    if ('price' in plan) return plan.price;
    return isUK ? `£${plan.priceGBP}` : `$${plan.priceUSD}`;
  };

  return (
    <section className="py-12 bg-gradient-to-b from-custom-mint/20 via-custom-yellow/10 to-custom-purple/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-custom-pink via-custom-purple to-custom-blue bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Choose the plan that best fits your needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-custom-purple/10"
            >
              <div className={`p-4 bg-gradient-to-br from-${plan.color}/30 to-white`}>
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <div className="mb-3">
                  {plan.price === "Contact Us" ? (
                    <span className="text-2xl font-bold">Enterprise</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold">{formatPrice(plan)}</span>
                      <span className="text-sm text-gray-600">/month</span>
                    </>
                  )}
                </div>
                <Button 
                  className={`w-full bg-gradient-to-r from-${plan.color} to-custom-purple hover:opacity-90 text-sm py-2`}
                >
                  {plan.price === "Contact Us" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 text-${plan.color}`} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};