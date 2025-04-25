import React from 'react';

const Author: React.FC = () => {
  return (
    <section id="author" className="py-20 bg-gradient-to-b from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Meet The Author
            </h2>
            <h3 className="text-xl text-[#ecc94b] font-semibold mb-4">
              Transforming Lives For Over 15 Years
            </h3>
            <p className="text-gray-300 mb-6">
              From struggling with self-doubt and financial challenges to
              becoming a renowned transformation coach and bestselling author,
              I've walked the path of radical change and know exactly what it
              takes to transform your life from the inside out.
            </p>
            <p className="text-gray-300 mb-6">
              For the past 15 years, I've dedicated my life to understanding the
              psychology of success and have helped over 25,000 people across
              40+ countries break through their limitations and achieve
              extraordinary results in business, relationships, health, and
              personal fulfillment.
            </p>
            <p className="text-gray-300 mb-6">
              The Game Changer is the culmination of my life's work—a proven,
              step-by-step system that consolidates everything I've learned
              about creating lasting transformation, packaged into a practical
              guide that anyone can implement regardless of their starting
              point.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              <div className="flex items-center">
                <div className="mr-3 bg-[#ecc94b]/10 rounded-full p-2">
                  <span className="text-[#ecc94b] font-bold text-xl">15+</span>
                </div>
                <div className="text-sm text-gray-300">
                  Years of
                  <br />
                  Experience
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 bg-[#ecc94b]/10 rounded-full p-2">
                  <span className="text-[#ecc94b] font-bold text-xl">25k+</span>
                </div>
                <div className="text-sm text-gray-300">
                  Lives
                  <br />
                  Transformed
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 bg-[#ecc94b]/10 rounded-full p-2">
                  <span className="text-[#ecc94b] font-bold text-xl">40+</span>
                </div>
                <div className="text-sm text-gray-300">
                  Countries
                  <br />
                  Worldwide
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ecc94b]/20 to-[#d4af37]/20 rounded-lg blur-xl opacity-75"></div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Author"
                  className="rounded-lg shadow-xl max-w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#1a1a1a] p-4 rounded-lg shadow-lg border border-[#ecc94b]/20">
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
