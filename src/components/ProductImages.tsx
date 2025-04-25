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
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#ecc94b] to-white bg-clip-text text-transparent">
                Unlock These Exclusive Bonuses
              </h2>

              {/* Bonus 1 */}
              <div className="flex items-center gap-6 bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#1a1a1a]/90 transition-all duration-300">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1676320831532-fc2f1f3c7fa5?auto=format&fit=crop&w=200&h=200&q=80"
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

              {/* Enhanced Luxury CTA Section */}
              <a href="#" className="block group">
                <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] p-8 rounded-2xl shadow-2xl relative overflow-hidden transform transition-all duration-300 hover:scale-[1.02] border border-[#ecc94b]/10">
                  {/* Glow effect */}
                  <div className="absolute -inset-px bg-gradient-to-r from-[#ecc94b] via-[#d4af37] to-[#ecc94b] opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-md"></div>
                  
                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Header Badge */}
                    <div className="inline-block bg-gradient-to-r from-[#ecc94b] to-[#d4af37] p-[2px] rounded-full mb-6">
                      <div className="px-6 py-2 rounded-full bg-[#1E1E1E] bg-opacity-90">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ecc94b] to-[#d4af37] font-bold">
                          Limited Time Offer
                        </span>
                      </div>
                    </div>

                    {/* Price Display */}
                    <div className="space-y-4">
                      <div className="flex flex-col items-center gap-2">
                        <p className="text-4xl font-bold text-white">
                          Total Value: <span className="line-through opacity-75">$11,094</span>
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="text-2xl font-bold text-white">Get Everything Today For Only</p>
                          <div className="bg-gradient-to-r from-[#ecc94b] to-[#d4af37] p-[2px] rounded-full">
                            <div className="px-6 py-2 rounded-full bg-[#1E1E1E]">
                              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecc94b] to-[#d4af37]">
                                $11.11
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Arrow */}
                    <div className="mt-6 flex justify-center">
                      <div className="bg-gradient-to-r from-[#ecc94b] to-[#d4af37] p-[2px] rounded-full">
                        <div className="px-8 py-3 rounded-full bg-[#1E1E1E] group-hover:bg-opacity-90 transition-all duration-300">
                          <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecc94b] to-[#d4af37] flex items-center gap-2">
                            Claim Your Copy Now
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" className="text-[#ecc94b]" />
                            </svg>
                          </span>
                        </div>
                      </div>
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
