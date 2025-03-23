
import { DollarSign, Focus, Headphones, TrendingUp } from 'lucide-react';
import AnimatedGradient from '../ui/AnimatedGradient';

const features = [
  {
    title: 'Transparent Pricing',
    description: 'Flat-rate packages with no hidden fees. You know exactly what you're paying for from the start.',
    icon: DollarSign,
  },
  {
    title: 'Expert Industry Focus',
    description: 'We specialize in specific industries, ensuring your solution is tailored to your sector's needs.',
    icon: Focus,
  },
  {
    title: 'Post-Launch Support',
    description: 'Our relationship doesn't end at launch. We provide ongoing support to ensure your success.',
    icon: Headphones,
  },
  {
    title: 'Results-Driven Solutions',
    description: 'Websites optimized for performance, conversion, and user experience to drive real business results.',
    icon: TrendingUp,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <AnimatedGradient className="absolute inset-0 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Businesses Trust Us to Build Their Digital Presence
          </h2>
          <p className="text-lg text-gray-600">
            We combine industry expertise with technical excellence to deliver websites and apps that stand out and perform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-8 hover-card"
            >
              <div className="flex items-start">
                <div className="mr-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <feature.icon size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
                Our Process
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                How We Transform Your Vision Into Reality
              </h3>
              <p className="text-gray-600 mb-8">
                We follow a structured yet flexible approach to ensure every project meets your business goals while delivering exceptional user experiences.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-medium">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Consultation</h4>
                    <p className="text-gray-600">We start by understanding your business, goals, and target audience.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-medium">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Planning</h4>
                    <p className="text-gray-600">We create a detailed roadmap including design concepts and technical specifications.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-medium">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Development</h4>
                    <p className="text-gray-600">Our team builds your custom solution with regular updates and feedback.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-medium">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Launch & Growth</h4>
                    <p className="text-gray-600">We deploy your project and provide ongoing support to ensure success.</p>
                  </div>
                </div>
              </div>
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-full text-base font-medium hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg mt-10 self-start"
              >
                Let's Discuss Your Project
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-accent to-blue-600 relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
              <div className="h-full flex items-center justify-center p-10 lg:p-16 relative">
                <div className="text-white text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
                  <p className="text-white/80 mb-8 max-w-md mx-auto">
                    Join our satisfied clients who have transformed their digital presence with BMCrafts.
                  </p>
                  <div className="flex justify-center">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-accent rounded-full text-base font-medium hover:bg-gray-100 transition-colors"
                    >
                      Book Free Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
