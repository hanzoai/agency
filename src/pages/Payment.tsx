import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Footer from '@/components/Footer';
import { checkoutUrl } from '@/lib/commerce';
import { planById } from '@/data/plans';

/**
 * /payment?plan=<id>: the checkout for a plan, at hanzo.ai/pay. The plan cards
 * link to the checkout directly; this address keeps older links working.
 */
const Payment = () => {
  const [search] = useSearchParams();
  const plan = planById(search.get('plan'));

  useEffect(() => {
    if (plan) window.location.replace(checkoutUrl(plan));
  }, [plan]);

  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white min-h-screen">
        <div className="container-custom max-w-xl text-center">
          {plan ? (
            <p className="text-gray-400">Opening the checkout for {plan.name}…</p>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-4">Pick a plan</h1>
              <p className="text-gray-400 mb-8">Our plans and prices are on the pricing page.</p>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-white text-black hover:bg-white/90 transition-colors"
              >
                See pricing
              </Link>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Payment;
