import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll locking when mobile menu is open
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.classList.add('overflow-hidden', 'fixed', 'inset-x-0');
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.classList.remove('overflow-hidden', 'fixed', 'inset-x-0');
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
  }, [mobileNavOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  // External links
  const externalBlogUrl = "https://bmcrafts.co.uk/blog/"; // Replace with your WordPress URL

  const isActive = (path: string) => location.pathname === path;

  // Determine text color based on scroll position, dark mode, and mobile nav state
  const getTextColor = () => {
    if (isScrolled) return "text-foreground";
    
    // On hero sections where background might be dark/image
    if (location.pathname === "/") {
      return theme === "dark" ? "text-white" : "text-slate-800";
    }
    
    return "text-foreground";
  };

  // Handle link click and force scroll to top
  const handleLinkClick = () => {
    setMobileNavOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-4',
          location.pathname === "/" ? 'mt-10' : '', // Add margin-top when on homepage to account for announcement bar
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border'
            : location.pathname === "/"
              ? 'bg-transparent'
              : 'bg-background/95 backdrop-blur-md border-b border-border'
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tight transition-all duration-300 z-10"
            onClick={handleLinkClick}
          >
            <span className={cn(
              "font-bold transition-colors",
              getTextColor()
            )}>
              BM<span className="text-accent">Crafts</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-all duration-200 hover:text-accent focus-ring',
                  isActive(link.href) ? 'text-accent' : getTextColor()
                )}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}
            
            {/* External Blog Link */}
            <a
              href={externalBlogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'text-sm font-medium transition-all duration-200 hover:text-accent focus-ring',
                getTextColor()
              )}
            >
              Blog
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              to="/contact"
              className={cn(
                'hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-in-out focus-ring',
                theme === "dark"
                  ? 'bg-accent text-white hover:bg-accent/90'
                  : isScrolled
                    ? 'bg-accent text-white hover:bg-accent/90'
                    : 'bg-white text-accent hover:bg-white/90'
              )}
              onClick={handleLinkClick}
            >
              Get Free Consultation
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-50 transition-colors focus-ring rounded-full p-2 bg-background/95 backdrop-blur-md border border-border shadow-sm"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileNavOpen ? (
                <X size={22} className="text-foreground" />
              ) : (
                <Menu size={22} className="text-foreground" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Completely separated mobile menu */}
      {mobileNavOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background md:hidden"
          aria-modal="true"
          role="dialog"
        >
          <div className="flex flex-col h-[100dvh] overflow-y-auto pt-20 pb-6 px-6">
            <nav className="flex-grow flex flex-col justify-center items-center space-y-2 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "w-full max-w-md text-center text-lg font-medium py-4 px-4 rounded-md transition-colors",
                    isActive(link.href) 
                      ? "bg-accent/10 text-accent font-semibold" 
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  )}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* External Blog Link (Mobile) */}
              <a
                href={externalBlogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md text-center text-lg font-medium py-4 px-4 rounded-md transition-colors text-foreground hover:text-accent hover:bg-accent/5"
              >
                Blog
              </a>
            </nav>
            
            <div className="flex flex-col items-center mt-auto pt-6">
              <Link
                to="/contact"
                className="w-full max-w-md text-center px-6 py-3.5 rounded-full text-base font-medium bg-accent text-white hover:bg-accent/90 transition-colors"
                onClick={handleLinkClick}
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
