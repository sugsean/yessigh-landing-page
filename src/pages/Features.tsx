import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const Features = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id === "welcome") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-custom-mint/20 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container max-w-2xl mx-auto px-4"
        >
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/d21ed953-3c6f-49a6-b6cf-6f61a335c827.png" 
              alt="YesSigh Logo" 
              className="mx-auto h-20 mb-6"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="mb-6"
            >
              <CheckCircle2 className="w-16 h-16 mx-auto text-green-500" />
            </motion.div>

            <h1 className="text-3xl font-bold mb-4">Welcome to YesSigh!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for joining our pioneer program. We're excited to have you on board!
              Our team will review your application and get back to you shortly with next steps.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-custom-mint/20 rounded-lg">
                <h2 className="font-semibold mb-2">What's Next?</h2>
                <ul className="text-left text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>We'll review your application within 24-48 hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>You'll receive an email with access instructions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>Our team will schedule an onboarding call</span>
                  </li>
                </ul>
              </div>

              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="w-full gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Return to Homepage
              </Button>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mt-8">
            Questions? Contact us at support@yessigh.com
          </p>
        </motion.div>
      </div>
    );
  }

  return null;
};

export default Features;