import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Decision: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[#ecc94b]/5 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-[#ecc94b]/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#ecc94b]/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-6 py-2 text-lg font-semibold rounded-full bg-[#ecc94b]/10 text-[#ecc94b] border border-[#ecc94b]/20">
              <Sparkles className="w-5 h-5 mr-2" />
              Your Moment of Decision
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-invert mx-auto"
          >
            <div className="space-y-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-amber-200 to-[#ecc94b] bg-clip-text text-transparent">
                Is This Transformational Journey For You?
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                As you've journeyed through this page, you might be wondering if this is truly your path. It's a profound question, one that deserves careful consideration.
              </p>

              <div className="bg-gradient-to-br from-[#ecc94b]/10 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-[#ecc94b]/10">
                <p className="text-2xl font-light text-gray-200 italic">
                  "There are two kinds of people in this world: those who embrace their potential and take decisive action, and those who let their dreams remain just dreams."
                </p>
              </div>

              <p className="text-xl text-gray-300">
                Your presence here speaks volumes. It tells me you're among the select few who recognize that extraordinary success leaves clues, and you're ready to decode them.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30">
                  <h3 className="text-2xl font-bold text-[#ecc94b] mb-4">Where You Are Now</h3>
                  <ul className="text-left text-gray-300 space-y-3">
                    <li>• Seeking a proven path to monetize your knowledge</li>
                    <li>• Ready to break free from financial uncertainty</li>
                    <li>• Yearning to share your gifts with the world</li>
                  </ul>
                </div>
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30">
                  <h3 className="text-2xl font-bold text-[#ecc94b] mb-4">Where You Could Be</h3>
                  <ul className="text-left text-gray-300 space-y-3">
                    <li>• Confidently monetizing your expertise</li>
                    <li>• Enjoying predictable, abundant income</li>
                    <li>• Making a profound impact globally</li>
                  </ul>
                </div>
              </div>

              <p className="text-xl text-gray-200">
                The value of this transformation? Those who've walked this path say it's immeasurable. The clarity, confidence, and financial freedom they've gained have revolutionized not just their businesses, but their entire lives.
              </p>

              <div className="bg-gradient-to-br from-[#ecc94b]/10 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-[#ecc94b]/10 my-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Consider This Your Invitation to Excellence
                </h3>
                <p className="text-xl text-gray-300">
                  While others invest thousands seeking these insights through trial and error, you've discovered a direct path to transformation. This isn't just another opportunity – it's THE opportunity you've been preparing for.
                </p>
              </div>

              <p className="text-xl text-gray-200 mb-12">
                You're here because you're ready for change. Ready to join an elite group of knowledge entrepreneurs who've mastered the art of turning their expertise into extraordinary income.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                <a
                  href="#pricing"
                  className="inline-flex items-center bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 text-black text-2xl font-bold py-6 px-12 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all duration-300"
                >
                  Begin Your Transformation Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Decision;
