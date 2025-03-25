
import * as React from "react";
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import { ThemeProvider } from "next-themes";

// Eagerly load the Index page as it's the most common entry point
import Index from "./pages/Index";

// Lazy load all other pages to reduce initial bundle size
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const EcommerceDevelopment = lazy(() => import("./pages/EcommerceDevelopment"));
const HealthcareDevelopment = lazy(() => import("./pages/HealthcareDevelopment"));
const EducationalDevelopment = lazy(() => import("./pages/EducationalDevelopment"));
const NonprofitDevelopment = lazy(() => import("./pages/NonprofitDevelopment"));
const LawFirmDevelopment = lazy(() => import("./pages/LawFirmDevelopment"));
const RealEstateDevelopment = lazy(() => import("./pages/RealEstateDevelopment"));
const FitnessDevelopment = lazy(() => import("./pages/FitnessDevelopment"));
const CookieConsent = lazy(() => import("./components/ui/CookieConsent"));

// Configure query client with smaller cache size to reduce memory usage
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

// Force browser to use manual scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
          <Suspense fallback={null}>
            <CookieConsent />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
