import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const features = {
  'early-warning': {
    title: 'Early Warning System',
    description: 'Identify and respond to student wellbeing concerns before they escalate',
    images: ["lovable-uploads/0fb2804b-1703-4d9c-926b-cfbac24fb3de.png", "lovable-uploads/8039ce5b-3ee7-435d-b14d-ed7a148a29ef.png"],
    benefits: [
      'Real-time student monitoring dashboard',
      'Early intervention alerts',
      'Behavioral pattern recognition',
      'Customizable warning thresholds'
    ],
    detailedDescription: "Our early warning system uses advanced analytics to track various indicators of student wellbeing and academic performance. This helps schools identify students who might need additional support before situations become critical."
  },
  'struggling-with-teacher-burnout': {
    title: 'Teacher Wellbeing Support',
    description: 'Comprehensive tools and resources to support teacher mental health and effectiveness',
    images: ["lovable-uploads/a17a8a06-5bac-43a9-8426-f3c4637c71d4.png", "lovable-uploads/884b9e7d-25b5-4db8-8cba-ce478fe65e35.png"],
    benefits: [
      'Stress level monitoring',
      'Professional development tracking',
      'Workload management tools',
      'Peer support network'
    ]
  },
  'limited-visibility-into-student-wellbeing': {
    title: 'Student Wellbeing Analytics',
    description: 'Data-driven insights for better decision making and student support',
    images: ["lovable-uploads/293bca98-dc27-4b3d-a826-3e4fa57c6d35.png"],
    benefits: [
      'Comprehensive analytics dashboard',
      'Trend analysis and reporting',
      'Custom metric tracking',
      'Actionable insights generation'
    ]
  }
};

const Features = () => {
  const { id } = useParams();
  const feature = features[id as keyof typeof features];

  if (!feature) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Feature not found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-block mb-8">
          <Button variant="ghost" className="group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-6">{feature.title}</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            {feature.description}
          </p>
        </motion.div>

        <div className="grid gap-8 mb-12">
          {feature.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={image}
                alt={`${feature.title} demonstration ${index + 1}`}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
          <div className="grid gap-4">
            {feature.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-50"
              >
                <div className="h-2 w-2 rounded-full bg-custom-purple" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="bg-custom-purple hover:bg-custom-purple/90 text-white px-8 py-6 rounded-full"
            onClick={() => window.open('https://calendly.com/shawnweb2020/yessigh-introduction-and-demo', '_blank')}
          >
            Schedule a Demo
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
