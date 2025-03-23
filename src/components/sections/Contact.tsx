import { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import AnimatedGradient from '../ui/AnimatedGradient';
import { Button } from '@/components/ui/button';
import { sendEmail } from '../../api/sendEmail';

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
}

const Contact = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'default'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await sendEmail(formState);
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
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError('There was a problem sending your message. Please try again or contact us directly via email.');
      console.error('Contact form error:', error);
    }
  };

  return (
    <section id="contact" className="py-10 relative overflow-hidden">      
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
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-6">Ready to transform your digital presence? Get in touch for a free consultation and custom quote for your project.</h3>
          </div>
          
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center text-red-700">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <p>{submitError}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
            <div className="form-group">
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
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="form-group">
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
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                placeholder="+44 123 456 7890"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
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
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            >
              <option value="default" disabled>Select a service</option>
              <option value="ecommerce">E-commerce Development</option>
              <option value="healthcare">Healthcare Website/App</option>
              <option value="education">Educational Course Websites & LMS</option>
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
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
              placeholder="Tell us about your project and what you're looking to achieve"
            ></textarea>
          </div>
          
          <Button 
            type="submit" 
            className="w-full md:w-auto px-8 py-3 bg-accent hover:bg-accent/90 text-white font-medium rounded-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
            {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      )}
    </section>
  );
};

export default Contact;
