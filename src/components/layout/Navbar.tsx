
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/20 py-3'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight transition-all duration-300 z-50"
        >
          <span className={cn(
            "font-bold transition-colors",
            isScrolled ? "text-foreground" : "text-white"
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
                isActive(link.href) ? 'text-accent' : isScrolled ? 'text-foreground' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className={cn(
            'hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-in-out focus-ring',
            isScrolled
              ? 'bg-accent text-white hover:bg-accent/90'
              : 'bg-white text-accent hover:bg-white/90'
          )}
        >
          Get Free Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 transition-colors focus-ring rounded-full p-1"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileNavOpen ? (
            <X size={24} className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu size={24} className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out md:hidden flex flex-col',
            mobileNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xl font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setMobileNavOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center px-6 py-3 rounded-full text-base font-medium bg-accent text-white hover:bg-accent/90 transition-colors"
              onClick={() => setMobileNavOpen(false)}
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
