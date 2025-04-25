import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready To Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who have already changed their lives with The Game Changer methodology.
          </p>
          
          <a
            href="#offer"
            className="inline-flex items-center bg-gradient-to-r from-[#ecc94b] to-[#d4af37] text-black font-bold px-8 py-4 rounded-full text-lg hover:from-[#f0d75e] hover:to-[#ecc94b] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#ecc94b]/25 group"
          >
            Get Your Copy Now
            <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
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