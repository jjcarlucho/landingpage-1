import React from 'react';
import {
  Star,
  Headphones,
  Sparkles,
  FileText,
  CheckCircle2,
  Gift,
} from 'lucide-react';

const ProductShowcase = () => {
  const bonuses = [
    {
      icon: <FileText className="w-8 h-8 text-amber-400" />,
      title: 'AI Mastery Checklist',
      value: '$97',
      description:
        'The ultimate guide to AI tools for content creation. Know exactly which tools to use for every task.',
      feature: '97+ Essential AI Tools',
    },
    {
      icon: <Headphones className="w-8 h-8 text-amber-400" />,
      title: 'Your Wish Is Your Command',
      value: '$10,000',
      description:
        'Legendary manifestation audios that help you attract business opportunities on autopilot.',
      feature: '18+ Hours of Audio',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-400" />,
      title: 'TFT Mastery Course',
      value: '$997',
      description:
        'Release subconscious blocks holding you back from charging premium prices.',
      feature: '12 Breakthrough Sessions',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Transform Your Knowledge into Income TODAY!
          </h2>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 border border-yellow-500 mb-8">
            <div className="text-center">
              <div className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
                PREMIUM EDITION
              </div>
              <div className="flex justify-center items-baseline">
                <span className="text-6xl font-bold text-yellow-400">FREE</span>
                <span className="text-2xl text-gray-400 ml-2 line-through">$997</span>
              </div>
              <p className="text-gray-400 mt-2">Real Value: $1,597</p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black bg-opacity-40 p-6 rounded-lg border border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">✨ Exclusive Bonus ✨</h3>
                <p className="text-white mb-2">$1300 in Premium Bonuses</p>
                <p className="text-gray-300">Includes access to exclusive resources and personalized mentorship</p>
              </div>
              
              <div className="bg-black bg-opacity-40 p-6 rounded-lg border border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">🎁 Additional Bonuses 🎁</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>✓ Premium Templates (Value: $297)</li>
                  <li>✓ VIP Community Access</li>
                  <li>✓ Personalized Mentorship</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg py-4 px-4 hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg">
                JOIN THE VISIONARIES NOW!
              </button>
              <p className="text-sm text-gray-400 mt-4">🔥 Only 23 copies available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
