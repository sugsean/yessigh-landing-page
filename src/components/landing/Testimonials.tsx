import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "YesSigh's approach to student wellbeing monitoring will revolutionize how we support our school community. The potential impact on early intervention is incredible.",
    author: "Sarah Johnson",
    role: "School Principal",
    image: "/lovable-uploads/1d7bcc89-81be-4631-9f34-ac229017ab94.png",
    color: "custom-pink"
  },
  {
    quote: "Having previewed the platform, I can see how real-time support and comprehensive resources will transform my classroom management approach.",
    author: "Michael Chen",
    role: "High School Teacher",
    image: "/lovable-uploads/2b78c27e-20b3-4566-942c-e650b98ae466.png",
    color: "custom-mint"
  },
  {
    quote: "The innovative approach to wellbeing monitoring and support will make a significant difference in how we identify and assist students who need help.",
    author: "Emma Thompson",
    role: "School Counselor",
    image: "/lovable-uploads/379c1137-b020-4530-923b-2ae85c191995.png",
    color: "custom-purple"
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-custom-blue/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-custom-pink via-custom-purple to-custom-blue bg-clip-text text-transparent">
            Voices of Tomorrow's Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Early feedback from educators shaping the future of student wellbeing
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <Card className={`p-6 h-full flex flex-col bg-gradient-to-br from-${testimonial.color}/5 to-${testimonial.color}/10 hover:shadow-lg transition-all duration-300`}>
                <div className="mb-4 relative h-48">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${testimonial.color}/50 to-transparent rounded-lg`} />
                </div>
                <blockquote className="flex-grow">
                  <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
                </blockquote>
                <footer className="mt-4">
                  <p className="font-semibold bg-gradient-to-r from-custom-pink to-custom-purple bg-clip-text text-transparent">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </footer>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};