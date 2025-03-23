import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  CheckCircle, 
  Smartphone, 
  Search, 
  CreditCard,
  BarChart
} from "lucide-react";
import { Link } from "react-router-dom";

const EcommerceDevelopment = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>E-commerce Website Development UK | Shopify & WooCommerce | BMCrafts</title>
        <meta name="description" content="Need a scalable e-commerce website? BM Crafts offers expert Shopify, WooCommerce, and Magento development in the UK with mobile-first design and SEO to boost sales." />
        <meta name="keywords" content="e-commerce website development UK, Shopify developer UK, WooCommerce website design, mobile-first e-commerce solutions UK, e-commerce SEO services UK" />
        <link rel="canonical" href="https://bmcrafts.co.uk/services/ecommerce-development" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bmcrafts.co.uk/services/ecommerce-development" />
        <meta property="og:title" content="E-commerce Website Development UK | BMCrafts" />
        <meta property="og:description" content="Expert Shopify, WooCommerce, and Magento development with mobile-first design and SEO to boost your online sales." />
        <meta property="og:image" content="https://bmcrafts.co.uk/images/ecommerce-development.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bmcrafts.co.uk/services/ecommerce-development" />
        <meta property="twitter:title" content="E-commerce Website Development UK | BMCrafts" />
        <meta property="twitter:description" content="Expert Shopify, WooCommerce, and Magento development with mobile-first design and SEO to boost your online sales." />
        <meta property="twitter:image" content="https://bmcrafts.co.uk/images/ecommerce-development.jpg" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "E-commerce Website Development",
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
              "description": "Expert Shopify, WooCommerce, and Magento development with mobile-first design and SEO to boost online sales.",
              "offers": {
                "@type": "Offer",
                "price": "From £1,999"
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      <PageHeader 
        title="E-commerce Website Development UK" 
        subtitle="Custom online store solutions to boost your sales and grow your business"
      />
      <Breadcrumbs />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Business with a Mobile-First E-commerce Website</h2>
              <p className="text-lg text-gray-600 mb-6">
                In today's digital marketplace, your online store needs to stand out and deliver exceptional shopping experiences on every device. BMCrafts specializes in creating custom e-commerce websites that drive sales, build customer loyalty, and grow your business.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><span className="font-medium">Mobile-first design</span> to capture the growing smartphone shopping audience</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><span className="font-medium">SEO optimization</span> to help your products rank higher in search results</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><span className="font-medium">Seamless payment processing</span> with multiple options for your customers</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><span className="font-medium">Conversion-focused design</span> that guides visitors to become customers</p>
                </div>
              </div>
              <Link to="/contact">
                <Button size="lg" className="rounded-full">
                  Get Your Free E-commerce Consultation
                </Button>
              </Link>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="E-commerce website development for UK businesses" 
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
              Our E-commerce Platforms
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Development on Leading Platforms</h2>
            <p className="text-lg text-gray-600">
              We craft exceptional shopping experiences on the world's most powerful e-commerce platforms, customized to fit your specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-card border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify logo" className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Shopify Development</h3>
                <p className="text-gray-600 mb-6">
                  Custom Shopify stores with bespoke themes, apps, and integrations to create unique shopping experiences that convert visitors into loyal customers.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Custom theme development</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">App integration and development</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Migration from other platforms</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-card border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <img src="https://cdn.worldvectorlogo.com/logos/woocommerce.svg" alt="WooCommerce logo" className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">WooCommerce Development</h3>
                <p className="text-gray-600 mb-6">
                  Powerful WordPress-based online stores with unlimited customization options, perfect for businesses that need complete control over their e-commerce experience.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Custom WordPress & WooCommerce themes</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Plugin development and customization</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Advanced product management</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover-card border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <img src="https://cdn.worldvectorlogo.com/logos/magento-2.svg" alt="Magento logo" className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Magento Development</h3>
                <p className="text-gray-600 mb-6">
                  Enterprise-grade e-commerce solutions for large businesses and complex selling requirements, offering unmatched flexibility and scalability.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Custom Magento theme development</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Extension development and integration</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-accent mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <p className="text-gray-700 text-sm">Multi-store & enterprise implementation</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive E-commerce Solutions</h2>
            <p className="text-lg text-gray-600">
              Our e-commerce websites come packed with features designed to maximize sales and deliver exceptional user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile-First Design</h3>
              <p className="text-gray-600">
                Responsive layouts that look and work perfectly on all devices, with special attention to mobile shopping experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">E-commerce SEO</h3>
              <p className="text-gray-600">
                Built-in search engine optimization to help your products rank higher and attract more organic traffic.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Payments</h3>
              <p className="text-gray-600">
                Integration with multiple payment gateways to offer your customers a variety of secure payment options.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <ShoppingCart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Product Management</h3>
              <p className="text-gray-600">
                Powerful tools to manage your product catalog, including variants, pricing, inventory, and more.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <BarChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Analytics & Insights</h3>
              <p className="text-gray-600">
                Detailed reporting and analytics to help you understand customer behavior and optimize for better performance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Third-Party Integrations</h3>
              <p className="text-gray-600">
                Connect your store with shipping providers, marketing tools, CRM systems, and other essential business services.
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
                Find answers to common questions about our e-commerce development services.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">How long does it take to build an e-commerce website?</h3>
                <p className="text-gray-600">
                  Typical e-commerce projects take 6-12 weeks from concept to launch, depending on complexity, customization needs, and the number of products. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Which e-commerce platform is best for my business?</h3>
                <p className="text-gray-600">
                  It depends on your specific needs. Shopify is excellent for ease of use and quick setup, WooCommerce offers more customization with WordPress, and Magento is ideal for large catalogs and complex requirements. We'll help you choose the best fit during our consultation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Do you provide ongoing support after launch?</h3>
                <p className="text-gray-600">
                  Yes, we offer various maintenance and support packages to keep your e-commerce site secure, updated, and performing optimally. Our team can handle content updates, technical issues, and continuous improvement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">How do you optimize e-commerce sites for SEO?</h3>
                <p className="text-gray-600">
                  We implement numerous SEO best practices, including proper site structure, schema markup for products, optimized product descriptions, fast loading speeds, mobile optimization, and technical SEO elements like clean URLs and proper redirects.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-2">Can you migrate my existing online store to a new platform?</h3>
                <p className="text-gray-600">
                  Yes, we specialize in e-commerce migrations. We'll ensure all your products, customer data, order history, and SEO value are preserved when moving to your new platform with minimal disruption to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Boost Your Online Sales?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get in touch today for a free consultation and let us help you create an e-commerce website that drives results.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-white text-accent hover:bg-gray-100 rounded-full">
              Get Your Free E-commerce Consultation
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EcommerceDevelopment; 