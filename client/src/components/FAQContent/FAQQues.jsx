import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const FAQQues = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // FAQ Data
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
    {
      question: "Can You Guarantee I’ll Hit #1 on Google?",
      answer:
        "We’re bold, not magicians! Google’s a wild beast, but we’ve got the skills to tame it with killer SEO, epic content, and relentless optimization, we’ll push you to the top faster than you can say “search engine supremacy.” Let’s get climbing!",
    },
    {
      question: "How Do You Keep Up with Crazy Digital Trends?",
      answer:
        "We’re trendsetters, not followers! Our team’s plugged into the pulse of the  world wide digital scene—think AI-powered ads, TikTok takeovers, and algorithm updates. We don’t just keep up; we stay ahead so your brand’s always the one to watch!",
    },
    {
      question: "Will Social Media really boost my Business?",
      answer:
        "Heck yes! Social’s where the party’s at—billions of users, endless opportunities. We’ll craft scroll-stopping posts, viral campaigns, and targeted ads that turn likes into loyal customers. Ready to blow up your follower count? Let’s roll!",
    },
    {
      question: "What’s the secret sauce to winning at Digital Marketing?",
      answer:
        "It’s no secret—it’s strategy, grit, and a dash of creativity! We mix data-driven insights with bold ideas to create campaigns that hit hard and stick. Your success? That’s our obsession—let’s cook up something legendary!",
    },
    {
      question: "How do I get started with you Rockstars?",
      answer:
        "Easy—let’s kick things into high gear! Drop us a line, grab a free consultation, and watch us turn your vision into a digital powerhouse. No delays, no excuses—just pure marketing adrenaline. Ready?",
    },
  ];

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
    <div className="!py-12 !px-4 lg:!px-8 bg-gray-100">
      <div className="container mx-auto">

        <div className="!text-center !mb-16">
          <h2 className="!text-4xl md:!text-6xl !font-bold !text-gray-900 !mb-2">
            Before you ask Google… <span className="text-blue-600">Check Here</span>(FAQ's)
          </h2>
          <p className="!text-xl !text-gray-600 !max-w-3xl !mx-auto">
            Got questions? we've got power-packed answers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white !p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex justify-between items-center border-l-4 border-indigo-400"
            >
              <p className="text-lg font-medium text-gray-800">{faq.question}</p>
              <button
                onClick={() => handleQuestionClick(index)}
                className="text-indigo-600 hover:text-indigo-800 transition-all transform hover:scale-110"
              >
                <FaEye className="w-6 h-6 text-blue-600 cursor-pointer" />
              </button>
            </div>
          ))}
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
              className="absolute top-4 right-4 text-indigo-600 hover:text-indigo-800 transition-all transform hover:scale-110 cursor-pointer"
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
    </div>
  );
};

export default FAQQues;