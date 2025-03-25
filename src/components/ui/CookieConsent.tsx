
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Button } from './button';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show cookie consent after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
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
      <div className="bg-[#1A1F2C] text-white py-3 px-6 flex items-center justify-between border-t border-gray-700">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">Cookie Policy</h3>
          <p className="text-sm text-gray-300 pr-4">
            By clicking "Allow All" you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.{' '}
            <Link to="/cookie-policy" className="text-blue-400 hover:underline">
              View cookie details
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={acceptNecessary}
            className="bg-gray-600 hover:bg-gray-700 text-white border-gray-500"
          >
            Deny
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={acceptAll}
            className="bg-[#3498db] hover:bg-[#2980b9] text-white"
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
    </div>
  );
};

export default CookieConsent;
