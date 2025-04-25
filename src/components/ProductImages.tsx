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
                    src="https://images.unsplash.com/photo-1684679057134-1e3ed705e671?auto=format&fit=crop&w=200&h=200&q=80"
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

              {/* Ultra Premium CTA Section */}
              <div className="mt-12">
                <div className="relative">
                  {/* Background Glow Effects */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ecc94b] via-[#d4af37] to-[#ecc94b] rounded-2xl opacity-75 blur-xl group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] rounded-2xl opacity-90"></div>

                  {/* Main Content Container */}
                  <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2c2c2c] rounded-2xl p-8 border border-[#ecc94b]/20">
                    {/* Top Section - Value Badge */}
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-[#ecc94b] to-[#d4af37] p-[1px] rounded-full">
                        <div className="px-8 py-2 rounded-full bg-[#1a1a1a]">
                          <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecc94b] to-[#d4af37]">
                            Exclusive Offer
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      {/* Left Column - Original Price */}
                      <div className="text-center md:text-left space-y-3">
                        <p className="text-gray-400 uppercase tracking-wider text-sm">Total Value</p>
                        <div className="relative inline-block">
                          <span className="text-4xl font-bold text-white opacity-75 line-through decoration-[#ecc94b]">
                            $11,094
                          </span>
                          <div className="absolute -top-3 -right-4 transform rotate-12">
                            <span className="text-[#ecc94b] text-xl font-bold">*</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Special Price */}
                      <div className="text-center md:text-right space-y-3">
                        <p className="text-gray-400 uppercase tracking-wider text-sm">Special Price</p>
                        <div className="inline-block bg-gradient-to-r from-[#ecc94b] to-[#d4af37] p-[1px] rounded-xl">
                          <div className="px-6 py-3 rounded-xl bg-[#1a1a1a]">
                            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecc94b] to-[#d4af37]">
                              $11.11
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="mt-8">
                      <a href="#" className="group block">
                        <div className="bg-gradient-to-r from-[#ecc94b] to-[#d4af37] p-[1px] rounded-full">
                          <div className="px-8 py-4 rounded-full bg-[#1a1a1a] hover:bg-opacity-80 transition-all duration-300">
                            <div className="flex items-center justify-center gap-3">
                              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecc94b] to-[#d4af37]">
                                Get Instant Access
                              </span>
                              <svg 
                                className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" 
                                fill="none" 
                                stroke="url(#gradient)" 
                                viewBox="0 0 24 24"
                              >
                                <defs>
                                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ecc94b" />
                                    <stop offset="100%" stopColor="#d4af37" />
                                  </linearGradient>
                                </defs>
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Bottom Note */}
                    <div className="mt-6 text-center">
                      <p className="text-gray-500 text-sm">
                        * Limited time offer - Get all bonuses worth $11,094 today
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductImages;
