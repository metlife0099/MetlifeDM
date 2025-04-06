import React from 'react';
// import Image from '../../assets/images/homeBanner.jpg';
// import { Link } from 'react-router-dom';

// const HomeBanner = () => {
//   const phoneNumber = '+17862109819';
//   return (
//     <section className="!py-12 md:!py-18 !bg-gray-100">
//       <div className="container mx-auto !px-5 lg:px-0">
//         {/* Interior Design Section */}
//         <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
//           {/* Image */}
//           <div className="lg:w-1/2 overflow-hidden">
//             <img
//               src={Image}
//               alt="Interior Design"
//               className="w-full h-[400px] sm:h-[500px] object-cover  rounded-lg shadow-lg hover:scale-[1.1] transition-all"
//             />
//           </div>

//           {/* Content */}
//           <div className="lg:w-1/2">
//             <p className="text-md sm:text-xl text-[#5c7c3b] italic !mb-4">
//               <span className="inline-block w-[50px] h-[3px] bg-[#5c7c3b] !mb-1"></span> Grow Your Business with Data-Driven Digital Marketing.
//             </p>
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4">
//             We help businesses scale with SEO, PPC, and social media marketing.
//             </h2>

//             <p className="text-sm sm:text-[16px] text-gray-600">
//               Transform your interiors into breathtaking spaces that reflect your personality and style. Our expert interior design services blend functionality with elegance, creating custom designs tailored to your vision. Whether you’re dreaming of a modern kitchen, a cozy living room, or a luxurious office, we bring ideas to life with curated color palettes, premium materials, and thoughtful layouts.
//             </p>
//             <p className="text-sm sm:text-[16px] text-gray-600 !mt-4">
//               From concept to completion, we handle everything — lighting, furniture selection, décor, and finishes — ensuring every detail adds to the harmony of your home or commercial space. Let us create an environment you’ll love to live and work in.
//             </p>

//             <div className="flex gap-4">
//               {/* Call Now Button */}
//               <a
//                 href={`tel:${phoneNumber}`}
//                 className="border-2 !py-2 !px-4 border-[#5c7c3b] text-white font-semibold !mt-10 rounded-lg cursor-pointer bg-[#5c7c3b] hover:bg-white hover:text-black transition-all"
//               >
//                 Call Now
//               </a>

//               {/* Get Free Quotes Button */}
//               <Link
//                 to="/contact" // Replace with your contact page route
//                 className="border-2 !py-2 !px-4 border-[#5c7c3b] font-semibold !mt-10 rounded-lg cursor-pointer hover:bg-[#5c7c3b] hover:text-white transition-all"
//               >
//                 Get Free Quotes
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeBanner;import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from '../../assets/images/homeBanner.jpg';

const HomeBanner = () => {
  const phoneNumber = '+17862109819';
  
  // Animation variants
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="!py-16 md:!py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto !px-5 lg:!px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Image */}
          <motion.div 
            variants={imageVariants}
            className="lg:w-1/2 overflow-hidden rounded-xl shadow-2xl"
          >
            <motion.img
              src={Image}
              alt="Digital Marketing"
              className="w-full h-[400px] sm:h-[500px] object-cover"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5 }
              }}
            />
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={containerVariants}
            className="lg:w-1/2 space-y-6"
          >
            <motion.p 
              variants={itemVariants}
              className="text-lg font-medium text-indigo-600 flex items-center !mb-2"
            >
              <span className="inline-block w-12 h-1 bg-indigo-600 !mr-3"></span> 
              Grow Your Business with Data-Driven Digital Marketing.
            </motion.p>

            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-4xl font-bold text-gray-800 leading-tight"
            >
              We help businesses scale with <span className="text-indigo-600">SEO, PPC, and social media</span> marketing.
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 text-[14px] !mt-2"
            >
              Transform your interiors into breathtaking spaces that reflect your personality and style. Our expert interior design services blend functionality with elegance, creating custom designs tailored to your vision. Whether you’re dreaming of a modern kitchen, a cozy living room, or a luxurious office, we bring ideas to life with curated color palettes, premium materials, and thoughtful layouts.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 text-[14px] !mt-2"
            >
              From concept to completion, we handle everything — lighting, furniture selection, décor, and finishes — ensuring every detail adds to the harmony of your home or commercial space. Let us create an environment you’ll love to live and work in.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="!mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Call Now Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${phoneNumber}`}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold !py-3 !px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Call Now
              </motion.a>

              {/* Get Free Quotes Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-white text-indigo-600 hover:text-indigo-700 border-2 border-indigo-600 font-semibold !py-3 !px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Free Strategy Session
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              variants={itemVariants}
              className="!mt-12 flex flex-wrap gap-6 items-center"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full !mr-2"></div>
                <span className="text-gray-700">375+ Successful Campaigns</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full !mr-2"></div>
                <span className="text-gray-700">Google Certified Partners</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBanner;