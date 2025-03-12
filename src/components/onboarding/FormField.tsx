
import React from 'react';
import { Check, Upload } from 'lucide-react';
import { FormField as FormFieldType } from '@/types/onboarding';

interface FormFieldProps {
  field: FormFieldType;
  value: string | File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ field, value, onChange, onFileChange }) => {
  const { id, label, type, placeholder, required, accept } = field;

  if (type === 'textarea') {
    return (
      <div className="mb-6">
        <label htmlFor={id} className="block text-sm font-medium text-primary/70 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          id={id}
          rows={4}
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent"
          value={value as string || ''}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
  } else if (type === 'file') {
    return (
      <div className="mb-6">
        <label htmlFor={id} className="block text-sm font-medium text-primary/70 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label htmlFor={id} className="relative cursor-pointer rounded-md font-medium text-accent hover:text-accent/80">
                <span>Upload a file</span>
                <input
                  id={id}
                  name={id}
                  type="file"
                  className="sr-only"
                  accept={accept}
                  onChange={onFileChange}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">
              {accept?.split(',').join(', ').replace(/\./g, '')}
            </p>
            {value && (
              <p className="text-sm text-accent flex items-center justify-center mt-2">
                <Check size={16} className="mr-1" />
                {(value as File).name}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mb-6">
        <label htmlFor={id} className="block text-sm font-medium text-primary/70 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          id={id}
          type={type}
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent"
          value={value as string || ''}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
    );
  }
};

export default FormField;
