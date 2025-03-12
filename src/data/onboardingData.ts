
import { FormSection } from '@/types/onboarding';

export const formSections: FormSection[] = [
  {
    title: "Business Information",
    fields: [
      { id: "companyName", label: "What's your company's official name?", type: "text", required: true },
      { id: "businessDescription", label: "Provide a short description of your business and core offering.", type: "textarea", required: true },
      { id: "targetAudience", label: "Describe your target audience in detail (industry, demographics, preferences).", type: "textarea", required: true },
      { id: "websiteGoal", label: "What is your primary goal for this website? (e.g., sales, leads, information, credibility).", type: "textarea", required: true },
    ]
  },
  {
    title: "Design Preferences",
    fields: [
      { id: "websitesAdmired", label: "List 3-5 websites you admire and briefly explain why.", type: "textarea", required: true },
      { id: "requiredPages", label: "What main pages or sections must your website include?", type: "textarea", required: true },
      { id: "brandGuidelines", label: "Provide your brand guidelines: colors, fonts, logo files.", type: "textarea", required: true },
      { id: "toneStyle", label: "What is the tone and style you'd like the website copy to reflect? (e.g., professional, casual, persuasive).", type: "textarea", required: true },
      { id: "visualStyle", label: "List any specific imagery or visual style you want included (minimalist, bold, luxury, tech-focused).", type: "textarea", required: true },
    ]
  },
  {
    title: "Content & Technical Requirements",
    fields: [
      { id: "existingContent", label: "Do you have existing content ready? If not, outline key messages you'd like AI to generate clearly.", type: "textarea", required: true },
      { id: "seoTerms", label: "Share any key phrases or SEO terms your website should emphasize.", type: "textarea", required: false },
      { id: "socialMediaLinks", label: "Provide social media and relevant external links to include.", type: "textarea", required: false },
      { id: "productsServices", label: "Outline your products/services clearly with key benefits.", type: "textarea", required: true },
      { id: "technicalIntegrations", label: "Any technical integrations required? (booking, payments, forms, CRM).", type: "textarea", required: false },
    ]
  },
  {
    title: "Project Timeline & Additional Info",
    fields: [
      { id: "timeline", label: "Preferred timeline or deadlines?", type: "text", required: false },
      { id: "competitors", label: "List competitors' websites or businesses you wish to differentiate from.", type: "textarea", required: false },
      { id: "additionalRequests", label: "Any additional requests or inspiration you want incorporated into your project?", type: "textarea", required: false },
      { id: "designBrief", label: "Upload Design Brief, branding Document, pitch decks, any content with a visual representation of your brand", type: "file", accept: ".jpg,.png,.jpeg,.svg,.pdf", required: false },
      { id: "logo", label: "Upload your logo", type: "file", accept: ".jpg,.png,.svg", required: false },
    ]
  }
];
