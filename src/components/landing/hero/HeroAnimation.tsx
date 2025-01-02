import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const HeroAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative h-full min-h-[400px] flex items-center justify-center"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-custom-purple/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-custom-pink/30 rounded-full blur-3xl" />
        <div className="absolute center-0 w-64 h-64 bg-custom-blue/30 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 text-center space-y-4">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ 
            scale: [0.8, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="w-24 h-24 bg-custom-mint/20 rounded-full flex items-center justify-center mx-auto"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            <Heart className="w-12 h-12 text-custom-pink" />
          </motion.div>
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-gray-800"
        >
          Empowering Education
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-gray-600 max-w-md mx-auto"
        >
          Join us in creating a supportive environment where every student can thrive
        </motion.p>
      </div>
    </motion.div>
  );
};