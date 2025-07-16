import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { 
  ArrowLeft,
  Download,
  Upload,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

interface HistoryItem {
  id: string;
  type: 'purchase' | 'redemption';
  credits: number;
  amount?: number;
  service?: string;
  description: string;
  date: string;
  status?: 'completed' | 'pending' | 'active';
}

const History = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [filter, setFilter] = useState<'all' | 'purchases' | 'redemptions'>('all');

  useEffect(() => {
    // Check if user is logged in
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/login');
      return;
    }

    // Load history
    const creditHistory = JSON.parse(localStorage.getItem('creditHistory') || '[]');
    setHistory(creditHistory.reverse()); // Show newest first
  }, [navigate]);

  const filteredHistory = history.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'purchases') return item.type === 'purchase';
    if (filter === 'redemptions') return item.type === 'redemption';
    return true;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="flex items-center gap-1 text-green-400 text-sm">
            <CheckCircle className="h-4 w-4" />
            Completed
          </span>
        );
      case 'active':
        return (
          <span className="flex items-center gap-1 text-blue-400 text-sm">
            <Clock className="h-4 w-4" />
            Active
          </span>
        );
      case 'pending':
        return (
          <span className="flex items-center gap-1 text-yellow-400 text-sm">
            <AlertCircle className="h-4 w-4" />
            Ready to Start
          </span>
        );
      default:
        return null;
    }
  };

  const handleStartAssignment = () => {
    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ23sAA3nns4Ntw1GiKXDOwDgH6uPDXV8aqFr8mKqF8m-r8uduBrTw5ZQI7afVAAJFPD_UBgYqu_', '_blank');
  };

  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white min-h-screen">
        <div className="container-custom max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Transaction History</h1>
            <p className="text-gray-400 text-lg">
              View your credit purchases and service redemptions
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'all' 
                  ? 'bg-white text-black' 
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              All Transactions
            </button>
            <button
              onClick={() => setFilter('purchases')}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                filter === 'purchases' 
                  ? 'bg-white text-black' 
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              <Download className="h-4 w-4" />
              Purchases
            </button>
            <button
              onClick={() => setFilter('redemptions')}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                filter === 'redemptions' 
                  ? 'bg-white text-black' 
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              <Upload className="h-4 w-4" />
              Redemptions
            </button>
          </div>

          {/* History List */}
          {filteredHistory.length === 0 ? (
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-12 text-center">
              <p className="text-gray-400 mb-4">No transactions found</p>
              <Link to="/purchase-credits">
                <Button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg">
                  Purchase Credits
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredHistory.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold">{item.description}</h3>
                        {getStatusBadge(item.status)}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(item.date)}
                        </span>
                        {item.service && (
                          <span className="bg-gray-800 px-3 py-1 rounded-full">
                            {item.service}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className={`text-2xl font-bold ${
                          item.type === 'purchase' ? 'text-green-400' : 'text-white'
                        }`}>
                          {item.type === 'purchase' ? '+' : ''}{item.credits.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-400">credits</p>
                      </div>
                      
                      {item.type === 'redemption' && item.status === 'pending' && (
                        <Button
                          onClick={handleStartAssignment}
                          className="bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                          Start
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                      
                      {item.amount && (
                        <div className="text-right min-w-[100px]">
                          <p className="text-lg font-semibold">${item.amount.toLocaleString()}</p>
                          <p className="text-sm text-gray-400">paid</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Summary Stats */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-400 mb-2">Total Purchased</p>
              <p className="text-3xl font-bold">
                {history
                  .filter(item => item.type === 'purchase')
                  .reduce((sum, item) => sum + item.credits, 0)
                  .toLocaleString()}
              </p>
              <p className="text-sm text-gray-400">credits</p>
            </div>
            
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-400 mb-2">Total Redeemed</p>
              <p className="text-3xl font-bold">
                {Math.abs(history
                  .filter(item => item.type === 'redemption')
                  .reduce((sum, item) => sum + item.credits, 0))
                  .toLocaleString()}
              </p>
              <p className="text-sm text-gray-400">credits</p>
            </div>
            
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-400 mb-2">Total Spent</p>
              <p className="text-3xl font-bold">
                ${history
                  .filter(item => item.type === 'purchase' && item.amount)
                  .reduce((sum, item) => sum + (item.amount || 0), 0)
                  .toLocaleString()}
              </p>
              <p className="text-sm text-gray-400">USD</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default History;