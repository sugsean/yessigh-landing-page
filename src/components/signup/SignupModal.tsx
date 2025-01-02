import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SignupFormFields } from "./SignupFormFields";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  userType: 'parent' | 'teacher' | 'school';
}

export const SignupModal = ({ isOpen, onClose, userType }: SignupModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    position: "",
    childrenCount: "1",
    country: "",
    schoolType: "",
    gradeLevels: [],
    staffCount: 0
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const sendWelcomeEmail = async (name: string, email: string, userType: string) => {
    try {
      const { error } = await supabase.functions.invoke('send-welcome-email', {
        body: { name, email, userType }
      });

      if (error) {
        console.error('Error sending welcome email:', error);
      }
    } catch (error) {
      console.error('Error invoking welcome email function:', error);
    }
  };

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
            school_type: userType === 'school' ? formData.schoolType : null,
            grade_levels: userType === 'school' ? formData.gradeLevels : null,
            staff_count: userType === 'school' ? formData.staffCount : null
          }
        ]);

      if (error) throw error;

      // Send welcome email
      await sendWelcomeEmail(formData.name, formData.email, userType);

      toast({
        title: "Registration Successful!",
        description: "Thank you for joining our pioneer program. Check your email for next steps!",
      });
      
      onClose();
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

  const getTitle = () => {
    switch (userType) {
      case 'school':
        return 'School Registration';
      case 'teacher':
        return 'Teacher Registration';
      case 'parent':
        return 'Parent Registration';
      default:
        return 'Join Our Pioneer Program';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogTitle className="text-center text-2xl font-bold">{getTitle()}</DialogTitle>
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/d21ed953-3c6f-49a6-b6cf-6f61a335c827.png" 
            alt="YesSigh Logo" 
            className="mx-auto h-20 mb-6"
          />
          <p className="text-gray-600">
            Get 50% off until January 30th, 2025
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <SignupFormFields
            userType={userType}
            formData={formData}
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
      </DialogContent>
    </Dialog>
  );
};