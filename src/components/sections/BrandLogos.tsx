
import React from 'react';

const BrandLogos = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Google_logo.svg" 
        alt="Google" 
        className="h-6 object-contain opacity-60 hover:opacity-100 transition-opacity" 
        width="60" 
        height="24"
        loading="lazy"
      />
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Amazon_logo.svg" 
        alt="Amazon" 
        className="h-6 object-contain opacity-60 hover:opacity-100 transition-opacity" 
        width="60" 
        height="24"
        loading="lazy"
      />
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Microsoft_logo.svg" 
        alt="Microsoft" 
        className="h-5 object-contain opacity-60 hover:opacity-100 transition-opacity" 
        width="50" 
        height="20"
        loading="lazy"
      />
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
        alt="IBM" 
        className="h-5 object-contain opacity-60 hover:opacity-100 transition-opacity" 
        width="50" 
        height="20"
        loading="lazy"
      />
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/1/13/Starbucks_Corporation_Logo_2011.svg" 
        alt="Starbucks" 
        className="h-6 object-contain opacity-60 hover:opacity-100 transition-opacity" 
        width="60" 
        height="24"
        loading="lazy"
      />
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
        alt="Amazon" 
        className="h-6 object-contain opacity-60 hover:opacity-100 transition-opacity" 
        width="60" 
        height="24"
        loading="lazy"
      />
    </div>
  );
};

export default BrandLogos;
