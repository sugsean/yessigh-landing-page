export type PricingFeature = {
  name: string;
  description?: string;
};

export type PricingTier = {
  name: string;
  price: string | number;
  description: string;
  idealFor: string;
  ethicalApproach?: string;
  features: PricingFeature[];
  color: string;
  recommended?: boolean;
};