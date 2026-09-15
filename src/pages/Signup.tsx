import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import { HanzoLogo } from '@hanzo/logo';

const HANZO_ID_SIGNUP = 'https://hanzo.id/signup?redirect=https%3A%2F%2Fhanzo.agency%2Fdashboard';
const HANZO_ID_LOGIN = 'https://hanzo.id/login?redirect=https%3A%2F%2Fhanzo.agency%2Fdashboard';

const Signup = () => {
  return (
    <>
      <main className="pt-32 pb-24 bg-black text-white min-h-screen flex items-center justify-center">
        <div className="container-custom max-w-md w-full px-4">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/20 flex items-center justify-center mx-auto mb-5 p-2.5 shadow-2xl">
              <HanzoLogo size={32} className="[&>svg]:w-full [&>svg]:h-full text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Create Hanzo Account</h1>
            <p className="text-sm text-gray-400">
              One identity for Hanzo Agency, AI Employees, and hanzo.team
            </p>
          </div>

          <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="space-y-3">
              <a
                href={HANZO_ID_SIGNUP}
                className="w-full bg-white hover:bg-white/90 text-black py-3.5 px-6 text-sm font-semibold rounded-full transition-all flex items-center justify-center gap-2.5 shadow-lg group cursor-pointer"
              >
                <span>Create with Hanzo ID</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://hanzo.team"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 px-6 text-xs font-medium rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <span>Launch hanzo.team workspace</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 text-center space-y-3">
              <p className="text-xs text-gray-400">
                Already have a Hanzo ID?{' '}
                <a
                  href={HANZO_ID_LOGIN}
                  className="text-white hover:underline font-medium"
                >
                  Sign in
                </a>
              </p>
              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero vendor lock-in · Unified SSO across Hanzo estate</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Signup;