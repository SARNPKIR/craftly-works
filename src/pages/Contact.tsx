
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our friendly team is here to help.",
    contact: "hello@bmcrafts.com",
    link: "mailto:hello@bmcrafts.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 8am to 5pm.",
    contact: "+44 (0) 123 456 7890",
    link: "tel:+441234567890"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our office.",
    contact: "123 Business Road, London, UK",
    link: "https://maps.google.com"
  },
  {
    icon: Clock,
    title: "Working Hours",
    description: "We're available for you:",
    contact: "Monday-Friday: 9am-5pm",
    link: "#"
  }
];

const projectTypes = [
  "E-commerce Website",
  "Healthcare Website",
  "Real Estate Website",
  "Law Firm Website",
  "Non-profit Website",
  "Custom Web Application",
  "Other"
];

const budgetRanges = [
  "£1,000 - £2,500",
  "£2,500 - £5,000",
  "£5,000 - £10,000",
  "£10,000+"
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! Your message has been sent. We'll get back to you within 24 hours."
    });
    
    // In a real application, you would send the form data to your server here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Contact Us" 
        subtitle="Reach out to discuss your project or ask any questions"
      />
      <Breadcrumbs />
      
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 hover-card">
                <div className="mb-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <method.icon size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <a 
                  href={method.link} 
                  className="text-accent hover:underline font-medium"
                  target={method.link.startsWith("http") ? "_blank" : undefined}
                  rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {method.contact}
                </a>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Discuss Your Project</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below to get started. We'll get back to you within 24 hours to discuss your project in detail.
              </p>
              
              {formStatus.submitted ? (
                <div className={`p-6 rounded-lg mb-8 ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  <p className="font-medium">{formStatus.message}</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
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
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                    >
                      <option value="" disabled>Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                    >
                      <option value="" disabled>Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                    Desired Timeline
                  </label>
                  <input
                    type="text"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    placeholder="e.g., 2 months, ASAP, flexible"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
                    placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                  ></textarea>
                </div>
                
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="rounded-xl overflow-hidden h-[600px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.296751684157!2d-0.1415323!3d51.5129508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d49f4a3a5b%3A0x790260718555a20c!2sOxford%20St%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
