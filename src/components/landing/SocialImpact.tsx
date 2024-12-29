import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const SocialImpact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-yessigh-darkBlue/5 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-16 h-16 text-yessigh-coral mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yessigh-darkBlue">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At YesSigh, we're not just building a platform - we're building a movement that supports human beings. Rooted in real experiences from our Anguilla island community, we take on a vision of proactivity to benefit children globally, promoting the ethical use of technology that seeks only to do good.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 rounded-lg bg-yessigh-teal/10">
                <h3 className="font-semibold text-yessigh-teal mb-2">Our Vision</h3>
                <p className="text-gray-600">Creating safer, more supportive educational environments worldwide</p>
              </div>
              <div className="p-6 rounded-lg bg-yessigh-yellow/10">
                <h3 className="font-semibold text-yessigh-darkBlue mb-2">Our Values</h3>
                <p className="text-gray-600">Ethics, empathy, and excellence in everything we do</p>
              </div>
              <div className="p-6 rounded-lg bg-yessigh-coral/10">
                <h3 className="font-semibold text-yessigh-coral mb-2">Our Impact</h3>
                <p className="text-gray-600">Transforming lives through proactive wellbeing support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};