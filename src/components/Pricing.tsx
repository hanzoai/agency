import { Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { plans, priceLabel, ladder } from '@/data/plans';
import { checkoutUrl } from '@/lib/commerce';

/** The plans as cards. The home page, /pricing and /services all render this one grid. */
export const PlanCards = () => (
  <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {plans.map((plan) => (
      <Card key={plan.id} className="border border-black/10 overflow-hidden flex flex-col h-full bg-[#282828]">
        <CardHeader className="bg-black p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2 uppercase">{plan.name}</h3>
          <p className="opacity-90">{plan.description}</p>
        </CardHeader>

        <CardContent className="p-8 flex-grow">
          <div className="flex justify-center items-baseline mb-2">
            <span className="text-4xl font-bold text-white tracking-tight">{priceLabel(plan)}</span>
            <span className="ml-2 text-white/70">/month</span>
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
          <a href={checkoutUrl(plan)} className="lets-talk-btn w-full justify-center text-lg py-3">
            {plan.cta}
            <ArrowUpRight size={20} className="ml-2" />
          </a>
        </CardFooter>
      </Card>
    ))}
  </div>
);

/** Anything that needs exclusive people, a larger team, an SLA, or onsite work. */
export const NeedMore = () => (
  <div className="max-w-2xl mx-auto text-center mt-16">
    <h3 className="text-2xl font-bold mb-3">Need more?</h3>
    <p className="opacity-80 mb-4">
      Dedicated full-time personnel, multiple pods, onsite leads, enterprise SLAs, private infrastructure, or a larger program.
    </p>
    <p className="font-semibold mb-6">Let&apos;s build the engagement around you.</p>
    <Link to="/contact" className="lets-talk-btn">
      Talk to us
      <ArrowUpRight size={16} className="ml-1" />
    </Link>
  </div>
);

const Pricing = () => (
  <section id="pricing" className="section-padding bg-beige-50">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 reveal">
          Simple pricing. Serious execution.
        </h2>
        <p className="text-lg text-primary/80 max-w-2xl mx-auto reveal mb-2">
          {ladder}
        </p>
      </div>

      <div className="reveal-slide-up">
        <PlanCards />
        <NeedMore />
      </div>
    </div>
  </section>
);

export default Pricing;
