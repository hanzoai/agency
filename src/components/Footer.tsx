
const Footer = () => {
  return (
    <footer className="bg-white py-10 md:py-16 border-t border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Hanzo.io</h3>
            <p className="text-primary/70 max-w-xs">
              Unlimited designs from a dedicated full-stack designer. All in one monthly subscription.
            </p>
            <div className="mt-4">
              <a href="mailto:sales@Hanzo.io" className="text-accent hover:underline">
                sales@Hanzo.io
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary/70 hover:text-primary transition">About Us</a></li>
                <li><a href="#" className="text-primary/70 hover:text-primary transition">Careers</a></li>
                <li><a href="#" className="text-primary/70 hover:text-primary transition">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary/70 hover:text-primary transition">App Design</a></li>
                <li><a href="#" className="text-primary/70 hover:text-primary transition">Brand Design</a></li>
                <li><a href="#" className="text-primary/70 hover:text-primary transition">Website Design</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary/70 hover:text-primary transition">Blog</a></li>
                <li><a href="#" className="text-primary/70 hover:text-primary transition">Case Studies</a></li>
                <li><a href="#" className="text-primary/70 hover:text-primary transition">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary/70">
          <div>© {new Date().getFullYear()} Hanzo.io. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition">Pricing</a>
            <a href="#" className="hover:text-primary transition">How It Works</a>
            <a href="#" className="hover:text-primary transition">Contact Us</a>
            <a href="#" className="hover:text-primary transition">Demo</a>
            <a href="#" className="hover:text-primary transition">Client Login</a>
            <a href="#" className="hover:text-primary transition">Terms of Service</a>
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
