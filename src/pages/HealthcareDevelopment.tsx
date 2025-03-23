import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  CheckCircle, 
  Smartphone, 
  FileText, 
  Database,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const HealthcareDevelopment = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Website & App Development UK | GDPR & HIPAA Compliant | BMCrafts</title>
        <meta name="description" content="Secure, GDPR-compliant healthcare websites & apps for medical practices, clinics, & telehealth startups. Patient portals, EHR integration & secure appointment booking." />
        <meta name="keywords" content="healthcare website development UK, medical website design, GDPR-compliant healthcare apps, telehealth website development, patient portal development UK" />
        <link rel="canonical" href="https://bmcrafts.com/services/healthcare-development" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bmcrafts.com/services/healthcare-development" />
        <meta property="og:title" content="Healthcare Website & App Development UK | GDPR & HIPAA Compliant | BMCrafts" />
        <meta property="og:description" content="Secure, GDPR-compliant healthcare websites & apps for medical practices, clinics, and telehealth startups. Features include patient portals and EHR integration." />
        <meta property="og:image" content="https://bmcrafts.com/images/healthcare-development.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bmcrafts.com/services/healthcare-development" />
        <meta property="twitter:title" content="Healthcare Website & App Development UK | GDPR & HIPAA Compliant" />
        <meta property="twitter:description" content="Secure, GDPR-compliant healthcare websites & apps for medical practices, clinics, and telehealth startups." />
        <meta property="twitter:image" content="https://bmcrafts.com/images/healthcare-development.jpg" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Healthcare Website & App Development",
              "serviceType": "Web and App Development",
              "provider": {
                "@type": "ProfessionalService",
                "name": "BMCrafts",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Digital City",
                  "addressRegion": "UK"
                }
              },
              "areaServed": {
                "@type": "Country",
                "name": "United Kingdom"
              },
              "description": "Secure, GDPR-compliant healthcare websites & apps for medical practices, clinics, & telehealth startups. Patient portals, EHR integration & secure appointment booking.",
              "offers": {
                "@type": "Offer",
                "price": "From £2,499"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <PageHeader 
        title="Healthcare Website & App Development" 
        subtitle="GDPR-compliant digital solutions for medical practices, clinics & telehealth providers"
      />
      <Breadcrumbs />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Digital Solutions for Healthcare Providers</h2>
              <p className="text-lg text-gray-600 mb-6">
                In today's digital healthcare landscape, patients expect convenient online access to services while providers need secure, compliant platforms. BMCrafts develops specialized healthcare websites and applications that meet strict data protection standards while delivering exceptional user experiences.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Shield className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><span className="font-medium">GDPR & HIPAA compliant</span> development for maximum data protection</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><span className="font-medium">Secure patient portals</span> for accessing records and appointment management</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><span className="font-medium">EHR/EMR integration</span> to streamline clinical workflows</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><span className="font-medium">Telehealth capabilities</span> for virtual consultations and remote care</p>
                </div>
              </div>
              <Link to="/contact">
                <Button size="lg" className="rounded-full">
                  Book Your Free Healthcare Solution Consultation
                </Button>
              </Link>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Healthcare website and app development for UK medical practices" 
                className="w-full h-auto"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
              Our Healthcare Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialized Digital Platforms for Healthcare</h2>
            <p className="text-lg text-gray-600">
              We create tailored digital solutions for various healthcare sectors, ensuring data security and compliance while delivering exceptional user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-card border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <FileText size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Medical Practice Websites</h3>
                <p className="text-gray-600 mb-6">
                  Modern, professional websites for clinics, physician practices, and healthcare centers with patient-focused features and secure appointment booking.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">GDPR-compliant contact forms</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Online appointment scheduling</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Provider directories and profiles</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-card border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Patient Portals</h3>
                <p className="text-gray-600 mb-6">
                  Secure, user-friendly portals that allow patients to access medical records, schedule appointments, request prescriptions, and communicate with their care team.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Secure messaging systems</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Medical records access</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Prescription management</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-card border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <Smartphone size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Telehealth Applications</h3>
                <p className="text-gray-600 mb-6">
                  Custom telehealth platforms that enable virtual consultations, remote patient monitoring, and secure digital communication between patients and providers.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Secure video consultation</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Remote monitoring integration</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Digital prescription services</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
              Key Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose BMCrafts for Healthcare Development?</h2>
            <p className="text-lg text-gray-600">
              Our specialized approach to healthcare digital solutions ensures security, compliance, and exceptional user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">GDPR Compliance</h3>
              <p className="text-gray-600">
                All our healthcare solutions are built with data protection by design, ensuring full compliance with GDPR and UK healthcare regulations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">EHR/EMR Integration</h3>
              <p className="text-gray-600">
                Seamlessly connect your website or app with existing Electronic Health Record systems to streamline workflows and improve care coordination.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Patient-Centered Design</h3>
              <p className="text-gray-600">
                User experience tailored to healthcare consumers, making it easy for patients of all ages and abilities to access care services online.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Optimization</h3>
              <p className="text-gray-600">
                Responsive designs that work perfectly on all devices, ensuring patients can access healthcare services from anywhere, anytime.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Accessible Development</h3>
              <p className="text-gray-600">
                We build healthcare sites with accessibility in mind, following WCAG guidelines to ensure all patients can access digital healthcare services.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Ongoing Compliance Support</h3>
              <p className="text-gray-600">
                Regular updates and maintenance to ensure your healthcare digital solutions remain compliant with evolving regulations and security standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our healthcare development services.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">What makes healthcare websites different from standard websites?</h3>
                <p className="text-gray-600">
                  Healthcare websites require additional security measures, strict GDPR compliance, accessibility standards, and often integration with specialized healthcare systems like EHR/EMR platforms. They must also be designed with consideration for patients who may be accessing these sites during stressful situations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">How do you ensure GDPR compliance in healthcare websites?</h3>
                <p className="text-gray-600">
                  We implement data protection by design principles from the start, including secure data storage, encryption, access controls, anonymization when appropriate, comprehensive privacy policies, and consent management systems. Our development process includes regular compliance reviews and testing.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Can you integrate with our existing healthcare systems?</h3>
                <p className="text-gray-600">
                  Yes, we specialize in integrating with popular EHR/EMR systems, practice management software, appointment scheduling tools, and other healthcare platforms. We use secure APIs to ensure that data flows seamlessly while maintaining security and compliance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">How long does it take to build a healthcare website or app?</h3>
                <p className="text-gray-600">
                  Healthcare projects typically take 8-16 weeks depending on complexity, integrations required, and compliance needs. Patient portals and telehealth applications often require more development time due to their specialized security requirements and features.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Do you provide ongoing support for healthcare websites?</h3>
                <p className="text-gray-600">
                  Yes, we offer specialized healthcare website maintenance packages that include regular security updates, compliance monitoring, performance optimization, and technical support. We understand that healthcare sites need to remain operational 24/7 with minimal downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Healthcare Digital Presence?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch today for a free consultation and let us help you create GDPR-compliant healthcare digital solutions that serve both patients and providers.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-white text-accent hover:bg-gray-100 rounded-full">
              Book Your Free Healthcare Consultation
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HealthcareDevelopment; 