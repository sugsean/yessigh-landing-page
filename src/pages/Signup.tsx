import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { SignupFormFields } from "@/components/signup/SignupFormFields";

const Signup = () => {
  const [userType, setUserType] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    position: "",
    childrenCount: "1",
    country: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('signups')
        .insert([
          {
            user_type: userType,
            name: formData.name,
            email: formData.email,
            school: formData.school,
            position: userType === 'teacher' ? formData.position : null,
            children_count: userType === 'parent' ? parseInt(formData.childrenCount) : null,
            country: formData.country,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;

      toast({
        title: "Registration Successful!",
        description: "Thank you for joining our pioneer program. We'll be in touch soon!",
      });
      
      setTimeout(() => {
        navigate("/features/welcome");
      }, 2000);
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2">Join Our Pioneer Program</h1>
          <p className="text-gray-600 text-center mb-8">
            Get 50% off until January 30th, 2025
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <SignupFormFields
              userType={userType}
              formData={formData}
              setUserType={setUserType}
              setFormData={setFormData}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-custom-pink hover:bg-custom-pink/90 text-white py-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {isSubmitting ? "Submitting..." : "Join Pioneer Program"}
            </Button>

            <p className="text-sm text-gray-500 text-center mt-4">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;