import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Shield, Clock } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ecc94b]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ecc94b]/10 rounded-full blur-[90px] animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-6 py-2 text-lg font-semibold rounded-full bg-[#ecc94b]/10 text-[#ecc94b] border border-[#ecc94b]/20 mb-8">
                <Star className="w-5 h-5 mr-2" />
                Limited Time Offer
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-amber-200 to-[#ecc94b] bg-clip-text text-transparent">
              Transform Your Life Today
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join the elite group of successful individuals who have already changed their lives with our proven system.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl p-12 border border-[#ecc94b]/20 shadow-[0_0_100px_rgba(236,201,75,0.2)] hover:shadow-[0_0_150px_rgba(236,201,75,0.3)] transition-all duration-500"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ecc94b]/10 p-3 rounded-xl">
                    <Shield className="w-6 h-6 text-[#ecc94b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">30-Day Money-Back Guarantee</h3>
                    <p className="text-gray-300">Try it risk-free. If you're not completely satisfied, get a full refund.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ecc94b]/10 p-3 rounded-xl">
                    <Sparkles className="w-6 h-6 text-[#ecc94b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Exclusive Bonuses Included</h3>
                    <p className="text-gray-300">Get instant access to premium bonuses worth over $11,000.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ecc94b]/10 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-[#ecc94b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Limited Time Offer</h3>
                    <p className="text-gray-300">Special pricing available only during this launch period.</p>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="mb-8">
                  <p className="text-gray-400 text-lg mb-2">Regular Price</p>
                  <p className="text-3xl text-gray-500 line-through">$997</p>
                  <p className="text-gray-400 text-lg mt-4 mb-2">Today's Price</p>
                  <div className="flex items-center justify-center md:justify-start">
                    <span className="text-6xl font-bold text-white">$</span>
                    <span className="text-8xl font-bold bg-gradient-to-r from-amber-200 to-[#ecc94b] bg-clip-text text-transparent">11</span>
                    <span className="text-4xl font-bold text-white self-start mt-4">.11</span>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <a
                    href="#checkout"
                    className="group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 rounded-full overflow-hidden shadow-[0_0_50px_rgba(236,201,75,0.3)] hover:shadow-[0_0_100px_rgba(236,201,75,0.5)] transition-all duration-300"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center">
                      Get Instant Access
                      <ArrowRight className="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <p className="text-gray-400">
              * One-time payment. No hidden fees. Instant access to all materials.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
