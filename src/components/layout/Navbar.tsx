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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileNavOpen]);

  // Add a useEffect to close the menu when location changes
  useEffect(() => {
    // Close mobile menu when navigating to a new page
    setMobileNavOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Determine text color based on scroll position, dark mode, and mobile nav state
  const getTextColor = () => {
    if (mobileNavOpen) return "text-foreground";
    if (isScrolled) return "text-foreground";
    
    // On hero sections where background might be dark/image
    if (location.pathname === "/") {
      return theme === "dark" ? "text-white" : "text-slate-800";
    }
    
    return "text-foreground";
  };

  // Update the link click handler to force scroll to the top
  const handleLinkClick = () => {
    // Close mobile nav if open
    setMobileNavOpen(false);

    // Force immediate scroll to top
    const forceScrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Execute immediately
    forceScrollToTop();
    
    // Also execute in the next frame and after a delay
    requestAnimationFrame(forceScrollToTop);
    setTimeout(forceScrollToTop, 50);
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out min-h-[80px] flex items-center',
        isScrolled || theme === "dark"
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
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
            className="md:hidden z-[60] transition-colors focus-ring rounded-full p-2 bg-background/95 backdrop-blur-md border border-border shadow-sm"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
            style={{ position: 'relative' }}
          >
            {mobileNavOpen ? (
              <X size={22} className="text-foreground" />
            ) : (
              <Menu size={22} className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Further improved structure */}
        <div
          className={cn(
            'fixed inset-0 bg-background/98 backdrop-blur-md z-[50] transition-all duration-300 ease-in-out md:hidden',
            mobileNavOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible pointer-events-none'
          )}
          style={{ height: '100vh', overflowY: 'auto' }}
        >
          <div className="relative min-h-screen flex flex-col">
            <div className="absolute top-0 left-0 right-0 h-20 bg-background/95 backdrop-blur-md border-b border-border flex items-center justify-between px-6">
              <Link 
                to="/" 
                className="text-2xl font-bold"
                onClick={handleLinkClick}
              >
                BM<span className="text-accent">Crafts</span>
              </Link>
              <button
                className="z-[60] transition-colors focus-ring rounded-full p-2 bg-background/95 backdrop-blur-md border border-border shadow-sm"
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} className="text-foreground" />
              </button>
            </div>
            <div className="flex-grow flex flex-col items-center justify-center py-20">
              <div className="w-full max-w-md mx-auto px-6 py-8">
                <nav className="space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={cn(
                        "block text-lg font-medium py-3 px-4 rounded-md transition-colors w-full text-center",
                        isActive(link.href) 
                          ? "text-accent bg-accent/10 font-semibold" 
                          : "text-foreground hover:text-accent hover:bg-accent/5"
                      )}
                      onClick={handleLinkClick}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="pt-8 pb-4">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3.5 rounded-full text-base font-medium bg-accent text-white hover:bg-accent/90 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
