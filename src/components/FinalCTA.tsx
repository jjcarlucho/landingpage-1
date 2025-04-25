import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-700/50 p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Life?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of successful individuals who have already changed
              their lives with The Game Changer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#ff4d4d] to-[#ff6b6b] rounded-lg hover:from-[#ff3333] hover:to-[#ff5252] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#guarantee"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-300 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
