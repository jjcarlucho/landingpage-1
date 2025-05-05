import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Sparkles } from 'lucide-react';

const ProductShowcase = () => {
  const bonuses = [
    {
      icon: <Headphones className="w-8 h-8 text-amber-400" />,
      title: 'Your Wish Is Your Command',
      value: '$997',
      description: 'Legendary manifestation audios for business success',
      feature: 'Transform your mindset and manifest success',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-400" />,
      title: 'TFT Mastery Course',
      value: '$297',
      description: 'Release subconscious blocks and charge premium prices',
      feature: 'Clear mental blocks and sell with confidence',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Premium Edition FREE!
          </h2>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-yellow-500 mb-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
                SPECIAL OFFER
              </div>
              <div className="flex justify-center items-baseline">
                <span className="text-6xl font-bold text-yellow-400">FREE</span>
                <span className="text-2xl text-gray-400 ml-2 line-through">$997</span>
              </div>
              <p className="text-gray-400 mt-2">Real Value: $1,294</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {bonuses.map((bonus, index) => (
                <div key={index} className="bg-black bg-opacity-40 p-6 rounded-lg border border-yellow-500">
                  <div className="mb-4">{bonus.icon}</div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">{bonus.title}</h3>
                  <p className="text-amber-400 font-semibold mb-3">Value: {bonus.value}</p>
                  <p className="text-gray-300 mb-4">{bonus.description}</p>
                  <p className="text-yellow-400 text-sm">{bonus.feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg py-4 px-4 hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                GET FREE ACCESS NOW!
              </button>
              <p className="text-sm text-gray-400 mt-4">🔥 Only 23 copies available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
