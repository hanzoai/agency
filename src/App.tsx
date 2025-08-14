import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NewHeader from "../components/NewHeaderSimple";
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
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Payment from "./pages/Payment";
import Enterprise from "./pages/Enterprise";
import ServicesPage from "./pages/ServicesPage";
import SolutionsPage from "./pages/SolutionsPage";
import InstantSiteForm from "./pages/InstantSiteForm";
import InstantSiteSuccess from "./pages/InstantSiteSuccess";
// Credit System Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PurchaseCredits from "./pages/PurchaseCredits";
import RedeemService from "./pages/RedeemService";
import History from "./pages/History";
import AddPaymentMethod from "./pages/AddPaymentMethod";
import AdminDashboard from "./pages/AdminDashboard";
import EmailInvitation from "./pages/EmailInvitation";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";
import Platform from "./pages/Platform";
import { initializeAnalytics, analytics } from "./utils/analytics";

const queryClient = new QueryClient();

// Initialize analytics
initializeAnalytics();

// Scroll to top component that will be used on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Track page navigation
    analytics.trackPageView(pathname, document.title);
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
        <NewHeader />
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
          <Route path="/instant-site-form" element={<InstantSiteForm />} />
          <Route path="/instant-site-success" element={<InstantSiteSuccess />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/platform" element={<Platform />} />

          {/* Credit System Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/purchase-credits" element={<PurchaseCredits />} />
          <Route path="/redeem/:serviceId" element={<RedeemService />} />
          <Route path="/history" element={<History />} />
          <Route path="/add-payment-method" element={<AddPaymentMethod />} />
          <Route path="/admin-invite" element={<EmailInvitation />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/cancel" element={<PaymentCancel />} />

          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
