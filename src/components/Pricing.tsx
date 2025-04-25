import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Shield } from 'lucide-react';
import { Button } from './Button';

const features = [
  'Complete Game Changer System',
  'Advanced Implementation Strategies',
  'Priority Email Support',
  'Private Community Access',
  'Success Tracking Tools',
  'Exclusive Workshops',
  'VIP Support Channel',
  '30-Day Money-Back Guarantee'
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#ecc94b]/10 text-[#ecc94b] border border-[#ecc94b]/20">
            Special Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-[#ecc94b]">
            Transform Your Life Today
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get instant access to our complete transformation system at an unbeatable price.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -top-5 left-0 right-0 flex justify-center">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-[#ecc94b] to-[#d4af37] text-black">
                <Star className="w-4 h-4 mr-1" /> Limited Time Offer
              </span>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-[#ecc94b]/20 shadow-lg shadow-[#ecc94b]/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Complete Transformation Package</h3>
                <p className="text-gray-400 mb-6">Everything you need to transform your life and achieve your goals</p>
                <div className="flex items-center justify-center mb-6">
                  <span className="text-4xl font-bold text-white">$</span>
                  <span className="text-6xl font-bold text-white">11</span>
                  <span className="text-4xl font-bold text-white">.11</span>
                </div>
                <div className="flex items-center justify-center gap-2 mb-8">
                  <Shield className="w-5 h-5 text-[#ecc94b]" />
                  <span className="text-gray-400">30-Day Money-Back Guarantee</span>
                </div>
                <Button
                  primary
                  fullWidth
                  className="text-lg py-4"
                >
                  Get Instant Access Now
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-[#ecc94b] mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400">
              Join thousands of successful individuals who have already transformed their lives. 
              Start your journey today with our risk-free guarantee.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
