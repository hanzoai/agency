
import { Clock, DollarSign, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Clock size={28} />,
    title: "Save 50+ hours & $5K+ Per Month",
    description: "Skip the 3-month hire process and high costs. Get on board in 1 business day with Hanzo for less, with greater output than agencies."
  },
  {
    icon: <DollarSign size={28} />,
    title: "100% Control. 0 Headaches",
    description: "No lengthy contracts or unexpected fees. Enjoy a flat monthly rate. Start or pause at any time and appreciate the simplicity of clear terms."
  },
  {
    icon: <Sparkles size={28} />,
    title: "Design Freedom",
    description: "Skip the limits of agencies and full-time designers. Our team focuses on designs that boost your growth—be it landing pages, pitch decks, or UI/UX. We turn your visions into results."
  },
];

const WhyHanzo = () => {
  return (
    <section id="why-hanzo" className="section-padding bg-beige-50 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-beige-100 -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="mb-4 text-primary/70 font-medium uppercase tracking-wide reveal">
            Why Hanzo?
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 reveal-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="circle-accent mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-primary/80">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center reveal">
          <a href="#get-started" className="btn-primary">
            Get My Designer
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyHanzo;
