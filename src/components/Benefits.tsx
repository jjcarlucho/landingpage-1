import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Rocket, Clock, Sparkles, Trophy } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'Mindset Transformation',
    description: 'Develop the psychology of success with proven mental frameworks',
    color: 'from-purple-500/20 to-purple-600/20'
  },
  {
    icon: Target,
    title: 'Clear Direction',
    description: 'Get a step-by-step roadmap to achieve your goals',
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    icon: Rocket,
    title: 'Rapid Implementation',
    description: 'Start seeing results within the first 30 days of the program',
    color: 'from-green-500/20 to-green-600/20'
  },
  {
    icon: Clock,
    title: 'Time-Tested Methods',
    description: '15+ years of proven success strategies condensed into one system',
    color: 'from-yellow-500/20 to-yellow-600/20'
  },
  {
    icon: Sparkles,
    title: 'Energy Cleansing',
    description: 'Release negative patterns and align your energy with abundance and success',
    color: 'from-pink-500/20 to-pink-600/20'
  },
  {
    icon: Trophy,
    title: 'Guaranteed Results',
    description: "30-day money-back guarantee if you're not satisfied",
    color: 'from-orange-500/20 to-orange-600/20'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Benefits: React.FC = () => {
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
          <span className="inline-block px-6 py-2 mb-6 text-lg font-semibold rounded-full bg-[#ecc94b]/10 text-[#ecc94b] border border-[#ecc94b]/20">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-[#ecc94b]">
            Transform Every Aspect of Your Life
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our comprehensive system addresses all key areas of personal development, 
            ensuring lasting transformation and success.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={item}
              className={`bg-gradient-to-br ${benefit.color} backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300`}
            >
              <div className="text-[#ecc94b] mb-6">
                <benefit.icon className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
