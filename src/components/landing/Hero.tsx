import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative w-full h-full max-w-7xl">
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
            {[
              "lovable-uploads/58c88ab8-818d-495e-8b8b-d58afd347939.png",
              "lovable-uploads/2b78c27e-20b3-4566-942c-e650b98ae466.png",
              "lovable-uploads/379c1137-b020-4530-923b-2ae85c191995.png"
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative aspect-video overflow-hidden rounded-2xl cursor-pointer group"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={src}
                  alt={`YesSigh platform interface showcase ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl"
        >
          <motion.img 
            src="lovable-uploads/efeac921-24d5-43de-9e5a-29ee60b7cba7.png" 
            alt="YesSigh Logo - Empowering Educational Wellbeing" 
            className="w-32 h-32 mx-auto mb-8"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <span className="inline-block px-6 py-2 mb-6 text-sm font-medium rounded-full bg-gradient-to-r from-custom-pink to-custom-purple text-white">
            Transform Your School's Wellbeing Approach
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-custom-pink via-custom-purple to-custom-blue bg-clip-text text-transparent">
            Support Every Student, Build A Brighter World
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Real-time wellbeing monitoring, personalized support, and data-driven insights for schools that care about their community's mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-custom-pink hover:bg-custom-pink/90 text-white px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-custom-purple text-custom-purple hover:bg-custom-purple/10 px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
            >
              Book a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};