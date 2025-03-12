
import React from 'react';
import { Button } from '@/components/ui/button';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  prevStep: () => void;
  nextStep: () => void;
  isSubmitting: boolean;
}

const FormNavigation: React.FC<FormNavigationProps> = ({ 
  currentStep, 
  totalSteps, 
  prevStep, 
  nextStep, 
  isSubmitting 
}) => {
  return (
    <div className="flex justify-between mt-8">
      {currentStep > 0 && (
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
        >
          Previous
        </Button>
      )}
      
      {currentStep < totalSteps - 1 ? (
        <Button
          type="button"
          className="ml-auto"
          onClick={nextStep}
        >
          Next
        </Button>
      ) : (
        <Button
          type="submit"
          className="ml-auto bg-accent hover:bg-accent/90 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      )}
    </div>
  );
};

export default FormNavigation;
