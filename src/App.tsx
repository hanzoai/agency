import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Subscribe from "./pages/Subscribe";
import OnboardingForm from "./pages/Onboarding";
import OnboardingSuccess from "./pages/OnboardingSuccess";
import OurWork from "./pages/OurWork";
import CaseStudy from "./pages/CaseStudy";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Payment from "./pages/Payment";
import Enterprise from "./pages/Enterprise";
import ServicesPage from "./pages/ServicesPage";
import SolutionsPage from "./pages/SolutionsPage";

const queryClient = new QueryClient();

// Scroll to top component that will be used on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/onboarding" element={<OnboardingForm />} />
          <Route path="/onboarding-success" element={<OnboardingSuccess />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/services/*" element={<ServicesPage />} />
          <Route path="/capabilities/*" element={<SolutionsPage />} />
          <Route path="/industries/*" element={<SolutionsPage />} />
          <Route path="/case-studies" element={<Navigate to="/our-work" replace />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/terms" element={<NotFound />} />
          <Route path="/privacy" element={<NotFound />} />
          <Route path="/cookies" element={<NotFound />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
