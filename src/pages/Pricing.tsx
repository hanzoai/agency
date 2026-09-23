import Footer from '@/components/Footer';
import { PlanCards } from '@/components/Pricing';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pricing</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Human AI advisors, a dedicated team, or an enterprise engagement priced with you.
            </p>
          </div>

          <PlanCards />

          <p className="text-xs text-center text-foreground/50 mt-8">Pay with card, crypto, or wire transfer</p>
        </div>

        <div className="container-custom mt-24">
          <h2 className="text-2xl font-bold mb-6 text-center">More Questions?</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-foreground/80 mb-6">
              Visit our FAQ page for detailed answers to common questions about our services, process, and policies.
            </p>
            <Link to="/faq" className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-primary/10 hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2">
              View FAQ
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
