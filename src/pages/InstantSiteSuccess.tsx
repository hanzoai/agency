import { Link } from 'react-router-dom';
import { Check, Calendar, Clock } from 'lucide-react';
import Footer from '@/components/Footer';

const InstantSiteSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="flex-grow pt-32 pb-20">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">Success!</h1>

            <p className="text-xl text-white/80 mb-12">
              Your answers have successfully been submitted. The next step is to schedule a brief 15 min meeting with one of our designers. After the meeting we will be able to present you the website within 24 hours.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Important</h2>
                <p className="text-white/70">
                  <strong>Note:</strong> You must attend the scheduled meeting and thereafter the 24 hour deadline for the website will begin.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://calendar.app.google/z1YsZQrqR4s6jQqD8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-colors"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Book 15 min Design Meeting
            </a>
          </div>

          <div className="mt-16 bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">What happens next?</h3>
            <ol className="space-y-4 text-white/70">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-white">Schedule Your Meeting</strong> - Click the button above to book your 15-minute design consultation
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-white">Design Consultation</strong> - Our designer will review your requirements and clarify any questions
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-white">24-Hour Countdown Begins</strong> - After the meeting, our team starts building your website
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">4</span>
                <div>
                  <strong className="text-white">Website Delivery</strong> - Within 24 hours, you'll receive your completed website ready to launch
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 mb-4">
              Need help or have questions?
            </p>
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 underline">
              Contact our support team
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InstantSiteSuccess;