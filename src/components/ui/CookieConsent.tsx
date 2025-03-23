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
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
        <div className="p-4 md:p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">We value your privacy</h3>
            <button 
              onClick={() => setShowConsent(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="mt-2">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies as described in our{' '}
              <Link to="/cookie-policy" className="text-accent hover:underline">
                Cookie Policy
              </Link>.
            </p>
          </div>
          
          <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={acceptNecessary}
            >
              Accept Necessary Only
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={acceptAll}
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 