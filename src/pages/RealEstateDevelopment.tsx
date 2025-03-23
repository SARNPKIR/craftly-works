import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Search, Map, Image, Calendar, Database } from "lucide-react";
import { Link } from "react-router-dom";

const RealEstateDevelopment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Real Estate Website & App Development UK | Property Portals | BMCrafts</title>
        <meta name="description" content="Custom real estate websites & apps from £500. Property search portals, virtual tours & agent portals for UK estate agents, developers & property managers." />
        <meta name="keywords" content="real estate website development UK, property portal development, estate agent website design, property management system, property listing website, virtual tour integration" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bmcrafts.co.uk/services/real-estate-development" />
        <meta property="og:title" content="Real Estate Website & App Development UK | Property Portals | BMCrafts" />
        <meta property="og:description" content="Custom real estate websites & apps from £500. Property search portals, virtual tours & agent portals for UK estate agents, developers & property managers." />
        <meta property="og:image" content="https://bmcrafts.co.uk/images/real-estate-website.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bmcrafts.co.uk/services/real-estate-development" />
        <meta property="twitter:title" content="Real Estate Website & App Development UK | Property Portals | BMCrafts" />
        <meta property="twitter:description" content="Custom real estate websites & apps from £500. Property search portals, virtual tours & agent portals for UK estate agents, developers & property managers." />
        <meta property="twitter:image" content="https://bmcrafts.co.uk/images/real-estate-website.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bmcrafts.co.uk/services/real-estate-development" />
        
        {/* Schema.org markup for Real Estate Website Service */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Real Estate Website & App Development",
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
            "description": "Custom real estate website and app development services with property search portals, virtual tours, and agent portals for UK estate agents, developers, and property managers.",
            "image": "https://bmcrafts.co.uk/images/real-estate-website.jpg"
          }
        `}</script>
      </Helmet>

      <Navbar />

      <main className="pt-16">
        <PageHeader
          title="Real Estate Website & App Development"
          subtitle="Custom property portals and digital solutions for estate agents and property managers"
        />

        <Breadcrumbs />

        <section className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Property Websites That Sell</h2>
              <p className="text-lg text-gray-700 mb-6">
                At BMCrafts, we create stunning property websites and applications that help estate agents, property managers, and developers showcase their listings and connect with potential buyers and tenants.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Starting from just £500, our real estate digital solutions are designed to streamline property marketing, improve user experience, and increase conversion rates with advanced search capabilities and immersive virtual tours.
              </p>
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg">
                    Discuss Your Real Estate Project
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/services/images/real-estate-website.jpg" 
                alt="Real Estate Website Example" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Real Estate Digital Solutions</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Search className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">Advanced Property Search</h3>
                  <p className="text-gray-600">
                    Intuitive search functionality with filtering by location, price, property type, and amenities. Map-based search options for better user experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Map className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">Interactive Maps</h3>
                  <p className="text-gray-600">
                    Integration with Google Maps and other location services to showcase property locations, nearby amenities, and transport links.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Image className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">Virtual Tours & 3D Viewing</h3>
                  <p className="text-gray-600">
                    Immersive property viewing experiences with 360° virtual tours, 3D walkthroughs, and high-quality image galleries that showcase properties at their best.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Calendar className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">Viewing Scheduling</h3>
                  <p className="text-gray-600">
                    Online booking systems for property viewings that integrate with your calendar, reducing administrative work and improving client experience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Home className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">Agent Portals</h3>
                  <p className="text-gray-600">
                    Secure admin areas for estate agents to manage listings, track inquiries, and generate reports. Mobile-friendly interfaces for updating on the go.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Database className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">CRM Integration</h3>
                  <p className="text-gray-600">
                    Connect your website with popular real estate CRM systems to automatically capture leads and track customer journeys.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Real Estate Website Development Process</h2>
            
            <div className="space-y-10">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Requirements Analysis</h3>
                  <p className="text-gray-700">
                    We begin by understanding your real estate business model, target audience, and specific needs. Whether you're an independent estate agent or a large property management company, we tailor our approach to your goals.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">UX/UI Design</h3>
                  <p className="text-gray-700">
                    Creating intuitive, visually appealing interfaces that showcase properties effectively and guide users through their property search journey. We focus on conversion-optimized designs that highlight key property features.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Development</h3>
                  <p className="text-gray-700">
                    Building responsive, fast-loading property websites with robust search functionality, interactive maps, and secure user areas. We use modern technologies to ensure your site performs well on all devices.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Integration</h3>
                  <p className="text-gray-700">
                    Connecting your website with property feed systems, CRMs, virtual tour tools, and other third-party services to create a seamless ecosystem for property management and marketing.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">5</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Launch & Support</h3>
                  <p className="text-gray-700">
                    Thorough testing, deployment, and ongoing maintenance to ensure your real estate platform continues to perform optimally. We provide training for your team on managing property listings and using all system features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready To Transform Your Real Estate Business?</h2>
              <p className="text-lg text-gray-700 mb-10">
                From basic property websites to advanced property portals with virtual tours and agent management systems, we create digital solutions that help you sell and rent properties faster.
              </p>
              <Link to="/contact">
                <Button size="lg">
                  Get Started From £500
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RealEstateDevelopment; 