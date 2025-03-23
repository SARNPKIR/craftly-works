import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Calendar, Video, CreditCard, Users, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

const FitnessDevelopment: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Fitness Trainer Website Development UK | Online Coaching Platforms | BMCrafts</title>
        <meta name="description" content="Custom fitness websites from £500. Class booking, membership management & workout tracking for UK personal trainers, gyms & health coaches." />
        <meta name="keywords" content="fitness website development UK, personal trainer websites, online coaching platform, gym website design, workout tracking software, class booking system" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bmcrafts.co.uk/services/fitness-development" />
        <meta property="og:title" content="Fitness Trainer Website Development UK | Online Coaching Platforms | BMCrafts" />
        <meta property="og:description" content="Custom fitness websites from £500. Class booking, membership management & workout tracking for UK personal trainers, gyms & health coaches." />
        <meta property="og:image" content="https://bmcrafts.co.uk/images/fitness-website.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bmcrafts.co.uk/services/fitness-development" />
        <meta property="twitter:title" content="Fitness Trainer Website Development UK | Online Coaching Platforms | BMCrafts" />
        <meta property="twitter:description" content="Custom fitness websites from £500. Class booking, membership management & workout tracking for UK personal trainers, gyms & health coaches." />
        <meta property="twitter:image" content="https://bmcrafts.co.uk/images/fitness-website.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bmcrafts.co.uk/services/fitness-development" />
        
        {/* Schema.org markup for Fitness Website Service */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Fitness Trainer Website Development",
            "provider": {
              "@type": "ProfessionalService",
              "name": "BMCrafts",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "United Kingdom"
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Kingdom"
            },
            "offers": {
              "@type": "Offer",
              "price": "500",
              "priceCurrency": "GBP"
            },
            "description": "Custom website development for fitness trainers, gyms, and health coaches. Class booking systems, membership management, and workout tracking platforms.",
            "image": "https://bmcrafts.co.uk/images/fitness-website.jpg"
          }
        `}</script>
      </Helmet>

      <Navbar />

      <PageHeader 
        title="Fitness Trainer Website Development" 
        subtitle="Digital platforms for personal trainers, gyms, and health coaches"
      />

      <Breadcrumbs />

      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Websites That Energize Your Fitness Business</h2>
            <p className="text-lg text-gray-700 mb-6">
              At BMCrafts, we create custom websites for fitness professionals that help you attract more clients, streamline your booking process, and deliver exceptional online coaching experiences.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Starting from just £500, our fitness-focused websites combine stylish design with practical functionality including class booking, membership management, and workout tracking.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Discuss Your Fitness Website
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="/services/images/fitness-website.jpg" 
              alt="Fitness Trainer Website Example" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Features For Fitness Professionals</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Calendar className="h-12 w-12 text-emerald-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">Class Booking System</h3>
                <p className="text-gray-600">
                  Let clients book and pay for sessions directly through your website. Automated reminders, cancellation policies, and waitlist management included.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-emerald-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">Membership Management</h3>
                <p className="text-gray-600">
                  Create and manage different membership tiers with custom access levels. Track renewals, payments, and member activity from a central dashboard.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Video className="h-12 w-12 text-emerald-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">Video Workout Libraries</h3>
                <p className="text-gray-600">
                  Host and organize your workout videos with secure access for paying clients. Create categorized libraries by fitness level, workout type, or goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Dumbbell className="h-12 w-12 text-emerald-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">Workout Tracking Tools</h3>
                <p className="text-gray-600">
                  Let clients log workouts, track progress, and set goals. Visualize improvements with charts and celebrate milestones to boost motivation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <CreditCard className="h-12 w-12 text-emerald-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">Payment Processing</h3>
                <p className="text-gray-600">
                  Integrated payment systems for classes, memberships, and digital products. Support for one-time payments and recurring subscriptions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <LineChart className="h-12 w-12 text-emerald-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">Client Progress Tracking</h3>
                <p className="text-gray-600">
                  Track and visualize client metrics including weight, measurements, attendance, and workout performance to demonstrate results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/services/images/online-coaching.jpg" 
              alt="Online Fitness Coaching Platform" 
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Online Coaching Platforms</h2>
            <p className="text-lg text-gray-700 mb-6">
              Take your fitness business beyond geographical limitations with a comprehensive online coaching platform. We create custom solutions that help you deliver professional coaching experiences to clients anywhere.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 p-1 rounded-full">
                  <Dumbbell className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <span className="font-medium">Custom Workout Programs</span>
                  <p className="text-gray-600 text-sm mt-1">Assign personalized workout plans to clients with exercise videos, sets, reps, and rest periods.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 p-1 rounded-full">
                  <LineChart className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <span className="font-medium">Progress Monitoring</span>
                  <p className="text-gray-600 text-sm mt-1">Track client progress with photo uploads, measurement logs, and performance metrics.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 p-1 rounded-full">
                  <Video className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <span className="font-medium">Live Session Integration</span>
                  <p className="text-gray-600 text-sm mt-1">Connect with Zoom, Google Meet, or custom video solutions for live coaching sessions.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-emerald-100 p-1 rounded-full">
                  <Users className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <span className="font-medium">Community Features</span>
                  <p className="text-gray-600 text-sm mt-1">Build a supportive fitness community with forums, challenges, and accountability groups.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Build Your Coaching Platform
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">How much does a fitness trainer website cost?</h3>
                <p className="text-gray-700">
                  Our fitness websites start from £500 for a professional, mobile-responsive site with basic booking functionality. More advanced online coaching platforms with client management, video libraries, and subscription capabilities typically range from £1,200 to £3,000 depending on specific requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Can I accept payments through my fitness website?</h3>
                <p className="text-gray-700">
                  Yes, we integrate secure payment processing solutions like Stripe, PayPal, and GoCardless that allow you to accept one-time payments and set up recurring subscriptions for memberships and ongoing coaching services.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">How long does it take to build a fitness website?</h3>
                <p className="text-gray-700">
                  A standard fitness trainer website typically takes 3-4 weeks from concept to launch. More complex online coaching platforms with custom features may take 6-8 weeks. We'll provide a specific timeline after understanding your requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Can I host workout videos securely on my website?</h3>
                <p className="text-gray-700">
                  Yes, we implement secure video hosting solutions that protect your premium content. We can set up membership-restricted access, prevent downloading, and implement watermarking to protect your intellectual property.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready To Grow Your Fitness Business Online?</h2>
          <p className="text-lg text-gray-700 mb-10">
            From simple portfolio sites to comprehensive online coaching platforms, we create digital solutions that help fitness professionals reach more clients and deliver better results.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Get Started From £500
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FitnessDevelopment; 