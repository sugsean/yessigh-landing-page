import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface UserTypeSelectorProps {
  userType: string;
  setUserType: (value: string) => void;
}

export const UserTypeSelector = ({ userType, setUserType }: UserTypeSelectorProps) => {
  return (
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
  );
};