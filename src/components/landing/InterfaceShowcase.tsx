import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export const InterfaceShowcase = () => {
  const screenshots = [
    {
      src: "/lovable-uploads/033bc480-c7fd-4f05-8452-a7914dd1f123.png",
      alt: "School Overview Dashboard",
      title: "School Overview",
      description: "Comprehensive dashboard showing key metrics and daily overview"
    },
    {
      src: "/lovable-uploads/897c58f8-ebbd-4edf-aa3e-45804e839d8d.png",
      alt: "Parent Dashboard Interface",
      title: "Parent Dashboard",
      description: "Keep track of your children's progress and well-being"
    },
    {
      src: "/lovable-uploads/70eace88-71a0-456c-84e0-4f3aecf20f03.png",
      alt: "Parent Communication Interface",
      title: "Parent Communication",
      description: "Easy communication tools for parent-teacher interaction"
    },
    {
      src: "/lovable-uploads/0d019f37-1928-4edd-8844-aa8a8f8bb1e6.png",
      alt: "Teacher Performance Overview",
      title: "Teacher Overview",
      description: "Monitor teacher well-being and performance metrics"
    },
    {
      src: "/lovable-uploads/bd7bb8d1-3002-4822-9748-67345fa6e563.png",
      alt: "Analytics Dashboard",
      title: "Wellbeing Analytics",
      description: "Detailed analytics and insights for informed decision making"
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
                  <p className="text-gray-600 mb-4">{screenshot.description}</p>
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