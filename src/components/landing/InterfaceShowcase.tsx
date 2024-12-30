import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export const InterfaceShowcase = () => {
  const screenshots = [
    {
      src: "/lovable-uploads/033bc480-c7fd-4f05-8452-a7914dd1f123.png",
      alt: "School Overview Dashboard",
      title: "Comprehensive School Overview",
      description: "A powerful dashboard that gives administrators and teachers a bird's-eye view of school wellbeing",
      features: [
        "Real-time monitoring of student wellbeing indicators",
        "Early warning system for potential concerns",
        "Track class and grade-level trends",
        "Automated reporting and insights generation"
      ],
      benefitsFor: {
        teachers: "Reduce administrative burden with automated monitoring",
        students: "Get support before issues escalate",
        parents: "Stay informed about school-wide initiatives"
      }
    },
    {
      src: "/lovable-uploads/897c58f8-ebbd-4edf-aa3e-45804e839d8d.png",
      alt: "Parent Dashboard Interface",
      title: "Intuitive Parent Dashboard",
      description: "Empowering parents with real-time insights into their children's wellbeing journey",
      features: [
        "Daily wellbeing updates and notifications",
        "Direct communication with teachers",
        "Track academic and social progress",
        "Access to support resources and guidance"
      ],
      benefitsFor: {
        teachers: "Streamlined parent communication",
        students: "Better home-school connection",
        parents: "Stay actively involved in your child's development"
      }
    },
    {
      src: "/lovable-uploads/70eace88-71a0-456c-84e0-4f3aecf20f03.png",
      alt: "Parent Communication Interface",
      title: "Seamless Communication Hub",
      description: "Breaking down barriers between parents and teachers for better student support",
      features: [
        "Instant messaging with translation support",
        "Schedule parent-teacher meetings",
        "Share progress reports and updates",
        "Collaborative action planning"
      ],
      benefitsFor: {
        teachers: "Maintain open lines of communication",
        students: "Coordinated support from school and home",
        parents: "Always connected to your child's support network"
      }
    },
    {
      src: "/lovable-uploads/0d019f37-1928-4edd-8844-aa8a8f8bb1e6.png",
      alt: "Teacher Performance Overview",
      title: "Teacher Wellbeing & Performance",
      description: "Supporting teachers to prevent burnout and maintain work-life balance",
      features: [
        "Workload management tools",
        "Professional development tracking",
        "Stress level monitoring",
        "Resource allocation optimization"
      ],
      benefitsFor: {
        teachers: "Maintain work-life balance and prevent burnout",
        students: "Learn from energized and focused teachers",
        parents: "Confidence in teacher wellbeing and capacity"
      }
    },
    {
      src: "/lovable-uploads/bd7bb8d1-3002-4822-9748-67345fa6e563.png",
      alt: "Analytics Dashboard",
      title: "Advanced Wellbeing Analytics",
      description: "Data-driven insights for proactive student support and intervention",
      features: [
        "Predictive analytics for early intervention",
        "Customizable wellbeing metrics",
        "Trend analysis and reporting",
        "Evidence-based intervention suggestions"
      ],
      benefitsFor: {
        teachers: "Make informed decisions with data-backed insights",
        students: "Receive personalized support based on your needs",
        parents: "Understanding your child's progress through data"
      }
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Intuitive Interface for Every User
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides a seamless experience for school administrators, teachers, and parents
            to monitor and support student well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{screenshot.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {screenshot.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-custom-purple rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800">Benefits For:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-3 bg-custom-pink/10 rounded-lg">
                        <h5 className="font-medium text-custom-pink mb-1">Teachers</h5>
                        <p className="text-sm text-gray-600">{screenshot.benefitsFor.teachers}</p>
                      </div>
                      <div className="p-3 bg-custom-purple/10 rounded-lg">
                        <h5 className="font-medium text-custom-purple mb-1">Students</h5>
                        <p className="text-sm text-gray-600">{screenshot.benefitsFor.students}</p>
                      </div>
                      <div className="p-3 bg-custom-mint/10 rounded-lg">
                        <h5 className="font-medium text-custom-blue mb-1">Parents</h5>
                        <p className="text-sm text-gray-600">{screenshot.benefitsFor.parents}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-auto object-cover rounded-b-lg"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};