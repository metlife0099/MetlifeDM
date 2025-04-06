import { FaWordpress, FaShopify, FaEdit, FaArrowRight, FaPhone, FaEnvelope, FaTimes, FaCode, FaServer, FaChartLine } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const HomeWebBanner = () => {
  const controls = useAnimation();
  const bannerRef = useRef(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isLearnModalOpen, setIsLearnModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, [controls]);

  const platforms = [
    {
      icon: <FaWordpress className="text-4xl text-white" />,
      name: "WordPress",
      description: "Powerful CMS solutions",
      color: "bg-blue-600 hover:bg-blue-700",
      delay: 0.2
    },
    {
      icon: <FaShopify className="text-4xl text-white" />,
      name: "Shopify",
      description: "E-commerce made easy",
      color: "bg-green-600 hover:bg-green-700",
      delay: 0.4
    },
    {
      icon: <FaEdit className="text-4xl text-white" />,
      name: "CMF",
      description: "Custom content frameworks",
      color: "bg-teal-600 hover:bg-teal-700",
      delay: 0.6
    }
  ];

  const contactOptions = [
    {
      icon: <FaPhone className="text-3xl text-blue-600" />,
      title: "Call Us Now",
      description: "+1 (786) 210-9819",
      action: "tel:+17862109819",
      color: "bg-blue-50 hover:bg-blue-100",
      animation: { scale: 1.05 }
    },
    {
      icon: <FaEnvelope className="text-3xl text-green-600" />,
      title: "Email Us",
      description: "info@metlifedm.com",
      action: "mailto:info@metlifedm.com",
      color: "bg-green-50 hover:bg-green-100",
      animation: { scale: 1.05 }
    }
  ];

  const cmfFeatures = [
    {
      icon: <FaCode className="text-2xl text-teal-600" />,
      title: "Custom Content Types",
      description: "Tailored content structures that match your specific business needs"
    },
    {
      icon: <FaServer className="text-2xl text-teal-600" />,
      title: "Scalable Architecture",
      description: "Built to grow with your business and handle increasing traffic"
    },
    {
      icon: <FaChartLine className="text-2xl text-teal-600" />,
      title: "Performance Optimized",
      description: "Lightning-fast load times and efficient database queries"
    }
  ];

  return (
    <div 
      ref={bannerRef}
      className="relative overflow-hidden !py-16 !px-4 md:!px-8 lg:!px-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    >
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container !mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center !gap-12">
          {/* Text content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 !mb-8 lg:!mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !mb-6">
              Professional <span className="text-blue-400">Website</span> Development
            </h1>
            <p className="text-xl !mb-8 text-gray-300">
              We build powerful websites using WordPress, Shopify, and custom CMF solutions tailored to your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row !gap-4 !mb-12">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold !py-3 !px-8 rounded-lg transition-all duration-300 flex items-center justify-center !gap-2 cursor-pointer"
              >
                Get Started <FaArrowRight />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLearnModalOpen(true)}
                className="bg-transparent hover:bg-gray-800 border-2 border-gray-300 text-white font-bold !py-3 !px-8 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Learn More
              </motion.button>
            </div>

            {/* Stats */}
            <div className="flex !gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">98%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Platform cards */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 !gap-6"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ delay: platform.delay, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className={`${platform.color} rounded-xl !p-6 shadow-lg transition-all duration-300 flex flex-col items-center text-center`}
              >
                <div className="!mb-4">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold !mb-2">{platform.name}</h3>
                <p className="text-gray-200">{platform.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Contact Options Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setIsContactModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl !p-8 max-w-md w-full !mx-4 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="w-6 h-6" />
              </motion.button>
              
              <h3 className="text-2xl font-bold text-gray-800 !mb-6 text-center">
                How would you like to contact us?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 !gap-4">
                {contactOptions.map((option, index) => (
                  <motion.a
                    key={index}
                    href={option.action}
                    whileHover={option.animation}
                    whileTap={{ scale: 0.95 }}
                    className={`${option.color} rounded-lg !p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300`}
                  >
                    <div className="!mb-4">
                      {option.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 !mb-1">
                      {option.title}
                    </h4>
                    <p className="text-gray-600">
                      {option.description}
                    </p>
                  </motion.a>
                ))}
              </div>
              
              <p className="text-gray-500 text-sm !mt-6 text-center">
                We typically respond within 1 business day
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Learn More Modal (CMF Details) */}
      <AnimatePresence>
        {isLearnModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setIsLearnModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl !p-8 max-w-2xl w-full !mx-4 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLearnModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="w-6 h-6" />
              </motion.button>
              
              <div className="flex flex-col md:flex-row !gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-800 !mb-6">
                    Custom CMF Development
                  </h3>
                  <p className="text-gray-600 !mb-6">
                    Our Content Management Framework solutions provide unparalleled flexibility for complex websites and applications. Unlike off-the-shelf CMS platforms, we build custom frameworks tailored to your exact business requirements.
                  </p>
                  <div className="!space-y-4 !mb-8">
                    {cmfFeatures.map((feature, index) => (
                      <div key={index} className="flex !gap-4">
                        <div className="flex-shrink-0 !mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsLearnModalOpen(false);
                      setIsContactModalOpen(true);
                    }}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold !py-3 !px-8 rounded-lg transition-all duration-300"
                  >
                    Get Started with CMF
                  </motion.button>
                </div>
                <div className="md:w-1/2 bg-gray-100 rounded-lg !p-6 flex items-center justify-center">
                  <div className="text-center">
                    <FaEdit className="text-6xl text-teal-600 !mx-auto !mb-6" />
                    <p className="text-gray-700 font-medium">
                      Custom Content Management Framework tailored to your business workflow
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-100px) translateX(20px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HomeWebBanner;