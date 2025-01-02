import { UserTypeSelector } from "./form-fields/UserTypeSelector";
import { BasicInfoFields } from "./form-fields/BasicInfoFields";
import { CountrySelector } from "./form-fields/CountrySelector";
import { SchoolInfoFields } from "./form-fields/SchoolInfoFields";

interface SignupFormFieldsProps {
  userType: string;
  formData: {
    name: string;
    email: string;
    school: string;
    position: string;
    childrenCount: string;
    country: string;
    schoolType: string;
    gradeLevels: string[];
    staffCount: number;
  };
  setFormData: (value: any) => void;
}

export const SignupFormFields = ({
  userType,
  formData,
  setFormData,
}: SignupFormFieldsProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <BasicInfoFields formData={formData} setFormData={setFormData} />
        
        <CountrySelector 
          country={formData.country}
          onChange={(value) => setFormData({ ...formData, country: value })}
        />

        <SchoolInfoFields 
          formData={formData}
          userType={userType}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};