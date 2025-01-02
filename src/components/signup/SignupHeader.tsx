import React from 'react';

interface SignupHeaderProps {
  userType: string;
}

export const SignupHeader = ({ userType }: SignupHeaderProps) => {
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
    <>
      <h2 className="text-center text-2xl font-bold">{getTitle()}</h2>
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
    </>
  );
};