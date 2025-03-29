import { ArrowUpRight, Mail } from 'lucide-react';

const features = [
  {
    title: "AI-Powered Innovation Engine",
    description: "Our proprietary AI systems analyze market trends, customer behavior, and performance data to deliver tailored solutions for your specific business challenges."
  },
  {
    title: "Applied Research Methodology",
    description: "We blend academic rigor with practical execution, translating cutting-edge research into tangible business outcomes with measurable ROI."
  },
  {
    title: "Cross-Functional Expertise",
    description: "Our team combines AI specialists, engineers, designers, and growth strategists to deliver holistic solutions that push boundaries."
  },
];

const WhyHanzo = () => {
  return (
    <section id="why-hanzo" className="section-padding bg-beige-100 relative overflow-hidden">
      <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-beige-200/50 -z-10"></div>

      <div className="container-custom">
        <div className="text-center md:text-left max-w-3xl mb-16">
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-8 reveal">
            Pioneering the future of AI-powered solutions
          </h2>
          <p className="text-lg text-primary/80 reveal">
            Hanzo combines advanced AI research with practical business applications, delivering transformative solutions that drive measurable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-t border-black pt-6 reveal-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-primary/80">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center md:text-left reveal flex flex-wrap gap-4">
          <a href="https://calendar.app.google/z1YsZQrqR4s6jQqD8" className="lets-talk-btn">
            Let's talk
            <ArrowUpRight size={16} className="ml-1" />
          </a>
          <a
            href="/subscribe"
            className="lets-talk-btn bg-black hover:bg-black/0 text-white hover:text-black rainbow-gradient-btn transition-all duration-300"
          >
            Sign Up
            <Mail size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyHanzo;
