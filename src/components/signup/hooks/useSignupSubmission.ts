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
      console.log('Sending welcome email to:', email);
      const { data, error } = await supabase.functions.invoke('send-welcome-email', {
        body: { name, email, userType }
      });

      if (error) {
        console.error('Error sending welcome email:', error);
        throw error;
      }

      console.log('Welcome email sent successfully:', data);
      return data;
    } catch (error) {
      console.error('Error invoking welcome email function:', error);
      // Don't throw the error here, just log it
      return null;
    }
  };

  const handleSubmit = async (formData: SignupFormData, userType: string) => {
    setIsSubmitting(true);

    try {
      // First, save to database
      const { error: dbError } = await supabase
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

      if (dbError) {
        console.error('Database error:', dbError);
        throw dbError;
      }

      // Then, try to send welcome email (but don't block on it)
      await sendWelcomeEmail(formData.name, formData.email, userType).catch(console.error);

      toast({
        title: "Registration Successful!",
        description: "Thank you for joining our pioneer program. Check your email for next steps!",
      });
      
      onClose();
      setTimeout(() => {
        navigate("/features/welcome");
      }, 2000);
    } catch (error) {
      console.error('Signup error:', error);
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