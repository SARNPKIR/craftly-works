import { ArrowRight } from 'lucide-react';
import AnimatedGradient from '../ui/AnimatedGradient';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pb-20 pt-32 overflow-hidden">
      <AnimatedGradient className="absolute inset-0 -z-10" />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
                Web & App Development
              </span>
            </div>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in opacity-0" 
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              Crafting Fast <span className="text-gradient">Websites & Apps</span> That Power Your Business
            </h1>
            
            <p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in opacity-0" 
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              Affordable, professional, and tailored web solutions for every industry. We build digital experiences that drive results.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in opacity-0" 
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-full text-base font-medium hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg"
              >
                Request Free Quote
              </Link>
              
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-accent rounded-full text-base font-medium hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm hover:shadow-md group"
              >
                Our Services 
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-2 lg:flex lg:flex-wrap animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <Link to="/services/ecommerce-development" className="text-sm text-gray-700 hover:text-accent hover:underline transition-colors">E-commerce</Link>
              <Link to="/services/healthcare-development" className="text-sm text-gray-700 hover:text-accent hover:underline transition-colors">Healthcare</Link>
              <Link to="/services/educational-development" className="text-sm text-gray-700 hover:text-accent hover:underline transition-colors">Educational</Link>
              <Link to="/services/law-firm-development" className="text-sm text-gray-700 hover:text-accent hover:underline transition-colors">Law Firms</Link>
              <Link to="/services/real-estate-development" className="text-sm text-gray-700 hover:text-accent hover:underline transition-colors">Real Estate</Link>
              <Link to="/services/fitness-development" className="text-sm text-gray-700 hover:text-accent hover:underline transition-colors">Fitness</Link>
            </div>
          </div>
          
          <div 
            className="w-full lg:w-1/2 perspective-container animate-fade-in opacity-0"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
            <div 
              className="relative mx-auto max-w-lg"
            >
              <div className="glass-card rounded-2xl overflow-hidden shadow-xl p-1.5 transition-all duration-500 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1600" 
                  alt="Web Development" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 shadow-lg bg-white/90 backdrop-blur-sm animate-pulse-subtle border border-white">
                <p className="text-sm font-medium text-gray-900">Conversion rate</p>
                <p className="text-2xl font-bold text-accent">+40%</p>
                <p className="text-xs text-gray-500">after redesign</p>
              </div>
              
              <div className="absolute -top-6 -left-6 glass-card rounded-xl p-4 shadow-lg bg-white/90 backdrop-blur-sm animate-pulse-subtle border border-white" style={{ animationDelay: '1.5s' }}>
                <p className="text-sm font-medium text-gray-900">Load time</p>
                <p className="text-2xl font-bold text-accent">0.8s</p>
                <p className="text-xs text-gray-500">performance boost</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;
