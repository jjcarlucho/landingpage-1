import React from 'react';
import { motion } from 'framer-motion';

const ExclusiveBonuses: React.FC = () => {
  const bonuses = [
    {
      id: 1,
      title: "AI Tools Checklist",
      description: "Unlock the full potential of artificial intelligence with our comprehensive checklist. This invaluable resource guides you through the most powerful AI tools available today, ensuring you leverage the right technology for maximum impact in your business and daily tasks.",
      value: 97,
      image: "/images/Gemini_Generated_Image_tvyw2ttvyw2ttvyw.jpeg"
    },
    {
      id: 2,
      title: "Your Wish Is Your Command",
      description: "Discover the secrets of masterful prompt engineering. This exclusive guide reveals advanced techniques for crafting the perfect prompts that get you exactly what you want from AI tools. Learn the language that AI understands best and transform your interaction with artificial intelligence.",
      value: 10000,
      image: "/images/yourwishisyourcommand.png"
    },
    {
      id: 3,
      title: "TFT Course",
      description: "Experience a breakthrough in emotional freedom with our transformative TFT course. Learn powerful techniques to overcome fears, reduce anxiety, and unlock your true potential. This comprehensive program guides you through proven methods that create lasting positive change in your life.",
      value: 997,
      image: "/images/Gemini_Generated_Image_nyf0pqnyf0pqnyf0.jpeg"
    }
  ];

  const totalValue = bonuses.reduce((acc, bonus) => acc + bonus.value, 0);

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-95"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent">
              Unlock These Exclusive Bonuses
            </h2>
            <p className="text-2xl text-amber-100/80 max-w-4xl mx-auto leading-relaxed">
              When you invest in yourself today, you'll receive these extraordinary bonuses crafted to catapult your success to unprecedented heights
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={bonus.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-[0_0_30px_rgba(251,191,36,0.1)] hover:shadow-[0_0_40px_rgba(251,191,36,0.2)] transition-all duration-300"
            >
              <div className="aspect-video relative mb-8 rounded-xl overflow-hidden">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-3 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                  <span className="text-black font-bold text-lg">${bonus.value}</span>
                  <span className="text-black font-medium"> Value</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-amber-200 mb-4">{bonus.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">{bonus.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-md rounded-3xl p-12 shadow-[0_0_50px_rgba(251,191,36,0.15)]">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Total Bonus Value: {" "}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent">
                ${totalValue.toLocaleString()}
              </span>
            </h3>
            <p className="text-2xl text-amber-100/80 mb-8 max-w-3xl mx-auto">
              Don't miss out on this extraordinary opportunity! Get instant access to all these life-changing bonuses when you take action today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black text-2xl font-bold py-6 px-12 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all duration-300"
            >
              Claim Your Exclusive Bonuses Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusiveBonuses; 