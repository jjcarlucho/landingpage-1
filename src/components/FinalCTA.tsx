import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Shield, Clock } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0.5, 1]);
  const glowIntensity = useTransform(scrollYProgress, [0, 1], ['30%', '50%']);

  return (
    <section id="ultimate-cta" className="py-10 md:py-32 relative overflow-hidden bg-black min-h-screen flex flex-col justify-center">
      {/* Enhanced Parallax background glow */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: backgroundY }}
      >
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] animate-pulse"
          style={{
            background: `rgba(236, 201, 75, ${glowIntensity})`
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[90px] animate-pulse animation-delay-1000"
          style={{
            background: `rgba(236, 201, 75, ${glowIntensity})`
          }}
        ></motion.div>
        {/* Additional pulsing glow effects */}
        <motion.div 
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[80px] animate-pulse animation-delay-500"
          style={{
            background: `rgba(236, 201, 75, ${glowIntensity})`
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[80px] animate-pulse animation-delay-1500"
          style={{
            background: `rgba(236, 201, 75, ${glowIntensity})`
          }}
        ></motion.div>
      </motion.div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 1,
                scale: 0,
                x: Math.random() * window.innerWidth,
                y: window.innerHeight
              }}
              animate={{
                opacity: 0,
                scale: 1,
                x: Math.random() * window.innerWidth,
                y: -100,
                rotate: Math.random() * 360
              }}
              transition={{
                duration: 1.5,
                delay: Math.random() * 0.2,
                ease: "easeOut"
              }}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `hsl(${Math.random() * 360}, 70%, 50%)`
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-2 sm:px-4 relative">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0.5, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl md:max-w-5xl mx-auto"
        >
          <div className="text-center mb-6 md:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-4 py-1.5 text-base md:text-lg font-semibold rounded-full bg-[#ecc94b]/20 text-[#ecc94b] border border-[#ecc94b]/30 mb-4 md:mb-8 shadow-lg shadow-[#ecc94b]/10">
                <Star className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Limited Time Offer
              </span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-white via-[#ecc94b] to-amber-200 bg-clip-text text-transparent">
              Transform Your Life Today
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white max-w-xl md:max-w-3xl mx-auto mb-6 md:mb-12">
              Join the elite group of successful individuals who have already changed their lives with our proven system.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 sm:p-8 md:p-12 border border-[#ecc94b]/20 shadow-[0_0_40px_rgba(236,201,75,0.15)] md:shadow-[0_0_100px_rgba(236,201,75,0.2)] hover:shadow-[0_0_80px_rgba(236,201,75,0.2)] md:hover:shadow-[0_0_150px_rgba(236,201,75,0.3)] transition-all duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-[#ecc94b]/20 p-2 md:p-3 rounded-xl">
                    <Shield className="w-5 h-5 md:w-6 md:h-6 text-[#ecc94b]" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">30-Day Money-Back Guarantee</h3>
                    <p className="text-gray-200 text-sm md:text-base">Try it risk-free. If you're not completely satisfied, get a full refund.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-[#ecc94b]/20 p-2 md:p-3 rounded-xl">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#ecc94b]" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Exclusive Bonuses Included</h3>
                    <p className="text-gray-200 text-sm md:text-base">Get instant access to premium bonuses worth $1,294.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-[#ecc94b]/20 p-2 md:p-3 rounded-xl">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#ecc94b]" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Limited Time Offer</h3>
                    <p className="text-gray-200 text-sm md:text-base">Claim your FREE access before it's gone.</p>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="mb-6 md:mb-8">
                  <p className="text-gray-300 text-base md:text-lg mb-1 md:mb-2">Regular Price</p>
                  <p className="text-2xl md:text-3xl text-gray-400 line-through">$1,294</p>
                  <p className="text-gray-300 text-base md:text-lg mt-2 md:mt-4 mb-1 md:mb-2 font-bold">Today's Price</p>
                  <div className="flex items-center justify-center md:justify-start relative overflow-hidden">
                    <span className="text-6xl md:text-8xl font-bold text-yellow-400">FREE</span>
                  </div>
                  <p className="text-green-400 text-base md:text-lg mt-2 font-semibold">No credit card required</p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setShowConfetti(true)}
                  onHoverEnd={() => setShowConfetti(false)}
                  className="inline-block"
                >
                  <a
                    href="#register"
                    className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-6 text-xl md:text-2xl font-bold text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 rounded-full overflow-hidden shadow-[0_0_30px_rgba(236,201,75,0.2)] md:shadow-[0_0_50px_rgba(236,201,75,0.3)] hover:shadow-[0_0_60px_rgba(236,201,75,0.3)] md:hover:shadow-[0_0_100px_rgba(236,201,75,0.5)] transition-all duration-300"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center">
                      Get Free Access Now!
                      <ArrowRight className="ml-2 w-5 md:w-6 h-5 md:h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-4 md:mt-8">
            <p className="text-green-400 text-xs md:text-base font-semibold">
              100% FREE. No payment, no hidden fees. Instant access to all materials.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
