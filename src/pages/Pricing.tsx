
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Check, X, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for small businesses just getting started online",
    price: 1499,
    duration: "one-time",
    features: [
      { name: "Responsive Website Design", included: true },
      { name: "5 Custom Pages", included: true },
      { name: "Contact Form", included: true },
      { name: "Basic SEO Setup", included: true },
      { name: "Social Media Integration", included: true },
      { name: "Content Management System", included: true },
      { name: "30 Days Support", included: true },
      { name: "E-commerce Functionality", included: false },
      { name: "Custom Functionality", included: false },
      { name: "Performance Optimization", included: false }
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses needing more features",
    price: 2999,
    duration: "one-time",
    features: [
      { name: "Responsive Website Design", included: true },
      { name: "10 Custom Pages", included: true },
      { name: "Contact Form", included: true },
      { name: "Advanced SEO Setup", included: true },
      { name: "Social Media Integration", included: true },
      { name: "Content Management System", included: true },
      { name: "90 Days Support", included: true },
      { name: "E-commerce Functionality", included: true, limit: "Up to 50 products" },
      { name: "Custom Functionality", included: false },
      { name: "Performance Optimization", included: true }
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Enterprise",
    description: "Complete solution for established businesses with complex needs",
    price: 5999,
    duration: "one-time",
    features: [
      { name: "Responsive Website Design", included: true },
      { name: "Unlimited Custom Pages", included: true },
      { name: "Contact Form", included: true },
      { name: "Advanced SEO Setup", included: true },
      { name: "Social Media Integration", included: true },
      { name: "Content Management System", included: true },
      { name: "180 Days Support", included: true },
      { name: "E-commerce Functionality", included: true, limit: "Unlimited products" },
      { name: "Custom Functionality", included: true },
      { name: "Performance Optimization", included: true }
    ],
    popular: false,
    cta: "Contact Us"
  }
];

const maintenancePlans = [
  {
    name: "Basic Care",
    price: 79,
    duration: "per month",
    features: [
      "Monthly Updates & Backups",
      "Security Monitoring",
      "Technical Support (9-5, M-F)",
      "Basic Analytics Reports"
    ]
  },
  {
    name: "Active Management",
    price: 149,
    duration: "per month",
    features: [
      "Weekly Updates & Backups",
      "Enhanced Security & Monitoring",
      "Priority Support (9-5, M-F)",
      "Monthly Analytics Reports",
      "2 Hours Content Updates"
    ]
  },
  {
    name: "Complete Care",
    price: 299,
    duration: "per month",
    features: [
      "Weekly Updates & Backups",
      "Premium Security Suite",
      "24/7 Emergency Support",
      "Weekly Analytics Reports",
      "5 Hours Content Updates",
      "Performance Optimization"
    ]
  }
];

const faqs = [
  {
    question: "What is included in the website development cost?",
    answer: "Our website development packages include design, development, testing, and deployment of your website. This includes responsive design, basic SEO optimization, and initial content setup based on the materials you provide."
  },
  {
    question: "How long does it take to develop a website?",
    answer: "The timeline varies depending on the complexity of the project. A basic website typically takes 3-4 weeks, while more complex projects can take 8-12 weeks. We'll provide a specific timeline during our initial consultation."
  },
  {
    question: "Do I need to purchase hosting separately?",
    answer: "Hosting is not included in our standard website development packages. However, we can recommend and help set up hosting based on your needs, or you can include it in a maintenance plan."
  },
  {
    question: "Can I update the website myself after it's completed?",
    answer: "Yes, all our websites come with a content management system (CMS) that allows you to update content. We provide training on how to use the CMS as part of the project delivery."
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer: "Yes, we offer various maintenance plans to keep your website secure, updated, and performing optimally. These plans include regular updates, backups, security monitoring, and technical support."
  },
  {
    question: "What if I need additional features later?",
    answer: "We can always add features to your website after the initial build. We'll provide a quote for any additional development work based on your requirements."
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Pricing Plans" 
        subtitle="Transparent pricing with no hidden fees"
      />
      <Breadcrumbs />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
              Website Development
            </span>
            <h2 className="text-3xl font-bold mb-6">Choose the Perfect Plan for Your Business</h2>
            <p className="text-gray-600">
              Our straightforward pricing ensures you know exactly what you're getting. All plans include responsive design, 
              SEO optimization, and a user-friendly content management system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative hover-card overflow-hidden ${plan.popular ? 'border-accent shadow-xl' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6 pt-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="flex justify-center items-baseline mb-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.duration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                        )}
                        <span className={`${!feature.included ? 'text-gray-400' : ''}`}>
                          {feature.name}
                          {feature.limit && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <HelpCircle className="h-4 w-4 inline ml-1 text-gray-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{feature.limit}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link to="/contact" className="w-full">
                    <Button 
                      className={`w-full ${plan.popular ? '' : 'bg-gray-700 hover:bg-gray-800'}`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-8">
              Need a custom solution? We offer tailored packages for specific industry needs.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Get a Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
              Maintenance & Support
            </span>
            <h2 className="text-3xl font-bold mb-6">Keep Your Website Running Smoothly</h2>
            <p className="text-gray-600">
              Our maintenance plans ensure your website stays secure, up-to-date, and performing at its best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <Card key={index} className="hover-card">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex justify-center items-baseline mb-6">
                      <span className="text-3xl font-bold">${plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.duration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link to="/contact" className="w-full">
                    <Button variant="outline" className="w-full">
                      Select Plan
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
              FAQs
            </span>
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to commonly asked questions about our pricing and services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8">
              Have more questions? We're here to help!
            </p>
            <Link to="/contact">
              <Button size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
