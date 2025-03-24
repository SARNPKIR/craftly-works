import { useState } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-accent text-white relative">
      <div className="container mx-auto py-2.5 px-6 flex items-center justify-center text-center relative">
        <div className="flex items-center gap-1.5">
          <Sparkles size={16} className="flex-shrink-0 animate-pulse" />
          <p className="text-sm font-medium">
            <span className="font-bold">Special Offer:</span> 20% off all web packages until June 30th
            <Link to="/pricing" className="underline ml-2 inline-flex items-center whitespace-nowrap hover:text-white/90">
              View Deals <ArrowRight size={14} className="ml-1" />
            </Link>
          </p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 text-white/80 hover:text-white focus:outline-none"
          aria-label="Close announcement"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar; 