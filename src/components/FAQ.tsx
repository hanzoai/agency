
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What do I get for the $3,500/month package?",
    answer: "You get unlimited graphic design and web development services. This includes UI/UX design, brand design, website & landing page design, and implementation. You'll have a dedicated team of designers, funnel builders, and project managers to help realize your vision."
  },
  {
    question: "How many revisions can I get per project? Is there a limit?",
    answer: "There is no limit to revisions. We'll work with you until you're completely satisfied with the results. We believe in getting your design right, no matter how many iterations it takes."
  },
  {
    question: "How will my projects be queued for production?",
    answer: "Projects are handled on a first-come, first-served basis. However, we typically work on one project at a time for each client to ensure focused attention and faster delivery."
  },
  {
    question: "What if I want to stop the engagement, how do I cancel?",
    answer: "You can cancel anytime with no penalty. Simply let us know via email or through your client portal, and we'll stop your subscription right away. There are no long-term contracts or cancellation fees."
  },
  {
    question: "What is your customer support like? What's your office hours?",
    answer: "We provide support Monday to Friday, 9am-5pm EST. You can reach us via email or through your client portal. We typically respond within a few hours during business hours."
  },
  {
    question: "How often do you bill your clients?",
    answer: "Billing occurs monthly, starting from the day you sign up. You'll be charged the same date each month for continued service."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 text-black/70 font-medium uppercase tracking-wide reveal">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black reveal">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item reveal">
              <button 
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-bold text-black">{faq.question}</h3>
                {openIndex === index ? 
                  <ChevronUp size={20} className="text-black/70 flex-shrink-0 ml-4" /> : 
                  <ChevronDown size={20} className="text-black/70 flex-shrink-0 ml-4" />
                }
              </button>
              <div 
                className={`mt-4 text-black/80 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
