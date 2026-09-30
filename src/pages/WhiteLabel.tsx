import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import Footer from '@/components/Footer';
import { priceLabel, whiteLabel } from '@/data/plans';
import { checkoutUrl } from '@/lib/commerce';

/** How a partner goes from checkout to selling. */
const STEPS = [
  { title: 'Subscribe', body: 'Pay the first month by card. Your plan starts right away.' },
  { title: 'Kickoff', body: 'Tell us your name, your logo, your colors, your domain and your prices.' },
  { title: 'Launch', body: 'We set up your agency site. You sell to your clients under your brand.' },
];

/**
 * /white-label: the partner plan, sold here and nowhere else. The price and
 * features are the commerce row `white-label` (src/data/plans.ts), and the
 * button opens the checkout on it. Linked from the Enterprise page's partner
 * section and hanzo.ai/affiliate; no pricing grid and no nav menu carries it.
 */
const WhiteLabel = () => (
  <>
    <main className="bg-black text-white">
      <section className="pt-40 pb-20">
        <div className="container-custom max-w-4xl text-center">
          <p className="text-sm uppercase tracking-widest text-white/60 mb-4">White-label</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Your own AI agency. Your brand.</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Sell AI, engineering, design and growth work to your clients under your name, on your domain. We set it up
            for you.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-custom max-w-4xl grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-bold mb-1">{whiteLabel.name}</h2>
            <p className="text-white/70 mb-6">{whiteLabel.description}</p>
            <p className="mb-1">
              <span className="text-5xl font-bold tracking-tight">{priceLabel(whiteLabel)}</span>
              <span className="ml-2 text-white/70">/month</span>
            </p>
            <p className="text-sm text-white/60 mb-8">{whiteLabel.terms}.</p>
            <div className="flex flex-col gap-3">
              <a href={checkoutUrl(whiteLabel)} className="lets-talk-btn w-full justify-center text-lg py-3">
                {whiteLabel.cta}
                <ArrowUpRight size={20} className="ml-2" />
              </a>
              <Link to="/contact" className="lets-talk-btn w-full justify-center py-3">
                Talk to us
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-bold mb-6">What you get</h2>
            <ul className="space-y-4">
              {whiteLabel.features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">How it works</h2>
          <ol className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-white/10 p-6">
                <span className="font-mono text-white/50">{i + 1}</span>
                <h3 className="text-xl font-bold mt-2 mb-2">{s.title}</h3>
                <p className="text-white/70">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="text-center text-white/70 mt-12">
            Want the Hanzo team to do the work for your company instead?{' '}
            <Link to="/pricing" className="text-white underline">
              See the plans
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default WhiteLabel;
