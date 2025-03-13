
import { Check } from 'lucide-react';

const Process = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 text-black font-medium uppercase tracking-wide reveal">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black reveal">
            How the Process Works
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row gap-6 items-start reveal-slide-up">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black">Submit Your Request</h3>
                <p className="text-black">
                  We need basic details, like landing page copy, to get started on your design. Feel free to leave creative direction to us.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start reveal-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black">Review & Revise</h3>
                <p className="text-black">
                  We design and deliver a first draft for you to review and leave notes. We'll revise until it's perfect.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start reveal-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-black">We Start Building!</h3>
                <p className="text-black">
                  Once a design is completed you will get all the files you need and the source files with 100% ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 p-8 md:p-12 bg-beige-50 rounded-3xl max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center text-white reveal">We work with all the leading funnel-building platforms...</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            {['Clickfunnels', 'Kajabi', 'Webflow', 'WordPress', 'Shopify', 'Wix', 'Unbounce', 'Leadpages'].map((platform, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-xl flex items-center justify-center shadow-sm border border-gray-100 h-16 reveal"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <span className="font-medium text-black">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
