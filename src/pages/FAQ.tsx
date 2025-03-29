import React, { useState } from 'react';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// Updated FAQ data with only one pricing plan at $5,000/mo
const faqData = [
  {
    question: "What do I get for the $5,000/month Agency Service package?",
    answer: "With our $5,000/month Agency Service, you get a full-service creative and marketing team. This includes a dedicated Creative Director, Project Manager, 2 specialized creatives working simultaneously, 120 hours of dedicated work per month, 2 custom brand-trained AI agents, 24-hour turnaround for basic requests, access to 100+ creative services, full copyright ownership, unlimited revisions & requests, and 4 hours of consultation per month."
  },
  {
    question: "How many revisions can I get per project? Is there a limit?",
    answer: "There is no limit to revisions. We'll work with you until you're completely satisfied with the results. We believe in getting your design right, no matter how many iterations it takes."
  },
  {
    question: "How will my projects be queued for production?",
    answer: "Projects are handled on a first-come, first-served basis. However, we typically work on one project at a time for each client to ensure focused attention and faster delivery. Your dedicated Project Manager will help prioritize your work and keep you updated on timelines."
  },
  {
    question: "What if I want to stop the engagement, how do I cancel?",
    answer: "Our Agency Service plan requires a 1 quarter (3 month) minimum commitment. After that, you can cancel anytime with 30 days notice. Simply let us know via email or through your client portal, and we'll coordinate the handover of all your assets and materials."
  },
  {
    question: "What is your customer support like? What's your office hours?",
    answer: "We provide support Monday to Friday, 9am-5pm EST. Your dedicated Project Manager is your primary point of contact, and they're typically available during business hours. For urgent matters, we have an emergency contact system in place. You can reach us via email, your client portal, or scheduled video calls."
  },
  {
    question: "How often do you bill your clients?",
    answer: "Billing occurs monthly, starting from the day you sign up. You'll be charged the same date each month for continued service. We offer quarterly and annual payment options with discounts for clients who prefer to pay in advance."
  },
  {
    question: "How does your onboarding process work?",
    answer: "After signing up, you'll be assigned a dedicated team within 24 hours. Our onboarding specialist will walk you through our platform, gather your brand assets, and help you submit your first creative request to get you up and running quickly. The entire onboarding process typically takes 2-3 days."
  },
  {
    question: "How quickly will I receive my designs?",
    answer: "Basic design requests are delivered within 24 hours with our Agency Service plan. More complex projects like websites or videos follow a detailed timeline established at the beginning of your project. Your Project Manager will provide specific timelines for each deliverable."
  },
  {
    question: "Who owns the copyright to the work?",
    answer: "You own all copyrights to work created while you're an active client. All files and source materials are yours with no additional fees. We also provide all source files, enabling you to make future modifications if needed."
  },
  {
    question: "What types of file formats do you deliver?",
    answer: "We deliver in all standard file formats including AI, PSD, PDF, JPG, PNG, SVG, and more. For web projects, we provide complete source code. For video projects, we can deliver in MP4, MOV, and other formats as needed. Just let us know your requirements, and we'll accommodate them."
  },
  {
    question: "Do you work with open source and frontier AI models?",
    answer: "Yes, we work with all leading frontier models and open source software. We stay current with the latest advancements in AI technology and can implement solutions using models from OpenAI, Anthropic, Mistral, Meta, Google, as well as leading open source solutions like Llama, Stable Diffusion, and others based on your specific needs and requirements."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can upgrade your plan at any time. Downgrades can be processed at the end of your current billing cycle. Please note that the $5,000/month Agency Service plan is our standard offering, but we can customize solutions for larger enterprise needs with additional resources and capabilities."
  }
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <main className="pt-32 pb-20 bg-black text-white">
        <div className="container-custom mb-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Everything you need to know about working with Hanzo AI agency.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-800 hover:border-gray-700 rounded-xl p-6 transition-all duration-300"
              >
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                  {openIndex === index ?
                    <ChevronUp size={20} className="text-white/70 flex-shrink-0 ml-4" /> :
                    <ChevronDown size={20} className="text-white/70 flex-shrink-0 ml-4" />
                  }
                </button>
                <div
                  className={`mt-4 text-white/80 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to get started?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-white text-black hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
              >
                View Pricing
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium border border-white/40 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;