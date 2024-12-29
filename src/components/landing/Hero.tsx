import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Brain, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-custom-mint/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-custom-pink/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-custom-purple/20 rounded-full blur-3xl" />
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-custom-pink/20 text-custom-pink font-medium text-sm inline-flex items-center">
                <Heart size={16} className="mr-2" />
                Supporting Student Wellbeing
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-custom-pink via-custom-purple to-custom-blue bg-clip-text text-transparent">
                Support Every Student,
              </span>
              <br />
              <span className="text-gray-800">Build A Brighter World</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Real-time wellbeing monitoring, personalized support, and data-driven insights for schools that care about their community's mental health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-custom-pink hover:bg-custom-pink/90 text-white px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-custom-purple text-custom-purple hover:bg-custom-purple/10 px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                Book a Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              {[
                { icon: Brain, text: "AI-Powered Insights" },
                { icon: Heart, text: "24/7 Support" },
                { icon: Users, text: "Community Focused" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="text-center"
                >
                  <div className="mx-auto w-12 h-12 bg-custom-mint/20 rounded-full flex items-center justify-center mb-2">
                    <item.icon className="w-6 h-6 text-custom-pink" />
                  </div>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Image grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative grid grid-cols-2 gap-4"
          >
            {[
              "lovable-uploads/58c88ab8-818d-495e-8b8b-d58afd347939.png",
              "lovable-uploads/2b78c27e-20b3-4566-942c-e650b98ae466.png",
              "lovable-uploads/379c1137-b020-4530-923b-2ae85c191995.png",
              "lovable-uploads/efeac921-24d5-43de-9e5a-29ee60b7cba7.png"
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative ${index === 3 ? 'col-span-2' : ''} aspect-video overflow-hidden rounded-2xl cursor-pointer group`}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={src}
                  alt={`YesSigh platform interface showcase ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};