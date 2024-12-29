import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const features = {
  "are-you-missing-the-warning-signs": {
    title: "Early Warning System",
    description: "Our real-time monitoring system helps identify potential issues before they escalate, ensuring timely intervention and support.",
    images: ["lovable-uploads/e581e79a-7187-4d6a-bf6c-75c337c5a74d.png", "lovable-uploads/08ba3069-c386-470c-8f02-3ff8ea52910b.png"],
    color: "custom-pink"
  },
  "struggling-with-teacher-burnout": {
    title: "Teacher Wellbeing Support",
    description: "Comprehensive tools and resources to help teachers maintain their wellbeing and effectiveness in the classroom.",
    images: ["lovable-uploads/f3fd211b-2945-4957-a2eb-acfecb4440f7.png", "lovable-uploads/9f030b06-923f-474e-b61e-a56e698da108.png"],
    color: "custom-mint"
  },
  "limited-visibility-into-student-wellbeing": {
    title: "Student Wellbeing Analytics",
    description: "Data-driven insights and analytics to help you make informed decisions about student wellbeing.",
    images: ["lovable-uploads/ebac6bfa-f560-47bc-bdf6-c2417d3e959f.png"],
    color: "custom-purple"
  }
};

const Features = () => {
  const { id } = useParams();
  const feature = features[id as keyof typeof features];

  if (!feature) {
    return <div>Feature not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Button>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-${feature.color} to-custom-blue bg-clip-text text-transparent`}>
            {feature.title}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {feature.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {feature.images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={image}
                alt={`${feature.title} screenshot ${index + 1}`}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;