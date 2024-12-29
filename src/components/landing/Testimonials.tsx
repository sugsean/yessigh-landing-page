import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "YesSigh has transformed how we approach student wellbeing. The insights we've gained are invaluable.",
    author: "Sarah Johnson",
    role: "School Principal",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
  },
  {
    quote: "As a teacher, having real-time support and resources has made a tremendous difference in my classroom.",
    author: "Michael Chen",
    role: "High School Teacher",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838",
  },
  {
    quote: "The platform's ease of use and effectiveness in monitoring student wellbeing is remarkable.",
    author: "Emma Thompson",
    role: "School Counselor",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-yessigh-lightBlue/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Educators
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from the educators and administrators who use YesSigh every day
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
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="mb-4 relative h-48">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                </div>
                <blockquote className="flex-grow">
                  <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                </blockquote>
                <footer>
                  <p className="font-semibold">{testimonial.author}</p>
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