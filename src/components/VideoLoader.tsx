import React from 'react';
import { motion } from 'framer-motion';

const VideoLoader: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="relative">
        {/* Outer glow */}
        <motion.div
          className="absolute inset-0 bg-[#ecc94b]/20 rounded-full blur-[50px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Loading spinner */}
        <motion.div
          className="w-16 h-16 border-4 border-[#ecc94b]/30 border-t-[#ecc94b] rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Loading text */}
        <motion.p
          className="absolute mt-8 left-1/2 -translate-x-1/2 text-[#ecc94b] text-sm font-medium"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading video...
        </motion.p>
      </div>
    </div>
  );
};

export default VideoLoader; 