import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, ArrowLeft } from 'lucide-react';

const EmailInvitation = () => {
  const [emailsSent, setEmailsSent] = useState(false);

  useEffect(() => {
    // Simulate sending invitation emails
    if (!emailsSent) {
      console.log('📧 Sending invitation emails to admins...');
      console.log('Email sent to: a@hanzo.ai');
      console.log('Email sent to: z@hanzo.ai');
      setEmailsSent(true);
    }
  }, [emailsSent]);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="container-custom max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admin Invitations Sent</h1>
          <p className="text-xl text-gray-400">
            Email invitations have been sent to the admin accounts
          </p>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Email Preview</h2>
          
          <div className="bg-black/50 border border-gray-700 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-400 mb-2">To: a@hanzo.ai, z@hanzo.ai</p>
            <p className="text-sm text-gray-400 mb-4">Subject: Admin Access - Hanzo Agency Credit System</p>
            
            <div className="border-t border-gray-700 pt-4">
              <p className="mb-4">Hello Admin,</p>
              
              <p className="mb-4">
                You have been granted admin access to the Hanzo Agency Credit System. 
                As an admin, you can:
              </p>
              
              <ul className="list-disc list-inside mb-4 text-gray-300">
                <li>View all orders and transactions</li>
                <li>Monitor user activity and credit purchases</li>
                <li>Track service redemptions and status</li>
                <li>Export order data for reporting</li>
              </ul>
              
              <p className="mb-4">
                To access the admin dashboard, please sign up or log in using this email address:
              </p>
              
              <div className="bg-gray-800 rounded p-4 mb-4">
                <p className="font-mono text-sm">Email: [your-admin-email]@hanzo.ai</p>
                <p className="font-mono text-sm">Password: [Create your secure password]</p>
              </div>
              
              <p className="mb-6">
                Once logged in, you'll see an "Admin Panel" button in your dashboard.
              </p>
              
              <p>Best regards,<br/>Hanzo Agency Team</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4">Admin Accounts</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
              <div>
                <p className="font-semibold">a@hanzo.ai</p>
                <p className="text-sm text-gray-400">Full admin access</p>
              </div>
              <Link to="/signup">
                <Button className="bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg">
                  Sign Up
                </Button>
              </Link>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-black/30 rounded-lg">
              <div>
                <p className="font-semibold">z@hanzo.ai</p>
                <p className="text-sm text-gray-400">Full admin access</p>
              </div>
              <Link to="/signup">
                <Button className="bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            Note: Admin accounts can view all platform activity and receive email notifications for important events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailInvitation;