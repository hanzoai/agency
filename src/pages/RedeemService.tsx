import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { 
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Calendar,
  Clock
} from 'lucide-react';
import { notifyAdmins } from '@/utils/emailNotifications';

const RedeemService = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [isRedeeming, setIsRedeeming] = useState(false);
  const [isRedeemed, setIsRedeemed] = useState(false);
  const [userCredits, setUserCredits] = useState(0);

  const services = {
    'revision': {
      name: 'Revision',
      credits: 50,
      description: 'Get revisions on existing work',
      details: [
        'Professional review of your existing design',
        'Up to 3 rounds of revisions',
        'Feedback implementation within 48 hours',
        'Direct communication with designer'
      ]
    },
    'new-page': {
      name: 'New Page',
      credits: 50,
      description: 'Add a new page to your website',
      details: [
        'Custom page design matching your site',
        'Mobile-responsive layout',
        'SEO optimization included',
        'Content integration support'
      ]
    },
    'custom-artwork': {
      name: 'Custom Artwork',
      credits: 150,
      description: 'Perfect for social media content',
      details: [
        'Original artwork creation',
        'Multiple format exports',
        'Social media optimization',
        'Commercial usage rights'
      ]
    },
    'logo-design': {
      name: 'Logo Design',
      credits: 200,
      description: 'Professional logo design',
      details: [
        '3 initial concepts',
        'Unlimited revisions on chosen concept',
        'Multiple file formats (SVG, PNG, etc.)',
        'Brand guidelines document'
      ]
    },
    'branding-kit': {
      name: 'Branding Kit',
      credits: 500,
      description: 'Complete brand identity package',
      details: [
        'Logo design with variations',
        'Color palette and typography',
        'Business card and letterhead',
        'Brand guidelines document',
        'Social media templates'
      ]
    },
    'instant-site': {
      name: '3-Page Instant Site',
      credits: 500,
      description: '24-hour turnaround website',
      details: [
        'Custom 3-page website design',
        'Mobile-responsive development',
        '24-hour delivery guarantee',
        'Basic SEO setup included',
        'Training on how to update content'
      ]
    }
  };

  const service = services[serviceId as keyof typeof services];

  useEffect(() => {
    // Check if user is logged in
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/login');
      return;
    }

    // Load user credits
    const credits = parseInt(localStorage.getItem('userCredits') || '0');
    setUserCredits(credits);

    // Check if service exists
    if (!service) {
      navigate('/dashboard');
    }
  }, [navigate, service]);

  const handleRedeem = () => {
    if (!service || userCredits < service.credits) return;

    setIsRedeeming(true);

    // Simulate redemption
    setTimeout(() => {
      // Deduct credits
      const newCredits = userCredits - service.credits;
      localStorage.setItem('userCredits', newCredits.toString());

      // Add to history
      const history = JSON.parse(localStorage.getItem('creditHistory') || '[]');
      history.push({
        id: Date.now().toString(),
        type: 'redemption',
        credits: -service.credits,
        service: service.name,
        description: `Redeemed ${service.name}`,
        date: new Date().toISOString(),
        status: 'pending'
      });
      localStorage.setItem('creditHistory', JSON.stringify(history));

      // Send email notification to admins
      const userEmail = localStorage.getItem('userEmail') || '';
      notifyAdmins.serviceRedeemed(userEmail, service.name, service.credits);

      setIsRedeeming(false);
      setIsRedeemed(true);
    }, 1500);
  };

  const handleStartAssignment = () => {
    // Send notification that service is being started
    const userEmail = localStorage.getItem('userEmail') || '';
    if (service) {
      notifyAdmins.serviceStarted(userEmail, service.name);
    }
    
    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ23sAA3nns4Ntw1GiKXDOwDgH6uPDXV8aqFr8mKqF8m-r8uduBrTw5ZQI7afVAAJFPD_UBgYqu_', '_blank');
  };

  if (!service) return null;

  const canAfford = userCredits >= service.credits;

  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white min-h-screen">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isRedeemed ? 'Service Redeemed!' : `Redeem ${service.name}`}
            </h1>
          </div>

          {isRedeemed ? (
            // Redeemed State
            <div className="space-y-8">
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 text-center">
                <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-400" />
                </div>
                
                <h2 className="text-2xl font-bold mb-4">
                  {service.name} Successfully Redeemed
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Your service has been redeemed and is ready to start. Click the button below to schedule your consultation and begin the project.
                </p>

                <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div className="text-left">
                      <p className="text-yellow-400 font-semibold mb-1">Important: Manual Start Required</p>
                      <p className="text-sm text-gray-300">
                        This service will not start automatically. You must click "Start Assignment" below to schedule your consultation and begin the work.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleStartAssignment}
                  className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg font-semibold rounded-lg transition-colors inline-flex items-center gap-3"
                >
                  <Calendar className="h-5 w-5" />
                  Start Assignment
                  <ExternalLink className="h-4 w-4" />
                </Button>

                <p className="text-sm text-gray-400 mt-4">
                  This will open your calendar to schedule a consultation
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  What happens next?
                </h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">1</span>
                    <span>Click "Start Assignment" to open the scheduling page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">2</span>
                    <span>Choose a convenient time for your consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">3</span>
                    <span>Our team will begin working on your project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">4</span>
                    <span>Receive your completed work within the promised timeframe</span>
                  </li>
                </ol>
              </div>
            </div>
          ) : (
            // Pre-Redemption State
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold mb-4">What's included:</h3>
                    <ul className="space-y-3">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Credit Cost</span>
                      <span className="text-2xl font-bold">{service.credits} credits</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-6">Redeem This Service</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Your Credits</span>
                      <span className="font-semibold">{userCredits.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Service Cost</span>
                      <span className="font-semibold">-{service.credits}</span>
                    </div>
                    <div className="pt-4 border-t border-gray-800">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Credits After</span>
                        <span className={`font-bold ${canAfford ? 'text-white' : 'text-red-400'}`}>
                          {canAfford ? (userCredits - service.credits).toLocaleString() : 'Insufficient'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {!canAfford && (
                    <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-6">
                      <p className="text-red-400 text-sm">
                        You need {service.credits - userCredits} more credits to redeem this service.
                      </p>
                    </div>
                  )}

                  <Button
                    onClick={handleRedeem}
                    disabled={!canAfford || isRedeeming}
                    className={`w-full ${
                      canAfford 
                        ? 'bg-white hover:bg-gray-100 text-black' 
                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                    } py-3 text-lg font-semibold rounded-lg transition-colors`}
                  >
                    {isRedeeming ? 'Processing...' : canAfford ? 'Redeem Service' : 'Insufficient Credits'}
                  </Button>

                  {!canAfford && (
                    <Link to="/purchase-credits">
                      <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg mt-4">
                        Purchase Credits
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RedeemService;