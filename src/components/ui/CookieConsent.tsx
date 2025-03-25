
import React, { useState, useEffect } from 'react';
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
    <div className="fixed bottom-0 inset-x-0 z-50">
      {isMobile ? (
        // Mobile cookie consent - simplified and smaller
        <div className="bg-[#1A1F2C] text-white p-3 border-t border-gray-700">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-sm font-semibold">Cookie Policy</h3>
            <button 
              onClick={() => setShowConsent(false)}
              className="text-gray-400 hover:text-white focus:outline-none p-1"
              aria-label="Close"
            >
              <X size={14} />
            </button>
          </div>
          <p className="text-xs text-gray-300 mb-2">
            By clicking "Allow" you agree to the storing of cookies on your device.{' '}
            <Link to="/cookie-policy" className="text-accent hover:underline">
              More info
            </Link>
          </p>
          <div className="flex gap-2 w-full">
            <Button
              variant="outline"
              size="sm"
              onClick={acceptNecessary}
              className="flex-1 bg-gray-700 hover:bg-gray-800 text-white border-gray-600 text-xs py-1 h-auto"
            >
              Deny
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={acceptAll}
              className="flex-1 bg-accent hover:bg-accent/90 text-white text-xs py-1 h-auto"
            >
              Allow
            </Button>
          </div>
        </div>
      ) : (
        // Desktop cookie consent - optimized
        <div className="bg-[#1A1F2C] text-white py-2 px-4 flex items-center justify-between border-t border-gray-700">
          <div className="flex-1">
            <h3 className="text-base font-semibold mb-0.5">Cookie Policy</h3>
            <p className="text-xs text-gray-300 pr-4">
              By clicking "Allow" you agree to the storing of cookies on your device.{' '}
              <Link to="/cookie-policy" className="text-accent hover:underline">
                More info
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={acceptNecessary}
              className="bg-gray-700 hover:bg-gray-800 text-white border-gray-600 py-1 h-auto text-xs"
            >
              Deny
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={acceptAll}
              className="bg-accent hover:bg-accent/90 text-white py-1 h-auto text-xs"
            >
              Allow
            </Button>
            <button 
              onClick={() => setShowConsent(false)}
              className="ml-1 text-gray-400 hover:text-white focus:outline-none p-1"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Export as default but wrap with React.memo to prevent unnecessary re-renders
export default React.memo(CookieConsent);
