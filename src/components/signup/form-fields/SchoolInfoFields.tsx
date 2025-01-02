import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SchoolInfoFieldsProps {
  formData: {
    school: string;
    position?: string;
    childrenCount?: string;
  };
  userType: string;
  setFormData: (value: any) => void;
}

export const SchoolInfoFields = ({ formData, userType, setFormData }: SchoolInfoFieldsProps) => {
  return (
    <>
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
    </>
  );
};