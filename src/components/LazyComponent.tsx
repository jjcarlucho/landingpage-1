import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

interface LazyComponentProps {
  children: React.ReactNode;
  height?: string;
}

const LoadingFallback = ({ height = '400px' }: { height?: string }) => (
  <div
    className="w-full bg-black/50 rounded-lg overflow-hidden"
    style={{ height }}
  >
    <motion.div
      className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
      animate={{
        x: ['100%', '-100%'],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: 'linear',
      }}
    />
  </div>
);

const LazyComponent: React.FC<LazyComponentProps> = ({
  children,
  height = '400px',
}) => {
  return (
    <Suspense fallback={<LoadingFallback height={height} />}>
      {children}
    </Suspense>
  );
};

export default LazyComponent; 