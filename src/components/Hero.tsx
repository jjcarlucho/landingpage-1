import React from 'react';
import { Star, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] py-16 md:py-24 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Pre-headline with animation */}
          <div className="flex items-center justify-center gap-2 mb-8 animate-fade-in-down">
            <Star className="w-5 h-5 text-gray-300 fill-gray-300 animate-pulse" />
            <p className="text-gray-300 font-semibold uppercase tracking-wider bg-gray-800/50 px-4 py-1 rounded-full">
              The #1 Knowledge-to-Income System
            </p>
            <Star className="w-5 h-5 text-gray-300 fill-gray-300 animate-pulse" />
          </div>

          {/* Enhanced Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight text-center animate-fade-in">
            Turn Your Knowledge Into
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-200 animate-gradient">
              $5,000+ Monthly Income
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-gray-200">
              With Just ONE Book
            </span>
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            The proven step-by-step system that's helped <span className="text-gray-300 font-semibold">1,847+ authors</span> 
            monetize their expertise — without being a marketing expert or spending thousands on advertising
          </p>

          {/* Enhanced Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-gray-300 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2 text-center">No Writing Experience Needed</h3>
              <p className="text-gray-400 text-center text-sm">
                Our system works even if you've never written before
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-gray-300 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2 text-center">Works For Any Industry</h3>
              <p className="text-gray-400 text-center text-sm">
                Adaptable to any niche or market
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-gray-300 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2 text-center">Results In 30 Days</h3>
              <p className="text-gray-400 text-center text-sm">
                Proven system for rapid results
              </p>
            </div>
          </div>

          {/* Enhanced Main CTA */}
          <div className="text-center mb-12">
            <a
              href="#offer"
              className="inline-flex items-center bg-gradient-to-r from-[#ecc94b] to-[#d4af37] text-black font-bold py-6 px-12 rounded-full text-xl hover:from-[#f0d75e] hover:to-[#ecc94b] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#ecc94b]/25 group animate-bounce-slow"
            >
              YES! I Want The GameChanger System
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
            </a>
            <p className="text-sm text-gray-400 mt-4 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              30-Day Money-Back Guarantee • Instant Access • Lifetime Updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
