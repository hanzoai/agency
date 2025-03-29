import { useState } from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { Button } from './ui/button';
import { buttonModifiers } from '@/lib/button-utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const caseStudies = [
  {
    id: "techstream",
    industry: "SaaS",
    company: "TechStream",
    services: ["Brand Identity", "Motion Design", "AI Implementation"],
    image: "/images/case-studies/techstream.jpg",
    title: "AI-Powered Brand Transformation",
    description: "How TechStream leveraged AI-enhanced creative to reimagine their brand and accelerate market growth."
  },
  {
    id: "quantum-finance",
    industry: "Financial Services",
    company: "Quantum Finance",
    services: ["RAG System", "Web Design", "Content Strategy"],
    image: "/images/case-studies/quantum-finance.jpg",
    title: "Knowledge System Implementation",
    description: "Building a custom retrieval-augmented generation system that transformed customer service operations."
  },
  {
    id: "artisan-retail",
    industry: "E-commerce",
    company: "Artisan Retail",
    services: ["AI-Enhanced Creative", "Video Production", "Social Media"],
    image: "/images/case-studies/artisan-retail.jpg",
    title: "Content Velocity at Scale",
    description: "Creating an AI-powered content production system that increased output by 300% while maintaining brand consistency."
  }
];

const interestOptions = [
  { value: "creative", label: "Creative Design" },
  { value: "production", label: "Specialized Production" },
  { value: "ai", label: "AI Engineering" },
  { value: "marketing", label: "Marketing" },
  { value: "web3", label: "Web3 & Blockchain" },
  { value: "software", label: "Software Development" }
];

const CaseStudies = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    // and then trigger the download
    setIsSubmitted(true);
    
    // Simulate download start after form submission
    setTimeout(() => {
      // In a real implementation, this would be a link to the actual case study PDF
      window.open(`/case-studies/${selectedCaseStudy}.pdf`, '_blank');
      // Reset form for future submissions
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <section id="our-work" className="py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Work</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Powering 30+ successful exits and countless industry awards through AI-enhanced creative and technical systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all reveal-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.company} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-sm font-medium text-foreground/60">{study.industry}</div>
                  <div className="mx-2 text-foreground/30">•</div>
                  <div className="text-sm font-medium">{study.company}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <p className="text-foreground/70 mb-4">{study.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.services.map((service, serviceIndex) => (
                    <span key={serviceIndex} className="bg-secondary/20 text-foreground/80 text-xs font-medium px-2.5 py-1 rounded">
                      {service}
                    </span>
                  ))}
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={buttonModifiers.interactive + " font-medium w-full"}
                      onClick={() => setSelectedCaseStudy(study.id)}
                    >
                      Download Case Study
                      <Download size={14} className="ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Download Case Study</DialogTitle>
                      <DialogDescription>
                        Tell us a bit about yourself to access the full case study
                      </DialogDescription>
                    </DialogHeader>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <Input 
                          id="name" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          placeholder="Your name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="interest" className="block text-sm font-medium mb-1">What are you interested in?</label>
                        <Select value={interest} onValueChange={setInterest} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your area of interest" />
                          </SelectTrigger>
                          <SelectContent>
                            {interestOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label htmlFor="project-details" className="block text-sm font-medium mb-1">Tell us about your project</label>
                        <Textarea 
                          id="project-details" 
                          value={projectDetails} 
                          onChange={(e) => setProjectDetails(e.target.value)} 
                          placeholder="Briefly describe your project or goals"
                          rows={4}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubmitted}
                      >
                        {isSubmitted ? "Downloading..." : "Download Now"}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="/our-work">
            <Button 
              variant="outline" 
              size="lg" 
              className={buttonModifiers.interactive + " font-medium"}
            >
              View all our work
              <ArrowUpRight size={16} className="ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;