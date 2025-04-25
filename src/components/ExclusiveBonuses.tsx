import React from 'react';
import { motion } from 'framer-motion';

const ExclusiveBonuses: React.FC = () => {
  const bonuses = [
    {
      id: 1,
      title: "AI Tools Checklist",
      description: "A comprehensive guide to the most powerful AI tools that will revolutionize your business and productivity.",
      value: 97,
      image: "/images/bonus-1.png"
    },
    {
      id: 2,
      title: "Your Wish Is Your Command",
      description: "Master the art of prompt engineering with this exclusive guide to crafting perfect prompts for any AI tool.",
      value: 10000,
      image: "/images/bonus-2.png"
    },
    {
      id: 3,
      title: "TFT Course",
      description: "Transform your fears into triumphs with our revolutionary emotional freedom technique course.",
      value: 997,
      image: "/images/bonus-3.png"
    }
  ];

  const totalValue = bonuses.reduce((acc, bonus) => acc + bonus.value, 0);

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Unlock These Exclusive Bonuses
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          When you invest in yourself today, you'll receive these powerful bonuses designed to accelerate your success
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {bonuses.map((bonus, index) => (
          <motion.div
            key={bonus.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl"
          >
            <div className="aspect-video relative mb-6">
              <img
                src={bonus.image}
                alt={bonus.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-full">
                <span className="text-white font-bold">${bonus.value}</span>
                <span className="text-white font-medium"> Value</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{bonus.title}</h3>
            <p className="text-gray-300">{bonus.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Total Bonus Value: <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">${totalValue.toLocaleString()}</span>
          </h3>
          <p className="text-xl text-gray-300">
            Get instant access to all these bonuses when you order today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveBonuses; 