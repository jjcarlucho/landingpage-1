import React from 'react';

const Author: React.FC = () => {
  return (
    <section id="author" className="py-20 bg-gradient-to-b from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] rounded-3xl shadow-2xl backdrop-blur-xl mx-2 md:mx-0">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-sans">Meet The Author</h2>
            <h3 className="text-xl text-[#ecc94b] font-semibold mb-4 font-sans">Transforming Lives For Over 15 Years</h3>
            <p className="text-gray-300 mb-6 font-sans">
              From struggling with self-doubt and financial challenges to
              becoming a renowned transformation coach and bestselling author,
              I've walked the path of radical change and know exactly what it
              takes to transform your life from the inside out.
            </p>
            <p className="text-gray-300 mb-6 font-sans">
              For the past 15 years, I've dedicated my life to understanding the
              psychology of success and have helped over 25,000 people across
              40+ countries break through their limitations and achieve
              extraordinary results in business, relationships, health, and
              personal fulfillment.
            </p>
            <p className="text-gray-300 mb-6 font-sans">
              The Game Changer is the culmination of my life's work—a proven,
              step-by-step system that consolidates everything I've learned
              about creating lasting transformation, packaged into a practical
              guide that anyone can implement regardless of their starting
              point.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <div className="flex items-center">
                <div className="mr-3 bg-[#ecc94b]/10 rounded-full p-2 shadow-lg border border-[#ecc94b]/30">
                  <span className="text-[#ecc94b] font-bold text-xl font-sans">15+</span>
                </div>
                <div className="text-sm text-gray-300 font-sans">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 bg-[#ecc94b]/10 rounded-full p-2 shadow-lg border border-[#ecc94b]/30">
                  <span className="text-[#ecc94b] font-bold text-xl font-sans">25k+</span>
                </div>
                <div className="text-sm text-gray-300 font-sans">
                  Lives
                  <br />
                  Transformed
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 bg-[#ecc94b]/10 rounded-full p-2 shadow-lg border border-[#ecc94b]/30">
                  <span className="text-[#ecc94b] font-bold text-xl font-sans">40+</span>
                </div>
                <div className="text-sm text-gray-300 font-sans">
                  Countries
                  <br />
                  Worldwide
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ecc94b]/20 to-[#d4af37]/20 rounded-3xl blur-xl opacity-75"></div>
              <div className="relative rounded-3xl shadow-2xl border-2 border-[#ecc94b]/30 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Author"
                  className="rounded-3xl shadow-xl max-w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#1a1a1a] p-4 rounded-2xl shadow-lg border-2 border-[#ecc94b]/30">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Signature_of_Mahatma_Gandhi.svg"
                    alt="Signature"
                    className="h-12 invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
