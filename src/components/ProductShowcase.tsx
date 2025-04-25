import React from 'react';
import {
  Star,
  Headphones,
  Sparkles,
  FileText,
  CheckCircle2,
  Gift,
} from 'lucide-react';

const ProductShowcase: React.FC = () => {
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
    <section className="bg-neutral-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Product Preview */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              {/* Book Mockup */}
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-300/20 rounded-lg blur-xl"></div>
                <img
                  src="/api/placeholder/600/800"
                  alt="The GameChanger Book"
                  className="relative rounded-lg shadow-2xl"
                />
                {/* Badge */}
                <div className="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-2 rounded-full rotate-12 shadow-lg">
                  <p className="text-sm font-bold">ONLY $11.11</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The Complete GameChanger System For Turning Knowledge Into
                Income
              </h2>
              <p className="text-gray-300 mb-8">
                Get the exact blueprint I used to generate $27M+ in revenue with
                a single book—including templates, scripts, and step-by-step
                tutorials.
              </p>

              {/* What's Included */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">
                      The GameChanger Method™ (Value: $197)
                    </p>
                    <p className="text-gray-400 text-sm">
                      Step-by-step system to write, publish & profit
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">
                      Done-For-You Templates (Value: $297)
                    </p>
                    <p className="text-gray-400 text-sm">
                      Book outlines, sales pages, email sequences
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">
                      Private Community Access (Value: $497)
                    </p>
                    <p className="text-gray-400 text-sm">
                      Connect with 1,847+ successful authors
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/10 to-amber-400/10 border border-amber-500/20 rounded-lg p-4">
                <p className="text-amber-400 font-semibold">
                  Total Core Value: <span className="line-through">$991</span>{' '}
                  Your Investment Today: $11.11
                </p>
              </div>
            </div>
          </div>

          {/* Bonuses Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-2 mb-6">
              <Gift className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-semibold">
                LIMITED TIME BONUSES
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Plus, Get These $11,094 Bonuses FREE When You Order Today
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These aren't just random add-ons. Each bonus was specifically
              chosen to accelerate your success and eliminate common roadblocks.
            </p>
          </div>

          {/* Bonus Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700 hover:border-amber-500/50 transition-colors"
              >
                <div className="mb-4">{bonus.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {bonus.title}
                </h4>
                <p className="text-amber-400 font-semibold mb-3">
                  Value: {bonus.value}
                </p>
                <p className="text-gray-300 mb-4">{bonus.description}</p>
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{bonus.feature}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Total Value Banner */}
          <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-400 rounded-xl p-8 text-center">
            <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Total Value: $12,085
            </h4>
            <p className="text-xl text-black/80 mb-6">
              Get Everything Today For Just $11.11 (99.9% OFF)
            </p>
            <a
              href="#order"
              className="inline-flex items-center bg-black text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-neutral-800 transform hover:scale-105 transition-all duration-300"
            >
              CLAIM MY OFFER NOW <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
