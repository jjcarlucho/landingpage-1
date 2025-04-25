import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c] border-t border-[#ecc94b]/20 shadow-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-[#ecc94b] font-bold text-lg animate-pulse">
              Limited Time Offer!
            </p>
            <p className="text-white">
              Get The GameChanger + $11,094 in Bonuses for Only $11.11
            </p>
          </div>
          <a
            href="#offer"
            className="bg-gradient-to-r from-[#ecc94b] to-[#d4af37] text-black font-bold px-8 py-3 rounded-full hover:from-[#f0d75e] hover:to-[#ecc94b] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-[#ecc94b]/25"
          >
            Get Instant Access <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
