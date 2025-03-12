
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OnboardingSuccess = () => {
  const navigate = useNavigate();
  
  // Optionally, check if user came from the onboarding form
  useEffect(() => {
    const hasOnboarded = sessionStorage.getItem('onboardingComplete');
    if (!hasOnboarded) {
      // If they try to access this page directly, redirect them
      navigate('/subscribe');
    }
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-beige-50 py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 rounded-xl shadow-sm">
              <div className="flex justify-center mb-6">
                <CheckCircle size={80} className="text-accent" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h1>
              
              <p className="text-lg text-primary/70 mb-6">
                Your onboarding information has been successfully submitted. Our team will review your details and begin working on your project right away.
              </p>
              
              <p className="text-primary/70 mb-8">
                We'll be in touch within 1-2 business days to discuss the next steps and confirm any additional details we might need.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() => navigate('/dashboard')}
                >
                  Go to Dashboard
                </Button>
                
                <Button
                  className="bg-accent hover:bg-accent/90 text-white"
                  onClick={() => window.location.href = 'mailto:support@hanzo.io'}
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OnboardingSuccess;
