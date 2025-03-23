
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Mountain View Resort",
    category: "hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Custom website with booking functionality for a luxury mountain resort.",
    technologies: ["React", "Node.js", "Stripe API", "Booking Engine"],
    linkText: "Visit Website"
  },
  {
    title: "Fresh Grocery Delivery",
    category: "ecommerce",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "E-commerce platform with same-day delivery scheduling for a local grocery chain.",
    technologies: ["Shopify", "Custom Theme", "Delivery API", "Payment Gateway"],
    linkText: "Visit Store"
  },
  {
    title: "MedConnect",
    category: "healthcare",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Patient portal and appointment scheduling system for a medical practice.",
    technologies: ["React", "Node.js", "MongoDB", "Twilio API"],
    linkText: "Case Study"
  },
  {
    title: "LegalEase",
    category: "professional",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Client management portal and document repository for a law firm.",
    technologies: ["Next.js", "Firebase", "OAuth", "PDF Generation"],
    linkText: "Learn More"
  },
  {
    title: "BuildRight Construction",
    category: "professional",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Project showcase and client portal for a construction company.",
    technologies: ["WordPress", "Custom Theme", "Project Management"],
    linkText: "Visit Website"
  },
  {
    title: "SportsFit",
    category: "fitness",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Membership portal and class booking system for a fitness center.",
    technologies: ["React", "Node.js", "Stripe Subscriptions", "Calendar API"],
    linkText: "View Project"
  },
  {
    title: "Urban Cafe",
    category: "hospitality",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Menu showcase and online ordering system for a local cafe chain.",
    technologies: ["React", "Node.js", "Payment Processing", "Order Management"],
    linkText: "Visit Website"
  },
  {
    title: "TechGear",
    category: "ecommerce",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "E-commerce platform with product customization features for a tech retailer.",
    technologies: ["WooCommerce", "Custom Product Builder", "Inventory Management"],
    linkText: "Visit Store"
  },
  {
    title: "Wellness Clinic",
    category: "healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Appointment booking and patient resources portal for a wellness center.",
    technologies: ["React", "Express", "PostgreSQL", "Authentication"],
    linkText: "Learn More"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Our Portfolio" 
        subtitle="Showcasing our best work across various industries"
      />
      <Breadcrumbs />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                <TabsTrigger value="hospitality">Hospitality</TabsTrigger>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="fitness">Fitness</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </TabsContent>
            
            {["ecommerce", "healthcare", "hospitality", "professional", "fitness"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter((project) => project.category === category)
                    .map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))
                  }
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
            Client Success
          </span>
          <h2 className="text-3xl font-bold mb-6 max-w-2xl mx-auto">
            Ready to Join Our Growing List of Successful Clients?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Let's discuss how we can help transform your digital presence and create a custom solution tailored to your business needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-full text-base font-medium hover:bg-accent/90 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

interface ProjectProps {
  project: {
    title: string;
    category: string;
    image: string;
    description: string;
    technologies: string[];
    linkText: string;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div className="group overflow-hidden rounded-xl shadow-lg hover-card h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link 
            to="#" 
            className="inline-flex items-center justify-center px-5 py-2 bg-white text-accent rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            {project.linkText} <ExternalLink className="ml-2" size={14} />
          </Link>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
