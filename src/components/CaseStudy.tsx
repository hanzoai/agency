
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              <img 
                src="/lovable-uploads/919bfa95-912a-489f-a859-7a42e0d7d435.png" 
                alt="Marshmello DJ TrillerFest" 
                className="max-w-full max-h-[400px] object-contain"
              />
            </div>
            
            {/* Text side */}
            <div className="p-8 md:p-12 lg:p-16 reveal-slide-right">
              <div className="mb-4 inline-block px-4 py-1 bg-accent/10 rounded-full text-accent text-sm font-medium">
                Case Study
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                How TrillerFest Became the Largest Virtual Music Festival in History
              </h3>
              <p className="text-primary/80 mb-8">
                Learn how Triller reached 169 million users and became the #1 app in India with less than $60,000 in ad spend.
              </p>
              <Link to="/case-study-trillerfest" className="inline-flex items-center font-medium text-accent hover:underline">
                View Case Study
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
