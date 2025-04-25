import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Clock, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { text: "Best investment I've made this year!", author: "Sarah J." },
  { text: "Made $5k in my first month!", author: "Michael R." },
  { text: "The templates are pure gold!", author: "Emily T." }
];

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(true);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [spotsLeft, setSpotsLeft] = useState(47);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const ultimateCTA = document.getElementById('ultimate-cta');
      
      if (!ultimateCTA) return;
      
      const ultimateCTAPosition = ultimateCTA.getBoundingClientRect().top + window.scrollY;
      const buffer = 1500; // Increased buffer distance
      const testimonialBuffer = 2000; // Even larger buffer for testimonials

      // Show StickyCTA only after scrolling 300px and before reaching UltimateCTA
      if (scrolled > 300 && scrolled < ultimateCTAPosition - buffer) {
        setIsVisible(true);
        // Show testimonials only when far enough from UltimateCTA
        setShowTestimonials(scrolled < ultimateCTAPosition - testimonialBuffer);
      } else {
        setIsVisible(false);
        setShowTestimonials(false);
      }
    };

    // Throttle scroll event for better performance
    let timeoutId: number | null = null;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = window.setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  // Rotate testimonials with a longer interval
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Increased to 6 seconds
    return () => clearInterval(interval);
  }, []);

  // Decrease spots with a longer interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (spotsLeft > 1) {
        setSpotsLeft((prev) => Math.max(1, prev - Math.floor(Math.random() * 2)));
      }
    }, 45000); // Increased to 45 seconds
    return () => clearInterval(interval);
  }, [spotsLeft]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <div className="bg-black/90 backdrop-blur-xl border-t border-[#ecc94b]/20">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  {/* Timer and Spots Badge */}
                  <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
                      <Users className="w-5 h-5 text-red-500 animate-pulse" />
                      <span className="text-red-400 font-semibold">Only {spotsLeft} spots left!</span>
                    </div>
                    <div className="bg-[#ecc94b]/10 px-4 py-2 rounded-full border border-[#ecc94b]/20">
                      <Clock className="w-5 h-5 text-[#ecc94b] animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Price section */}
                  <div className="text-center md:text-left">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-gray-400 text-sm line-through">$1,311</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-[#ecc94b] bg-clip-text text-transparent">
                        $11.11
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#ecc94b]" />
                      <span className="text-gray-300 text-sm">30-Day Guarantee</span>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                {showTestimonials && (
                  <div className="hidden md:block">
                    <motion.div
                      key={testimonialIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="flex items-center gap-2"
                    >
                      <Star className="w-4 h-4 text-[#ecc94b]" />
                      <p className="text-gray-300 text-sm italic">
                        {testimonials[testimonialIndex].text}{" "}
                        <span className="text-[#ecc94b]">- {testimonials[testimonialIndex].author}</span>
                      </p>
                    </motion.div>
                  </div>
                )}

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="https://pay.hotmart.com/P99406062G"
                    className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 rounded-full overflow-hidden shadow-[0_0_50px_rgba(236,201,75,0.3)] hover:shadow-[0_0_100px_rgba(236,201,75,0.5)] transition-all duration-300"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      <span>Get Instant Access</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
