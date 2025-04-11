import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaHashtag, FaChartPie, FaPenFancy } from 'react-icons/fa';
import { MdLeaderboard, MdBrandingWatermark } from "react-icons/md";
import { Link } from 'react-router-dom';

const AddonServiceBanner = () => {
  const services = [
    { name: "Lead Generation Service", icon: <MdLeaderboard className="!text-2xl" /> },
    { name: "Brand Awarness", icon: <MdBrandingWatermark className="!text-2xl" /> },
    { name: "Content creation", icon: <FaPenFancy className="!text-2xl" /> },
    { name: "Reputation Management services", icon: <FaChartLine className="!text-2xl" /> },
    { name: "Weekly plan for SMM", icon: <FaChartPie className="!text-2xl" /> },
    { name: "Other Services", icon: <FaHashtag className="!text-2xl" /> },

  ];

  return (
    <div className="!relative !py-16 !px-4 sm:!px-6 lg:!px-8 !overflow-hidden !bg-gradient-to-br !from-blue-900 !to-blue-700">
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="!absolute !-right-40 !-top-40 !w-80 !h-80 !bg-blue-800 !rounded-full !opacity-20"
      ></motion.div>

      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="!absolute !-left-40 !-bottom-40 !w-80 !h-80 !bg-cyan-800 !rounded-full !opacity-20"
      ></motion.div>

      <div className="!max-w-7xl !mx-auto !relative !z-10">
        {/* Main Banner Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="!text-center !mb-12"
        >
          <div className="!inline-flex !items-center !px-4 !py-2 !mb-4 !bg-blue-800 !bg-opacity-40 !rounded-full !text-sm !text-white !font-medium">
            <FaRocket className="!mr-2 !text-yellow-300" />
            TOP ADD-ON SERVICES
          </div>
          <h2 className="!text-4xl sm:!text-5xl !font-bold !text-white !mb-4">
            <motion.span
              className="!inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Premium Add-on Solutions
            </motion.span> {" "}
            <br className="sm:!hidden" />
            <span className="!text-cyan-300">That Drive Results</span>
          </h2>
          <p className="!text-xl !text-blue-100 !max-w-3xl !mx-auto">
            Our most popular addon services trusted by 500+ businesses to increase visibility, engagement, and revenue
          </p>
        </motion.div>

        {/* Animated Services Marquee */}
        <motion.div
          className="!overflow-hidden !py-6"
        >
          <motion.div
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="!flex !space-x-12"
          >
            {[...services, ...services].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="!flex !items-center !px-6 !py-3 !bg-white !bg-opacity-10 !backdrop-blur-sm !rounded-full !text-white !border !border-blue-400 !border-opacity-30 !whitespace-nowrap"
              >
                <span className="!mr-3 !text-cyan-300">{service.icon}</span>
                <span className="!font-medium text-black">{service.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="!mt-12 !text-center"
        >
          <Link to='/pricing'>
            <button className="!inline-flex !items-center !px-8 !py-4 !text-lg !font-bold !text-blue-900 !bg-gradient-to-r !from-cyan-400 !to-cyan-300 !rounded-lg !shadow-lg hover:!shadow-xl !transition-all !duration-300 hover:!scale-105 cursor-pointer">
              Explore Pricing
              <svg className="!ml-3 !w-5 !h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AddonServiceBanner;