import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NewHeader from "../components/NewHeaderSimple";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OnboardingForm from "./pages/Onboarding";
import OnboardingSuccess from "./pages/OnboardingSuccess";
import OurWork from "./pages/OurWork";
import CaseStudy from "./pages/CaseStudy";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Payment from "./pages/Payment";
import Subscribed from "./pages/Subscribed";
import Enterprise from "./pages/Enterprise";
import ServicesPage from "./pages/ServicesPage";
import SolutionsPage from "./pages/SolutionsPage";
import WhiteLabel from "./pages/WhiteLabel";
import { app } from "./data/contact";
import { Analytics } from "./analytics";
import { AIChatWidget } from "./components/AIChatWidget";

const queryClient = new QueryClient();

// An address that lives on another site: signing in and the client's workspace
// are the Hanzo app's, at hanzo.ai.
function Away({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
}

// Scroll position, and nothing else. Counting the navigation is <Analytics>'s
// job, and GA4's own history listener's (index.html) — a page_view sent from here
// would count every route twice.
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
        {/* Inside the router: <Analytics> counts one pageview per client-side
            route change, and a route change here never touches the network. */}
        <Analytics>
          <ScrollToTop />
          <NewHeader />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/subscribe" element={<Navigate to="/pricing" replace />} />
            <Route path="/onboarding" element={<OnboardingForm />} />
            <Route path="/onboarding-success" element={<OnboardingSuccess />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/services/*" element={<ServicesPage />} />
            <Route path="/capabilities" element={<SolutionsPage />} />
            <Route path="/capabilities/:slug" element={<SolutionsPage />} />
            <Route path="/industries" element={<SolutionsPage />} />
            <Route path="/industries/:slug" element={<SolutionsPage />} />
            <Route path="/case-studies" element={<Navigate to="/our-work" replace />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment-success" element={<Subscribed />} />
            <Route path="/instant-site-form" element={<Navigate to="/pricing" replace />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/platform" element={<Away to="https://hanzo.ai/platform" />} />
            <Route path="/white-label" element={<WhiteLabel />} />
            <Route path="/login" element={<Away to={app.login} />} />
            <Route path="/signup" element={<Away to={app.signup} />} />
            <Route path="/dashboard" element={<Away to={app.home} />} />

            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AIChatWidget />
        </Analytics>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
