import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { 
  ArrowLeft,
  Download,
  Mail,
  Calendar,
  User,
  CreditCard,
  Package,
  Filter,
  RefreshCw
} from 'lucide-react';

interface Order {
  id: string;
  type: 'purchase' | 'redemption';
  userEmail: string;
  userName: string;
  credits: number;
  amount?: number;
  service?: string;
  description: string;
  date: string;
  status?: 'completed' | 'pending' | 'active';
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<'all' | 'purchases' | 'redemptions'>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalCreditsIssued: 0,
    totalRedemptions: 0,
    activeUsers: 0
  });

  useEffect(() => {
    // Check if user is admin
    const userEmail = localStorage.getItem('userEmail');
    const adminEmails = ['a@hanzo.ai', 'z@hanzo.ai'];
    
    if (!userEmail || !adminEmails.includes(userEmail)) {
      navigate('/dashboard');
      return;
    }

    loadAllOrders();
  }, [navigate]);

  const loadAllOrders = () => {
    setIsLoading(true);
    
    // Simulate loading all orders from all users
    // In production, this would be an API call to your backend
    const allOrders: Order[] = [];
    const userEmails = new Set<string>();
    
    // Get all stored data (in production, this would come from a database)
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.includes('creditHistory_')) {
        const email = key.replace('creditHistory_', '');
        const history = JSON.parse(localStorage.getItem(key) || '[]');
        
        history.forEach((item: any) => {
          allOrders.push({
            ...item,
            userEmail: email,
            userName: localStorage.getItem(`userName_${email}`) || email
          });
        });
        
        userEmails.add(email);
      }
    }
    
    // Also get current user's history
    const currentHistory = JSON.parse(localStorage.getItem('creditHistory') || '[]');
    const currentEmail = localStorage.getItem('userEmail') || '';
    const currentName = localStorage.getItem('userName') || '';
    
    currentHistory.forEach((item: any) => {
      allOrders.push({
        ...item,
        userEmail: currentEmail,
        userName: currentName
      });
    });
    
    if (currentEmail) userEmails.add(currentEmail);
    
    // Sort by date (newest first)
    allOrders.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Calculate stats
    const revenue = allOrders
      .filter(order => order.type === 'purchase')
      .reduce((sum, order) => sum + (order.amount || 0), 0);
    
    const creditsIssued = allOrders
      .filter(order => order.type === 'purchase')
      .reduce((sum, order) => sum + order.credits, 0);
    
    const redemptions = allOrders
      .filter(order => order.type === 'redemption')
      .length;
    
    setStats({
      totalRevenue: revenue,
      totalCreditsIssued: creditsIssued,
      totalRedemptions: redemptions,
      activeUsers: userEmails.size
    });
    
    setOrders(allOrders);
    setIsLoading(false);
  };

  const filteredOrders = orders.filter(order => {
    if (filter === 'all') return true;
    if (filter === 'purchases') return order.type === 'purchase';
    if (filter === 'redemptions') return order.type === 'redemption';
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
    const statusClasses = {
      completed: 'bg-green-900/30 text-green-400 border-green-800',
      active: 'bg-blue-900/30 text-blue-400 border-blue-800',
      pending: 'bg-yellow-900/30 text-yellow-400 border-yellow-800'
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusClasses[status as keyof typeof statusClasses] || ''}`}>
        {status || 'N/A'}
      </span>
    );
  };

  const exportToCSV = () => {
    const headers = ['Date', 'User Email', 'User Name', 'Type', 'Service', 'Credits', 'Amount', 'Status'];
    const csvData = [
      headers.join(','),
      ...filteredOrders.map(order => [
        formatDate(order.date),
        order.userEmail,
        order.userName,
        order.type,
        order.service || 'N/A',
        order.credits,
        order.amount || 0,
        order.status || 'N/A'
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `orders_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white min-h-screen">
        <div className="container-custom max-w-7xl">
          {/* Header */}
          <div className="mb-12">
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-gray-400 text-lg">
                  Manage orders and monitor platform activity
                </p>
              </div>
              <Button
                onClick={loadAllOrders}
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <CreditCard className="h-8 w-8 text-green-400" />
                <span className="text-xs text-gray-400">Total Revenue</span>
              </div>
              <p className="text-3xl font-bold">${stats.totalRevenue.toLocaleString()}</p>
              <p className="text-sm text-gray-400 mt-1">All time</p>
            </div>
            
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Package className="h-8 w-8 text-blue-400" />
                <span className="text-xs text-gray-400">Credits Issued</span>
              </div>
              <p className="text-3xl font-bold">{stats.totalCreditsIssued.toLocaleString()}</p>
              <p className="text-sm text-gray-400 mt-1">Total credits</p>
            </div>
            
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Download className="h-8 w-8 text-purple-400" />
                <span className="text-xs text-gray-400">Redemptions</span>
              </div>
              <p className="text-3xl font-bold">{stats.totalRedemptions}</p>
              <p className="text-sm text-gray-400 mt-1">Services redeemed</p>
            </div>
            
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <User className="h-8 w-8 text-yellow-400" />
                <span className="text-xs text-gray-400">Active Users</span>
              </div>
              <p className="text-3xl font-bold">{stats.activeUsers}</p>
              <p className="text-sm text-gray-400 mt-1">Total users</p>
            </div>
          </div>

          {/* Filters and Export */}
          <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                  filter === 'all' 
                    ? 'bg-white text-black' 
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                <Filter className="h-4 w-4" />
                All Orders ({orders.length})
              </button>
              <button
                onClick={() => setFilter('purchases')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === 'purchases' 
                    ? 'bg-white text-black' 
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                Purchases
              </button>
              <button
                onClick={() => setFilter('redemptions')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  filter === 'redemptions' 
                    ? 'bg-white text-black' 
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                Redemptions
              </button>
            </div>
            
            <Button
              onClick={exportToCSV}
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>

          {/* Orders Table */}
          {isLoading ? (
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-12 text-center">
              <p className="text-gray-400">Loading orders...</p>
            </div>
          ) : filteredOrders.length === 0 ? (
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-12 text-center">
              <p className="text-gray-400">No orders found</p>
            </div>
          ) : (
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left p-4 text-sm font-medium text-gray-400">Date</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-400">User</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-400">Type</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-400">Service/Package</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-400">Credits</th>
                      <th className="text-right p-4 text-sm font-medium text-gray-400">Amount</th>
                      <th className="text-center p-4 text-sm font-medium text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                        <td className="p-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            {formatDate(order.date)}
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p className="text-sm font-medium">{order.userName}</p>
                            <p className="text-xs text-gray-400">{order.userEmail}</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`text-sm font-medium ${
                            order.type === 'purchase' ? 'text-green-400' : 'text-blue-400'
                          }`}>
                            {order.type === 'purchase' ? 'Purchase' : 'Redemption'}
                          </span>
                        </td>
                        <td className="p-4 text-sm">
                          {order.service || order.description}
                        </td>
                        <td className="p-4 text-right">
                          <span className={`text-sm font-bold ${
                            order.type === 'purchase' ? 'text-green-400' : 'text-white'
                          }`}>
                            {order.type === 'purchase' ? '+' : ''}{order.credits.toLocaleString()}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          {order.amount ? (
                            <span className="text-sm font-semibold">${order.amount.toLocaleString()}</span>
                          ) : (
                            <span className="text-sm text-gray-500">—</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {getStatusBadge(order.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Email Notification Info */}
          <div className="mt-12 bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-gray-400 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Email Notifications</h3>
                <p className="text-sm text-gray-400 mb-3">
                  Email notifications are sent to admin accounts when:
                </p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• New user signs up</li>
                  <li>• Credits are purchased</li>
                  <li>• Services are redeemed</li>
                  <li>• Services are started (booking made)</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">
                  Admin emails: a@hanzo.ai, z@hanzo.ai
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminDashboard;