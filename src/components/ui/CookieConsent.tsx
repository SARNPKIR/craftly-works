
import { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from './button';
import { useIsMobile } from '@/hooks/use-mobile';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show cookie consent after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000); // Increased delay to allow critical content to load first
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 will-change-transform">
      {isMobile ? (
        // Mobile cookie consent
        <div className="bg-[#1A1F2C] text-white p-4 border-t border-gray-700">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-base font-semibold">Cookie Policy</h3>
            <button 
              onClick={() => setShowConsent(false)}
              className="text-gray-400 hover:text-white focus:outline-none p-1"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-gray-300 mb-3">
            By clicking "Allow All" you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.{' '}
            <Link to="/cookie-policy" className="text-accent hover:underline">
              View cookie details
            </Link>
          </p>
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              size="sm"
              onClick={acceptNecessary}
              className="flex-1 bg-gray-700 hover:bg-gray-800 text-white border-gray-600"
            >
              Deny
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={acceptAll}
              className="flex-1 bg-accent hover:bg-accent/90 text-white"
            >
              Allow All
            </Button>
          </div>
        </div>
      ) : (
        // Desktop cookie consent
        <div className="bg-[#1A1F2C] text-white py-3 px-6 flex items-center justify-between border-t border-gray-700">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">Cookie Policy</h3>
            <p className="text-sm text-gray-300 pr-4">
              By clicking "Allow All" you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.{' '}
              <Link to="/cookie-policy" className="text-accent hover:underline">
                View cookie details
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={acceptNecessary}
              className="bg-gray-700 hover:bg-gray-800 text-white border-gray-600"
            >
              Deny
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={acceptAll}
              className="bg-accent hover:bg-accent/90 text-white"
            >
              Allow All
            </Button>
            <button 
              onClick={() => setShowConsent(false)}
              className="ml-2 text-gray-400 hover:text-white focus:outline-none p-1"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Export as default but wrap with React.memo to prevent unnecessary re-renders
export default React.memo(CookieConsent);
