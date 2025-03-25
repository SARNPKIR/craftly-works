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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
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
    { name: 'Page Speed Test', href: '/page-speed-test' },
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
      {/* Placeholder div to ensure content doesn't get hidden behind navbar */}
      <div 

      />
      
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out py-3', // Reduced padding
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
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-accent/20 rounded-full p-2"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={24} className={`${mobileNavOpen ? 'hidden' : 'block'} text-foreground`} />
              <X size={24} className={`${mobileNavOpen ? 'block' : 'hidden'} text-foreground`} />
            </button>
          </div>
        </div>
      </header>

      {/* New Mobile Menu Implementation */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out transform ${
          mobileNavOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        aria-hidden={!mobileNavOpen}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className={`flex items-center justify-between px-6 py-4 ${
            location.pathname === "/" ? 'mt-10' : ''
          }`}>
            <Link 
              to="/" 
              className="text-2xl font-bold"
              onClick={handleLinkClick}
            >
              BM<span className="text-accent">Crafts</span>
            </Link>
          </div>
          
          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                    isActive(link.href) 
                      ? 'bg-accent/10 text-accent' 
                      : 'hover:bg-accent/5 hover:text-accent'
                  }`}
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
                className="text-lg font-medium py-3 px-4 rounded-lg transition-colors hover:bg-accent/5 hover:text-accent"
                onClick={() => setMobileNavOpen(false)}
              >
                Blog
              </a>
            </nav>
          </div>
          
          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-border">
            <Link
              to="/contact"
              className="block w-full py-3 px-4 bg-accent text-white text-center rounded-lg font-medium shadow-sm hover:bg-accent/90 transition-colors"
              onClick={handleLinkClick}
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {mobileNavOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileNavOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
