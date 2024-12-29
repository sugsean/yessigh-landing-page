import { PricingTier } from "@/types/pricing";

export const schoolPlans: PricingTier[] = [
  {
    name: "Small School Plan",
    price: 299,
    idealFor: "Primary schools with up to 16 teachers and 200 students",
    description: "Perfect for smaller schools looking for a complete, ethical solution with core features and dedicated support",
    ethicalApproach: "Complete feature access with strong ethical data handling for smaller communities",
    features: [
      { name: "Up to 16 teacher accounts", description: "Full access for all your teaching staff" },
      { name: "Up to 200 student profiles", description: "Secure profiles for your entire student body" },
      { name: "Real-time wellbeing monitoring", description: "Track and respond to student wellbeing in real-time" },
      { name: "Ethical data management", description: "GDPR compliant data handling and storage" },
      { name: "Parent-teacher communication", description: "Direct, secure messaging between parents and teachers" },
      { name: "Core reporting features", description: "Essential reporting tools for student progress" },
      { name: "Training documentation", description: "Comprehensive guides and training materials" },
      { name: "Basic support access", description: "Email and ticket-based support" }
    ],
    color: "custom-mint",
    recommended: false
  },
  {
    name: "Medium School Plan",
    price: 749,
    idealFor: "Schools with up to 40 teachers and 500 students",
    description: "Enhanced features with AI-powered insights and priority support for growing schools",
    ethicalApproach: "Scalable ethical framework with enhanced data protection",
    features: [
      { name: "Up to 40 teacher accounts", description: "Expanded access for larger teaching teams" },
      { name: "Up to 500 student profiles", description: "Comprehensive student management" },
      { name: "AI-powered reporting", description: "Advanced analytics and insights" },
      { name: "Enhanced data visualization", description: "Interactive charts and detailed metrics" },
      { name: "Professional service integration", description: "Connect with external support services" },
      { name: "Priority support access", description: "Fast-track support with dedicated assistance" },
      { name: "Advanced security protocols", description: "Enterprise-grade security measures" },
      { name: "Extended data storage", description: "Increased storage for comprehensive record keeping" }
    ],
    color: "custom-yellow",
    recommended: true
  },
  {
    name: "Large School Plan",
    price: "Custom pricing",
    idealFor: "School districts or large systems with unlimited teachers and locations",
    description: "Enterprise-grade solution with complete customization options",
    ethicalApproach: "Enterprise-level ethical standards with complete transparency",
    features: [
      { name: "Unlimited teacher accounts", description: "No restrictions on staff numbers" },
      { name: "Unlimited student profiles", description: "Scale without limitations" },
      { name: "Custom integrations", description: "Tailored to your specific needs" },
      { name: "24/7 dedicated support", description: "Round-the-clock assistance" },
      { name: "Advanced AI analytics", description: "Comprehensive data insights" },
      { name: "Multi-site management", description: "Manage multiple locations efficiently" },
      { name: "Professional training plans", description: "Customized training programs" },
      { name: "Enterprise security", description: "Maximum security protocols" }
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