
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Upload, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FormSection {
  title: string;
  fields: FormField[];
}

interface FormField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'file';
  placeholder?: string;
  required?: boolean;
  accept?: string;
}

const OnboardingForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string | File | null>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formSections: FormSection[] = [
    {
      title: "Business Information",
      fields: [
        { id: "companyName", label: "What's your company's official name?", type: "text", required: true },
        { id: "businessDescription", label: "Provide a short description of your business and core offering.", type: "textarea", required: true },
        { id: "targetAudience", label: "Describe your target audience in detail (industry, demographics, preferences).", type: "textarea", required: true },
        { id: "websiteGoal", label: "What is your primary goal for this website? (e.g., sales, leads, information, credibility).", type: "textarea", required: true },
      ]
    },
    {
      title: "Design Preferences",
      fields: [
        { id: "websitesAdmired", label: "List 3-5 websites you admire and briefly explain why.", type: "textarea", required: true },
        { id: "requiredPages", label: "What main pages or sections must your website include?", type: "textarea", required: true },
        { id: "brandGuidelines", label: "Provide your brand guidelines: colors, fonts, logo files.", type: "textarea", required: true },
        { id: "toneStyle", label: "What is the tone and style you'd like the website copy to reflect? (e.g., professional, casual, persuasive).", type: "textarea", required: true },
        { id: "visualStyle", label: "List any specific imagery or visual style you want included (minimalist, bold, luxury, tech-focused).", type: "textarea", required: true },
      ]
    },
    {
      title: "Content & Technical Requirements",
      fields: [
        { id: "existingContent", label: "Do you have existing content ready? If not, outline key messages you'd like AI to generate clearly.", type: "textarea", required: true },
        { id: "seoTerms", label: "Share any key phrases or SEO terms your website should emphasize.", type: "textarea", required: false },
        { id: "socialMediaLinks", label: "Provide social media and relevant external links to include.", type: "textarea", required: false },
        { id: "productsServices", label: "Outline your products/services clearly with key benefits.", type: "textarea", required: true },
        { id: "technicalIntegrations", label: "Any technical integrations required? (booking, payments, forms, CRM).", type: "textarea", required: false },
      ]
    },
    {
      title: "Project Timeline & Additional Info",
      fields: [
        { id: "timeline", label: "Preferred timeline or deadlines?", type: "text", required: false },
        { id: "competitors", label: "List competitors' websites or businesses you wish to differentiate from.", type: "textarea", required: false },
        { id: "additionalRequests", label: "Any additional requests or inspiration you want incorporated into your project?", type: "textarea", required: false },
        { id: "designBrief", label: "Upload Design Brief, branding Document, pitch decks, any content with a visual representation of your brand", type: "file", accept: ".jpg,.png,.jpeg,.svg,.pdf", required: false },
        { id: "logo", label: "Upload your logo", type: "file", accept: ".jpg,.png,.svg", required: false },
      ]
    }
  ];
  
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
  
  const renderFields = (fields: FormField[]) => {
    return fields.map(field => (
      <div key={field.id} className="mb-6">
        <label htmlFor={field.id} className="block text-sm font-medium text-primary/70 mb-1">
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </label>
        
        {field.type === 'textarea' ? (
          <textarea
            id={field.id}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent"
            value={formData[field.id] as string || ''}
            onChange={handleInputChange}
            placeholder={field.placeholder}
            required={field.required}
          />
        ) : field.type === 'file' ? (
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor={field.id} className="relative cursor-pointer rounded-md font-medium text-accent hover:text-accent/80">
                  <span>Upload a file</span>
                  <input
                    id={field.id}
                    name={field.id}
                    type="file"
                    className="sr-only"
                    accept={field.accept}
                    onChange={handleFileChange}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">
                {field.accept?.split(',').join(', ').replace(/\./g, '')}
              </p>
              {formData[field.id] && (
                <p className="text-sm text-accent flex items-center justify-center mt-2">
                  <Check size={16} className="mr-1" />
                  {(formData[field.id] as File).name}
                </p>
              )}
            </div>
          </div>
        ) : (
          <input
            id={field.id}
            type={field.type}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-accent focus:border-accent"
            value={formData[field.id] as string || ''}
            onChange={handleInputChange}
            placeholder={field.placeholder}
            required={field.required}
          />
        )}
      </div>
    ));
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
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">{formSections[currentStep].title}</h2>
                  <span className="text-sm text-primary/60">Step {currentStep + 1} of {formSections.length}</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-accent h-2 rounded-full transition-all duration-300 ease-in-out" 
                    style={{ width: `${((currentStep + 1) / formSections.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                {renderFields(formSections[currentStep].fields)}
                
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
                  
                  {currentStep < formSections.length - 1 ? (
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
