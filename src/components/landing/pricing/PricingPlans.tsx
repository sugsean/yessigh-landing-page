import { PricingCard } from "./PricingCard";

const schoolPlans = [
  {
    name: "Basic School Plan",
    priceUSD: 299,
    priceGBP: 239,
    description: "Perfect for small schools up to 200 students",
    features: [
      { 
        feature: "Up to 200 student profiles",
        tooltip: "Includes secure single sign-on and QR code access"
      },
      { 
        feature: "Basic analytics dashboard",
        tooltip: "Track essential wellbeing metrics and generate basic reports"
      },
      { 
        feature: "Standard support",
        tooltip: "Email support with 24-hour response time"
      },
      { 
        feature: "Basic report templates",
        tooltip: "Pre-built templates for common reporting needs"
      },
      { 
        feature: "Ethical data handling",
        tooltip: "Compliant with GDPR and child protection regulations"
      },
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
      { 
        feature: "Up to 500 student profiles",
        tooltip: "Extended profile capacity with advanced access options"
      },
      { 
        feature: "Advanced analytics",
        tooltip: "Comprehensive data analysis and trend tracking"
      },
      { 
        feature: "Priority support",
        tooltip: "Priority email and phone support with 4-hour response time"
      },
      { 
        feature: "Custom report templates",
        tooltip: "Create and save custom report templates"
      },
      { 
        feature: "API access",
        tooltip: "Integrate with your existing school systems"
      },
      { 
        feature: "Enhanced security features",
        tooltip: "Additional security layers and audit trails"
      },
    ],
    color: "custom-yellow",
    recommended: true,
  },
  {
    name: "Premium School Plan",
    priceUSD: "Custom pricing",
    priceGBP: "Custom pricing",
    description: "Enterprise-level solution for larger institutions",
    features: [
      { 
        feature: "Unlimited student profiles",
        tooltip: "No limits on the number of student profiles"
      },
      { 
        feature: "Enterprise analytics",
        tooltip: "Advanced AI-powered analytics and predictions"
      },
      { 
        feature: "24/7 dedicated support",
        tooltip: "Round-the-clock support with dedicated account manager"
      },
      { 
        feature: "Custom integrations",
        tooltip: "Tailored integrations with your existing systems"
      },
      { 
        feature: "Advanced security",
        tooltip: "Enterprise-grade security with regular audits"
      },
      { 
        feature: "Custom feature development",
        tooltip: "Priority feature development for your specific needs"
      },
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
      { 
        feature: "Single classroom management",
        tooltip: "Manage one classroom effectively"
      },
      { 
        feature: "Basic reporting tools",
        tooltip: "Essential reporting capabilities"
      },
      { 
        feature: "Standard support",
        tooltip: "Email support during business hours"
      },
      { 
        feature: "Essential analytics",
        tooltip: "Basic analytics for classroom insights"
      },
    ],
    color: "custom-purple",
  },
  {
    name: "Parent Access",
    priceUSD: 0,
    priceGBP: 0,
    description: "Free access to basic features",
    features: [
      { 
        feature: "View child's wellbeing data",
        tooltip: "Access your child's basic wellbeing information"
      },
      { 
        feature: "Download basic reports",
        tooltip: "Access and download standard reports"
      },
      { 
        feature: "Message teachers",
        tooltip: "Direct communication with teachers"
      },
      { 
        feature: "Activity notifications",
        tooltip: "Get notified of important updates"
      },
    ],
    color: "custom-pink",
  },
];

export const PricingPlans = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {schoolPlans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {additionalPlans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </div>
  );
};