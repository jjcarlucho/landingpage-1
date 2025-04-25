import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Entrepreneur',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'This book completely transformed my approach to business and life. Within 3 months of implementing the strategies, I doubled my income and finally found the work-life balance I had been searching for.',
    stars: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Marketing Director',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'I was skeptical at first, but the mindset shifts and practical systems in The Game Changer helped me overcome years of self-doubt and finally take action on my goals. The results have been nothing short of amazing.',
    stars: 5,
  },
  {
    name: 'Jennifer Lee',
    role: 'Life Coach',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'As someone who works with clients on transformation, I was blown away by the depth and practicality of this book. It\'s now the #1 resource I recommend to every single client who wants real, lasting change.',
    stars: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories From Real Readers</h2>
          <p className="text-lg text-gray-300">
            Join thousands who have transformed their lives using The Game Changer methodology
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-lg">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full object-cover border-2 border-white"
                      />
                      <div className="flex flex-col text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-3">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-lg md:text-xl italic mb-6">"{testimonial.quote}"</p>
                        <div>
                          <h4 className="text-xl font-bold">{testimonial.name}</h4>
                          <p className="text-gray-300">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 w-2 mx-1 rounded-full transition-all ${
                currentIndex === idx ? 'bg-white w-6' : 'bg-white/40'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;