import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";

const problems = [
  {
    problem: "Are you missing the warning signs?",
    solution: "Real-time monitoring and early intervention system",
    image: "lovable-uploads/556f521d-4ddb-4f38-87ab-ddc9ec55adfd.png",
    description: "Our platform helps identify potential issues before they escalate, ensuring timely intervention and support."
  },
  {
    problem: "Struggling with teacher burnout?",
    solution: "Comprehensive wellbeing support and resources",
    image: "lovable-uploads/30116998-8eae-4786-a160-60dafb19bcee.png",
    description: "Provide teachers with the tools and support they need to maintain their wellbeing and effectiveness."
  },
  {
    problem: "Limited visibility into student wellbeing?",
    solution: "Data-driven insights and actionable analytics",
    image: "lovable-uploads/a6dd2750-e8f9-479c-9eff-b8f6566f6031.png",
    description: "Get clear insights into student wellbeing trends and make informed decisions with our comprehensive analytics."
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
            className="w-24 h-24"
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative h-64 md:h-72">
                  <img
                    src={item.image}
                    alt={item.problem}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {item.problem}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-custom-blue flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">{item.solution}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full mt-4 bg-custom-pink text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};