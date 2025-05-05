import React from 'react';
import { motion } from 'framer-motion';
// Importando la imagen usando una URL relativa
import bookCoverImg from '@assets/book-cover.jpg';

const ProductImages = () => {
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
              <p className="text-gray-400 mt-2">Real Value: $1,597</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black bg-opacity-40 p-6 rounded-lg border border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">✨ Premium Content ✨</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>✓ Complete book access</li>
                  <li>✓ Exclusive resources</li>
                  <li>✓ Free updates</li>
                </ul>
              </div>
              
              <div className="bg-black bg-opacity-40 p-6 rounded-lg border border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">🎁 Included Bonuses 🎁</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>✓ $1300 in premium bonuses</li>
                  <li>✓ VIP community access</li>
                  <li>✓ Personalized mentorship</li>
                </ul>
              </div>
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

export default ProductImages;
