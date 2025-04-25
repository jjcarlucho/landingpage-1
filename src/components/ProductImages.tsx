import React from 'react';
// Importando la imagen usando una URL relativa
import bookCoverImg from '@assets/book-cover.jpg';

const ProductImages: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-transparent to-gray-800/10 animate-gradient-slow"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Main Book Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a] p-8 rounded-lg shadow-2xl">
                <div className="relative aspect-[3/4] rounded-lg shadow-xl overflow-hidden">
                  <img
                    src="/book-cover.jpg"
                    alt="The GameChanger: Turn Pages into Profit"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bonuses Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#2c2c2c]/80 text-white px-4 py-2 rounded-lg">
                  VALUE $11.11
                </div>
                <h2 className="text-4xl font-bold text-white">
                  Unlock These Exclusive Bonuses
                </h2>
              </div>

              {/* Bonus 1 */}
              <div className="flex items-center gap-6 bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#1a1a1a]/90 transition-all duration-300">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=200&h=200&q=80"
                    alt="AI Tools Checklist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    AI Tools Checklist
                  </h3>
                  <p className="text-gray-400 mb-1">The ultimate resource library</p>
                  <p className="text-gray-300 font-semibold">Value: $97</p>
                </div>
              </div>

              {/* Bonus 2 */}
              <div className="flex items-center gap-6 bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#1a1a1a]/90 transition-all duration-300">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=200&h=200&q=80"
                    alt="Your Wish Is Your Command"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Your Wish Is Your Command
                  </h3>
                  <p className="text-gray-400 mb-1">Legendary manifestation audios</p>
                  <p className="text-gray-300 font-semibold">Value: $10,000</p>
                </div>
              </div>

              {/* Bonus 3 */}
              <div className="flex items-center gap-6 bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#1a1a1a]/90 transition-all duration-300">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=200&h=200&q=80"
                    alt="TFT Course"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    TFT Course
                  </h3>
                  <p className="text-gray-400 mb-1">Release subconscious blocks</p>
                  <p className="text-gray-300 font-semibold">Value: $997</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button className="w-full bg-[#ecc94b] hover:bg-[#d4af37] text-black font-bold text-xl py-4 px-8 rounded-full transition-all duration-300">
                  Limited Time Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductImages;
