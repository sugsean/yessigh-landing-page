import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Brain, Users, Clock } from "lucide-react";
import { useState } from "react";
import { SignupModal } from "../signup/SignupModal";

export const Hero = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-custom-mint/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-custom-pink/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-custom-purple/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-custom-pink/20 text-custom-pink font-medium text-sm inline-flex items-center">
                <Heart size={16} className="mr-2" />
                Empowering Teachers & Parents
              </span>
              <span className="px-4 py-1.5 rounded-full bg-custom-yellow text-gray-800 font-medium text-sm inline-flex items-center">
                <Clock size={16} className="mr-2" />
                Early Access - 50% Off
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-custom-pink via-custom-purple to-custom-blue bg-clip-text text-transparent">
                Empower Student Wellbeing,
              </span>
              <br />
              <span className="text-gray-800">Through Teacher-Parent Partnership</span>
            </h1>

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
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-custom-yellow to-custom-mint p-4 rounded-lg shadow-lg"
            >
              <h3 className="text-gray-800 font-semibold mb-1">Join Our Pioneer Program</h3>
              <p className="text-sm text-gray-700">
                Early supporters receive a special 50% discount when joining before January 30th, 2025. Be among the first to shape the future of students wellbeing.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-custom-pink hover:bg-custom-pink/90 text-white px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                onClick={() => setIsSignupOpen(true)}
              >
                Join Pioneer Program
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-custom-purple text-custom-purple hover:bg-custom-purple/10 px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg"
                onClick={() => window.open('https://calendly.com/shawnweb2020/yessigh-introduction-and-demo', '_blank')}
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
        </div>
      </div>

      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
      />
    </section>
  );
};