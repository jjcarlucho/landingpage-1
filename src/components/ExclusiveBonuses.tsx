import React from 'react';
import { motion } from 'framer-motion';

const ExclusiveBonuses = () => {
  const bonuses = [
    {
      id: 1,
      title: "AI Tools Checklist",
      description: "A comprehensive guide to the best AI tools for content creation and marketing. Imagine having a streamlined process for creating content that resonates with your audience. With this checklist, you'll efficiently find the right AI tools to enhance productivity and creativity. Picture using AI to automatically generate catchy headlines, suggest engaging content ideas, and even assist in editing your drafts. This will save you time and allow you to focus on more strategic elements of your content strategy, ensuring your marketing efforts yield better results and reach a wider audience.",
      value: 17,
      image: "/images/Gemini_Generated_Image_tvyw2ttvyw2ttvyw.jpeg"
    },
    {
      id: 2,
      title: "Your Wish Is Your Command",
      description: "A legendary series of audios about mindset, manifestation, and Law of Attraction applied to business. This exclusive collection trains you to think like a reality creator, not like a project slave. Imagine transforming your mindset to manifest success in business. These audios guide you in applying the Law of Attraction to your entrepreneurial endeavors, teaching you to create your desired reality. Picture yourself shifting from a place of limitation to one of limitless potential. As you integrate these principles, you'll start to see opportunities you never noticed before, attract like-minded collaborators, and naturally align with your business goals, making the path to success more intuitive and less stressful.",
      value: 997,
      image: "/images/yourwishisyourcommand.avif"
    },
    {
      id: 3,
      title: "TFT Course",
      description: "Learn to release subconscious blocks and emotions that sabotage your progress with this powerful personal transformation technique. Perfect for conscious entrepreneurs who want to sell from their center, without fear or self-sabotage. Imagine being able to clear the mental and emotional obstacles holding you back. This course equips you with techniques to identify and release subconscious blocks, enabling you to approach business from a place of confidence and authenticity. Envision the freedom of operating without fear or self-sabotage, allowing your true passion and purpose to shine through in your offerings. As these blocks dissolve, you'll find greater alignment in your actions, leading to more genuine connections with your clients and increased success in your endeavors.",
      value: 297,
      image: "/images/Gemini_Generated_Image_nyf0pqnyf0pqnyf0.jpeg"
    }
  ];

  const totalValue = bonuses.reduce((acc, bonus) => acc + bonus.value, 0);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            🎁 Exclusive FREE Bonuses 🎁
          </h2>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-yellow-500 mb-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
                TOTAL VALUE: $1300
              </div>
              <p className="text-2xl text-white font-bold">
                ALL BONUSES INCLUDED FREE!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black bg-opacity-40 p-6 rounded-lg border border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">✨ Bonus 1 ✨</h3>
                <p className="text-white mb-2">Premium Templates</p>
                <p className="text-gray-300">Value: $297</p>
                <ul className="text-gray-300 mt-4 space-y-2">
                  <li>✓ High-converting templates</li>
                  <li>✓ Proven sales scripts</li>
                  <li>✓ Marketing strategies</li>
                </ul>
              </div>
              
              <div className="bg-black bg-opacity-40 p-6 rounded-lg border border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">✨ Bonus 2 ✨</h3>
                <p className="text-white mb-2">VIP Community</p>
                <p className="text-gray-300">Value: $497</p>
                <ul className="text-gray-300 mt-4 space-y-2">
                  <li>✓ Private group access</li>
                  <li>✓ Expert networking</li>
                  <li>✓ Personalized support</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg py-4 px-4 hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                GET FREE BONUSES NOW!
              </button>
              <p className="text-sm text-gray-400 mt-4">🔥 Limited time offer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveBonuses; 