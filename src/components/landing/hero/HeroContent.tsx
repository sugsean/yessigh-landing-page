import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroContentProps {
  scrollToPricing: () => void;
  handleDemoClick: () => void;
}

export const HeroContent = ({ scrollToPricing, handleDemoClick }: HeroContentProps) => {
  return (
    <div className="space-y-4 text-gray-600">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-4 bg-white/50 rounded-lg backdrop-blur-sm"
      >
        <h3 className="font-semibold text-gray-800 mb-2">For Teachers:</h3>
        <p>Facing <strong>overwhelming workload</strong> and <strong>burnout</strong>? Our platform helps you focus on what matters most - teaching. With <strong>real-time insights</strong> and <strong>automated monitoring</strong>, spend less time on admin and more time making a difference.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-4 bg-white/50 rounded-lg backdrop-blur-sm"
      >
        <h3 className="font-semibold text-gray-800 mb-2">Supporting Student Wellbeing Together:</h3>
        <p>A collaborative platform where <strong>teachers and parents work together</strong> to monitor and support student wellbeing. Through our comprehensive tools, we enable <strong>early intervention</strong> and create a <strong>coordinated support system</strong> that helps identify and address challenges before they escalate, ensuring every student has the support network they need to thrive.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-4 bg-white/50 rounded-lg backdrop-blur-sm"
      >
        <h3 className="font-semibold text-gray-800 mb-2">For Parents:</h3>
        <p>Stay actively involved in your child's wellbeing journey with <strong>real-time updates</strong> and <strong>direct communication</strong> with teachers. Our platform ensures you're always informed and empowered to provide the right support at the right time.</p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          size="lg"
          className="bg-custom-pink hover:bg-custom-pink/90 text-white px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
          onClick={scrollToPricing}
        >
          Join Pioneer Program
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-2 border-custom-purple text-custom-purple hover:bg-custom-purple/10 px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg"
          onClick={handleDemoClick}
        >
          Book a Demo
        </Button>
      </div>
    </div>
  );
};