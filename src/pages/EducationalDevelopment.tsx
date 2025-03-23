import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users, BarChart3, Trophy, Tablet } from "lucide-react";
import { Link } from "react-router-dom";

const EducationalDevelopment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Educational Course Websites & LMS Development UK | BMCrafts</title>
        <meta name="description" content="Custom LMS development from £500. Create engaging online courses, student portals & assessment systems for UK educational institutions & trainers." />
        <meta name="keywords" content="learning management system development, online course website, educational platform development UK, custom LMS solutions, e-learning website development" />
        <meta property="og:title" content="Educational Course Websites & LMS Development UK | BMCrafts" />
        <meta property="og:description" content="Custom LMS development from £500. Create engaging online courses, student portals & assessment systems for UK educational institutions & trainers." />
        <meta property="og:image" content="/images/educational-development.jpg" />
        <meta property="og:url" content="https://bmcrafts.co.uk/services/educational-development" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Educational Course Websites & LMS Development UK | BMCrafts" />
        <meta name="twitter:description" content="Custom LMS development from £500. Create engaging online courses, student portals & assessment systems for UK educational institutions & trainers." />
        <meta name="twitter:image" content="/images/educational-development.jpg" />
        <link rel="canonical" href="https://bmcrafts.co.uk/services/educational-development" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Educational Course Website & LMS Development",
              "provider": {
                "@type": "ProfessionalService",
                "name": "BMCrafts",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "United Kingdom"
                },
                "telephone": "+44-123-456-7890",
                "priceRange": "£500+",
                "image": "/images/bmcrafts-logo.png",
                "url": "https://bmcrafts.co.uk"
              },
              "areaServed": "United Kingdom",
              "description": "Custom Learning Management System (LMS) development and educational course websites for UK trainers, tutors, and educational institutions.",
              "offers": {
                "@type": "Offer",
                "price": "500",
                "priceCurrency": "GBP"
              }
            }
          `}
        </script>
      </Helmet>

      <Navbar />

      <PageHeader 
        title="Educational Course Websites & LMS Development"
        subtitle="Custom learning platforms for educational institutions, trainers, and organizations"
      />

      <Breadcrumbs />

      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Transform Your Educational Content Into Engaging Online Experiences</h2>
            <p className="text-muted-foreground mb-6">
              We develop custom Learning Management Systems (LMS) and educational course websites that make teaching and learning more effective, accessible, and measurable. Starting from just £500, our educational platforms are designed for:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary"><BookOpen size={18} /></div>
                <span>Educational institutions and schools</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary"><Users size={18} /></div>
                <span>Independent trainers and tutors</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary"><BarChart3 size={18} /></div>
                <span>Corporate training departments</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary"><Trophy size={18} /></div>
                <span>Certification programs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary"><Tablet size={18} /></div>
                <span>Online course creators</span>
              </li>
            </ul>
            <Button asChild size="lg" className="mt-2">
              <Link to="/contact">Discuss Your Educational Platform</Link>
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/services/images/educational-platform.jpg" 
              alt="Educational course platform with student dashboard and learning materials" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Educational Platform Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  <GraduationCap size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom LMS Development</h3>
                <p className="text-muted-foreground mb-4">
                  Bespoke Learning Management Systems tailored to your specific teaching methodology and learning objectives.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Course creation and management tools</li>
                  <li>• Student enrollment and progress tracking</li>
                  <li>• Customizable learning paths</li>
                  <li>• Integrated assessment systems</li>
                  <li>• Reporting and analytics</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  <BookOpen size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Interactive Learning Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Engage students with interactive content that makes learning more effective and enjoyable.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Interactive quizzes and assessments</li>
                  <li>• Video integration and management</li>
                  <li>• Discussion forums and collaborative tools</li>
                  <li>• Gamification elements</li>
                  <li>• Virtual classroom capabilities</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-primary mb-4">
                  <BarChart3 size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Revenue & Management</h3>
                <p className="text-muted-foreground mb-4">
                  Turn your educational content into a sustainable business with integrated payment and management tools.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Secure payment processing</li>
                  <li>• Subscription and membership models</li>
                  <li>• Certificate generation</li>
                  <li>• Student management dashboard</li>
                  <li>• Marketing and sales integrations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose BMCrafts for Your Educational Website</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Education-Focused Development</h3>
            <p className="text-muted-foreground mb-6">
              We understand the unique challenges of online education and build platforms that prioritize learning outcomes while remaining intuitive for both educators and students.
            </p>
            <h3 className="text-xl font-bold mb-4">Mobile-Responsive Design</h3>
            <p className="text-muted-foreground mb-6">
              Our educational platforms work seamlessly across all devices, allowing students to learn on their terms – whether on desktop, tablet, or mobile.
            </p>
            <h3 className="text-xl font-bold mb-4">Scalable Architecture</h3>
            <p className="text-muted-foreground">
              Start small and grow your educational offering. Our platforms are built to scale with your student base and expanding course catalog.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Integration Capabilities</h3>
            <p className="text-muted-foreground mb-6">
              Connect with the tools you already use. We integrate with payment processors, CRMs, email marketing platforms, and other educational software.
            </p>
            <h3 className="text-xl font-bold mb-4">Affordable Starting Price</h3>
            <p className="text-muted-foreground mb-6">
              Launch your educational platform from just £500, with options to add advanced features as your needs grow and evolve.
            </p>
            <h3 className="text-xl font-bold mb-4">Ongoing Support</h3>
            <p className="text-muted-foreground">
              We provide technical support, training for your team, and regular updates to ensure your platform continues to deliver exceptional learning experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Educational Platform?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you build an engaging, effective learning platform that meets your specific educational goals.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EducationalDevelopment; 