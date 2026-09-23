import { Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { plans, planHref, priceLabel } from '@/data/plans';

/** The plans as cards. The home page, /pricing and /services all render this one grid. */
export const PlanCards = () => (
  <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {plans.map((plan) => (
      <Card key={plan.id} className="border border-black/10 overflow-hidden flex flex-col h-full bg-[#282828]">
        <CardHeader className="bg-black p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2 uppercase">{plan.name}</h3>
          <p className="opacity-90">{plan.description}</p>
        </CardHeader>

        <CardContent className="p-8 flex-grow">
          <div className="flex justify-center items-baseline mb-2">
            <span className="text-3xl xl:text-4xl font-bold text-white text-center">{priceLabel(plan)}</span>
            {plan.priceMonthly !== null && <span className="ml-2 text-white/70">/month</span>}
          </div>
          <p className="text-center text-white/60 text-sm min-h-5 mb-6">{plan.terms}</p>

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
          <Link to={planHref(plan)} className="lets-talk-btn w-full justify-center text-lg py-3">
            {plan.cta}
            <ArrowUpRight size={20} className="ml-2" />
          </Link>
        </CardFooter>
      </Card>
    ))}
  </div>
);

const Pricing = () => (
  <section id="pricing" className="section-padding bg-beige-50">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 reveal">
          Pricing
        </h2>
        <p className="text-lg text-primary/80 max-w-2xl mx-auto reveal mb-2">
          Human AI advisors, a dedicated team, or an enterprise engagement priced with you.
        </p>
      </div>

      <div className="reveal-slide-up">
        <PlanCards />
      </div>
    </div>
  </section>
);

export default Pricing;
