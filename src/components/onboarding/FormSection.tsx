
import React from 'react';
import FormField from './FormField';
import { FormSection as FormSectionType, FormDataType } from '@/types/onboarding';

interface FormSectionProps {
  section: FormSectionType;
  formData: FormDataType;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormSection: React.FC<FormSectionProps> = ({ 
  section, 
  formData, 
  handleInputChange, 
  handleFileChange 
}) => {
  return (
    <>
      {section.fields.map(field => (
        <FormField
          key={field.id}
          field={field}
          value={formData[field.id]}
          onChange={handleInputChange}
          onFileChange={handleFileChange}
        />
      ))}
    </>
  );
};

export default FormSection;
