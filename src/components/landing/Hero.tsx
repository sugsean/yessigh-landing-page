import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-custom-purple/30 to-white">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative w-full h-full max-w-6xl">
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-4 p-8 opacity-80">
            {[
              "lovable-uploads/58c88ab8-818d-495e-8b8b-d58afd347939.png",
              "lovable-uploads/2b78c27e-20b3-4566-942c-e650b98ae466.png",
              "lovable-uploads/379c1137-b020-4530-923b-2ae85c191995.png"
            ].map((src, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt="YesSigh platform interface"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-8">
          <img 
            src="lovable-uploads/efeac921-24d5-43de-9e5a-29ee60b7cba7.png" 
            alt="YesSigh Logo" 
            className="w-24 h-24"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-custom-pink/20 text-custom-pink">
            Transform Your School's Wellbeing Approach
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-custom-pink via-custom-purple to-custom-blue bg-clip-text text-transparent">
            Empower Your Educational Community
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Real-time wellbeing monitoring, personalized support, and data-driven insights for schools that care about their community's mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-custom-pink hover:bg-custom-pink/90 text-white px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-custom-purple text-custom-purple hover:bg-custom-purple/10 px-8 py-6 rounded-full transition-all duration-300 w-full sm:w-auto"
            >
              View Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};