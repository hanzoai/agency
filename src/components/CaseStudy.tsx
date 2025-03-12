
import { ArrowRight } from 'lucide-react';

const CaseStudy = () => {
  return (
    <section id="case-studies" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-lg text-primary/70 mb-6 reveal">
            Designs used by your favorite startups and industry leaders.
          </p>
        </div>
        
        <div className="bg-beige-50 rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            {/* Image side */}
            <div className="h-full bg-beige-100 min-h-[300px] md:min-h-[500px] flex items-center justify-center p-10 reveal">
              <div className="rounded-2xl bg-white shadow-lg p-4 w-full max-w-md transform rotate-2">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs text-gray-400">kerplunk.ai</div>
                </div>
                <div className="h-48 bg-beige-50 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-sm text-primary/40">Kerplunk Design Preview</span>
                </div>
                <div className="h-12 bg-beige-50 rounded-lg w-4/5"></div>
              </div>
            </div>
            
            {/* Text side */}
            <div className="p-8 md:p-12 lg:p-16 reveal-slide-right">
              <div className="mb-4 inline-block px-4 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium">
                Case Study
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                How Kerplunk saves $5500+ Per Month with Hanzo
              </h3>
              <p className="text-primary/80 mb-8">
                Learn how Kerplunk, the AI video recruiter for startups, is using Hanzo to go to market at the speed of sound.
              </p>
              <a href="#" className="inline-flex items-center font-medium text-accent hover:underline">
                View Case Study
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
