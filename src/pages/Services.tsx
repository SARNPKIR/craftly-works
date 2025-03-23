
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Heart, Home, Scale, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    title: "E-commerce Development",
    description: "Custom online stores built to sell and scale",
    icon: ShoppingCart,
    features: [
      "Custom product catalogs",
      "Secure payment integration",
      "Inventory management",
      "Mobile-responsive design",
      "SEO optimization",
      "Analytics integration"
    ],
    packages: [
      {
        name: "Basic",
        price: "£1,500",
        features: ["Up to 50 products", "Standard payment gateways", "Basic SEO setup", "Responsive design"]
      },
      {
        name: "Advanced",
        price: "£3,000",
        features: ["Up to 500 products", "Multiple payment options", "Advanced SEO", "Custom design", "Product filtering"]
      },
      {
        name: "Premium",
        price: "£4,500",
        features: ["Unlimited products", "International shipping", "Full SEO package", "Custom features", "API integrations"]
      }
    ]
  },
  {
    title: "Healthcare & Medical Websites",
    description: "HIPAA-compliant websites for healthcare providers",
    icon: Heart,
    features: [
      "Appointment scheduling",
      "Patient portals",
      "HIPAA compliance",
      "Medical resource libraries",
      "Provider directories",
      "Telemedicine integration"
    ],
    packages: [
      {
        name: "Basic",
        price: "£2,000",
        features: ["Practice information", "Doctor profiles", "Contact forms", "Mobile-responsive"]
      },
      {
        name: "Advanced",
        price: "£3,500",
        features: ["Online appointment booking", "Patient education resources", "Blog integration", "Enhanced SEO"]
      },
      {
        name: "Premium",
        price: "£5,000",
        features: ["Patient portal", "Secure messaging", "EMR integration", "Telehealth capabilities"]
      }
    ]
  },
  {
    title: "Real Estate Websites",
    description: "Property listing sites that convert visitors to clients",
    icon: Home,
    features: [
      "Property listings",
      "Advanced search filters",
      "Virtual tours",
      "Agent profiles",
      "Mortgage calculators",
      "Lead generation forms"
    ],
    packages: [
      {
        name: "Basic",
        price: "£1,800",
        features: ["Property listings", "Agent profiles", "Contact forms", "Mobile-friendly design"]
      },
      {
        name: "Advanced",
        price: "£3,200",
        features: ["IDX integration", "Advanced search", "Lead capture", "CRM integration"]
      },
      {
        name: "Premium",
        price: "£4,800",
        features: ["Virtual tours", "Custom property filters", "Analytics dashboard", "Full MLS sync"]
      }
    ]
  },
  {
    title: "Law Firm Websites",
    description: "Professional sites that build trust and generate leads",
    icon: Scale,
    features: [
      "Practice area pages",
      "Attorney profiles",
      "Case results",
      "Testimonials",
      "Blog/resources section",
      "Contact and consultation forms"
    ],
    packages: [
      {
        name: "Basic",
        price: "£2,000",
        features: ["Firm overview", "Attorney profiles", "Practice areas", "Contact forms"]
      },
      {
        name: "Advanced",
        price: "£3,500",
        features: ["Case studies", "Testimonials section", "Blog integration", "Local SEO"]
      },
      {
        name: "Premium",
        price: "£5,000",
        features: ["Client portal", "Document sharing", "Appointment scheduling", "Marketing automation"]
      }
    ]
  },
  {
    title: "Non-profit & Charity Websites",
    description: "Impactful sites that drive donations and engagement",
    icon: Heart,
    features: [
      "Donation integration",
      "Event calendars",
      "Volunteer management",
      "Impact stories",
      "Newsletter signup",
      "Social media integration"
    ],
    packages: [
      {
        name: "Basic",
        price: "£1,500",
        features: ["Organization overview", "Donation button", "Contact forms", "Mobile-responsive"]
      },
      {
        name: "Advanced",
        price: "£3,000",
        features: ["Donation platform", "Event calendar", "Blog integration", "Email signup"]
      },
      {
        name: "Premium",
        price: "£4,500",
        features: ["Member portal", "Volunteer management", "CRM integration", "Campaign pages"]
      }
    ]
  },
  {
    title: "Custom Web Applications",
    description: "Tailored software solutions for unique business challenges",
    icon: Layers,
    features: [
      "User authentication",
      "Database integration",
      "Third-party API connections",
      "Custom dashboards",
      "Reporting tools",
      "Scalable architecture"
    ],
    packages: [
      {
        name: "Basic",
        price: "£5,000+",
        features: ["User authentication", "Basic data management", "Simple workflows", "Responsive design"]
      },
      {
        name: "Advanced",
        price: "£10,000+",
        features: ["Complex workflows", "API integrations", "Advanced reporting", "User roles"]
      },
      {
        name: "Enterprise",
        price: "£20,000+",
        features: ["Custom modules", "Enterprise integration", "Advanced security", "Scalable infrastructure"]
      }
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Our Services" 
        subtitle="Industry-specific web solutions with transparent pricing"
      />
      <Breadcrumbs />
      
      {serviceCategories.map((service, index) => (
        <section key={index} className={`py-16 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <div className="flex items-center mb-4">
                  <div className="mr-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <service.icon size={20} />
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-[350px] bg-white">
                <img 
                  src={`https://source.unsplash.com/random/800x600/?${service.title.toLowerCase().replace(/\s/g, '')}`}
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.packages.map((pkg, i) => (
                <Card key={i} className="hover-card">
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <CardDescription>
                      <span className="text-2xl font-bold text-foreground">{pkg.price}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-start">
                          <svg className="w-5 h-5 text-accent mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}
      
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            We can create a tailor-made package specifically for your business requirements.
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <Button className="bg-white text-accent hover:bg-white/90" size="lg" asChild>
            <Link to="/contact">Contact Us for a Custom Quote</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
