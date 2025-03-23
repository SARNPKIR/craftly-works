
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  "E-commerce",
  "Healthcare",
  "Real Estate",
  "Legal",
  "Web Development",
  "Design",
  "Marketing"
];

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Features Every E-commerce Website Should Have",
    category: "E-commerce",
    excerpt: "Discover the must-have features that drive conversions and improve user experience on your online store.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    author: "Jane Smith",
    date: "May 15, 2023",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "HIPAA Compliance: What Healthcare Websites Need to Know",
    category: "Healthcare",
    excerpt: "Understand the essential requirements for creating secure, compliant websites for healthcare organizations.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    author: "Dr. Michael Johnson",
    date: "April 28, 2023",
    readTime: "10 min read"
  },
  {
    id: 3,
    title: "The Power of Local SEO for Real Estate Websites",
    category: "Real Estate",
    excerpt: "Learn how location-based optimization can dramatically increase visibility for property listings and agencies.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    author: "Sarah Williams",
    date: "June 7, 2023",
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "7 Ways to Improve Your Website's Loading Speed",
    category: "Web Development",
    excerpt: "Discover practical techniques to optimize your website's performance and provide a better user experience.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    author: "John Miller",
    date: "May 23, 2023",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "Building Trust: Essential Elements for Law Firm Websites",
    category: "Legal",
    excerpt: "Learn how to create a professional online presence that establishes credibility and attracts potential clients.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    author: "Robert Johnson",
    date: "April 15, 2023",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "The Psychology of Color in Web Design",
    category: "Design",
    excerpt: "Explore how color choices influence user behavior and brand perception on your website.",
    image: "https://images.unsplash.com/photo-1508068451742-4a6ac38472e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    author: "Emily Davis",
    date: "June 2, 2023",
    readTime: "7 min read"
  },
  {
    id: 7,
    title: "Maximizing ROI: Digital Marketing Strategies for Healthcare Providers",
    category: "Healthcare",
    excerpt: "Discover effective marketing approaches specifically tailored for medical practices and healthcare organizations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    author: "David Wilson",
    date: "May 19, 2023",
    readTime: "8 min read"
  },
  {
    id: 8,
    title: "Essential Analytics for E-commerce Owners",
    category: "E-commerce",
    excerpt: "Learn which metrics matter most for understanding your online store's performance and growth opportunities.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    author: "Alex Thompson",
    date: "June 12, 2023",
    readTime: "9 min read"
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader 
        title="Our Blog" 
        subtitle="Industry insights, expert tips, and digital trends"
      />
      <Breadcrumbs />
      
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover-card">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="px-6 py-4 border-b bg-accent/5">
                  <span className="text-xs font-medium text-accent">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </CardContent>
                <CardFooter className="pt-0 px-6 pb-6">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="#" className="flex items-center justify-center gap-2">
                      Read Article <ArrowRight size={16} />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found in this category</h3>
              <p className="text-gray-600 mb-4">Please try selecting another category or check back later for new content.</p>
              <Button onClick={() => setActiveCategory("All")}>View All Articles</Button>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Get the latest articles, industry insights, and digital trends delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
