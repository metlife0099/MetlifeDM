import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Hero = ({ serviceHero, contactHero, FAQHero, AboutHero, PricingHero }) => {
  const heroContent = serviceHero || contactHero || FAQHero || AboutHero || PricingHero;
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroContent?.HeroImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-teal-800/50 to-emerald-900/70"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: isHovered ? 0.9 : 0.7 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              initial={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0
              }}
              animate={{
                y: [0, -100],
                x: [0, Math.random() * 100 - 50],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center !px-5 lg:!px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold !mb-6 text-white drop-shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <span className="bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
            {heroContent?.title}
          </span>
        </motion.h2>
        
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto !mb-8 leading-relaxed"
          whileHover={{ scale: 1.01 }}
        >
          {heroContent?.description}
        </motion.p>
        
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold !py-3 !px-8 rounded-full shadow-lg"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm text-white font-bold !py-3 !px-8 rounded-full border border-white/20 shadow-lg hover:bg-white/20"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scrolling Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-emerald-400 rounded-full !mt-1"
            animate={{
              y: [0, 4, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;