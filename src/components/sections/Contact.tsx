
import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedGradient from '../ui/AnimatedGradient';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'default'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          service: 'default'
        });
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <AnimatedGradient className="absolute inset-0 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
                Contact Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Bring Your Idea to Life
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to transform your digital presence? Get in touch for a free consultation and custom quote for your project.
              </p>
              
              <div className="glass-card rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold mb-6">What Happens Next?</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-medium">
                        1
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Free Consultation</h4>
                      <p className="text-gray-600">We'll contact you within 24 hours to discuss your project.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-medium">
                        2
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Custom Proposal</h4>
                      <p className="text-gray-600">You'll receive a detailed proposal with timeline and pricing.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-medium">
                        3
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Project Kickoff</h4>
                      <p className="text-gray-600">Once approved, we'll start bringing your vision to life.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">hello@bmcrafts.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">+44 (0) 123 456 7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">123 Web Street, Digital City, UK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 md:p-10">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-8 max-w-md">
                    Thank you for reaching out. We'll get back to you within 24 hours to discuss your project.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">Get Your Free Consultation</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                          placeholder="+44 123 456 7890"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service You're Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      >
                        <option value="default" disabled>Select a service</option>
                        <option value="ecommerce">E-commerce Development</option>
                        <option value="healthcare">Healthcare Website/App</option>
                        <option value="realestate">Real Estate Website/App</option>
                        <option value="lawfirm">Law Firm Website</option>
                        <option value="nonprofit">Non-profit Website</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        placeholder="Tell us about your project and what you're looking to achieve..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-full text-base font-medium hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Request Free Consultation
                          <ArrowRight size={18} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
