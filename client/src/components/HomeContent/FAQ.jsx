// src/FAQ.js
import React, { useState } from 'react';
import FAQimg from '../../assets/images/faq.jpg'
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';

const faqData = [
  {
    question: 'What services does Generations Fix offer?',
    answer: 'We provide a range of services, including smartphone, laptop, and POS system repairs, IT hardware solutions, networking services, website design, and digital marketing to help businesses grow.',
  },
  {
    question: 'Where is Generations Fix located?',
    answer: 'We are based in Miami and offer pickup and drop-off services for repairs, making it convenient for our customers.',
  },
  {
    question: 'Do you offer on-site repair services?',
    answer: 'Yes! We offer on-site troubleshooting for IT hardware and networking services. For device repairs, we also provide pickup and drop-off services.',
  },
  {
    question: 'What types of devices do you repair?',
    answer: 'We repair smartphones, laptops, computers, tablets, POS systems, gaming consoles, printers, and other IT hardware.',
  },
  {
    question: 'What IT hardware services do you provide?',
    answer: 'We offer hardware installation, troubleshooting, upgrades, server setup, data recovery, networking solutions, and structured cabling.',
  },
  {
    question: 'What web design services do you offer?',
    answer: 'We design and develop custom websites, e-commerce stores, business websites, and portfolio sites tailored to your needs.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track the currently open question

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open index
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
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index} // Check if the current item is open
                onToggle={() => handleToggle(index)} // Pass the toggle function
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out">
      <div
        className="border-2 border-gray-300 rounded-xl !p-4 cursor-pointer flex justify-between items-center transition-all duration-300 ease-in-out"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          ▼
        </span>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'
          } bg-white border-t`}
      >
        <p className="!p-4 text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
