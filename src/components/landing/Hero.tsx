import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-custom-purple/30 to-white">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative w-full h-full max-w-6xl">
          <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 opacity-80">
            {[
              "lovable-uploads/1d7bcc89-81be-4631-9f34-ac229017ab94.png",
              "lovable-uploads/12f7935e-93da-4987-93f5-6cf5967c28b3.png",
              "lovable-uploads/f397f1c2-83ef-4111-8dbd-96d9efa8791c.png"
            ].map((src, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt="Student wellbeing"
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
            Empowering Education Through Wellbeing
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-custom-pink via-custom-purple to-custom-blue bg-clip-text text-transparent">
            Build Resilient Futures: Strengthen School Communities
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your school's approach to mental health with real-time monitoring, personalized support, and data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-custom-pink hover:bg-custom-pink/90 text-white px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Request Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-custom-purple text-custom-purple hover:bg-custom-purple/10 px-8 py-6 rounded-full transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};