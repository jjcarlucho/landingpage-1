import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c] text-white rounded-3xl shadow-2xl backdrop-blur-xl mx-2 md:mx-0">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready To Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who have already changed their lives with The Game Changer methodology.
          </p>
          
          <a
            href="#offer"
            className="inline-flex items-center bg-gradient-to-r from-[#ecc94b] to-[#d4af37] text-black font-bold px-10 py-5 rounded-full text-xl hover:from-[#f0d75e] hover:to-[#ecc94b] transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_10px_rgba(236,201,75,0.4)] border-2 border-[#ecc94b]/30 focus:ring-4 focus:ring-[#ecc94b]/50 group"
          >
            Get Your Copy Now
            <ArrowRight className="ml-2 h-6 w-6 transform transition-transform group-hover:translate-x-1 text-[#ecc94b]" />
          </a>
          
          <div className="mt-8 text-sm text-gray-300">
            *Limited-time offer. 14-day money-back guarantee.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;