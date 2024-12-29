import { PricingTier } from "@/types/pricing";

export const schoolPlans: PricingTier[] = [
  {
    name: "Small School Plan",
    price: 299,
    idealFor: "Primary schools with under 200 students seeking an ethical, complete solution",
    description: "All core features included with ethical compliance and clear UI design",
    ethicalApproach: "Complete feature access with strong ethical data handling for smaller communities",
    features: [
      { name: "Up to 200 student profiles" },
      { name: "Real-time wellbeing monitoring" },
      { name: "Ethical data management" },
      { name: "Parent-teacher communication" },
      { name: "Core reporting features" },
      { name: "Training documentation" },
      { name: "Basic support access" },
      { name: "Student dashboard" }
    ],
    color: "custom-mint",
    recommended: false
  },
  {
    name: "Medium School Plan",
    price: 749,
    idealFor: "Schools with 200-500 students needing enhanced data management",
    description: "Advanced features with AI-powered insights and priority support",
    ethicalApproach: "Scalable ethical framework with enhanced data protection",
    features: [
      { name: "Up to 500 student profiles" },
      { name: "AI-powered reporting" },
      { name: "Enhanced data visualization" },
      { name: "Professional service integration" },
      { name: "Priority support access" },
      { name: "Advanced security protocols" },
      { name: "Automated notifications" },
      { name: "Extended data storage" }
    ],
    color: "custom-yellow",
    recommended: true
  },
  {
    name: "Large School Plan",
    price: "Custom pricing",
    idealFor: "School districts or large systems with multiple locations",
    description: "Enterprise-grade solution with complete customization options",
    ethicalApproach: "Enterprise-level ethical standards with complete transparency",
    features: [
      { name: "Unlimited student profiles" },
      { name: "Custom integrations" },
      { name: "24/7 dedicated support" },
      { name: "Advanced AI analytics" },
      { name: "Multi-site management" },
      { name: "Professional training plans" },
      { name: "Feature development input" },
      { name: "Enterprise security" }
    ],
    color: "custom-blue",
    recommended: false
  }
];

export const additionalPlans: PricingTier[] = [
  {
    name: "Individual Teacher Plan",
    price: 20,
    idealFor: "Individual teachers needing platform access",
    description: "Basic package with core functionality for single classroom use",
    features: [
      { name: "Single classroom features" },
      { name: "Basic reporting tools" },
      { name: "Resource access" },
      { name: "Support ticket system" }
    ],
    color: "custom-purple"
  },
  {
    name: "Parent Access",
    price: 0,
    idealFor: "Parents wanting to stay connected",
    description: "Free access to core features for monitoring student well-being",
    features: [
      { name: "Basic well-being reports" },
      { name: "Secure messaging" },
      { name: "Activity notifications" },
      { name: "Direct teacher communication" }
    ],
    color: "custom-pink"
  }
];