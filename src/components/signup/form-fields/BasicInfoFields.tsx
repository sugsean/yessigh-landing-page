import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BasicInfoFieldsProps {
  formData: {
    name: string;
    email: string;
  };
  setFormData: (value: any) => void;
}

export const BasicInfoFields = ({ formData, setFormData }: BasicInfoFieldsProps) => {
  return (
    <>
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
    </>
  );
};