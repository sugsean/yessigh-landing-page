import { motion } from "framer-motion";
import { Brain, Users, Clock, LineChart, Shield, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Real-Time Wellbeing Monitoring",
    description: "Track and respond to student and teacher wellbeing in real-time with our advanced monitoring system.",
  },
  {
    icon: Users,
    title: "Personalized Support",
    description: "Tailored resources and interventions based on individual needs and circumstances.",
  },
  {
    icon: Clock,
    title: "Instant Response",
    description: "Quick alerts and notifications ensure immediate attention to urgent wellbeing concerns.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Insights",
    description: "Make informed decisions with comprehensive analytics and trending patterns.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Enterprise-grade security ensuring all sensitive information remains protected.",
  },
  {
    icon: MessageCircle,
    title: "Seamless Communication",
    description: "Foster better collaboration between students, teachers, and administrators.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-yessigh-lightBlue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Comprehensive Features for Complete Wellbeing
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to create a supportive and thriving educational environment
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-yessigh-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};