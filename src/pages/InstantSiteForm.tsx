import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import Footer from '@/components/Footer';
import InstantSiteCheckout from '@/components/InstantSiteCheckout';
import '@/styles/file-input.css';

const InstantSiteForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const [formData, setFormData] = useState({
    // Contact Information
    fullName: '',
    email: '',
    phone: '',
    contactMethod: 'email',

    // Business Details
    businessName: '',
    businessDescription: '',
    existingLinks: '',

    // Domain & Hosting
    hasDomain: '',
    domainName: '',
    domainHelp: false,
    hasHosting: '',
    hostingInfo: '',
    hostingHelp: false,

    // Website Goals
    goals: {
      informational: false,
      promoteService: false,
      portfolio: false,
      event: false,
      linkHub: false,
      other: false,
      otherText: ''
    },

    // Pages & Content
    pages: {
      home: true,
      about: false,
      services: false,
      contact: false,
      gallery: false,
      faq: false,
      other: false,
      otherText: ''
    },
    pageContent: {
      home: '',
      page2: '',
      page3: ''
    },

    // Photos & Media
    mediaFiles: null as FileList | null,
    stockPhotoPreferences: '',

    // Branding & Style
    hasLogo: '',
    logoFile: null as File | null,
    wantPlaceholderLogo: false,
    brandColors: '',
    visualStyle: {
      minimal: false,
      bold: false,
      elegant: false,
      modern: false,
      artsy: false,
      other: false,
      otherText: ''
    },

    // Optional Add-Ons
    addOns: {
      analytics: false,
      seo: false,
      socialLinks: false,
      contactForm: false,
      emailSignup: false,
      embeddedMedia: false
    },

    // Final Notes
    additionalNotes: '',
    specificDeadline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (category: string, item: string) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev] as any,
        [item]: !(prev[category as keyof typeof prev] as any)[item]
      }
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (name === 'mediaFiles') {
      setFormData(prev => ({ ...prev, mediaFiles: files }));
    } else if (name === 'logoFile' && files && files[0]) {
      setFormData(prev => ({ ...prev, logoFile: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.businessName || !formData.businessDescription) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    // Show checkout step instead of submitting directly
    setShowCheckout(true);
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckoutComplete = async (paymentData: any) => {
    setIsSubmitting(true);

    // Here you would normally submit to your backend
    // For now, we'll simulate the submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Order completed successfully!",
        description: "Redirecting to schedule your design meeting...",
      });
      navigate('/instant-site-success');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="flex-grow pt-32 pb-20">
        <div className="container-custom max-w-3xl">
          {!showCheckout ? (
            <>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Instant Site Setup</h1>
                <p className="text-lg text-white/70">
                  Please provide the following information to help us create your perfect website
                </p>
                <p className="text-sm text-green-400 mt-2">
                  Special offer: $650 for a complete website in 24 hours!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                {/* 1. Contact Information */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="text-blue-400 mr-2">🔹</span> 1. Contact Information
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name: *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="bg-black/50 border-gray-700 text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address: *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-black/50 border-gray-700 text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number (optional):</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-black/50 border-gray-700 text-white"
                      />
                    </div>

                    <div>
                      <Label>Preferred contact method for revision feedback:</Label>
                      <RadioGroup
                        value={formData.contactMethod}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, contactMethod: value }))}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="email-contact" />
                          <Label htmlFor="email-contact">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="text" id="text-contact" />
                          <Label htmlFor="text-contact">Text</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="whatsapp" id="whatsapp-contact" />
                          <Label htmlFor="whatsapp-contact">WhatsApp</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other-contact" />
                          <Label htmlFor="other-contact">Other</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                {/* 2. Business or Project Details */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="text-blue-400 mr-2">🔹</span> 2. Business or Project Details
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="businessName">Business / Project Name: *</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="bg-black/50 border-gray-700 text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="businessDescription">What does your business or brand do? (1-2 sentences) *</Label>
                      <Textarea
                        id="businessDescription"
                        name="businessDescription"
                        required
                        rows={3}
                        value={formData.businessDescription}
                        onChange={handleInputChange}
                        className="bg-black/50 border-gray-700 text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="existingLinks">Do you have an existing website or social media pages? (Paste any links here)</Label>
                      <Textarea
                        id="existingLinks"
                        name="existingLinks"
                        rows={2}
                        value={formData.existingLinks}
                        onChange={handleInputChange}
                        className="bg-black/50 border-gray-700 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Domain & Hosting */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="text-blue-400 mr-2">🔹</span> 3. Domain & Hosting
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <Label>Do you already have a domain name?</Label>
                      <RadioGroup
                        value={formData.hasDomain}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, hasDomain: value }))}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="domain-yes" />
                          <Label htmlFor="domain-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="domain-no" />
                          <Label htmlFor="domain-no">No</Label>
                        </div>
                      </RadioGroup>

                      {formData.hasDomain === 'yes' && (
                        <div className="mt-4">
                          <Label htmlFor="domainName">What is it?</Label>
                          <Input
                            id="domainName"
                            name="domainName"
                            value={formData.domainName}
                            onChange={handleInputChange}
                            className="bg-black/50 border-gray-700 text-white"
                          />
                        </div>
                      )}

                      {formData.hasDomain === 'no' && (
                        <div className="mt-4 flex items-center space-x-2">
                          <Checkbox
                            id="domainHelp"
                            checked={formData.domainHelp}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, domainHelp: checked as boolean }))}
                          />
                          <Label htmlFor="domainHelp">Would you like help choosing or setting one up?</Label>
                        </div>
                      )}
                    </div>

                    <div>
                      <Label>Do you have a website host already (e.g., GoDaddy, Bluehost, Webflow, Framer)?</Label>
                      <RadioGroup
                        value={formData.hasHosting}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, hasHosting: value }))}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="hosting-yes" />
                          <Label htmlFor="hosting-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="hosting-no" />
                          <Label htmlFor="hosting-no">No</Label>
                        </div>
                      </RadioGroup>

                      {formData.hasHosting === 'yes' && (
                        <div className="mt-4">
                          <Label htmlFor="hostingInfo">Please share login access or invite instructions</Label>
                          <Textarea
                            id="hostingInfo"
                            name="hostingInfo"
                            rows={2}
                            value={formData.hostingInfo}
                            onChange={handleInputChange}
                            className="bg-black/50 border-gray-700 text-white"
                          />
                        </div>
                      )}

                      {formData.hasHosting === 'no' && (
                        <p className="mt-4 text-sm text-gray-400">We can help you get set up</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* 4. Website Goals */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="text-blue-400 mr-2">🔹</span> 4. Website Goals
                  </h2>

                  <div className="space-y-4">
                    <Label>What is the main goal of this site? (Check all that apply)</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="goal-informational"
                          checked={formData.goals.informational}
                          onCheckedChange={() => handleCheckboxChange('goals', 'informational')}
                        />
                        <Label htmlFor="goal-informational">Informational</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="goal-promote"
                          checked={formData.goals.promoteService}
                          onCheckedChange={() => handleCheckboxChange('goals', 'promoteService')}
                        />
                        <Label htmlFor="goal-promote">Promote a service or product</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="goal-portfolio"
                          checked={formData.goals.portfolio}
                          onCheckedChange={() => handleCheckboxChange('goals', 'portfolio')}
                        />
                        <Label htmlFor="goal-portfolio">Portfolio</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="goal-event"
                          checked={formData.goals.event}
                          onCheckedChange={() => handleCheckboxChange('goals', 'event')}
                        />
                        <Label htmlFor="goal-event">Event / Launch</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="goal-linkhub"
                          checked={formData.goals.linkHub}
                          onCheckedChange={() => handleCheckboxChange('goals', 'linkHub')}
                        />
                        <Label htmlFor="goal-linkhub">Link-in-bio style hub</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="goal-other"
                          checked={formData.goals.other}
                          onCheckedChange={() => handleCheckboxChange('goals', 'other')}
                        />
                        <Label htmlFor="goal-other">Other:</Label>
                        {formData.goals.other && (
                          <Input
                            name="goalsOtherText"
                            value={formData.goals.otherText}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              goals: { ...prev.goals, otherText: e.target.value }
                            }))}
                            className="bg-black/50 border-gray-700 text-white ml-2"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Pages & Content */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="text-blue-400 mr-2">🔹</span> 5. Pages & Content
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <Label>This site includes 3 pages. Which 3 pages do you want? (or rename as needed)</Label>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="page-home"
                            checked={formData.pages.home}
                            onCheckedChange={() => handleCheckboxChange('pages', 'home')}
                          />
                          <Label htmlFor="page-home">Home</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="page-about"
                            checked={formData.pages.about}
                            onCheckedChange={() => handleCheckboxChange('pages', 'about')}
                          />
                          <Label htmlFor="page-about">About</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="page-services"
                            checked={formData.pages.services}
                            onCheckedChange={() => handleCheckboxChange('pages', 'services')}
                          />
                          <Label htmlFor="page-services">Services</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="page-contact"
                            checked={formData.pages.contact}
                            onCheckedChange={() => handleCheckboxChange('pages', 'contact')}
                          />
                          <Label htmlFor="page-contact">Contact</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="page-gallery"
                            checked={formData.pages.gallery}
                            onCheckedChange={() => handleCheckboxChange('pages', 'gallery')}
                          />
                          <Label htmlFor="page-gallery">Gallery / Portfolio</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="page-faq"
                            checked={formData.pages.faq}
                            onCheckedChange={() => handleCheckboxChange('pages', 'faq')}
                          />
                          <Label htmlFor="page-faq">FAQ / Testimonials</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="page-other"
                            checked={formData.pages.other}
                            onCheckedChange={() => handleCheckboxChange('pages', 'other')}
                          />
                          <Label htmlFor="page-other">Other:</Label>
                          {formData.pages.other && (
                            <Input
                              value={formData.pages.otherText}
                              onChange={(e) => setFormData(prev => ({
                                ...prev,
                                pages: { ...prev.pages, otherText: e.target.value }
                              }))}
                              className="bg-black/50 border-gray-700 text-white ml-2"
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label>Please provide text content for each page (copy/paste or attach a doc):</Label>
                      <div className="space-y-4 mt-4">
                        <div>
                          <Label htmlFor="homeContent">Home:</Label>
                          <Textarea
                            id="homeContent"
                            value={formData.pageContent.home}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              pageContent: { ...prev.pageContent, home: e.target.value }
                            }))}
                            rows={4}
                            className="bg-black/50 border-gray-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="page2Content">Page 2:</Label>
                          <Textarea
                            id="page2Content"
                            value={formData.pageContent.page2}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              pageContent: { ...prev.pageContent, page2: e.target.value }
                            }))}
                            rows={4}
                            className="bg-black/50 border-gray-700 text-white"
                          />
                        </div>
                        <div>
                          <Label htmlFor="page3Content">Page 3:</Label>
                          <Textarea
                            id="page3Content"
                            value={formData.pageContent.page3}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              pageContent: { ...prev.pageContent, page3: e.target.value }
                            }))}
                            rows={4}
                            className="bg-black/50 border-gray-700 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Photos & Media */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="text-blue-400 mr-2">🔹</span> 6. Photos & Media
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="mediaFiles">Upload up to 10 high-quality images (products, headshots, background, etc.)</Label>
                      <div className="mt-2">
                        <div className="file-input-container bg-black/50 border border-gray-700 rounded-md">
                          <input
                            id="mediaFiles"
                            name="mediaFiles"
                            type="file"
                            multiple
                            accept=".png,.jpg,.jpeg,.mp4,.gif,.pdf"
                            onChange={handleFileChange}
                          />
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">Accepted formats: PNG, JPG, MP4, GIF, PDF</p>
                    </div>

                    <div>
                      <Label htmlFor="stockPhotoPreferences">Any stock photo preferences or themes? (e.g., minimal, bold, nature, etc.)</Label>
                      <Input
                        id="stockPhotoPreferences"
                        name="stockPhotoPreferences"
                        value={formData.stockPhotoPreferences}
                        onChange={handleInputChange}
                        className="bg-black/50 border-gray-700 text-white mt-2"
                        placeholder="e.g., minimal, bold, nature, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* 7. Branding & Style */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="text-blue-400 mr-2">🔹</span> 7. Branding & Style
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <Label>Do you have a logo?</Label>
                      <RadioGroup
                        value={formData.hasLogo}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, hasLogo: value }))}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="logo-yes" />
                          <Label htmlFor="logo-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="logo-no" />
                          <Label htmlFor="logo-no">No</Label>
                        </div>
                      </RadioGroup>

                      {formData.hasLogo === 'yes' && (
                        <div className="mt-4">
                          <Label htmlFor="logoFile">Please upload it (PNG/SVG preferred)</Label>
                          <div className="mt-2">
                            <Input
                              id="logoFile"
                              name="logoFile"
                              type="file"
                              accept=".png,.svg,.jpg,.jpeg"
                              onChange={handleFileChange}
                              className="bg-black/50 border-gray-700 text-white w-full h-16
                                flex items-center
                                file:mr-4 file:py-1.5 file:px-3 
                                file:rounded-full file:border-0 
                                file:text-xs file:font-semibold 
                                file:bg-white file:text-black 
                                hover:file:bg-white/90
                                file:cursor-pointer cursor-pointer"
                            />
                          </div>
                        </div>
                      )}

                      {formData.hasLogo === 'no' && (
                        <div className="mt-4 flex items-center space-x-2">
                          <Checkbox
                            id="placeholderLogo"
                            checked={formData.wantPlaceholderLogo}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, wantPlaceholderLogo: checked as boolean }))}
                          />
                          <Label htmlFor="placeholderLogo">Want us to create a quick placeholder logo?</Label>
                        </div>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="brandColors">What are your brand colors (if any)?</Label>
                      <Input
                        id="brandColors"
                        name="brandColors"
                        value={formData.brandColors}
                        onChange={handleInputChange}
                        placeholder="Hex codes or descriptions (e.g. 'navy blue and gold')"
                        className="bg-black/50 border-gray-700 text-white"
                      />
                    </div>

                    <div>
                      <Label>What's your preferred visual style? (Check all that apply)</Label>
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="style-minimal"
                            checked={formData.visualStyle.minimal}
                            onCheckedChange={() => handleCheckboxChange('visualStyle', 'minimal')}
                          />
                          <Label htmlFor="style-minimal">Clean & Minimal</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="style-bold"
                            checked={formData.visualStyle.bold}
                            onCheckedChange={() => handleCheckboxChange('visualStyle', 'bold')}
                          />
                          <Label htmlFor="style-bold">Bold & Colorful</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="style-elegant"
                            checked={formData.visualStyle.elegant}
                            onCheckedChange={() => handleCheckboxChange('visualStyle', 'elegant')}
                          />
                          <Label htmlFor="style-elegant">Elegant / Luxury</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="style-modern"
                            checked={formData.visualStyle.modern}
                            onCheckedChange={() => handleCheckboxChange('visualStyle', 'modern')}
                          />
                          <Label htmlFor="style-modern">Modern / Tech</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="style-artsy"
                            checked={formData.visualStyle.artsy}
                            onCheckedChange={() => handleCheckboxChange('visualStyle', 'artsy')}
                          />
                          <Label htmlFor="style-artsy">Artsy / Creative</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="style-other"
                            checked={formData.visualStyle.other}
                            onCheckedChange={() => handleCheckboxChange('visualStyle', 'other')}
                          />
                          <Label htmlFor="style-other">Other:</Label>
                          {formData.visualStyle.other && (
                            <Input
                              value={formData.visualStyle.otherText}
                              onChange={(e) => setFormData(prev => ({
                                ...prev,
                                visualStyle: { ...prev.visualStyle, otherText: e.target.value }
                              }))}
                              className="bg-black/50 border-gray-700 text-white ml-2"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8. Optional Add-Ons */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="text-blue-400 mr-2">🔹</span> 8. Optional Add-Ons (no extra cost on this plan)
                  </h2>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="addon-analytics"
                        checked={formData.addOns.analytics}
                        onCheckedChange={() => handleCheckboxChange('addOns', 'analytics')}
                      />
                      <Label htmlFor="addon-analytics">Google Analytics setup</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="addon-seo"
                        checked={formData.addOns.seo}
                        onCheckedChange={() => handleCheckboxChange('addOns', 'seo')}
                      />
                      <Label htmlFor="addon-seo">Basic SEO tags (titles, meta descriptions)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="addon-social"
                        checked={formData.addOns.socialLinks}
                        onCheckedChange={() => handleCheckboxChange('addOns', 'socialLinks')}
                      />
                      <Label htmlFor="addon-social">Social media link bar</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="addon-contact"
                        checked={formData.addOns.contactForm}
                        onCheckedChange={() => handleCheckboxChange('addOns', 'contactForm')}
                      />
                      <Label htmlFor="addon-contact">Contact form or booking link</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="addon-email"
                        checked={formData.addOns.emailSignup}
                        onCheckedChange={() => handleCheckboxChange('addOns', 'emailSignup')}
                      />
                      <Label htmlFor="addon-email">Email list signup form</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="addon-media"
                        checked={formData.addOns.embeddedMedia}
                        onCheckedChange={() => handleCheckboxChange('addOns', 'embeddedMedia')}
                      />
                      <Label htmlFor="addon-media">Embedded video or media</Label>
                    </div>
                  </div>
                </div>

                {/* 9. Final Notes */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="text-blue-400 mr-2">🔹</span> 9. Final Notes
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="additionalNotes">Anything else you'd like us to know?</Label>
                      <Textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                        rows={3}
                        className="bg-black/50 border-gray-700 text-white"
                      />
                    </div>

                    <div>
                      <Label htmlFor="specificDeadline">Do you have a deadline besides the 24-hour turnaround?</Label>
                      <Input
                        id="specificDeadline"
                        name="specificDeadline"
                        value={formData.specificDeadline}
                        onChange={handleInputChange}
                        className="bg-black/50 border-gray-700 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-lg font-semibold rounded-full"
                  >
                    Continue to Payment
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete Your Order</h1>
                <p className="text-lg text-white/70">
                  You're one step away from your new website!
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Use discount code <span className="font-mono bg-gray-800 px-2 py-1 rounded">testtest</span> to skip payment for testing
                </p>
              </div>

              <InstantSiteCheckout 
                formData={formData} 
                onSubmit={handleCheckoutComplete}
              />

              <button
                type="button"
                onClick={() => setShowCheckout(false)}
                className="mt-4 text-blue-400 hover:text-blue-300 underline text-sm"
              >
                ← Back to form
              </button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InstantSiteForm;