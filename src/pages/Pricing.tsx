
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const industries = ["E-commerce", "Healthcare", "Real Estate", "Legal", "Non-profit"];

const pricingPlans = {
  "E-commerce": [
    {
      name: "Basic Store",
      price: "£1,500",
      features: [
        "Up to 50 products",
        "Responsive design",
        "Product categories",
        "Shopping cart",
        "Standard payment gateways",
        "Basic SEO setup",
        "Contact form",
        "3 months support"
      ]
    },
    {
      name: "Advanced Store",
      price: "£3,000",
      popular: true,
      features: [
        "Up to 500 products",
        "Custom design",
        "Advanced product filtering",
        "User reviews & ratings",
        "Multiple payment options",
        "Advanced SEO package",
        "Inventory management",
        "6 months support"
      ]
    },
    {
      name: "Premium Store",
      price: "£4,500",
      features: [
        "Unlimited products",
        "Premium custom design",
        "Product comparison features",
        "Multiple currency support",
        "International shipping options",
        "Full SEO package",
        "Custom API integrations",
        "12 months priority support"
      ]
    }
  ],
  "Healthcare": [
    {
      name: "Basic Practice",
      price: "£2,000",
      features: [
        "Practice information pages",
        "Staff/provider profiles",
        "Responsive design",
        "Contact forms",
        "Location maps",
        "HIPAA compliant forms",
        "Basic SEO setup",
        "3 months support"
      ]
    },
    {
      name: "Advanced Practice",
      price: "£3,500",
      popular: true,
      features: [
        "All Basic features",
        "Online appointment booking",
        "Patient education resources",
        "Blog/news section",
        "Newsletter integration",
        "Advanced SEO package",
        "Social media integration",
        "6 months support"
      ]
    },
    {
      name: "Premium System",
      price: "£5,000",
      features: [
        "All Advanced features",
        "Patient portal",
        "Secure messaging system",
        "EMR/EHR integration",
        "Telehealth capabilities",
        "Custom API integrations",
        "Performance analytics",
        "12 months priority support"
      ]
    }
  ],
  "Real Estate": [
    {
      name: "Basic Realty",
      price: "£1,800",
      features: [
        "Property listings (up to 50)",
        "Agent profiles",
        "Responsive design",
        "Contact forms",
        "Location maps",
        "Basic search functionality",
        "Basic SEO setup",
        "3 months support"
      ]
    },
    {
      name: "Advanced Realty",
      price: "£3,200",
      popular: true,
      features: [
        "Property listings (up to 200)",
        "IDX integration",
        "Advanced property search",
        "Lead capture forms",
        "CRM integration",
        "Advanced SEO package",
        "Blog/market updates",
        "6 months support"
      ]
    },
    {
      name: "Premium Realty",
      price: "£4,800",
      features: [
        "Unlimited property listings",
        "Virtual tours integration",
        "Custom property filters",
        "Mortgage calculator",
        "Full MLS/IDX sync",
        "Analytics dashboard",
        "Email marketing integration",
        "12 months priority support"
      ]
    }
  ],
  "Legal": [
    {
      name: "Basic Firm",
      price: "£2,000",
      features: [
        "Firm overview",
        "Attorney profiles",
        "Practice areas",
        "Responsive design",
        "Contact forms",
        "Location maps",
        "Basic SEO setup",
        "3 months support"
      ]
    },
    {
      name: "Advanced Firm",
      price: "£3,500",
      popular: true,
      features: [
        "All Basic features",
        "Case studies/results",
        "Testimonials section",
        "Blog/resources section",
        "Newsletter integration",
        "Local SEO package",
        "Social media integration",
        "6 months support"
      ]
    },
    {
      name: "Premium Firm",
      price: "£5,000",
      features: [
        "All Advanced features",
        "Client portal",
        "Document sharing system",
        "Appointment scheduling",
        "Marketing automation",
        "Custom API integrations",
        "Performance analytics",
        "12 months priority support"
      ]
    }
  ],
  "Non-profit": [
    {
      name: "Basic Charity",
      price: "£1,500",
      features: [
        "Organization overview",
        "Mission & vision pages",
        "Responsive design",
        "Basic donation button",
        "Contact forms",
        "Social media links",
        "Basic SEO setup",
        "3 months support"
      ]
    },
    {
      name: "Advanced Charity",
      price: "£3,000",
      popular: true,
      features: [
        "All Basic features",
        "Donation platform integration",
        "Event calendar",
        "Blog/success stories",
        "Newsletter integration",
        "Advanced SEO package",
        "Email signup forms",
        "6 months support"
      ]
    },
    {
      name: "Premium Charity",
      price: "£4,500",
      features: [
        "All Advanced features",
        "Member/donor portal",
        "Volunteer management",
        "Campaign pages",
        "CRM integration",
        "Custom API integrations",
        "Performance analytics",
        "12 months priority support"
      ]
    }
  ]
};

