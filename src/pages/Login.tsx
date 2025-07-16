import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Footer from '@/components/Footer';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { analytics } from '@/utils/analytics';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    setTimeout(() => {
      // Store auth token (in real app, this would come from backend)
      localStorage.setItem('authToken', 'demo-token');
      localStorage.setItem('userEmail', formData.email);
      
      // Check if admin
      const adminEmails = ['a@hanzo.ai', 'z@hanzo.ai'];
      const isAdmin = adminEmails.includes(formData.email);
      localStorage.setItem('isAdmin', isAdmin.toString());
      
      // Initialize user credits if new user
      if (!localStorage.getItem('userCredits')) {
        localStorage.setItem('userCredits', '0');
      }
      
      // Simulate sending email notification for admin login
      if (isAdmin) {
        console.log('Email sent to admins: Admin login detected');
        // In production, this would be an API call to send email
      }
      
      navigate(isAdmin ? '/admin' : '/dashboard');
    }, 1000);
  };

  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white min-h-screen">
        <div className="container-custom max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome Back</h1>
            <p className="text-gray-400">
              Log in to manage your credits and services
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="email" className="text-gray-300 mb-2 block">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-gray-900/50 border-gray-700 text-white pl-12 pr-4 py-3 rounded-lg w-full"
                      placeholder="you@example.com"
                    />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-gray-300 mb-2 block">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="bg-gray-900/50 border-gray-700 text-white pl-12 pr-12 py-3 rounded-lg w-full"
                      placeholder="••••••••"
                    />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-700 bg-gray-900/50 text-white focus:ring-white"
                    />
                    <span className="text-sm text-gray-400">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-sm text-white hover:text-gray-300">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white hover:bg-gray-100 text-black py-3 text-lg font-semibold rounded-lg transition-colors mt-8"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>

              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-white hover:text-gray-300">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;