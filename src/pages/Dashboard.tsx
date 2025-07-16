import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { 
  CreditCard, 
  History, 
  LogOut, 
  Plus,
  ArrowRight,
  CheckCircle,
  Clock,
  Palette,
  FileText,
  Globe,
  Briefcase,
  Image,
  Shield
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userCredits, setUserCredits] = useState(0);
  const [userName, setUserName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/login');
      return;
    }

    // Load user data
    const credits = parseInt(localStorage.getItem('userCredits') || '0');
    const name = localStorage.getItem('userName') || 'User';
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setUserCredits(credits);
    setUserName(name);
    setIsAdmin(adminStatus);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  const services = [
    {
      id: 'revision',
      name: 'Revision',
      credits: 50,
      icon: FileText,
      description: 'Get revisions on existing work'
    },
    {
      id: 'new-page',
      name: 'New Page',
      credits: 50,
      icon: Globe,
      description: 'Add a new page to your website'
    },
    {
      id: 'custom-artwork',
      name: 'Custom Artwork',
      credits: 150,
      icon: Image,
      description: 'Perfect for social media content'
    },
    {
      id: 'logo-design',
      name: 'Logo Design',
      credits: 200,
      icon: Palette,
      description: 'Professional logo design'
    },
    {
      id: 'branding-kit',
      name: 'Branding Kit',
      credits: 500,
      icon: Briefcase,
      description: 'Complete brand identity package'
    },
    {
      id: 'instant-site',
      name: '3-Page Instant Site',
      credits: 500,
      icon: Globe,
      description: '24-hour turnaround website'
    }
  ];

  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white min-h-screen">
        <div className="container-custom max-w-7xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Welcome back, {userName}
              </h1>
              <p className="text-gray-400">
                Manage your credits and redeem design services
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              {isAdmin && (
                <Link to="/admin">
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Admin Panel
                  </Button>
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Log out</span>
              </button>
            </div>
          </div>

          {/* Credit Balance Card */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <p className="text-gray-400 mb-2">Available Credits</p>
                <p className="text-5xl font-bold">{userCredits.toLocaleString()}</p>
                <p className="text-gray-400 mt-2">1 credit = $1</p>
              </div>
              <div className="mt-6 md:mt-0 flex gap-4">
                <Link to="/purchase-credits">
                  <Button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Purchase Credits
                  </Button>
                </Link>
                <Link to="/history">
                  <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                    <History className="h-5 w-5" />
                    View History
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Available Services */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Available Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                const canAfford = userCredits >= service.credits;
                
                return (
                  <div
                    key={service.id}
                    className={`bg-gray-900/30 border border-gray-800 rounded-xl p-6 transition-all ${
                      canAfford ? 'hover:border-white' : 'opacity-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-lg font-semibold">{service.credits} credits</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                    
                    <Link 
                      to={canAfford ? `/redeem/${service.id}` : '#'}
                      className={canAfford ? '' : 'pointer-events-none'}
                    >
                      <Button
                        disabled={!canAfford}
                        className={`w-full ${
                          canAfford 
                            ? 'bg-white hover:bg-gray-100 text-black' 
                            : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                        } py-3 rounded-lg flex items-center justify-center gap-2`}
                      >
                        {canAfford ? (
                          <>
                            Redeem Service
                            <ArrowRight className="h-4 w-4" />
                          </>
                        ) : (
                          'Insufficient Credits'
                        )}
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-12 bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CreditCard className="h-6 w-6 text-gray-400" />
                <div>
                  <p className="font-semibold">Need more credits?</p>
                  <p className="text-sm text-gray-400">
                    Purchase credit packs starting at 100 credits
                  </p>
                </div>
              </div>
              <Link to="/purchase-credits">
                <Button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
                  Buy Credits
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;