import React from 'react';
import { Volume2, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const VSL: React.FC = () => {
  return (
    <section className="relative py-12 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Play Message */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#ecc94b]/20 to-[#d4af37]/20 border border-[#ecc94b]/20 backdrop-blur-sm">
            <Volume2 className="w-5 h-5 text-[#ecc94b]" />
            <span className="text-lg font-medium bg-gradient-to-r from-white to-[#ecc94b] bg-clip-text text-transparent">
              Click Play to Begin Your Transformation Journey
            </span>
          </div>
        </motion.div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-gray-900 relative">
            {/* Video Placeholder - Replace with actual video embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-[#ecc94b] rounded-full flex items-center justify-center transform transition-transform hover:scale-110">
                <Play className="w-8 h-8 text-black ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-white to-[#ecc94b] bg-clip-text text-transparent mb-2">
              1,847+
            </div>
            <div className="text-gray-400">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-white to-[#ecc94b] bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-white to-[#ecc94b] bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-white to-[#ecc94b] bg-clip-text text-transparent mb-2">
              15 min
            </div>
            <div className="text-gray-400">Quick Watch</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VSL;
