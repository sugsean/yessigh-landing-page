import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";

const problems = [
  {
    problem: "Are you missing the warning signs?",
    solution: "Real-time monitoring and early intervention system",
    image: "lovable-uploads/556f521d-4ddb-4f38-87ab-ddc9ec55adfd.png"
  },
  {
    problem: "Struggling with teacher burnout?",
    solution: "Comprehensive wellbeing support and resources",
    image: "lovable-uploads/30116998-8eae-4786-a160-60dafb19bcee.png"
  },
  {
    problem: "Limited visibility into student wellbeing?",
    solution: "Data-driven insights and actionable analytics",
    image: "lovable-uploads/a6dd2750-e8f9-479c-9eff-b8f6566f6031.png"
  },
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-custom-mint/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <img 
            src="lovable-uploads/efeac921-24d5-43de-9e5a-29ee60b7cba7.png" 
            alt="YesSigh Logo" 
            className="w-16 h-16 opacity-50"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Addressing Critical Challenges
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform challenges into opportunities with YesSigh's comprehensive solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <img
                    src={item.image}
                    alt={item.problem}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <AlertTriangle className="w-12 h-12 text-custom-pink mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {item.problem}
                  </h3>
                  <div className="flex items-start gap-2 mt-4">
                    <CheckCircle className="w-5 h-5 text-custom-blue flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{item.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};