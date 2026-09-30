
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';

import Footer from '@/components/Footer';
import FormSection from '@/components/onboarding/FormSection';
import ProgressBar from '@/components/onboarding/ProgressBar';
import FormNavigation from '@/components/onboarding/FormNavigation';
import { formSections } from '@/data/onboardingData';
import { FormDataType } from '@/types/onboarding';
import { contact } from '@/data/contact';
import { EMAIL, fileLead, mailto } from '@/lib/leads';

/** The brief as one text: each answered question, then its answer. */
function brief(data: FormDataType): string {
  return formSections
    .flatMap((s) => s.fields)
    .filter((f) => f.id !== 'email' && f.id !== 'name' && typeof data[f.id] === 'string' && (data[f.id] as string).trim())
    .map((f) => `${f.label}\n${(data[f.id] as string).trim()}`)
    .join('\n\n');
}

const OnboardingForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormDataType>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [missed, setMissed] = useState(false);

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
      const bad = field.id === 'email' ? !EMAIL.test(String(formData.email ?? '').trim()) : !formData[field.id];
      if (bad) {
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

    const lead = await fileLead({
      email: String(formData.email ?? '').trim(),
      name: String(formData.name ?? ''),
      company: String(formData.companyName ?? ''),
      need: brief(formData),
      source: 'hanzo.agency/onboarding',
    });
    setIsSubmitting(false);
    if (!lead) {
      setMissed(true);
      return;
    }
    toast({ title: 'Brief received', description: 'We start from it at your kickoff.' });
    sessionStorage.setItem('onboardingComplete', 'true');
    navigate('/onboarding-success');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> removed - using global NewHeader */}

      <main className="flex-grow bg-beige-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black">Share your brief</h1>
              <p className="text-lg text-black/70">
                The more you tell us, the faster your team starts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <ProgressBar
                currentStep={currentStep}
                totalSteps={formSections.length}
                title={formSections[currentStep].title}
              />

              {missed ? (
                <div role="alert" className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4 text-black">
                  <p className="font-medium mb-3">Send your brief by email, or bring it to your kickoff call.</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={mailto(`Brief: ${String(formData.companyName ?? '')}`, `${String(formData.name ?? '')} <${String(formData.email ?? '')}>\n\n${brief(formData)}`)} className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white">
                      Email the brief
                    </a>
                    <a href={contact.booking} className="rounded-full border border-black px-5 py-2 text-sm font-medium">
                      Book the kickoff
                    </a>
                  </div>
                </div>
              ) : null}
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
