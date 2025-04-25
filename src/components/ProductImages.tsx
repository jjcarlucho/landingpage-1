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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Main Book Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-700/20 to-gray-800/20 rounded-lg blur-xl opacity-75"></div>
              <div className="relative bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a] p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="relative aspect-[3/4] rounded-lg shadow-xl overflow-hidden">
                  <img
                    src="https://i.imgur.com/vxrWXwD.jpg"
                    alt="The GameChanger Book Cover"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold px-6 py-3 rounded-full transform rotate-12 shadow-lg hover:scale-110 transition-transform duration-300">
                  VALUE $11.11
                </div>
              </div>
            </div>

            {/* Bonuses Section */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400 mb-6">
                Unlock These Exclusive Bonuses
              </h2>

              {/* Bonus 1 */}
              <div className="flex items-center space-x-6 bg-gradient-to-r from-[#2c2c2c]/80 to-[#1a1a1a]/60 p-4 rounded-lg hover:from-[#2c2c2c]/90 hover:to-[#1a1a1a]/70 transition-all duration-300 backdrop-blur-sm border border-white/5">
                <div className="w-24 h-24 bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a] rounded-lg p-2 flex-shrink-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=200&h=200&q=80"
                    alt="AI Tools Checklist"
                    className="w-full h-full object-cover rounded transform hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    AI Tools Checklist
                  </h3>
                  <p className="text-gray-400">The ultimate resource library</p>
                  <p className="text-gray-300 font-bold">Value: $97</p>
                </div>
              </div>

              {/* Bonus 2 */}
              <div className="flex items-center space-x-6 bg-gradient-to-r from-[#2c2c2c]/80 to-[#1a1a1a]/60 p-4 rounded-lg hover:from-[#2c2c2c]/90 hover:to-[#1a1a1a]/70 transition-all duration-300 backdrop-blur-sm border border-white/5">
                <div className="w-24 h-24 bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a] rounded-lg p-2 flex-shrink-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=200&h=200&q=80"
                    alt="Your Wish Is Your Command"
                    className="w-full h-full object-cover rounded transform hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Your Wish Is Your Command
                  </h3>
                  <p className="text-gray-400">
                    Legendary manifestation audios
                  </p>
                  <p className="text-gray-300 font-bold">Value: $10,000</p>
                </div>
              </div>

              {/* Bonus 3 */}
              <div className="flex items-center space-x-6 bg-gradient-to-r from-[#2c2c2c]/80 to-[#1a1a1a]/60 p-4 rounded-lg hover:from-[#2c2c2c]/90 hover:to-[#1a1a1a]/70 transition-all duration-300 backdrop-blur-sm border border-white/5">
                <div className="w-24 h-24 bg-gradient-to-br from-[#2c2c2c] to-[#1a1a1a] rounded-lg p-2 flex-shrink-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=200&h=200&q=80"
                    alt="TFT Course"
                    className="w-full h-full object-cover rounded transform hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">TFT Course</h3>
                  <p className="text-gray-400">Release subconscious blocks</p>
                  <p className="text-gray-300 font-bold">Value: $997</p>
                </div>
              </div>

              {/* Enhanced CTA Section */}
              <a 
                href="#checkout" 
                onClick={(e) => {
                  e.preventDefault();
                  // URL real se añadirá después
                  console.log('Redirecting to checkout...');
                }}
                className="block group"
              >
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-lg text-center transform hover:scale-105 transition-all duration-300 shadow-xl relative overflow-hidden cursor-pointer border border-[#ecc94b]/20">
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ecc94b]/5 to-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex flex-col items-center gap-4">
                      <div className="bg-gradient-to-r from-[#ecc94b] to-[#d4af37] text-black rounded-full px-6 py-2 font-semibold">
                        Limited Time Offer
                      </div>
                      <p className="text-4xl font-bold mb-2 text-white">
                        Total Value: <span className="line-through opacity-75">$11,094</span>
                      </p>
                      <p className="text-2xl font-bold text-white flex items-center gap-2">
                        Get Everything Today For Only 
                        <span className="bg-gradient-to-r from-[#ecc94b] to-[#d4af37] text-black rounded-full px-4 py-1">$11.11</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductImages;
