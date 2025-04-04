// src/FAQ.js
import React, { useState } from 'react';
import FAQimg from '../../assets/images/faq.jpg'
import { FaEye } from "react-icons/fa";

const faqData = [
  {
    question: "What’s the Big Deal with Digital Marketing in 2025?",
    answer:
      "Buckle up—digital marketing is your ticket to explosive growth! In today’s fast-paced, screen-obsessed world, it’s how you connect with millions, skyrocket your brand, and turn clicks into cash. From social media dominance to SEO wizardry, we’ve got the tools to make your business unstoppable!",
  },
  {
    question: "Why Should I Choose Your Agency Over the Competition?",
    answer:
      "Because we’re not just marketers—we’re growth hackers on a mission! Based right here in the USA, we live and breathe the latest trends, cutting-edge tech, and bold strategies that deliver jaw-dropping results. No fluff, no excuses—just pure, high-octane success tailored to YOU!",
  },
  {
    question: "How Fast Can I See Results from Digital Marketing?",
    answer:
      "Hold onto your hat—results can start rolling in FAST! With PPC ads, you could see clicks in hours. SEO and content? Think weeks to months for that sweet, long-term dominance. We hustle hard to get you ROI at lightning speed—let’s talk timelines!",
  },
  {
    question: "What Services Do You Offer to Crush It Online?",
    answer:
      "We’re your one-stop shop for digital dominance ! SEO that climbs the ranks, PPC that packs a punch, social media that stops the scroll, content that converts, and web design that wows. Ready to unleash the full arsenal? Let’s do this!",
  },
  {
    question: "How Much Does Digital Marketing Cost?",
    answer:
      "No cookie-cutter pricing here—we customize the firepower to fit your goals! Whether you’re a small biz ready to rumble or a big player aiming to reign supreme, we’ve got plans from budget-friendly to all-out blitz. Hit us up for a free quote and let’s ignite your budget!",
  },
];

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle Eye Icon Click
  const handleQuestionClick = (index) => {
    setSelectedQuestion(faqData[index]);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedQuestion(null);
  };

  return (
    <section className="!py-10 bg-textColor">
      <div className="container">
        <div className="text-center !mb-18">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 !mb-4">
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-1 sm:!mb-2.5 !mr-1"></span>
            Frequently Asked Questions (FAQs)
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-1 sm:!mb-2.5 !ml-1"></span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 !mb-8 sm:!mb-12 max-w-[700px] !mx-auto">
            MetLife DM Asked General Questions
          </p>
        </div>
        <div className="flex flex-col items-center gap-10 justify-between md:flex-row !mx-5">

          <div className="flex-1 ">
            <img src={FAQimg} className='w-full rounded-md' alt="" />
          </div>

          <div className="flex-1 !space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-b-2 border-r-2 border-green-500 !p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex justify-between items-center"
              >
                <p className="text-lg font-medium text-gray-800">{faq.question}</p>
                <button
                  onClick={() => handleQuestionClick(index)}
                  className="text-gray-600 hover:text-[#5c7c3b] transition-all transform hover:scale-110"
                >
                  <FaEye className="w-6 h-6 text-[#5c7c3b] cursor-pointer" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Answer */}
      {isModalOpen && selectedQuestion && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white/90 backdrop-blur-lg rounded-lg !p-8 max-w-2xl w-full !mx-4 relative transform transition-all duration-300 ease-out"
            style={{
              animation: "modalFadeIn 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#5c7c3b] hover:text-[#2b4d2f] transition-all transform hover:scale-110 cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-gray-800 !mb-4">
              {selectedQuestion.question}
            </h3>
            <p className="text-gray-600">{selectedQuestion.answer}</p>
          </div>
        </div>
      )}

      {/* Add CSS for Modal Animation */}
      <style>
        {`
          @keyframes modalFadeIn {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </section >
  );
};


export default FAQ;
