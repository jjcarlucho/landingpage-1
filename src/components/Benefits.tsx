import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Rocket, Clock, Users, Trophy } from 'lucide-react';

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
    icon: Users,
    title: 'Community Support',
    description: 'Join a network of 25,000+ successful individuals',
    color: 'from-red-500/20 to-red-600/20'
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
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#ecc94b]/10 text-[#ecc94b] border border-[#ecc94b]/20">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                     style={{background: `linear-gradient(to right, ${benefit.color})`}}></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-[#ecc94b]/20 transition-all duration-300">
                  <div className="bg-gradient-to-br from-[#ecc94b]/20 to-[#d4af37]/20 p-3 rounded-xl inline-block mb-6">
                    <Icon className="w-8 h-8 text-[#ecc94b]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
