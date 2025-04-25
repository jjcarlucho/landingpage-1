import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[#ecc94b]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#ecc94b]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#ecc94b]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#ecc94b]/10 text-[#ecc94b] border border-[#ecc94b]/20">
              Transform Your Life Today
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-[#ecc94b]"
          >
            Unlock Your Full Potential with The Game Changer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Join over 25,000 successful individuals who have transformed their lives using our proven system. Start your journey today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <Button primary className="text-xl px-12 py-6 transform hover:scale-105 transition-all duration-300">
              Begin Your Transformation Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex items-center justify-center gap-8"
          >
            <div className="flex items-center">
              <div className="bg-[#ecc94b]/10 rounded-full p-2">
                <span className="text-[#ecc94b] font-bold">25k+</span>
              </div>
              <span className="ml-2 text-gray-400">Success Stories</span>
            </div>
            <div className="flex items-center">
              <div className="bg-[#ecc94b]/10 rounded-full p-2">
                <span className="text-[#ecc94b] font-bold">4.9/5</span>
              </div>
              <span className="ml-2 text-gray-400">User Rating</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
