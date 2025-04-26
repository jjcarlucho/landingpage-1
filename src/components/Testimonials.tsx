import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  category: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "The strategies I learned transformed my business. Revenue increased by 150% in just 6 months!",
    rating: 5,
    category: "Business",
    image: `https://ui-avatars.com/api/?name=Sarah+Johnson&background=ecc94b&color=1a1a1a&size=200`
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Startup Founder",
    content: "This program gave me the confidence to scale my startup from 5 to 50 employees.",
    rating: 5,
    category: "Success",
    image: `https://ui-avatars.com/api/?name=Michael+Chen&background=ecc94b&color=1a1a1a&size=200`
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Life Coach",
    content: "The coaching methodology here is exceptional. My client success rate improved dramatically.",
    rating: 5,
    category: "Coaching",
    image: `https://ui-avatars.com/api/?name=Emma+Davis&background=ecc94b&color=1a1a1a&size=200`
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Marketing Director",
    content: "Our marketing ROI doubled after implementing the strategies learned here.",
    rating: 5,
    category: "Business",
    image: `https://ui-avatars.com/api/?name=David+Wilson&background=ecc94b&color=1a1a1a&size=200`
  },
  {
    id: 5,
    name: "Lisa Zhang",
    role: "Performance Coach",
    content: "The tools and frameworks provided are game-changing for my coaching practice.",
    rating: 5,
    category: "Coaching",
    image: `https://ui-avatars.com/api/?name=Lisa+Zhang&background=ecc94b&color=1a1a1a&size=200`
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Success", "Business", "Coaching"];
  
  const filteredTestimonials = testimonials.filter(testimonial => 
    selectedCategory === "All" || testimonial.category === selectedCategory
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % filteredTestimonials.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [filteredTestimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredTestimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % filteredTestimonials.length
    );
  };

  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join hundreds of successful entrepreneurs who have transformed their businesses
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-500 to-amber-700 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Testimonials Display */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-amber-500/50">
                  <img
                    src={filteredTestimonials[currentIndex].image}
                    alt={filteredTestimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(filteredTestimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>

                <p className="text-gray-300 text-lg mb-6 italic">
                  "{filteredTestimonials[currentIndex].content}"
                </p>
                
                <h4 className="text-white font-semibold">
                  {filteredTestimonials[currentIndex].name}
                </h4>
                <p className="text-amber-500">
                  {filteredTestimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {filteredTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-amber-500 w-4'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}