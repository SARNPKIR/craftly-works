
import { useEffect, lazy, Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import AnnouncementBar from '@/components/ui/AnnouncementBar';
import useScrollToTop from '@/hooks/useScrollToTop';

// Lazy load non-critical components
const Services = lazy(() => import('@/components/sections/Services'));
const WhyChooseUs = lazy(() => import('@/components/sections/WhyChooseUs'));
const Testimonials = lazy(() => import('@/components/sections/Testimonials'));
const CookieConsent = lazy(() => import('@/components/ui/CookieConsent'));

// Loading fallback for lazy-loaded components
const SectionLoading = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="animate-pulse bg-gray-200 rounded-md h-96 w-full max-w-5xl"></div>
  </div>
);

const Index = () => {
  // Use the scroll to top hook
  useScrollToTop();

  // Smooth scroll functionality for hash links (within the same page)
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        // Only handle hash links for the current page (not navigation to other pages with hash)
        const currentPath = window.location.pathname;
        const anchorPath = anchor.pathname;
        
        // If we're navigating to a different page, let the router handle it
        if (anchorPath && anchorPath !== currentPath && anchorPath !== '/') {
          return;
        }
        
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          // For same-page hash links, use smooth scrolling
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Clean up event listener
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="page-wrapper flex flex-col min-h-screen" data-page="home">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow">
        {/* Critical content - loaded immediately */}
        <Hero />
        
        {/* Non-critical content - lazy loaded */}
        <Suspense fallback={<SectionLoading />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <WhyChooseUs />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Testimonials />
        </Suspense>
      </main>
      <Footer />
      
      {/* Defer cookie consent loading */}
      <Suspense fallback={null}>
        <CookieConsent />
      </Suspense>
    </div>
  );
};

export default Index;
