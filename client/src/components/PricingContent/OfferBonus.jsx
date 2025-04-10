import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const OfferBonus = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="!relative !overflow-hidden !py-16 !px-4 sm:!px-6 lg:!px-8" ref={ref}>
      {/* Animated Background Elements */}
      <div className="!absolute !inset-0 !overflow-hidden !z-0">
        <div className="!absolute !-top-20 !-left-20 !w-64 !h-64 !bg-blue-100 !rounded-full !opacity-20 !blur-xl"></div>
        <div className="!absolute !-bottom-20 !-right-20 !w-64 !h-64 !bg-cyan-100 !rounded-full !opacity-20 !blur-xl"></div>
        <div className="!absolute !top-1/2 !right-1/4 !w-32 !h-32 !bg-purple-100 !rounded-full !opacity-15 !blur-lg"></div>
      </div>

      <motion.div
        className="!relative !z-10 !max-w-7xl !mx-auto !bg-white !rounded-2xl !shadow-2xl !overflow-hidden"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2">
          {/* Left Side - Content */}
          <div className="!p-8 sm:!p-12">
            <motion.h2
              className="!text-3xl sm:!text-4xl !font-bold !text-gray-900 !mb-6"
              variants={itemVariants}
            >
              Custom Plans, <span className="!text-blue-600">Transparent Pricing</span>, and Exclusive Bonuses
            </motion.h2>

            <motion.p
              className="!text-lg !text-gray-600 !mb-8"
              variants={itemVariants}
            >
              Every brand is unique, which is why our plans are fully customized to meet your specific goals. Pricing typically starts at just $1,000/month and scales based on your requirements.
            </motion.p>

            <motion.div
              className="!space-y-6 !mb-10"
              variants={containerVariants}
            >
              <motion.div
                className="!p-6 !bg-blue-50 !rounded-xl !border-l-4 !border-blue-500"
                variants={itemVariants}
              >
                <h3 className="!text-xl !font-bold !text-blue-700 !mb-2">
                  Guaranteed Services Worth $999 — Absolutely Free!
                </h3>
                <p className="!text-gray-700">
                  Get a tailored package of premium services — including strategy sessions, branded content templates, and performance audits — all designed specifically for your brand.
                </p>
              </motion.div>

              <motion.div
                className="!p-6 !bg-green-50 !rounded-xl !border-l-4 !border-green-500"
                variants={itemVariants}
              >
                <h3 className="!text-xl !font-bold !text-green-700 !mb-2">
                  No Hidden Fees – Ever
                </h3>
                <p className="!text-gray-700">
                  After your free consultation, you'll receive a detailed quote that's completely transparent. What you see is what you pay.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="!mb-8"
              variants={itemVariants}
            >
              <h3 className="!text-xl !font-bold !text-gray-800 !mb-4">
                Bonus Perks Included:
              </h3>
              <ul className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-4">
                {[
                  'Free onboarding and setup',
                  'Monthly performance reports',
                  'Priority support',
                  'Access to exclusive marketing resources'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="!flex !items-center !text-gray-700"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <svg className="!w-5 !h-5 !text-green-500 !mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link to='/contact'>
                <button className="!w-full sm:!w-auto !px-8 !py-4 !text-lg !font-bold !text-white !bg-gradient-to-r !from-blue-600 !to-cyan-500 !rounded-lg !shadow-lg hover:!shadow-xl !transition-all !duration-300 hover:!scale-[1.02] cursor-pointer">
                  Claim Your Free Consultation
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            className="!hidden lg:!block !relative !bg-gradient-to-br !from-blue-100 !to-cyan-50"
            variants={itemVariants}
          >
            <div className="!absolute !inset-0 !bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] !bg-cover !bg-center !opacity-20"></div>
            <div className="!relative !h-full !flex !items-center !justify-center !p-8">
              <motion.div
                className="!bg-white !p-6 !rounded-xl !shadow-2xl !max-w-md !w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="!text-center !mb-6">
                  <div className="!inline-flex !items-center !justify-center !w-16 !h-16 !bg-blue-100 !rounded-full !mb-4">
                    <svg className="!w-8 !h-8 !text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2m8 0h6a2 2 0 012 2v6a2 2 0 01-2 2h-6m0 0H6a2 2 0 01-2-2v-6a2 2 0 012-2h6m0 0h6"></path>
                    </svg>
                  </div>
                  <h3 className="!text-2xl !font-bold !text-gray-800 !mb-2">
                    Your Custom Marketing Package
                  </h3>
                  <p className="!text-gray-600">
                    We'll create a plan that perfectly matches your business goals and budget.
                  </p>
                </div>
                <div className="!space-y-4">
                  {[
                    { label: 'Starting Price', value: '$1,000/mo' },
                    { label: 'Free Strategy Session', value: '$299 Value' },
                    { label: 'Custom Bonus Package', value: '$999 Value' }
                  ].map((item, index) => (
                    <div key={index} className="!flex !justify-between !py-3 !border-b !border-gray-100">
                      <span className="!text-gray-600">{item.label}</span>
                      <span className="!font-bold !text-blue-600">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default OfferBonus;