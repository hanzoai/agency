
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FormSection from '@/components/onboarding/FormSection';
import ProgressBar from '@/components/onboarding/ProgressBar';
import FormNavigation from '@/components/onboarding/FormNavigation';
import { formSections } from '@/data/onboardingData';
import { FormDataType } from '@/types/onboarding';

const OnboardingForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormDataType>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, [e.target.id]: file }));
    }
  };
  
  const nextStep = () => {
    // Check if required fields in current step are filled
    const currentFields = formSections[currentStep].fields;
    const requiredFields = currentFields.filter(field => field.required);
    
    for (const field of requiredFields) {
      if (!formData[field.id]) {
        toast({
          title: "Missing information",
          description: `Please fill in the field: ${field.label}`,
          variant: "destructive"
        });
        return;
      }
    }
    
    if (currentStep < formSections.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the data to your backend
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Onboarding complete!",
        description: "Thank you for providing your information. We'll be in touch soon!",
      });
      navigate('/onboarding-success');
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-beige-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Help Us Create Your Perfect Website</h1>
              <p className="text-lg text-primary/70">
                Please fill out this onboarding form as thoroughly as possible so we can deliver the best results for your project.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <ProgressBar 
                currentStep={currentStep} 
                totalSteps={formSections.length}
                title={formSections[currentStep].title}
              />
              
              <form onSubmit={handleSubmit}>
                <FormSection 
                  section={formSections[currentStep]} 
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleFileChange={handleFileChange}
                />
                
                <FormNavigation 
                  currentStep={currentStep}
                  totalSteps={formSections.length}
                  prevStep={prevStep}
                  nextStep={nextStep}
                  isSubmitting={isSubmitting}
                />
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OnboardingForm;
