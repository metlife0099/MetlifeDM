import React from 'react';
import { motion } from 'framer-motion';
import Icon1 from '../../assets/icons/folder.png';
import Icon2 from '../../assets/icons/monitor.png';
import Icon3 from '../../assets/icons/badge.png';
import Icon4 from '../../assets/icons/transparency.png';
import Icon5 from '../../assets/icons/solution.png';
import Icon6 from '../../assets/icons/bullhorn.png';

const aboutCard = [
  {
    icon: Icon1,
    title: 'Proven Track Record of Success',
    description: 'We\'ve helped businesses across industries achieve higher conversions, increased website traffic, and stronger brand visibility through cutting-edge digital marketing strategies.',
  },
  {
    icon: Icon2,
    title: 'Data-Driven & ROI-Focused Strategies',
    description: 'Every Dollar Spent Should Drive Results – That\'s Our ROI-Focused Approach.',
  },
  {
    icon: Icon3,
    title: 'Certified Digital Marketing Experts',
    description: 'Our team consists of Google Ads-certified professionals, SEO specialists, and social media strategists who stay ahead of the latest marketing trends.',
  },
  {
    icon: Icon4,
    title: 'Transparent Reporting & Real-Time Insights',
    description: 'We believe in 100% transparency—you\'ll always know where your marketing budget is going. Get detailed reports and access to real-time data on your campaign performance.',
  },
  {
    icon: Icon5,
    title: 'Customized Solutions for Your Business',
    description: 'No one-size-fits-all strategies here! We tailor our services to fit your industry, audience, and goals, whether you\'re a small startup or an established brand.',
  },
  {
    icon: Icon6,
    title: 'Full-Service Digital Marketing Under One Roof',
    description: 'From SEO and PPC to social media marketing, content creation, and website development, we handle everything to ensure your business thrives online.',
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const HomeCards = () => {
  return (
    <section className='!py-16 bg-gradient-to-b from-white to-gray-50'>
      <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center !mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 !mb-6 relative inline-block">
            <span className="absolute -left-2 top-1/2 w-8 h-1 bg-indigo-500 transform -translate-y-1/2"></span>
            Why Partner With Metlifedm?
            <span className="absolute -right-2 top-1/2 w-8 h-1 bg-indigo-500 transform -translate-y-1/2"></span>
          </h2>
          <p className="text-lg text-gray-600 !mb-8 max-w-2xl !mx-auto">
            At Metlifedm, we don't just market—we drive real, measurable growth. Our data-driven strategies ensure your business stands out in the competitive US market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutCard.map((item, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 ease-out">
                {/* Hover background element - slides in from right */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-500 origin-right scale-x-0 group-hover:scale-x-100 z-0"></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col !p-8 transition-all duration-500">
                  <div className="mb-6 w-16 h-16 rounded-lg bg-indigo-100 flex items-center justify-center group-hover:bg-white/90 transition-all duration-500">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-0 group-hover:invert" 
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 !mb-4 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 flex-grow group-hover:text-white/90 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 group-hover:border-white/30 transition-colors duration-300">
                    <button className="text-indigo-600 font-medium group-hover:text-white transition-colors duration-300 flex items-center">
                      Learn more
                      <svg 
                        className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCards;