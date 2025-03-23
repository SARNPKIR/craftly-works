
import { useState } from 'react';
import { ShoppingCart, Heart, Home, Scale, Building, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'ecommerce',
    title: 'E-commerce Development',
    description: 'Custom online stores that drive sales and provide seamless customer experiences across all devices.',
    icon: ShoppingCart,
    price: '£1,500',
    features: ['Product Catalog', 'Secure Checkout', 'Payment Integration', 'Inventory Management'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Websites & Apps',
    description: 'HIPAA-compliant digital solutions for medical practices, hospitals, and healthcare providers.',
    icon: Heart,
    price: '£2,000',
    features: ['HIPAA Compliance', 'Patient Portals', 'Appointment Booking', 'Medical Records'],
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'realestate',
    title: 'Real Estate Websites & Apps',
    description: 'Property listing platforms and websites that showcase properties and connect agents with buyers.',
    icon: Home,
    price: '£1,800',
    features: ['Property Listings', 'Virtual Tours', 'Agent Profiles', 'Mortgage Calculator'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'lawfirm',
    title: 'Law Firm Website Development',
    description: 'Professional websites for attorneys and law firms to showcase expertise and generate leads.',
    icon: Scale,
    price: '£1,700',
    features: ['Practice Area Pages', 'Attorney Profiles', 'Case Results', 'Client Testimonials'],
    color: 'from-amber-500 to-yellow-400',
  },
  {
    id: 'nonprofit',
    title: 'Non-profit & Charity Websites',
    description: 'Impactful websites that tell your story, engage supporters, and facilitate donations.',
    icon: Building,
    price: '£1,500',
    features: ['Donation Systems', 'Event Management', 'Volunteer Signup', 'Impact Reporting'],
    color: 'from-purple-500 to-violet-500',
  },
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Web and App Solutions for Every Industry
          </h2>
          <p className="text-lg text-gray-600">
            We create custom digital experiences tailored to your specific industry needs, with transparent pricing and no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group hover-card overflow-hidden"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="glass-card h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-xl flex flex-col relative z-10">
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color}`} />
                </div>
                
                <div className="p-8">
                  <div 
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300",
                      `bg-gradient-to-br ${service.color} text-white`
                    )}
                  >
                    <service.icon size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-sm text-gray-500">Starting from</span>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-foreground">{service.price}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="mr-2 text-accent">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto p-6 pt-0">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-accent rounded-full text-base font-medium hover:bg-accent hover:text-white transition-all duration-300 border border-gray-200 shadow-sm group-hover:shadow-md"
                  >
                    Learn More
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-full text-base font-medium hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Services;
