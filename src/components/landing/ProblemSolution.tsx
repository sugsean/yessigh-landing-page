import { motion } from "framer-motion";
import { AlertTriangle, Battery, ChartBar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const problems = [
  {
    problem: "Are you missing the warning signs?",
    solution: "Real-time monitoring and early intervention system",
    image: "lovable-uploads/293bca98-dc27-4b3d-a826-3e4fa57c6d35.png",
    description: "Our platform helps identify potential issues before they escalate, ensuring timely intervention and support.",
    icon: AlertTriangle,
    color: "custom-pink",
    delay: 0.1,
    demoImages: ["lovable-uploads/0fb2804b-1703-4d9c-926b-cfbac24fb3de.png", "lovable-uploads/8039ce5b-3ee7-435d-b14d-ed7a148a29ef.png"]
  },
  {
    problem: "Struggling with teacher burnout?",
    solution: "Comprehensive wellbeing support and resources",
    image: "lovable-uploads/fc5182e0-19b5-4c15-93f7-e6fcc3edd9d3.png",
    description: "Provide teachers with the tools and support they need to maintain their wellbeing and effectiveness.",
    icon: Battery,
    color: "custom-mint",
    delay: 0.2,
    demoImages: ["lovable-uploads/a17a8a06-5bac-43a9-8426-f3c4637c71d4.png", "lovable-uploads/884b9e7d-25b5-4db8-8cba-ce478fe65e35.png"]
  },
  {
    problem: "Limited visibility into student wellbeing?",
    solution: "Data-driven insights and actionable analytics",
    image: "lovable-uploads/d688a811-6968-414f-a763-49781870ffd2.png",
    description: "Get clear insights into student wellbeing trends and make informed decisions with our comprehensive analytics.",
    icon: ChartBar,
    color: "custom-purple",
    delay: 0.3,
    demoImages: ["lovable-uploads/293bca98-dc27-4b3d-a826-3e4fa57c6d35.png"]
  },
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-custom-mint/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-custom-pink via-custom-purple to-custom-blue bg-clip-text text-transparent">
            Transform Challenges into Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            See how YesSigh addresses your most pressing concerns
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problems.map((item) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="group"
            >
              <div className={`bg-${item.color}/5 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-${item.color}/20 h-full`}>
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.problem}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-${item.color}/50`} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {item.problem}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <item.icon className={`w-6 h-6 text-${item.color} flex-shrink-0 mt-1`} />
                    <div>
                      <p className={`font-semibold text-${item.color} mb-2`}>{item.solution}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <Link to={`/features/${item.problem.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                    <Button
                      className={`w-full bg-${item.color} hover:bg-${item.color}/90 text-white group relative overflow-hidden`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Explore Solution
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};