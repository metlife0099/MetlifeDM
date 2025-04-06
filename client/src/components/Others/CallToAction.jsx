import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PopupContact from './PopupContact';

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="!py-12">
      <div className='container'>
        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl !p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-noise opacity-10"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white !mb-6 relative z-10">
            Ready to ditch the frustration?
          </h2>
          <p className="text-xl text-gray-100 !mb-8 max-w-3xl !mx-auto relative z-10">
            At Metlifedm LLC, we don't just market—we electrify. Let's unleash the best solution to get you where you deserve to be: at the top.
          </p>
          <motion.button 
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 font-bold !px-8 !py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg relative z-10 cursor-pointer"
          >
            Buckle Up For Your Breakthrough
          </motion.button>
        </div>
      </div>

      {/* Reusable PopupContact component */}
      <PopupContact 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default CallToAction;