import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-yessigh-lightBlue/10 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] bg-cover bg-center opacity-5" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-yessigh-purple/20 text-yessigh-purple">
            Empowering Education Through Wellbeing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yessigh-purple to-yessigh-blue bg-clip-text text-transparent">
            Prioritizing Student and Teacher Wellbeing
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your school's approach to mental health with real-time monitoring, personalized support, and data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-yessigh-blue hover:bg-yessigh-blue/90 text-white px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Request Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-yessigh-purple text-yessigh-purple hover:bg-yessigh-purple/10 px-8 py-6 rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};