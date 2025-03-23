import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Paintbrush, ShoppingCart, BarChart, Smartphone, Globe, GraduationCap, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web Design & Development",
    description: "Custom websites built from scratch with modern technologies and responsive design that works on all devices.",
    icon: Paintbrush,
    features: [
      "Responsive design for all devices",
      "Custom interface design",
      "CMS integration (WordPress, Shopify, etc.)",
      "SEO-optimized structure",
      "Performance optimization"
    ],
    cta: "Get a Website Quote",
    link: "/contact"
  },
  {
    title: "E-commerce Solutions",
    description: "Online stores that drive sales with seamless checkout experiences and powerful product management.",
    icon: ShoppingCart,
    features: [
      "Custom product catalogs",
      "Secure payment processing",
      "Inventory management",
      "Customer accounts",
      "Order tracking"
    ],
    cta: "Learn More",
    link: "/services/ecommerce-development",
    highlighted: true
  },
  {
    title: "Healthcare Websites & Apps",
    description: "GDPR-compliant digital solutions for medical practices, clinics, and telehealth providers with secure patient portals.",
    icon: Heart,
    features: [
      "GDPR & HIPAA compliance",
      "Secure patient portals",
      "EHR/EMR integration",
      "Appointment scheduling",
      "Telehealth capabilities"
    ],
    cta: "Learn More",
    link: "/services/healthcare-development",
    highlighted: true
  },
  {
    title: "Educational Course Websites & LMS",
    description: "Custom learning platforms and Learning Management Systems for educational institutions, trainers, and organizations.",
    icon: GraduationCap,
    features: [
      "Course creation tools",
      "Student dashboards & progress tracking",
      "Assessment & quiz functionality",
      "Payment integration",
      "Certification generation"
    ],
    cta: "Build Your Learning Platform",
    link: "/contact"
  },
  {
    title: "Web Application Development",
    description: "Custom web applications that solve specific business needs with robust functionality.",
    icon: Code,
    features: [
      "User authentication systems",
      "Custom workflows & processes",
      "Third-party API integration",
      "Real-time functionality",
      "Secure data handling"
    ],
    cta: "Discuss Your App",
    link: "/contact"
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that drive traffic and generate leads for your business.",
    icon: BarChart,
    features: [
      "Search engine optimization (SEO)",
      "Pay-per-click advertising (PPC)",
      "Social media marketing",
      "Email marketing campaigns",
      "Analytics & reporting"
    ],
    cta: "Grow Your Reach",
    link: "/contact"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: Smartphone,
    features: [
      "Native iOS & Android development",
      "Cross-platform solutions",
      "UI/UX design for mobile",
      "App store optimization",
      "Push notifications"
    ],
    cta: "Create Your App",
    link: "/contact"
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your digital assets secure and up-to-date.",
    icon: Globe,
    features: [
      "Regular security updates",
      "Performance optimization",
      "Content updates",
      "Technical support",
      "Monitoring & backups"
    ],
    cta: "Get Support",
    link: "/contact"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive web solutions to help your business grow online"
      />
      <Breadcrumbs />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`hover-card border-none shadow-lg overflow-hidden ${service.highlighted ? 'ring-2 ring-accent/20' : ''}`}>
                <CardContent className="p-0">
                  <div className="p-6 border-b">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-semibold mb-3">What's included:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 text-accent">•</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to={service.link}>
                      <Button className={`w-full ${service.highlighted ? 'bg-accent hover:bg-accent/90' : ''}`}>
                        {service.cta}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
                Our Approach
              </span>
              <h2 className="text-3xl font-bold mb-6">How We Deliver Exceptional Services</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-medium">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Discovery</h4>
                    <p className="text-gray-600">We start by understanding your business goals, audience, and requirements through in-depth consultation.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-medium">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Strategy</h4>
                    <p className="text-gray-600">We create a detailed roadmap and solution design tailored to your specific needs and objectives.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-medium">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Implementation</h4>
                    <p className="text-gray-600">Our expert team brings your project to life with regular updates and feedback sessions.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-medium">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Support & Growth</h4>
                    <p className="text-gray-600">We provide ongoing maintenance and optimization to ensure your digital solution evolves with your business.</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="mt-8 inline-block">
                <Button size="lg">Schedule a Consultation</Button>
              </Link>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Our team working on a project" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
