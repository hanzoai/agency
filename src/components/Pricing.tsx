import { Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { intervalLabel, plans, priceLabel, seatPrice } from '@/data/plans';

// The prices and features come from src/data/plans.ts, the same file /pricing
// and the checkout read. This section used to keep its own copy of all three,
// which is how the home page and the pricing page could quote different numbers
// for the same plan.
//
// No POPULAR badge: it is a claim about what customers chose, and Agency and
// Advisory are new. It comes back when we can point at the number.

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-beige-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 reveal">
            Pricing
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto reveal mb-2">
            From seats and cloud usage to a full creative team. Start immediately with flexible
            terms and our quality guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-slide-up">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className="border border-black/10 overflow-hidden flex flex-col h-full bg-[#282828]"
            >
              <CardHeader className="bg-black p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-2 uppercase">{plan.name}</h3>
                <p className="opacity-90">{plan.description}</p>
              </CardHeader>

              <CardContent className="p-8 flex-grow">
                <div className="flex justify-center items-baseline mb-2">
                  <span className="text-4xl font-bold text-white">{priceLabel(plan)}</span>
                  <span className="ml-2 text-white/70">{intervalLabel(plan)}</span>
                </div>
                {plan.terms && (
                  <p className="text-center text-white/60 text-sm mb-6">{plan.terms}</p>
                )}

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Link
                  to={`/payment?plan=${plan.id}`}
                  className="lets-talk-btn w-full justify-center text-lg py-3"
                >
                  {plan.cta}
                  <ArrowUpRight size={20} className="ml-2" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-primary/70 mb-4">
            Agency includes 5 seats; additional seats are ${seatPrice}/month. Need more? Contact us
            for larger engagements.
          </p>
          <Link to="/contact" className="lets-talk-btn">
            Contact us
            <ArrowUpRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
