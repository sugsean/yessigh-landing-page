import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface SignupFormData {
  name: string;
  email: string;
  school: string;
  position: string;
  childrenCount: string;
  country: string;
  schoolType: string;
  gradeLevels: string[];
  staffCount: number;
}

export const useSignupSubmission = (onClose: () => void) => {
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

  const handleSubmit = async (formData: SignupFormData, userType: string) => {
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

  return {
    isSubmitting,
    handleSubmit
  };
};