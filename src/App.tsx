import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import EcommerceDevelopment from "./pages/EcommerceDevelopment";
import HealthcareDevelopment from "./pages/HealthcareDevelopment";
import EducationalDevelopment from "./pages/EducationalDevelopment";
import NonprofitDevelopment from "./pages/NonprofitDevelopment";
import LawFirmDevelopment from "./pages/LawFirmDevelopment";
import RealEstateDevelopment from "./pages/RealEstateDevelopment";
import FitnessDevelopment from "./pages/FitnessDevelopment";
import CookieConsent from "./components/ui/CookieConsent";
import ErrorBoundary from "./components/ui/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
            <Route path="/services/healthcare-development" element={<HealthcareDevelopment />} />
            <Route path="/services/educational-development" element={<EducationalDevelopment />} />
            <Route path="/services/nonprofit-development" element={<NonprofitDevelopment />} />
            <Route path="/services/law-firm-development" element={<LawFirmDevelopment />} />
            <Route path="/services/real-estate-development" element={<RealEstateDevelopment />} />
            <Route path="/services/fitness-development" element={<FitnessDevelopment />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
