import React, { useState } from 'react';

const testimonials = [
  {
    quote: "The methodology in this book transformed my approach to digital products. I've seen a 127% increase in revenue within just 4 months of implementation.",
    author: "Dr. Sarah Mitchell",
    position: "Digital Education Consultant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Finally, a straightforward approach that actually delivers. My book went from making $800/month to over $4,000/month using these strategies.",
    author: "Michael Chang",
    position: "Business Growth Strategist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "This isn't just another marketing book - it's a complete paradigm shift. My consulting practice has tripled since implementing these principles.",
    author: "Alexandra Rivera",
    position: "Executive Coach",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "In 15 years of digital entrepreneurship, I've never seen results like this. My latest book generated more revenue in 3 months than my previous four combined.",
    author: "James Morrison",
    position: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "The ROI on implementing these strategies has been astronomical. My book now generates consistent 5-figure months, something I never thought possible.",
    author: "Emma Thompson",
    position: "Business Author & Speaker",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "This system has completely revolutionized how I approach digital product creation. My income has grown by 218% in just six months.",
    author: "David Chen",
    position: "Digital Product Creator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100"
  }
];

const StorySection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#ecc94b]/10 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Story Section */}
          <div className="space-y-16">
            {/* Discovery Section */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecc94b] to-white">
                How I Discovered This One-Book-Only Secret
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Many assume I've always been at the forefront of digital products, but here's the truth:
              </p>
              <div className="prose prose-lg prose-invert">
                <p className="text-gray-300">
                  I began my journey completely unfamiliar with digital entrepreneurship, confined to a soul-draining corporate position for years. The turning point came with my decision to write my first book—a choice that unexpectedly immersed me in the world of online business.
                </p>
                <p className="text-gray-300">
                  Taking a leap of faith, I left my corporate role the day after publishing my book. Like Cortez burning his ships to eliminate retreat, I committed fully to this new path.
                </p>
                <p className="text-gray-300 font-semibold">
                  And it worked brilliantly.
                </p>
              </div>
            </div>

            {/* Pattern Recognition Section */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecc94b] to-white">
                After Years In The Business...<br/>I Uncovered a Revolutionary Pattern
              </h2>
              <div className="prose prose-lg prose-invert">
                <p className="text-gray-300">
                  I discovered something extraordinary that virtually every successful digital entrepreneur was implementing—a closely guarded secret they preferred to keep to themselves.
                </p>
                <p className="text-gray-300">
                  Their strategy centered around one foundational product, masterfully repackaged and refined. Just one. That's all they needed. And that's all YOU need to create a prosperous living from your expertise.
                </p>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecc94b] to-white">
                I Started To Apply This "One Book" Approach And Doubled My Business In 7 Months
              </h2>
              <div className="prose prose-lg prose-invert">
                <p className="text-gray-300">
                  The results were extraordinary. Sales began steadily, then accelerated dramatically. Within just seven months, my business had doubled in size.
                </p>
                <p className="text-gray-300">
                  This success demanded to be shared. So I developed a comprehensive blueprint—one that's now helped thousands achieve similar results, without the complexity of building massive email lists or chasing traffic.
                </p>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="relative mt-20">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ecc94b] via-[#d4af37] to-[#ecc94b] rounded-2xl opacity-10 blur-xl"></div>
              <div className="relative bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl p-8 border border-[#ecc94b]/20">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecc94b] to-white">
                    Success Stories
                  </h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-[#1a1a1a] border border-[#ecc94b]/20 hover:border-[#ecc94b]/40 transition-colors"
                    >
                      <svg className="w-6 h-6 text-[#ecc94b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-[#1a1a1a] border border-[#ecc94b]/20 hover:border-[#ecc94b]/40 transition-colors"
                    >
                      <svg className="w-6 h-6 text-[#ecc94b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 flex flex-col items-start space-y-4"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{testimonial.author}</h4>
                            <p className="text-sm text-gray-400">{testimonial.position}</p>
                          </div>
                        </div>
                        <blockquote className="text-lg text-gray-300 italic">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial 
                          ? 'bg-[#ecc94b]' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection; 