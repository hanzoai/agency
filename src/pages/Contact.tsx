
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container-custom py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">GET IN TOUCH</h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-3 mb-8 text-primary/80">
                <p>
                  Hanzo Industries, Inc.<br/>
                  500 Market Street, Suite 800<br/>
                  San Francisco, CA 94105<br/>
                  United States
                </p>
                <p>
                  hello.verywell@gmail.com<br/>
                  (+65) 13370-9976
                </p>
              </div>
              <a href="mailto:hello.verywell@gmail.com" className="lets-talk-btn">
                Send an email
                <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
              <p className="text-primary/80 mb-4">
                Monday - Friday: 9:00 AM - 6:00 PM (PST)<br/>
                Saturday - Sunday: Closed
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="geometric-circle border border-black/20 aspect-square w-12 h-12 flex items-center justify-center">IG</a>
                <a href="#" className="geometric-circle border border-black/20 aspect-square w-12 h-12 flex items-center justify-center">FB</a>
                <a href="#" className="geometric-circle border border-black/20 aspect-square w-12 h-12 flex items-center justify-center">X</a>
                <a href="#" className="geometric-circle border border-black/20 aspect-square w-12 h-12 flex items-center justify-center">LI</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
