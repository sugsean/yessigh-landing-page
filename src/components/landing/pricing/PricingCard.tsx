import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface PricingFeature {
  feature: string;
  tooltip?: string;
}

interface PricingCardProps {
  name: string;
  description: string;
  priceUSD: number | string;
  priceGBP: number | string;
  features: PricingFeature[];
  color: string;
  recommended?: boolean;
}

export const PricingCard = ({
  name,
  description,
  priceUSD,
  priceGBP,
  features,
  color,
  recommended = false,
}: PricingCardProps) => {
  const isUK = navigator.language.includes('GB') || navigator.language.includes('UK');
  const formattedPrice = typeof priceUSD === 'string' ? priceUSD : 
    isUK ? `£${priceGBP}` : `$${priceUSD}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-${color}/10 ${
        recommended ? `ring-2 ring-${color}` : ''
      }`}
    >
      {recommended && (
        <div className={`absolute top-0 right-0 bg-${color} text-xs font-semibold px-2 py-1 rounded-bl text-white`}>
          Recommended
        </div>
      )}
      <div className={`p-6 bg-gradient-to-br from-${color}/30 to-white`}>
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="mb-4">
          <span className="text-2xl font-bold">{formattedPrice}</span>
          {typeof priceUSD !== 'string' && <span className="text-sm text-gray-600">/month</span>}
        </div>
        <Button 
          className={`w-full bg-${color} hover:opacity-90 text-white`}
        >
          {typeof priceUSD === 'string' ? "Contact Sales" : "Get Started"}
        </Button>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <Check className={`w-4 h-4 text-${color}`} />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="text-left text-gray-600">
                    {feature.feature}
                  </TooltipTrigger>
                  {feature.tooltip && (
                    <TooltipContent>
                      <p className="text-xs">{feature.tooltip}</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};