import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Scale, Shield, FileText, Users, Globe, MessageSquare, FileCheck, Search, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const LawFirmDevelopment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Law Firm Website Development UK | GDPR Compliant | BMCrafts</title>
        <meta name="description" content="Specialist law firm website development starting from £500. GDPR compliant, case management integration & client portals for UK solicitors & legal practices." />
        <meta name="keywords" content="law firm website development, solicitor website design UK, GDPR compliant legal websites, case management portal, legal practice website, affordable law firm websites" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bmcrafts.co.uk/services/law-firm-development" />
        <meta property="og:title" content="Law Firm Website Development UK | GDPR Compliant | BMCrafts" />
        <meta property="og:description" content="Specialist law firm website development starting from £500. GDPR compliant, case management integration & client portals for UK solicitors & legal practices." />
        <meta property="og:image" content="https://bmcrafts.co.uk/images/law-firm-website.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bmcrafts.co.uk/services/law-firm-development" />
        <meta property="twitter:title" content="Law Firm Website Development UK | GDPR Compliant | BMCrafts" />
        <meta property="twitter:description" content="Specialist law firm website development starting from £500. GDPR compliant, case management integration & client portals for UK solicitors & legal practices." />
        <meta property="twitter:image" content="https://bmcrafts.co.uk/images/law-firm-website.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bmcrafts.co.uk/services/law-firm-development" />
        
        {/* Schema.org markup for Law Firm Website Service */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Law Firm Website Development",
            "provider": {
              "@type": "ProfessionalService",
              "name": "BMCrafts",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "United Kingdom"
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Kingdom"
            },
            "offers": {
              "@type": "Offer",
              "price": "500",
              "priceCurrency": "GBP"
            },
            "description": "Specialist law firm website development services with GDPR compliance, case management integration, and client portals for UK solicitors and legal practices.",
            "image": "https://bmcrafts.co.uk/images/law-firm-website.jpg"
          }
        `}</script>
      </Helmet>

      <Navbar />

      <main className="pt-16">
        <PageHeader
          title="Law Firm Website Development"
          subtitle="Professional and GDPR-compliant digital solutions for legal practices"
        />
        
        <Breadcrumbs />
        
        <section className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Purpose-Built Websites For Legal Professionals</h2>
              <p className="text-lg text-gray-700 mb-6">
                At BMCrafts, we understand the unique needs of solicitors, barristers, and legal practices. Our specialized law firm website development services are designed to establish your online authority while maintaining the highest standards of compliance and client confidentiality.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Starting from just £500, our legal websites combine professional aesthetics with functional features that help you attract clients, streamline consultations, and manage cases more efficiently.
              </p>
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-slate-800 hover:bg-slate-700">
                    Discuss Your Law Firm Website
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/services/images/law-firm-website.jpg" 
                alt="Law Firm Website Example" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
        
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Legal Website Solutions</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-slate-700 mb-6" />
                  <h3 className="text-xl font-bold mb-3">GDPR Compliant Design</h3>
                  <p className="text-gray-600">
                    Built with data protection at its core. Our websites include compliant contact forms, privacy notices, and secure data handling protocols to meet UK GDPR requirements.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <FileCheck className="h-12 w-12 text-slate-700 mb-6" />
                  <h3 className="text-xl font-bold mb-3">Case Management Integration</h3>
                  <p className="text-gray-600">
                    Seamless integration with popular legal case management systems like Clio, Leap, and PracticePanther to streamline your workflow.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <MessageSquare className="h-12 w-12 text-slate-700 mb-6" />
                  <h3 className="text-xl font-bold mb-3">Client Portal Solutions</h3>
                  <p className="text-gray-600">
                    Secure client portals for document sharing, case updates, and confidential communications. Enhanced client experience with 24/7 access.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Search className="h-12 w-12 text-slate-700 mb-6" />
                  <h3 className="text-xl font-bold mb-3">Legal SEO Optimization</h3>
                  <p className="text-gray-600">
                    Targeted Search Engine Optimization for legal terms and practice areas to help potential clients find your services in local searches.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Scale className="h-12 w-12 text-slate-700 mb-6" />
                  <h3 className="text-xl font-bold mb-3">Practice Area Pages</h3>
                  <p className="text-gray-600">
                    Custom-designed practice area pages that clearly communicate your expertise and services in specific legal domains.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Clock className="h-12 w-12 text-slate-700 mb-6" />
                  <h3 className="text-xl font-bold mb-3">Appointment Scheduling</h3>
                  <p className="text-gray-600">
                    Integrated booking systems that allow clients to schedule consultations directly, reducing administrative overhead.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">How do you ensure GDPR compliance?</h3>
                <p className="text-gray-700">
                  We build privacy controls directly into your website architecture, including compliant cookie notices, clear privacy policies, secure forms with explicit consent mechanisms, and data minimization practices. We also provide recommendations for ongoing GDPR compliance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Can you integrate with our existing case management software?</h3>
                <p className="text-gray-700">
                  Yes, we specialize in integrating websites with popular legal case management systems. We'll work with your existing software or recommend solutions that best fit your practice's needs and workflow.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">How long does it take to build a law firm website?</h3>
                <p className="text-gray-700">
                  Typically, we can deliver a standard law firm website in 3-4 weeks. More complex sites with custom functionality or client portals may take 6-8 weeks. We'll provide a specific timeline based on your requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">What is the pricing structure for law firm websites?</h3>
                <p className="text-gray-700">
                  Our law firm websites start from £500 for a professional, mobile-responsive site with basic features. Custom client portals, case management integration, and advanced features are priced based on the specific requirements. We provide transparent, itemized quotes.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="bg-slate-800 hover:bg-slate-700">
                Request a Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LawFirmDevelopment; 