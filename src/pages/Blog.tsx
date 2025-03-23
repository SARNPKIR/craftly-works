
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, User, Tag, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Components Every Business Website Should Have",
    excerpt: "Discover the key elements that can transform a basic website into a powerful business tool that drives conversions and engagement.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Web Design",
    author: "Jane Smith",
    date: "May 15, 2023",
    readTime: "6 min read"
  },
  {
    id: 2,
    title: "How to Choose the Right E-commerce Platform for Your Business",
    excerpt: "A comprehensive guide to selecting an e-commerce platform that aligns with your business needs, budget, and growth plans.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "E-commerce",
    author: "John Miller",
    date: "April 28, 2023",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Improving Website Performance: Speed Optimization Techniques",
    excerpt: "Learn practical strategies to enhance your website's loading speed and overall performance for better user experience and SEO rankings.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Performance",
    author: "Sarah Johnson",
    date: "April 10, 2023",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "The Ultimate Guide to Effective Content Marketing for Small Businesses",
    excerpt: "Discover how to create and distribute valuable content that attracts and engages your target audience while driving business growth.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Marketing",
    author: "Michael Brown",
    date: "March 22, 2023",
    readTime: "10 min read"
  },
  {
    id: 5,
    title: "Website Security Essentials: Protecting Your Business Online",
    excerpt: "Explore the fundamental security measures every business website should implement to safeguard customer data and business information.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Security",
    author: "Jane Smith",
    date: "March 8, 2023",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "Responsive Design Best Practices for 2023",
    excerpt: "Stay ahead of the curve with these essential responsive design techniques to ensure your website performs flawlessly across all devices.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Web Design",
    author: "John Miller",
    date: "February 19, 2023",
    readTime: "6 min read"
  }
];

const categories = [
  { name: "Web Design", count: 8 },
  { name: "E-commerce", count: 6 },
  { name: "Performance", count: 5 },
  { name: "Marketing", count: 7 },
  { name: "Security", count: 4 },
  { name: "Development", count: 9 }
];

const featuredPosts = blogPosts.slice(0, 3);
const recentPosts = blogPosts.slice(3);

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Our Blog" 
        subtitle="Insights, tips, and trends in web development and digital marketing"
      />
      <Breadcrumbs />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <FeaturedPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
              <div className="space-y-8">
                {recentPosts.map((post) => (
                  <RecentPostCard key={post.id} post={post} />
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-full text-base font-medium hover:bg-gray-50 transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories Widget */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <Link to="#" className="text-gray-600 hover:text-accent transition-colors">
                          {category.name}
                        </Link>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Subscribe Widget */}
              <Card className="bg-accent text-white overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="mb-6 text-white/80">
                    Get the latest insights and tips delivered straight to your inbox.
                  </p>
                  <form>
                    <div className="mb-4">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-white text-accent px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </CardContent>
              </Card>
              
              {/* Popular Tags Widget */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Web Design", "SEO", "E-commerce", "Development", "UX/UI", "Mobile", "WordPress", "Performance", "Marketing"].map((tag, index) => (
                      <Link 
                        key={index} 
                        to="#" 
                        className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

interface PostProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
  };
}

const FeaturedPostCard = ({ post }: PostProps) => {
  return (
    <Card className="overflow-hidden hover-card h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 flex-grow">
        <div className="flex items-center mb-3">
          <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={14} className="mr-1" />
          <span>{post.readTime}</span>
        </div>
        <Link 
          to="#" 
          className="text-accent font-medium flex items-center hover:underline"
        >
          Read Article <ChevronRight size={16} className="ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

const RecentPostCard = ({ post }: PostProps) => {
  return (
    <Card className="overflow-hidden hover-card">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex items-center mb-3">
            <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium mr-3">
              {post.category}
            </span>
            <div className="flex items-center text-sm text-gray-500">
              <Clock size={14} className="mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-500">
              <User size={14} className="mr-1" />
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
            <Link 
              to="#" 
              className="text-accent font-medium flex items-center hover:underline"
            >
              Read Article <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Blog;
