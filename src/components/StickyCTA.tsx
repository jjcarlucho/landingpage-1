import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const ultimateCTA = document.getElementById('ultimate-cta');
      
      if (!ultimateCTA) return;
      
      const ultimateCTAPosition = ultimateCTA.getBoundingClientRect().top + window.scrollY;
      const buffer = 800; // Hide 800px before reaching the UltimateCTA

      if (scrolled > 300 && scrolled < ultimateCTAPosition - buffer) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          {/* Main container with glass effect */}
          <div className="bg-black/90 backdrop-blur-xl border-t border-[#ecc94b]/20">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left side with timer and offer */}
                <div className="flex items-center gap-6">
                  {/* Timer badge */}
                  <div className="hidden md:flex items-center gap-2 bg-[#ecc94b]/10 px-4 py-2 rounded-full border border-[#ecc94b]/20">
                    <Clock className="w-5 h-5 text-[#ecc94b] animate-pulse" />
                    <span className="text-[#ecc94b] font-semibold">Limited Time Offer</span>
                  </div>
                  
                  {/* Price section */}
                  <div className="text-center md:text-left">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-gray-400 text-sm line-through">$997</span>
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

                {/* Right side with CTA button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="#checkout"
                    className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 rounded-full overflow-hidden shadow-[0_0_50px_rgba(236,201,75,0.3)] hover:shadow-[0_0_100px_rgba(236,201,75,0.5)] transition-all duration-300"
                  >
                    {/* Hover gradient overlay */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Button content */}
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
