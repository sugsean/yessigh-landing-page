import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PricingTier } from "@/types/pricing";
import { useState } from "react";
import { SignupModal } from "@/components/signup/SignupModal";

interface PricingCardProps {
  plan: PricingTier;
  index: number;
  isUK: boolean;
}

export const PricingCard = ({ plan, index, isUK }: PricingCardProps) => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  
  const formatPrice = (price: string | number) => {
    if (typeof price === "string") return price;
    return isUK ? `£${price}` : `$${Math.round(price * 1.25)}`;
  };

  const handleSignupClick = () => {
    setIsSignupOpen(true);
  };

  const renderButton = () => {
    const buttonClass = `w-full bg-gradient-to-r from-${plan.color} to-custom-purple hover:opacity-90 text-white font-semibold`;
    
    if (typeof plan.price === "string") {
      return (
        <Button className={buttonClass} onClick={handleSignupClick}>
          Contact Sales
        </Button>
      );
    }

    return (
      <Button className={buttonClass} onClick={handleSignupClick}>
        Get Started
      </Button>
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-custom-purple/10 ${
          plan.recommended ? "ring-2 ring-custom-yellow" : ""
        }`}
      >
        {plan.recommended && (
          <div className="absolute top-0 right-0 bg-custom-yellow text-xs font-semibold px-2 py-1 rounded-bl">
            Recommended
          </div>
        )}
        <div className={`p-6 bg-gradient-to-br from-${plan.color}/30 to-white`}>
          <h3 className="text-xl font-bold mb-2 text-gray-800">{plan.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{plan.idealFor}</p>
          {plan.ethicalApproach && (
            <p className="text-sm text-gray-700 mb-3 italic">{plan.ethicalApproach}</p>
          )}
          <div className="mb-4">
            <span className="text-3xl font-bold text-gray-800">{formatPrice(plan.price)}</span>
            {typeof plan.price === "number" && (
              <span className="text-sm text-gray-600">/month</span>
            )}
          </div>
          {renderButton()}
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">{plan.description}</p>
          <ul className="space-y-3">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className={`w-5 h-5 text-${plan.color} mt-0.5 flex-shrink-0`} />
                <div className="flex-1">
                  <span className="text-sm text-gray-700">{feature.name}</span>
                  {feature.description && (
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 inline-block ml-1 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs max-w-xs">{feature.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        userType={plan.name.toLowerCase().includes('school') ? 'school' : 
                 plan.name.toLowerCase().includes('teacher') ? 'teacher' : 'parent'}
      />
    </>
  );
};