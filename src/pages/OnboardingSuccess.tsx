
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Footer from '@/components/Footer';
import { app, contact } from '@/data/contact';

const OnboardingSuccess = () => {
  const navigate = useNavigate();
  
  // Optionally, check if user came from the onboarding form
  useEffect(() => {
    const hasOnboarded = sessionStorage.getItem('onboardingComplete');
    if (!hasOnboarded) {
      // If they try to access this page directly, redirect them
      navigate('/onboarding');
    }
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> removed - using global NewHeader */}
      
      <main className="flex-grow bg-beige-50 py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white p-12 rounded-xl shadow-sm">
              <div className="flex justify-center mb-6">
                <CheckCircle size={80} className="text-accent" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank you</h1>
              
              <p className="text-lg text-primary/70 mb-8">
                Your brief is with the team. Book your kickoff and we start from it.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                  <a href={contact.booking}>Book your kickoff</a>
                </Button>
                
                <Button asChild variant="outline">
                  <a href={app.home}>Open Hanzo</a>
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
