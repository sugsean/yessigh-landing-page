import { motion } from "framer-motion";
import { AlertTriangle, Battery, ChartBar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const problems = [
  {
    problem: "Are you missing the warning signs?",
    solution: "Real-time monitoring and early intervention system",
    image: "lovable-uploads/556f521d-4ddb-4f38-87ab-ddc9ec55adfd.png",
    description: "Our platform helps identify potential issues before they escalate, ensuring timely intervention and support.",
    icon: AlertTriangle,
    color: "custom-pink",
    delay: 0.1,
    demoImages: ["lovable-uploads/e581e79a-7187-4d6a-bf6c-75c337c5a74d.png", "lovable-uploads/08ba3069-c386-470c-8f02-3ff8ea52910b.png"]
  },
  {
    problem: "Struggling with teacher burnout?",
    solution: "Comprehensive wellbeing support and resources",
    image: "lovable-uploads/30116998-8eae-4786-a160-60dafb19bcee.png",
    description: "Provide teachers with the tools and support they need to maintain their wellbeing and effectiveness.",
    icon: Battery,
    color: "custom-mint",
    delay: 0.2,
    demoImages: ["lovable-uploads/f3fd211b-2945-4957-a2eb-acfecb4440f7.png", "lovable-uploads/9f030b06-923f-474e-b61e-a56e698da108.png"]
  },
  {
    problem: "Limited visibility into student wellbeing?",
    solution: "Data-driven insights and actionable analytics",
    image: "lovable-uploads/a6dd2750-e8f9-479c-9eff-b8f6566f6031.png",
    description: "Get clear insights into student wellbeing trends and make informed decisions with our comprehensive analytics.",
    icon: ChartBar,
    color: "custom-purple",
    delay: 0.3,
    demoImages: ["lovable-uploads/ebac6bfa-f560-47bc-bdf6-c2417d3e959f.png"]
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
            Addressing Critical Challenges
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Transform challenges into opportunities with YesSigh's comprehensive solutions
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
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 h-full">
                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.problem}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
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
                      <p className="font-semibold text-gray-800 mb-2">{item.solution}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <Link to={`/features/${item.problem.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                    <Button
                      className={`w-full bg-${item.color} group relative overflow-hidden`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        See it in action
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <div className={`absolute inset-0 bg-${item.color} transform transition-transform duration-300 group-hover:scale-x-110`} />
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