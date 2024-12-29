import { PricingTier } from "@/types/pricing";

export const schoolPlans: PricingTier[] = [
  {
    name: "Basic School Plan",
    price: 299,
    idealFor: "Small primary schools that want an easy, ethical, effective approach for clear student and staff support",
    description: "A foundational plan that gives access to all the core features while adhering to strong ethical and transparent data practices",
    ethicalApproach: "Provides fundamental data tracking needed to create safer student and staff spaces",
    features: [
      { name: "Up to 200 Student profiles" },
      { name: "Secure and Ethical data management" },
      { name: "Core Teacher/Student data management" },
      { name: "Real Time Student Well-being Tracking" },
      { name: "Automated communications tools" },
      { name: "Core reporting templates" },
      { name: "Basic analytics dashboards" },
      { name: "Direct support access" }
    ],
    color: "custom-mint",
    recommended: false
  },
  {
    name: "Standard School Plan",
    price: 749,
    idealFor: "Medium-sized schools seeking a higher level of support and deeper functionality",
    description: "Includes all Basic Plan features plus expanded data tools and enhanced user controls",
    ethicalApproach: "Enhanced user controls and flexibility while promoting ethical data practices",
    features: [
      { name: "All Basic Plan features" },
      { name: "Up to 500 student profiles" },
      { name: "Advanced analytics dashboard" },
      { name: "Priority support access" },
      { name: "Full API access" },
      { name: "Enhanced teacher support tools" },
      { name: "Appointment management system" },
      { name: "Community resource sharing" }
    ],
    color: "custom-yellow",
    recommended: true
  },
  {
    name: "Premium School Plan",
    price: "Custom pricing",
    idealFor: "Larger multi-site school networks seeking maximum control and customization",
    description: "Complete and comprehensive features with high-level support and custom development options",
    ethicalApproach: "Enterprise-grade ethical data handling with complete transparency",
    features: [
      { name: "All Standard Plan features" },
      { name: "Unlimited student profiles" },
      { name: "Enterprise-level security" },
      { name: "24/7 dedicated support" },
      { name: "AI-powered analytics" },
      { name: "Custom implementation" },
      { name: "Professional consultation" },
      { name: "Feature development input" }
    ],
    color: "custom-blue",
    recommended: false
  }
];

export const additionalPlans: PricingTier[] = [
  {
    name: "Individual Teacher Plan",
    price: 20,
    idealFor: "Individual teachers exploring core functionality",
    description: "Access to key elements with basic reporting tools",
    features: [
      { name: "Core user features" },
      { name: "Basic reporting tools" },
      { name: "Professional documentation" },
      { name: "Community channel access" }
    ],
    color: "custom-purple"
  },
  {
    name: "Parent Access",
    price: 0,
    idealFor: "Parents wanting to stay connected",
    description: "Core features for monitoring student well-being",
    features: [
      { name: "View basic well-being insights" },
      { name: "Download basic reports" },
      { name: "Teacher communication" },
      { name: "Activity notifications" }
    ],
    color: "custom-pink"
  }
];