
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CaseStudyTrillerFest from "./pages/CaseStudyTrillerFest";
import Subscribe from "./pages/Subscribe";
import OnboardingForm from "./pages/Onboarding";
import OnboardingSuccess from "./pages/OnboardingSuccess";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/case-study-trillerfest" element={<CaseStudyTrillerFest />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/onboarding" element={<OnboardingForm />} />
          <Route path="/onboarding-success" element={<OnboardingSuccess />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
