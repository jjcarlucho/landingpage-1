import React from 'react';
import {
  BookOpen,
  DollarSign,
  CheckCircle,
  Sparkles,
  Rocket,
  Brain,
  Star,
} from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Feature */}
          <div className="text-center mb-16">
            <div className="bg-gray-800 text-white p-8 rounded-lg shadow-xl mb-8">
              <p className="text-xl md:text-2xl font-semibold">
                The GameChanger is a strategic ebook that guides you step by
                step to turn your expertise into a book that attracts clients,
                pays for your advertising, and sells for you, even while you
                sleep. Ideal for coaches, mentors, and creators who want to live
                from what they know without feeling enslaved to marketing.
              </p>
            </div>

            <p className="text-2xl font-bold text-white mb-4">
              Only one book - that's all I used to double my revenue in under 7
              months.
            </p>

            <p className="text-xl text-gray-300">
              And that's all any entrepreneur needs.
            </p>
          </div>

          {/* You'll Discover Section */}
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            You'll discover...
          </h3>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm border border-gray-700/50">
              <BookOpen className="w-12 h-12 text-gray-300 mb-4" />
              <h4 className="text-xl font-bold mb-3 text-white">
                Learn to create ebooks without any prior experience.
              </h4>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm border border-gray-700/50">
              <Sparkles className="w-12 h-12 text-gray-300 mb-4" />
              <h4 className="text-xl font-bold mb-3 text-white">
                Use AI tools to simplify content creation.
              </h4>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm border border-gray-700/50">
              <Rocket className="w-12 h-12 text-gray-300 mb-4" />
              <h4 className="text-xl font-bold mb-3 text-white">
                Discover marketing strategies to sell your ebook online.
              </h4>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm border border-gray-700/50">
              <Brain className="w-12 h-12 text-gray-300 mb-4" />
              <h4 className="text-xl font-bold mb-3 text-white">
                Use AI to accelerate what you know, not to replace it.
              </h4>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm border border-gray-700/50">
              <Star className="w-12 h-12 text-gray-300 mb-4" />
              <h4 className="text-xl font-bold mb-3 text-white">
                Ideal for coaches, mentors, therapists, creators or freelancers.
              </h4>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm border border-gray-700/50">
              <DollarSign className="w-12 h-12 text-gray-300 mb-4" />
              <h4 className="text-xl font-bold mb-3 text-white">
                Learn to sell without feeling like a "salesperson".
              </h4>
            </div>
          </div>

          {/* And More */}
          <div className="text-center mb-16">
            <p className="text-2xl font-bold text-white">• And More!</p>
          </div>

          {/* What You'll Receive */}
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Here's what you'll receive today...
          </h3>

          {/* Features List */}
          <div className="space-y-8 mb-16">
            <div className="bg-gray-800/50 p-6 rounded-lg shadow-md backdrop-blur-sm border border-gray-700/50">
              <h4 className="text-xl font-bold text-gray-300 mb-3">
                Step-by-step guide - Easy to follow instructions for beginners.
              </h4>
              <p className="text-gray-300">
                No more guesswork! Follow a crystal-clear, step-by-step guide
                designed for total beginners. Just follow along and build your
                digital product business from scratch—no experience needed!
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg shadow-md backdrop-blur-sm border border-gray-700/50">
              <h4 className="text-xl font-bold text-gray-300 mb-3">
                • AI tool recommendations - Discover the best AI tools to aid in
                content creation.
              </h4>
              <p className="text-gray-300">
                Save hours of work with our handpicked list of AI tools. These
                game-changers will help you write, design, and create your ebook
                like a pro in way less time.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg shadow-md backdrop-blur-sm border border-gray-700/50">
              <h4 className="text-xl font-bold text-gray-300 mb-3">
                • Marketing strategies - Effective strategies for selling your
                ebook online.
              </h4>
              <p className="text-gray-300">
                Learn the exact marketing moves that actually work. From email
                to social media, you'll know how to get your ebook into the
                hands of people who want to buy it—fast.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg shadow-md backdrop-blur-sm border border-gray-700/50">
              <h4 className="text-xl font-bold text-gray-300 mb-3">
                • Real case examples and breakdowns - Real-world examples that
                you can model immediately.
              </h4>
              <p className="text-gray-300">
                Steal the secrets from real success stories! We break down real
                case studies so you can copy what works and skip what doesn't.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg shadow-md backdrop-blur-sm border border-gray-700/50">
              <h4 className="text-xl font-bold text-gray-300 mb-3">
                • Funnel templates and pricing tips - No fluff — just what
                works, step by step.
              </h4>
              <p className="text-gray-300">
                Plug-and-play funnel templates and proven pricing hacks that
                turn browsers into buyers. Just fill in the blanks and watch
                your sales grow.
              </p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg shadow-md backdrop-blur-sm border border-gray-700/50">
              <h4 className="text-xl font-bold text-gray-300 mb-3">
                • And much more!
              </h4>
              <p className="text-gray-300">
                There's even more inside waiting for you—tools, tips, and
                shortcuts that make selling your ebook online easier than ever.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#offer"
              className="inline-flex items-center bg-gradient-to-r from-[#ecc94b] to-[#d4af37] text-black font-bold py-4 px-8 rounded-full text-xl hover:from-[#f0d75e] hover:to-[#ecc94b] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#ecc94b]/25"
            >
              Get Instant Access Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
