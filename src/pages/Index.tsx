
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import useScrollToTop from '@/hooks/useScrollToTop';

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
          // For same-page hash links, use smooth scrolling with offset for the header
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
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
