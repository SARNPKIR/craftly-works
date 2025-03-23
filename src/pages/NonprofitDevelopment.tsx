import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  CheckCircle, 
  Users, 
  DollarSign, 
  Globe,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const NonprofitDevelopment = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Non-profit & Charity Website Development UK | Affordable & Effective | BMCrafts</title>
        <meta name="description" content="Affordable charity website design & development from £500. Donation systems, volunteer management & event tools for UK non-profits. Making digital impact accessible." />
        <meta name="keywords" content="charity website development UK, non-profit web design services, donation system integration, affordable charity websites, volunteer management system" />
        <link rel="canonical" href="https://bmcrafts.com/services/nonprofit-development" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bmcrafts.com/services/nonprofit-development" />
        <meta property="og:title" content="Non-profit & Charity Website Development UK | BMCrafts" />
        <meta property="og:description" content="Affordable charity website design & development. Donation systems, volunteer management & event tools for UK non-profits from £500." />
        <meta property="og:image" content="https://bmcrafts.com/images/nonprofit-development.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bmcrafts.com/services/nonprofit-development" />
        <meta property="twitter:title" content="Non-profit & Charity Website Development UK" />
        <meta property="twitter:description" content="Affordable charity website design & development. Donation systems, volunteer management & event tools for UK non-profits." />
        <meta property="twitter:image" content="https://bmcrafts.com/images/nonprofit-development.jpg" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Non-profit & Charity Website Development",
              "serviceType": "Web Development",
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
              "description": "Affordable charity website design & development. Donation systems, volunteer management & event tools for UK non-profits.",
              "offers": {
                "@type": "Offer",
                "price": "From £500"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <PageHeader 
        title="Non-profit & Charity Website Development"
        subtitle="Affordable digital solutions for organizations making a difference"
      />
      <Breadcrumbs />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Solutions for Organizations That Make a Difference</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every non-profit and charity deserves a powerful online presence, regardless of budget constraints. BMCrafts specializes in creating affordable, effective websites that help charities and non-profits raise awareness, collect donations, and engage with supporters and volunteers.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <DollarSign className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><span className="font-medium">Affordable pricing</span> starting at just £500 for non-profit organizations</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><span className="font-medium">Secure donation systems</span> to help you raise funds online effectively</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><span className="font-medium">Volunteer management tools</span> to coordinate your team and track participation</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><span className="font-medium">Impact storytelling features</span> to showcase your work and connect with supporters</p>
                </div>
              </div>
              <Link to="/contact">
                <Button size="lg" className="rounded-full">
                  Get Your Non-profit Website from £500
                </Button>
              </Link>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1565801255789-85bf5d4a5f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Non-profit and charity website development for UK organizations" 
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
              Our Non-profit Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Tools to Further Your Mission</h2>
            <p className="text-lg text-gray-600">
              We offer a range of website solutions for non-profits and charities, each designed to help you maximize your impact and reach more supporters.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-card border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <Heart size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Standard Charity Websites</h3>
                <p className="text-gray-600 mb-6">
                  Affordable yet effective websites that provide all the essential features a non-profit organization needs to establish an online presence and begin accepting donations.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Mobile-responsive design</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Basic donation integration</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Content management system</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Starting at just £500</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-card border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <DollarSign size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Fundraising Platforms</h3>
                <p className="text-gray-600 mb-6">
                  Specialized websites focused on maximizing online donations with advanced fundraising tools, campaign management, and supporter engagement features.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Multiple payment gateways</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Recurring donation options</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Campaign and goal tracking</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Donor management tools</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-card border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Volunteer Management Systems</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive platforms that help you recruit, schedule, and manage volunteers, track hours, and coordinate community service projects efficiently.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Volunteer registration portal</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Opportunity calendar & scheduling</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Hours tracking & reporting</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Volunteer communication tools</p>
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
              Key Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Essential Non-profit Website Features</h2>
            <p className="text-lg text-gray-600">
              Our charity and non-profit websites include these powerful features to help you maximize your impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Donation Systems</h3>
              <p className="text-gray-600">
                Secure, user-friendly donation processing with multiple payment options, recurring donations, and automated tax receipts to maximize your fundraising potential.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Event Management</h3>
              <p className="text-gray-600">
                Promote fundraisers, volunteer opportunities, and community events with built-in calendars, registration tools, and reminder systems.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Volunteer Coordination</h3>
              <p className="text-gray-600">
                Tools to recruit, schedule, and manage volunteers, track hours, and recognize contributions to build a committed volunteer community.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Impact Storytelling</h3>
              <p className="text-gray-600">
                Compelling ways to share your mission, success stories, and impact metrics to build emotional connections with supporters and donors.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Optimization</h3>
              <p className="text-gray-600">
                Built-in search engine optimization to help your cause reach more potential donors and volunteers through improved online visibility.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Accessibility Features</h3>
              <p className="text-gray-600">
                WCAG-compliant design to ensure your website is accessible to all users, including those with disabilities, expanding your reach and impact.
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
                Find answers to common questions about our non-profit and charity website development services.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">How much does a charity website cost?</h3>
                <p className="text-gray-600">
                  Our non-profit websites start from as little as £500 for a basic but effective solution. We understand budget constraints and offer special pricing for charitable organizations. The final cost depends on your specific requirements and the features you need. We'll work with you to develop a solution that fits your budget while meeting your goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">What donation payment processors can you integrate?</h3>
                <p className="text-gray-600">
                  We can integrate most major donation processors including PayPal, Stripe, GoCardless, and charity-specific platforms like JustGiving, CAF Donate, and Enthuse. We'll help you select the best option based on transaction fees, gift aid handling, and compatibility with your existing systems.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Do you offer discounted maintenance for charities?</h3>
                <p className="text-gray-600">
                  Yes, we offer special maintenance packages for non-profit organizations to keep your website secure, updated, and performing well. Our charity maintenance plans include essential updates, security monitoring, and technical support at reduced rates to help you manage ongoing costs effectively.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Can we update the website content ourselves?</h3>
                <p className="text-gray-600">
                  Absolutely! All our non-profit websites include user-friendly content management systems that allow your team to easily update content, add events, post news, and manage basic website functions without technical knowledge. We provide training to ensure your team can confidently manage the site.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">How do you ensure our website is secure for donations?</h3>
                <p className="text-gray-600">
                  Security is paramount for donation processing. We implement SSL certificates, secure payment gateways that comply with PCI DSS standards, regular security updates, and data protection measures to ensure donor information is safe. We also ensure your site complies with relevant data protection regulations including GDPR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Amplify Your Cause?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch today for a free consultation and let us help you create an affordable, effective website that advances your mission.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-white text-accent hover:bg-gray-100 rounded-full">
              Start Your Non-profit Website from £500
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NonprofitDevelopment; 