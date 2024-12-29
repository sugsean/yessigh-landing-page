import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    name: "Basic School Plan",
    priceUSD: 299,
    priceGBP: 239,
    description: "Perfect for small schools up to 200 students",
    features: [
      "Up to 200 student profiles",
      "Basic analytics dashboard",
      "Standard support",
      "Basic report templates",
      "Data export options",
    ],
    color: "custom-mint",
    recommended: false,
  },
  {
    name: "Standard School Plan",
    priceUSD: 799,
    priceGBP: 639,
    description: "Ideal for medium-sized schools up to 500 students",
    features: [
      "Up to 500 student profiles",
      "Advanced analytics",
      "Priority support",
      "Custom report templates",
      "API access",
      "Enhanced security features",
    ],
    color: "custom-yellow",
    recommended: true,
  },
  {
    name: "Premium School Plan",
    price: "Contact Us",
    description: "Enterprise-level solution for larger institutions",
    features: [
      "Unlimited student profiles",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced security",
      "Custom feature development",
    ],
    color: "custom-blue",
    recommended: false,
  },
];

const additionalPlans = [
  {
    name: "Individual Teacher",
    priceUSD: 29,
    priceGBP: 23,
    description: "For independent teachers",
    features: [
      "Single classroom management",
      "Basic reporting tools",
      "Standard support",
      "Essential analytics",
    ],
    color: "custom-purple",
  },
  {
    name: "Parent Access",
    priceUSD: 0,
    priceGBP: 0,
    description: "Free access to basic features",
    features: [
      "View child's wellbeing data",
      "Download basic reports",
      "Message teachers",
      "Activity notifications",
    ],
    color: "custom-pink",
  },
];

export const Pricing = () => {
  const [isUK, setIsUK] = useState(false);

  useEffect(() => {
    const userLocale = navigator.language || navigator.languages[0];
    setIsUK(userLocale.includes('GB') || userLocale.includes('UK'));
  }, []);

  const formatPrice = (plan: any) => {
    if ('price' in plan) return plan.price;
    if (plan.priceUSD === 0) return "Free";
    return isUK ? `£${plan.priceGBP}` : `$${plan.priceUSD}`;
  };

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
            Choose the plan that best fits your institution's needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-custom-purple/10 ${
                plan.recommended ? 'ring-2 ring-custom-yellow' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-custom-yellow text-xs font-semibold px-2 py-1 rounded-bl">
                  Recommended
                </div>
              )}
              <div className={`p-4 bg-gradient-to-br from-${plan.color}/30 to-white`}>
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{plan.description}</p>
                <div className="mb-3">
                  <span className="text-2xl font-bold">{formatPrice(plan)}</span>
                  {!('price' in plan) && <span className="text-sm text-gray-600">/month</span>}
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
                    <li key={feature} className="flex items-center gap-2 text-xs">
                      <Check className={`w-4 h-4 text-${plan.color}`} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {additionalPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-custom-purple/10"
            >
              <div className={`p-4 bg-gradient-to-br from-${plan.color}/30 to-white`}>
                <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{plan.description}</p>
                <div className="mb-3">
                  <span className="text-2xl font-bold">{formatPrice(plan)}</span>
                  {plan.priceUSD !== 0 && <span className="text-sm text-gray-600">/month</span>}
                </div>
                <Button 
                  className={`w-full bg-gradient-to-r from-${plan.color} to-custom-purple hover:opacity-90 text-sm py-2`}
                >
                  Get Started
                </Button>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs">
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