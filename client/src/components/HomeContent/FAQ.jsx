import React, { useState } from 'react';
import FAQimg from '../../assets/images/faq.gif';
import { FaEye, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What's the Big Deal with Digital Marketing in 2025?",
    answer: "Buckle up—digital marketing is your ticket to explosive growth! In today's fast-paced, screen-obsessed world, it's how you connect with millions, skyrocket your brand, and turn clicks into cash. From social media dominance to SEO wizardry, we've got the tools to make your business unstoppable!",
  },
  {
    question: "Why Should I Choose Your Agency Over the Competition?",
    answer: "Because we're not just marketers—we're growth hackers on a mission! Based right here in the USA, we live and breathe the latest trends, cutting-edge tech, and bold strategies that deliver jaw-dropping results. No fluff, no excuses—just pure, high-octane success tailored to YOU!",
  },
  {
    question: "How Fast Can I See Results from Digital Marketing?",
    answer: "Hold onto your hat—results can start rolling in FAST! With PPC ads, you could see clicks in hours. SEO and content? Think weeks to months for that sweet, long-term dominance. We hustle hard to get you ROI at lightning speed—let's talk timelines!",
  },
  {
    question: "What Services Do You Offer to Crush It Online?",
    answer: "We're your one-stop shop for digital dominance! SEO that climbs the ranks, PPC that packs a punch, social media that stops the scroll, content that converts, and web design that wows. Ready to unleash the full arsenal? Let's do this!",
  },
  {
    question: "How Much Does Digital Marketing Cost?",
    answer: "No cookie-cutter pricing here—we customize the firepower to fit your goals! Whether you're a small biz ready to rumble or a big player aiming to reign supreme, we've got plans from budget-friendly to all-out blitz. Hit us up for a free quote and let's ignite your budget!",
  },
];

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(faqData[index]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedQuestion(null);
  };

  return (
    <section className="!py-16 bg-gray-100">
      <div className="container !mx-auto !px-4 sm:!px-6 lg:!px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center !mb-12"
        >

          <div className="text-center !mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 !mb-4">
              Frequently <span className="text-blue-600">asked questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl !mx-auto">
              Get answers to your most pressing questions about our digital marketing services
            </p>
          </div>

        </motion.div>

        <div className="flex flex-col lg:flex-row items-center !gap-8 lg:!gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <img
              src={FAQimg}
              className="w-full rounded-xl shadow-xl border-4 border-white transform hover:scale-[1.02] transition-all duration-300"
              alt="FAQ illustration"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 !space-y-6"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white !p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex justify-between items-center border-l-4 border-blue-400"
              >
                <p className="text-lg font-semibold text-gray-800">{faq.question}</p>
                <button
                  onClick={() => handleQuestionClick(index)}
                  className="text-blue-600 hover:text-blue-800 transition-all"
                >
                  <FaEye className="w-5 h-5 cursor-pointer hover:scale-125 transition-transform" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedQuestion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl !p-8 max-w-2xl w-full !mx-4 relative shadow-2xl border-t-4 border-blue-500"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all cursor-pointer"
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold text-gray-800 !mb-6">
                {selectedQuestion.question}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {selectedQuestion.answer}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium !py-2 !px-6 rounded-lg transition-all cursor-pointer"
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FAQ;