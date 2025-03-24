import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A React Hook that aggressively scrolls the window to the top when the route changes
 * @param dependencies Additional dependencies to trigger scrolling
 */
export function useScrollToTop(dependencies: any[] = []) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element with offset for the header
    if (hash) {
      // Delay to ensure the DOM is fully loaded
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 80; // Adjust based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
      return;
    }
    
    // Otherwise force scroll to top immediately
    const forceScrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Execute multiple times to ensure it works
    forceScrollToTop();
    
    // Execute after frame paint
    requestAnimationFrame(forceScrollToTop);
    
    // Execute after a slight delay
    setTimeout(forceScrollToTop, 50);
    
    // Execute one more time after any potential load events
    setTimeout(forceScrollToTop, 150);
    
  }, [pathname, hash, ...dependencies]);
}

export default useScrollToTop; 