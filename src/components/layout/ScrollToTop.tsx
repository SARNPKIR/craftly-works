import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that aggressively forces scroll to top on route changes
 * Place this at the top level of your application
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    // Only scroll to top when the pathname changes
    if (prevPathRef.current !== pathname) {
      // Force immediate scroll
      window.scrollTo(0, 0);
      
      // Aggressive approach with multiple scroll attempts to ensure it works
      const scrollToTopMultipleTimes = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };
      
      // Immediate scroll
      scrollToTopMultipleTimes();
      
      // After DOM update
      requestAnimationFrame(() => {
        scrollToTopMultipleTimes();
      });
      
      // After a short delay (for any animations or transitions)
      setTimeout(() => {
        scrollToTopMultipleTimes();
      }, 50);
      
      // Update the previous path
      prevPathRef.current = pathname;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop; 