
import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, FashionStyle E-commerce',
    content: 'BMCrafts transformed our online store, resulting in a 40% increase in sales within just three months.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=60',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    role: 'Director, HealthFirst Clinic',
    content: 'Working with BMCrafts on our healthcare website was a seamless experience. They understood the unique requirements of our industry.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=60',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amanda Reynolds',
    role: 'Marketing Director, Homes & Properties',
    content: 'Our real estate website by BMCrafts has become our best sales tool. The virtual tours and property listings have helped us close deals faster.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=60',
    rating: 5,
  },
  {
    id: 4,
    name: 'Robert Blackwell',
    role: 'Partner, Blackwell Law Firm',
    content: 'As a law firm, we needed a website that conveyed professionalism and trust. BMCrafts delivered exactly that, with a clean design and intuitive navigation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=60',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa Montgomery',
    role: 'Executive Director, GreenEarth Foundation',
    content: 'Our non-profit needed a website that would inspire action and facilitate donations. BMCrafts created a solution that has dramatically increased our online donations.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=60',
    rating: 5,
  },
];

// Lazy load SVG images
const BrandLogos = lazy(() => import('./BrandLogos'));

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
    
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 8000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 8000);
  };

  return (
    <section id="work" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4 inline-block">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Hear from businesses who have transformed their digital presence with BMCrafts.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 md:px-0">
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 p-6 md:p-8 glass-card rounded-2xl"
                >
                  <div className="mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={cn(
                            "h-5 w-5", 
                            i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                          )} 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                          width="20"
                          height="20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    {isMounted && (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-md"
                        width="48"
                        height="48"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  resetInterval();
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  activeIndex === index ? "bg-accent w-8" : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              handlePrev();
              resetInterval();
            }}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 hover:bg-white text-accent rounded-full p-2 shadow-md focus:outline-none transition-all hover:scale-110 hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => {
              handleNext();
              resetInterval();
            }}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 hover:bg-white text-accent rounded-full p-2 shadow-md focus:outline-none transition-all hover:scale-110 hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Trusted by Innovative Brands</h3>
          </div>
          
          <Suspense fallback={<div className="h-16"></div>}>
            {isMounted && <BrandLogos />}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
