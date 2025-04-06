import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaTimes } from 'react-icons/fa';

const PopupContact = ({ isOpen, onClose, contactOptions = [] }) => {
  // Default contact options
  const defaultOptions = [
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

  const options = contactOptions.length > 0 ? contactOptions : defaultOptions;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
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
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="w-6 h-6" />
            </motion.button>
            
            <h3 className="text-2xl font-bold text-gray-800 !mb-6 text-center">
              How would you like to contact us?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {options.map((option, index) => (
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
  );
};

export default PopupContact;