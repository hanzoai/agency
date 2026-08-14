import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  intervalLabel,
  priceLabel,
  projects,
  seatPrice,
  subscriptions,
  type Plan,
} from '@/data/plans';

// Written out per plan rather than composed from the id, because Tailwind reads
// this file as text: a class name built at runtime is a class name that never
// gets generated, and the card loses its border in the build but not in dev.
const accent: Record<string, string> = {
  agency: 'border-blue-800 hover:border-blue-700 shadow-blue-900/10 to-blue-950/30',
  advisory: 'border-amber-800 hover:border-amber-700 shadow-amber-900/10 to-amber-950/30',
  enterprise: 'border-purple-800 hover:border-purple-700 shadow-purple-900/10 to-purple-950/30',
  'instant-site': 'border-green-800 hover:border-green-700 shadow-green-900/10 to-green-950/30',
};

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`flex flex-col h-full border-2 rounded-xl overflow-hidden bg-gradient-to-b from-black backdrop-blur-sm relative shadow-lg transition-all duration-300 ${accent[plan.id]}`}
    >
      <div className="p-6 border-b border-border/20">
        <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
        <p className="text-sm text-foreground/70">{plan.description}</p>
        <div className="flex items-baseline gap-1 mt-2">
          <span className="text-3xl font-bold">{priceLabel(plan)}</span>
          <span className="text-foreground/60 text-sm">{intervalLabel(plan)}</span>
        </div>
        {plan.terms && <p className="text-sm text-foreground/60 mt-2 font-bold">{plan.terms}</p>}
      </div>

      <div className="p-6 flex-grow">
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-3 items-start">
              <Check size={16} className="text-foreground/80 mt-1 flex-shrink-0" />
              <span className="text-foreground/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 pt-2 mt-auto">
        <Link
          to={`/payment?plan=${plan.id}`}
          className="w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
        >
          {plan.cta}
        </Link>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pricing</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Start with seats and cloud usage, or bring in advisors and a team. We work with
              frontier models and open source alike, on flexible terms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            {subscriptions.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          <p className="text-center text-sm text-foreground/60 max-w-2xl mx-auto mb-16">
            Agency includes 5 seats. Additional seats are ${seatPrice}/month each, the same price a
            Hanzo Team seat costs anywhere else.
          </p>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Not ready for a subscription?</h2>
              <p className="text-foreground/70">One project, one price, no recurring fee.</p>
            </div>
            {/* Centred rather than a third of a three-column grid: there is one
                of these today, and a grid would leave two empty columns. */}
            <div className="flex flex-wrap justify-center gap-8">
              {projects.map((plan) => (
                <div key={plan.id} className="w-full max-w-sm">
                  <PlanCard plan={plan} />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 mb-8">
            <p className="text-lg text-foreground/70 mb-4">Need more?</p>
            <p className="text-foreground/60 mb-6 max-w-lg mx-auto">
              For larger engagements, multi-brand portfolios, or fully embedded teams, let's talk.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
            >
              Call us for larger engagements
            </Link>
          </div>
        </div>

        <div className="container-custom mt-24">
          <h2 className="text-2xl font-bold mb-6 text-center">More Questions?</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-foreground/80 mb-6">
              Visit our FAQ page for detailed answers to common questions about our services,
              process, and policies.
            </p>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-primary/10 hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
