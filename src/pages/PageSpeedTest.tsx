import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PageSpeedInsights from "@/components/tools/PageSpeedInsights";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Rocket, Zap } from "lucide-react";
import { Helmet } from "react-helmet";

const PageSpeedTest = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Free Website Speed Test | BMCrafts Website Speed Analyzer Tool</title>
        <meta name="description" content="Test your website's performance with our free BMCrafts Website Speed Analyzer tool. Get actionable recommendations to improve your site speed, SEO rankings, and user experience." />
        <meta name="keywords" content="page speed test, website performance, website speed analyzer, web vitals, site speed check, SEO performance" />
        <link rel="canonical" href="https://bmcrafts.co.uk/page-speed-test" />
      </Helmet>
      
      <Navbar />
      <PageHeader 
        title="Free Website Speed Analyzer Tool" 
        subtitle="Test your website's speed and get actionable performance recommendations"
      />
      <Breadcrumbs />
      
      <section className="py-6">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <p className="text-gray-600">
              Our free tool uses Google PageSpeed Insights technology to analyze your website's performance on both mobile and desktop devices.
              Get detailed metrics, scores, and recommendations to improve your site speed, user experience, and SEO rankings.
            </p>
            <p className="text-xs text-gray-500 mt-2">Powered by Google PageSpeed Insights API</p>
          </div>

          {/* PageSpeed Insights Tool - Now at the top */}
          <div className="mb-8">
            <PageSpeedInsights />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <Zap size={24} />
                </div>
                <CardTitle>Speed Matters</CardTitle>
                <CardDescription>
                  53% of mobile users abandon sites that take more than 3 seconds to load
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                  <Rocket size={24} />
                </div>
                <CardTitle>SEO Impact</CardTitle>
                <CardDescription>
                  Page speed is a direct ranking factor for search results
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
                  <Lightbulb size={24} />
                </div>
                <CardTitle>Conversion Boost</CardTitle>
                <CardDescription>
                  Every 0.1s improvement in site speed can increase conversion rates by 8%
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* SEO-Optimized Content Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Why Website Speed Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Core Web Vitals</h3>
                <p className="text-gray-600 mb-3">
                  Core Web Vitals are real-world, user-centered metrics that measure key aspects of user experience.
                  They include loading performance (Largest Contentful Paint), interactivity (First Input Delay), and visual
                  stability (Cumulative Layout Shift).
                </p>
                <p className="text-gray-600">
                  Our Website Speed Analyzer tool measures these vital metrics and provides recommendations to improve them,
                  helping your website meet standards for a good user experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">SEO Rankings & User Experience</h3>
                <p className="text-gray-600 mb-3">
                  Since 2021, Core Web Vitals have been official ranking factors. Websites with better page speed
                  and performance metrics rank higher in search results, leading to more organic traffic.
                </p>
                <p className="text-gray-600">
                  Beyond SEO, faster websites provide a better user experience, reducing bounce rates and increasing
                  user engagement, conversion rates, and overall business success.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent to-blue-600 text-white rounded-lg overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Need help improving your website speed?</h3>
                  <p className="text-white/90 mb-6">
                    Our team of experts can help you optimize your website for maximum performance, 
                    better user experience, and higher conversion rates. Get in touch for a free consultation.
                  </p>
                  <Button className="bg-white text-accent hover:bg-gray-100">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="hidden md:block">
                  <img 
                    src="/images/website-optimization.svg" 
                    alt="Website Speed Optimization" 
                    className="max-w-full h-auto"
                    onError={(e) => {
                      // If image fails to load, replace with a div
                      const target = e.target as HTMLImageElement;
                      const parent = target.parentNode;
                      if (parent) {
                        const div = document.createElement('div');
                        div.className = "w-full h-64 bg-white/10 rounded-lg flex items-center justify-center";
                        div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>';
                        parent.replaceChild(div, target);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section for SEO */}
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">What is BMCrafts Website Speed Analyzer?</h3>
                <p className="text-gray-600">
                  BMCrafts Website Speed Analyzer is a tool that analyzes the content of a web page and generates suggestions 
                  to make that page faster. It provides both lab and field data about a page's performance.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">What's a good Website Speed score?</h3>
                <p className="text-gray-600">
                  We consider a score of 90 or above as good (green), 50-89 as needing improvement (orange), 
                  and below 50 as poor (red). We recommend aiming for at least 75+ on mobile and 90+ on desktop.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">How can I improve my website's speed?</h3>
                <p className="text-gray-600">
                  Common improvements include optimizing images, enabling compression, reducing server response time,
                  leveraging browser caching, minifying CSS/JavaScript, eliminating render-blocking resources, and using a CDN.
                  Our experts can help you implement these improvements effectively.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">How often should I test my website's speed?</h3>
                <p className="text-gray-600">
                  We recommend testing your website speed at least once a month, and after any significant updates 
                  to your website. Regular testing helps you monitor performance and address issues before they impact 
                  your users and search rankings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PageSpeedTest;
