import type { ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import Footer from '@/components/Footer';
import { planById, priceLabel } from '@/data/plans';
import { checkoutUrl, depart } from '@/lib/commerce';
import { contact } from '@/data/contact';

/** The receipt lives with the pay site; every charge on the account is listed there. */
const INVOICES = 'https://hanzo.ai/pay/invoices';

/** Commerce statuses for a charge that did not go through. */
const FAILED = new Set(['failed', 'declined', 'canceled', 'cancelled', 'error']);

const primary =
  'inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-white text-black hover:bg-white/90 transition-colors';
const secondary =
  'inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium border border-white/40 hover:bg-white/10 transition-colors';

/**
 * Where pay.hanzo.ai ends a checkout, with `?checkout=<status>&plan=<slug>`:
 * `success` once the charge settles, the commerce status otherwise.
 */
const Subscribed = () => {
  const [search] = useSearchParams();
  const status = search.get('checkout');
  // The checkout returns the commerce slug; planById reads either name.
  const plan = planById(search.get('plan'));

  let body: ReactNode;
  if (!plan || !status) {
    body = (
      <>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Nothing to confirm</h1>
        <p className="text-gray-400 mb-8">
          This page confirms a plan once checkout completes. Your invoices are the record of every
          charge on your account.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/pricing" className={primary}>See pricing</Link>
          <a href={INVOICES} className={secondary}>View invoices</a>
        </div>
      </>
    );
  } else if (status === 'success') {
    body = (
      <>
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
          <Check size={32} className="text-white" />
        </div>
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Subscription active</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to {plan.name}</h1>
        <p className="text-gray-300 mb-10">
          {priceLabel(plan)}/month, billed monthly. Your receipt is in your invoices.
        </p>

        <div className="text-left bg-gray-900/30 border border-gray-800 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-bold mb-4">What happens next</h2>
          <ol className="space-y-4 text-gray-300">
            <li className="flex gap-3">
              <span className="font-mono text-white">1</span>
              <span>
                <a href={contact.booking} className="underline">Book your kickoff call</a> at a time that suits you.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-white">2</span>
              <span>Share your brief now, so the kickoff starts from your goals, your brand and your first requests.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-white">3</span>
              <span>Your team starts on your first requests right after kickoff.</span>
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/onboarding" className={primary}>Share your brief</Link>
          <a href={INVOICES} className={secondary}>View invoices</a>
        </div>
      </>
    );
  } else if (FAILED.has(status)) {
    body = (
      <>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Your payment did not complete</h1>
        <p className="text-gray-400 mb-8">
          {plan.name} is not active yet. Try the checkout again, or talk to us and we will set it up with you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={checkoutUrl(plan)} onClick={() => depart(plan)} className={primary}>Try again</a>
          <Link to="/contact" className={secondary}>Contact us</Link>
        </div>
      </>
    );
  } else {
    body = (
      <>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Your {plan.name} subscription is pending</h1>
        <p className="text-gray-400 mb-8">
          It starts as soon as the payment settles.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={INVOICES} className={primary}>View invoices</a>
          <Link to="/contact" className={secondary}>Contact us</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white min-h-screen">
        <div className="container-custom max-w-2xl text-center">{body}</div>
      </main>
      <Footer />
    </>
  );
};

export default Subscribed;
