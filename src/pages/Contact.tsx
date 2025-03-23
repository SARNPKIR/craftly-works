import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/sections/Contact";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    details: [
      "123 Business Avenue",
      "Tech District",
      "San Francisco, CA 94105"
    ]
  },
  {
    icon: Phone,
    title: "Phone",
    details: [
      "+1 (555) 123-4567",
      "+1 (555) 987-6543"
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "info@bmcrafts.co.uk",
      "support@bmcrafts.co.uk"
    ]
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      "Monday - Friday: 9am - 6pm",
      "Saturday: 10am - 4pm",
      "Sunday: Closed"
    ]
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for any inquiries or project discussions"
      />
      <Breadcrumbs />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">We'd Love to Hear from You</h2>
              <p className="text-gray-600 mb-10">
                Whether you have a question about our services, pricing, or just want to discuss a project, 
                our team is ready to answer all your questions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex">
                      <div className="mr-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                          <item.icon size={20} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="bg-gradient-to-r from-accent to-blue-600 text-white overflow-hidden shadow-md">
                <CardContent className="p-6 flex items-center">
                  <div className="mr-6">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageSquare size={28} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Live Chat Support</h3>
                    <p className="text-white/80 mb-4">
                      Need help right away? Chat with our support team instantly.
                    </p>
                    <Button className="bg-white text-accent hover:bg-gray-100">
                      Start Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="border border-gray-200 shadow-md">
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
            <p className="text-gray-600">
              Come by our office to meet the team and discuss your project in person.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe 
              title="BMCrafts Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.361777006475!2d-122.40142339118285!3d37.793564900861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858062c2166cbf%3A0x4e85a8878f7f6650!2sDowntown%20San%20Francisco%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1651254234532!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
