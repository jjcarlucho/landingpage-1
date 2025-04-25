import React from 'react';
import { motion } from 'framer-motion';

const PageLoader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a]"
    >
      <div className="relative">
        {/* Background glow */}
        <motion.div
          className="absolute inset-0 bg-[#ecc94b]/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Logo or brand icon */}
        <motion.div
          className="relative w-24 h-24 flex items-center justify-center"
          animate={{
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-16 h-16"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
              stroke="#ecc94b"
              strokeWidth="1.5"
              animate={{
                pathLength: [0, 1],
                opacity: [0.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
              stroke="#ecc94b"
              strokeWidth="1.5"
              animate={{
                pathLength: [0, 1],
                opacity: [0.2, 1],
              }}
              transition={{
                duration: 2,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>

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
          Loading amazing content...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PageLoader; 