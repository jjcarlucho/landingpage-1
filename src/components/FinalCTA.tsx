import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Shield, Clock } from 'lucide-react';

const floatingTestimonials = [
  { text: "This changed my entire business!", author: "Mark R." },
  { text: "Best decision of my career!", author: "Lisa M." },
  { text: "The results are incredible!", author: "John D." }
];

const FinalCTA: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % floatingTestimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="ultimate-cta" className="py-32 relative overflow-hidden bg-black">
      {/* Parallax background glow */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ecc94b]/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ecc94b]/10 rounded-full blur-[90px] animate-pulse animation-delay-1000"></div>
      </motion.div>

      {/* Floating Testimonials */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          key={activeTestimonial}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 0.5 }}
          className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 shadow-lg border border-white/10">
            <p className="text-white/90 text-sm">
              {floatingTestimonials[activeTestimonial].text}
            </p>
            <p className="text-[#ecc94b] text-xs mt-2">
              - {floatingTestimonials[activeTestimonial].author}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-6 py-2 text-lg font-semibold rounded-full bg-[#ecc94b]/10 text-[#ecc94b] border border-[#ecc94b]/20 mb-8">
                <Star className="w-5 h-5 mr-2" />
                Limited Time Offer
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-amber-200 to-[#ecc94b] bg-clip-text text-transparent">
              Transform Your Life Today
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join the elite group of successful individuals who have already changed their lives with our proven system.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl p-12 border border-[#ecc94b]/20 shadow-[0_0_100px_rgba(236,201,75,0.2)] hover:shadow-[0_0_150px_rgba(236,201,75,0.3)] transition-all duration-500"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ecc94b]/10 p-3 rounded-xl">
                    <Shield className="w-6 h-6 text-[#ecc94b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">30-Day Money-Back Guarantee</h3>
                    <p className="text-gray-300">Try it risk-free. If you're not completely satisfied, get a full refund.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ecc94b]/10 p-3 rounded-xl">
                    <Sparkles className="w-6 h-6 text-[#ecc94b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Exclusive Bonuses Included</h3>
                    <p className="text-gray-300">Get instant access to premium bonuses worth over $1,311.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ecc94b]/10 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-[#ecc94b]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Limited Time Offer</h3>
                    <p className="text-gray-300">Special pricing available only during this launch period.</p>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="mb-8">
                  <p className="text-gray-400 text-lg mb-2">Regular Price</p>
                  <p className="text-3xl text-gray-500 line-through">$1,311</p>
                  <p className="text-gray-400 text-lg mt-4 mb-2">Today's Price</p>
                  <div className="flex items-center justify-center md:justify-start">
                    <span className="text-6xl font-bold text-white">$</span>
                    <span className="text-8xl font-bold bg-gradient-to-r from-amber-200 to-[#ecc94b] bg-clip-text text-transparent">11</span>
                    <span className="text-4xl font-bold text-white self-start mt-4">.11</span>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <a
                    href="https://pay.hotmart.com/P99406062G"
                    className="group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 rounded-full overflow-hidden shadow-[0_0_50px_rgba(236,201,75,0.3)] hover:shadow-[0_0_100px_rgba(236,201,75,0.5)] transition-all duration-300"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center">
                      Get Instant Access
                      <ArrowRight className="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <p className="text-gray-400">
              * One-time payment. No hidden fees. Instant access to all materials.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
