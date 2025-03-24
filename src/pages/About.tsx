import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, TrendingUp, Award } from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";

const teamMembers = [
  {
    name: "Jane Smith",
    position: "Founder & CEO",
    bio: "With over 15 years of experience in web development and digital marketing, Jane leads our team with passion and innovation.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  },
  {
    name: "John Miller",
    position: "Lead Developer",
    bio: "John brings 10+ years of full-stack development expertise, specializing in creating robust, scalable web applications.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  },
  {
    name: "Sarah Johnson",
    position: "UX/UI Designer",
    bio: "Sarah combines aesthetics with functionality to create intuitive user experiences that delight clients and their customers.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  },
  {
    name: "Michael Brown",
    position: "Project Manager",
    bio: "Michael ensures all our projects are delivered on time and exceed client expectations through meticulous planning.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  }
];

const values = [
  {
    title: "Client-Centric",
    description: "We place our clients at the center of everything we do, ensuring their goals drive our solutions.",
    icon: User
  },
  {
    title: "Results-Focused",
    description: "We measure our success by the tangible results and growth we deliver for our clients.",
    icon: Target
  },
  {
    title: "Innovation",
    description: "We stay at the forefront of technology trends to provide cutting-edge solutions.",
    icon: TrendingUp
  },
  {
    title: "Excellence",
    description: "We're committed to delivering exceptional quality in every project we undertake.",
    icon: Award
  }
];

const About = () => {
  // Force scroll to top when component mounts
  useScrollToTop();
  
  // Additional scroll reset
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <PageHeader 
          title="About Us" 
          subtitle="We craft websites that transform businesses" 
        />
        <Breadcrumbs />
        
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
                  Our Story
                </span>
                <h2 className="text-3xl font-bold mb-6">Your Digital Partner for Growth</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2015, BMCrafts began with a simple mission: to help businesses establish 
                    a powerful online presence without the complexity and high costs typically associated 
                    with custom web development.
                  </p>
                  <p>
                    Over the years, we've evolved into a full-service digital agency, specializing in 
                    creating tailored web solutions for specific industries while maintaining our 
                    commitment to transparency, quality, and client satisfaction.
                  </p>
                  <p>
                    Today, we're proud to have served over 200 clients across various sectors, 
                    helping them transform their digital presence and achieve their business goals.
                  </p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
                  alt="Our team collaborating" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
                Our Values
              </span>
              <h2 className="text-3xl font-bold mb-6">What Drives Us Forward</h2>
              <p className="text-gray-600">
                Our core values shape every project, every interaction, and every solution we provide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover-card">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                      <value.icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
                Our Team
              </span>
              <h2 className="text-3xl font-bold mb-6">Meet the Experts Behind BMCrafts</h2>
              <p className="text-gray-600">
                Our talented team combines technical expertise with creative thinking to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="glass-card rounded-xl overflow-hidden hover-card">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-accent mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
