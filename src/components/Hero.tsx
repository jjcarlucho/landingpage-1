import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';

const Hero: React.FC = () => {
  const features = [
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Mindset Mastery",
      description: "Transform your thinking patterns"
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Rapid Growth",
      description: "Accelerate your success journey"
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Inner Freedom",
      description: "Release limiting beliefs"
    }
  ];

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
            Join over 1,847+ successful individuals who have transformed their lives using our proven system. Start your journey today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-[#ecc94b]/5 backdrop-blur-sm rounded-xl p-6 border border-[#ecc94b]/10 hover:border-[#ecc94b]/20 transition-all duration-300"
              >
                <div className="text-[#ecc94b] mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-8"
          >
            <div className="text-center">
              <span className="text-[#ecc94b] font-bold">1,847+</span>
              <p className="text-gray-400 text-sm">Success Stories</p>
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
