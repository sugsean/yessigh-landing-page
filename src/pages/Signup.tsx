import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

const Signup = () => {
  const [userType, setUserType] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: "",
    position: "",
    childrenCount: "1",
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
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;

      toast({
        title: "Registration Successful!",
        description: "Thank you for joining our pioneer program. We'll be in touch soon!",
      });
      
      // Redirect after successful submission
      navigate("/");
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
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2">Join Our Pioneer Program</h1>
          <p className="text-gray-600 text-center mb-8">
            Get 50% off until January 30th, 2025
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Label>I am a:</Label>
              <RadioGroup
                value={userType}
                onValueChange={setUserType}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { value: "parent", label: "Parent" },
                  { value: "teacher", label: "Teacher" },
                  { value: "headteacher", label: "Head Teacher" },
                ].map((type) => (
                  <div key={type.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={type.value} id={type.value} />
                    <Label htmlFor={type.value}>{type.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <Label htmlFor="school">School Name</Label>
                <Input
                  id="school"
                  value={formData.school}
                  onChange={(e) =>
                    setFormData({ ...formData, school: e.target.value })
                  }
                  placeholder="Enter your school name"
                  required
                />
              </div>

              {userType === "teacher" && (
                <div>
                  <Label htmlFor="position">Teaching Position</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) =>
                      setFormData({ ...formData, position: e.target.value })
                    }
                    placeholder="e.g., Mathematics Teacher, Year 6 Teacher"
                    required
                  />
                </div>
              )}

              {userType === "parent" && (
                <div>
                  <Label htmlFor="childrenCount">Number of Children to Monitor</Label>
                  <Input
                    id="childrenCount"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.childrenCount}
                    onChange={(e) =>
                      setFormData({ ...formData, childrenCount: e.target.value })
                    }
                    placeholder="Enter number of children"
                    required
                  />
                </div>
              )}
            </div>

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