
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Heart, Home, Scale, Layers } from "lucide-react";
import { useState } from "react";

const industries = [
  { name: "All", icon: Layers },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: Heart },
  { name: "Real Estate", icon: Home },
  { name: "Legal", icon: Scale },
];

const projects = [
  {
    id: 1,
    title: "LuxuryHome Real Estate Platform",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    brief: "A premium real estate listing platform with virtual tours and advanced filtering",
    results: "Increased lead generation by 45% within 3 months",
    link: "#"
  },
  {
    id: 2,
    title: "MedClinic Patient Portal",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    brief: "HIPAA-compliant patient portal for a multi-location medical practice",
    results: "Reduced administrative workload by 30% and improved patient satisfaction",
    link: "#"
  },
  {
    id: 3,
    title: "FashionHub Online Store",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    brief: "Modern e-commerce platform for a fashion retailer with 500+ products",
    results: "200% increase in online sales within the first year",
    link: "#"
  },
  {
    id: 4,
    title: "Johnson & Partners Law Firm",
    category: "Legal",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    brief: "Professional website with case management system for a growing law firm",
    results: "40% increase in consultation requests and improved client communication",
    link: "#"
  },
  {
    id: 5,
    title: "HealthFirst Medical Center",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    brief: "Comprehensive website rebuild with appointment scheduling system",
    results: "60% increase in online appointments and improved patient experience",
    link: "#"
  },
  {
    id: 6,
    title: "HomeFinderPro Platform",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    brief: "MLS-integrated website for a real estate agency with 50+ agents",
    results: "Streamlined property management and increased client engagement",
    link: "#"
  },
  {
    id: 7,
    title: "ElegantWear Fashion Boutique",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    brief: "Boutique e-commerce site with integrated Instagram shop",
    results: "350% ROI within the first year and significant social media growth",
    link: "#"
  },
  {
    id: 8,
    title: "Smith & Associates Law",
    category: "Legal",
    image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    brief: "Complete digital rebrand for an established law firm",
    results: "Modernized online presence resulting in 35% more qualified leads",
    link: "#"
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Our Work" 
        subtitle="Explore our portfolio of successful client projects"
      />
      <Breadcrumbs />
      
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry) => (
              <Button 
                key={industry.name}
                variant={activeCategory === industry.name ? "default" : "outline"}
                className="gap-2"
                onClick={() => setActiveCategory(industry.name)}
              >
                <industry.icon size={16} />
                {industry.name}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover-card">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.brief}</p>
                  <div className="bg-green-50 text-green-700 text-sm p-3 rounded-lg mb-4">
                    <strong>Results:</strong> {project.results}
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={project.link} className="flex items-center justify-center gap-2">
                      View Case Study <ArrowRight size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No projects found for this category</h3>
              <p className="text-gray-600 mb-4">Please try selecting another category or contact us to discuss your project needs.</p>
              <Button onClick={() => setActiveCategory("All")}>View All Projects</Button>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join our growing list of satisfied clients who have transformed their digital presence with BMCrafts.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Get Your Free Consultation</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
