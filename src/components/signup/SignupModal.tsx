import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SignupFormFields } from "./SignupFormFields";
import { SignupHeader } from "./SignupHeader";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSignupSubmission } from "./hooks/useSignupSubmission";

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

  const { isSubmitting, handleSubmit } = useSignupSubmission(onClose);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(formData, userType);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <SignupHeader userType={userType} />

        <form onSubmit={onSubmit} className="space-y-6">
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