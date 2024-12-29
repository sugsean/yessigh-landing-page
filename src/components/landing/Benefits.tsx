import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = {
  schools: [
    "Reduced incident rates by 30%",
    "Improved academic performance",
    "Enhanced school reputation",
    "Better resource allocation",
  ],
  teachers: [
    "Reduced stress levels",
    "Increased job satisfaction",
    "Better work-life balance",
    "Professional development support",
  ],
  students: [
    "Improved mental wellbeing",
    "Better academic outcomes",
    "Increased engagement",
    "Stronger support network",
  ],
};

export const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-yessigh-lightBlue/10 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefits for Everyone
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how YesSigh creates positive change across your entire educational community
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(benefits).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 capitalize">
                For {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yessigh-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};