
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">BMCrafts</h3>
            <p className="text-gray-600 mb-4">
              Crafting websites and apps that power your business. Affordable, professional, and tailored web solutions for every industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-accent transition-colors">E-commerce Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-accent transition-colors">Healthcare Websites</a></li>
              <li><a href="#" className="text-gray-600 hover:text-accent transition-colors">Real Estate Websites</a></li>
              <li><a href="#" className="text-gray-600 hover:text-accent transition-colors">Law Firm Websites</a></li>
              <li><a href="#" className="text-gray-600 hover:text-accent transition-colors">Non-profit Websites</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-accent transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-accent mt-1 mr-3" />
                <span className="text-gray-600">hello@bmcrafts.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-accent mt-1 mr-3" />
                <span className="text-gray-600">+44 (0) 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-accent mt-1 mr-3" />
                <span className="text-gray-600">123 Web Street, Digital City, UK</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BMCrafts. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-accent text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-accent text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-accent text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