const addOns = [
  {
    name: "Content Creation",
    description: "Professional copywriting for your website (up to 10 pages)",
    price: "£500"
  },
  {
    name: "Logo Design",
    description: "Professional logo design with multiple concepts and revisions",
    price: "£350"
  },
  {
    name: "SEO Package",
    description: "Comprehensive on-page and technical SEO optimization",
    price: "£750"
  },
  {
    name: "Social Media Integration",
    description: "Connect your website to social platforms with sharing capabilities",
    price: "£250"
  },
  {
    name: "Custom API Integration",
    description: "Connect third-party services to your website via API",
    price: "£600+"
  },
  {
    name: "Marketing Automation",
    description: "Set up automated email marketing and lead nurturing",
    price: "£800"
  }
];

const FAQs = [
  {
    question: "How long does it take to build a website?",
    answer: "Most of our projects are completed within 4-8 weeks, depending on the complexity and package chosen. E-commerce and custom web applications may take longer due to their complex functionality."
  },
  {
    question: "Do you offer hosting and maintenance?",
    answer: "Yes, we offer optional hosting and maintenance packages for all our websites. These include regular updates, security monitoring, and technical support."
  },
  {
    question: "Can I update the website myself after it's built?",
    answer: "Absolutely! All our websites come with a content management system (CMS) that allows you to easily update content, add new pages, and manage your website without technical knowledge."
  },
  {
    question: "Do you offer custom designs or use templates?",
    answer: "We create custom designs tailored to your brand and business needs. We don't use generic templates, ensuring your website stands out from competitors."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, credit/debit cards, and PayPal. We typically require a 50% deposit to begin work, with the remaining balance due upon project completion."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Yes, all our packages include a support period (3-12 months depending on the package). After this period, you can purchase additional support or maintenance packages."
  }
];

const Pricing = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("E-commerce");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Transparent Pricing" 
        subtitle="Flat-rate packages with no hidden fees, tailored for your industry"
      />
      <Breadcrumbs />
      
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry) => (
              <Button 
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                onClick={() => setSelectedIndustry(industry)}
              >
                {industry}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans[selectedIndustry as keyof typeof pricingPlans].map((plan, index) => (
              <Card 
                key={index} 
                className={`hover-card relative ${plan.popular ? 'border-accent shadow-lg' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{plan.name}</span>
                    <span className="text-2xl">{plan.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      Get Started <ArrowRight size={16} />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Optional Add-ons</h2>
            <p className="text-gray-600">
              Enhance your website with these additional services, available with any package.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold">{addon.name}</h3>
                  <span className="text-accent font-medium">{addon.price}</span>
                </div>
                <p className="text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">View All Add-ons</Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Complete Add-on Services</DialogTitle>
                  <DialogDescription>
                    Customize your project with these additional services
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {addOns.concat(addOns).map((addon, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{addon.name}</h3>
                        <span className="text-accent">{addon.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{addon.description}</p>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y">
            {FAQs.map((faq, index) => (
              <div key={index} className="py-5">
                <button
                  className="flex justify-between items-center w-full text-left font-medium"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="transform transition-transform">
                    {openFAQ === index ? 
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg> : 
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    }
                  </span>
                </button>
                <div className={`mt-2 ${openFAQ === index ? 'block' : 'hidden'}`}>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our packages are designed to fit most needs, but we understand that every business is unique.
            Contact us for a custom quote tailored to your specific requirements.
          </p>
          <Button className="bg-white text-accent hover:bg-white/90" size="lg" asChild>
            <Link to="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
