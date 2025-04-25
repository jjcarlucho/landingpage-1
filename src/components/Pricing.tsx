import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from './Button';

const plans = [
  {
    name: 'Starter',
    price: '97',
    description: 'Perfect for individuals starting their transformation journey',
    features: [
      'Complete Game Changer System',
      'Basic Implementation Guides',
      '30-Day Email Support',
      'Community Access',
      'Monthly Q&A Sessions',
      '30-Day Money-Back Guarantee'
    ]
  },
  {
    name: 'Professional',
    price: '197',
    description: 'Most popular choice for serious achievers',
    features: [
      'Everything in Starter, plus:',
      'Advanced Implementation Strategies',
      'Priority Email Support',
      'Weekly Group Coaching Calls',
      'Private Community Access',
      'Success Tracking Tools',
      'Exclusive Workshops',
      '60-Day Money-Back Guarantee'
    ],
    isPopular: true
  },
  {
    name: 'Elite',
    price: '497',
    description: 'For those who want the ultimate transformation experience',
    features: [
      'Everything in Professional, plus:',
      '1-on-1 Strategy Session',
      'VIP Support Channel',
      'Custom Success Plan',
      'Advanced Analytics Dashboard',
      'Monthly Mastermind Access',
      'Lifetime Updates',
      '90-Day Money-Back Guarantee'
    ]
  }
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
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-[#ecc94b]">
            Choose Your Transformation Path
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Select the perfect plan for your journey to success. Each plan is designed 
            to provide maximum value and results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative ${
                plan.isPopular ? 'lg:-mt-8 lg:mb-8' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-[#ecc94b] to-[#d4af37] text-black">
                    <Star className="w-4 h-4 mr-1" /> Most Popular
                  </span>
                </div>
              )}
              
              <div className={`h-full bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border ${
                plan.isPopular
                  ? 'border-[#ecc94b]/20 shadow-lg shadow-[#ecc94b]/10'
                  : 'border-gray-700/50'
              }`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-4xl font-bold text-white">$</span>
                    <span className="text-6xl font-bold text-white">{plan.price}</span>
                  </div>
                  <Button
                    primary={plan.isPopular}
                    secondary={!plan.isPopular}
                    fullWidth
                  >
                    Get Started Now
                  </Button>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-[#ecc94b] mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">
            All plans include our 30-day satisfaction guarantee. If you're not completely 
            satisfied, we'll refund your investment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
