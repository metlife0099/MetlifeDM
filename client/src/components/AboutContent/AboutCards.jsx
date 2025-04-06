// AboutCards.jsx
import React from "react";
import CardBg from '../../assets/images/aboutBg.jpg'
import { motion } from 'framer-motion';

const AboutCards = () => {
  // Sample data
  const cardsData = [
    {
      id: 1,
      title: "Where Creativity Meets Impact — And We Own It!",
      description: "We don't just love what we do — we live for it. At Metlifedm LLC, bold ideas meet expert execution to create work that connects, converts, and dominates.",
      icon: "🛠️",
    },
    {
      id: 2,
      title: "Obsessed With Excellence — Down to the Last Pixel",
      description: "Quality is our baseline. Every design is crafted with strategy, precision, and serious attention to detail — built to turn heads and drive results.",
      icon: "👨‍💻",
    },
    {
      id: 3,
      title: "Fueled by Curiosity. Driven by Innovation.",
      description: "We never settle. At Metlifedm LLC, we're constantly learning, evolving, and creating bold brand stories that stay ahead of the curve — and your competition.",
      icon: "❤️",
    },
    {
      id: 4,
      title: "People-Powered. Future-Focused.",
      description: "Our team is our superpower. We empower talent to innovate, lead, and deliver digital experiences that shape the future and fuel brand growth.",
      icon: "⚡",
    }
  ];

  return (
    <section
      className="relative !py-20"
      style={{
        backgroundImage: `url(${CardBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh' // Add this to ensure section has height
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative z-10 container !mx-auto">
        {/* Section header */}
        <div className="!text-center !mb-16">
          <h2 className="!text-4xl md:!text-6xl !font-bold !text-white !mb-3">
            Why <span className="!text-blue-500">Choose </span>us
          </h2>
          <p className="!text-xl !text-white !max-w-3xl !mx-auto">
            We don’t just build the future — we engineer it!
          </p>
        </div>

        {/* Cards grid with modified dividers */}
        <div className="grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-7 !gap-0 !px-5 lg:!px-0">
          {cardsData.map((card, index) => (
            <React.Fragment key={card.id}>
              <div
                className="relative !p-1 !min-h-[300px] flex flex-col items-center justify-center group"
                style={{
                  backdropFilter: 'blur(4px) !important',
                  backgroundColor: 'rgba(15, 23, 42, 0.6) !important'
                }}
              >
                {/* Icon with animation */}
                <div className="text-5xl !mb-6 group-hover:!scale-110 !transition-transform !duration-300">
                  {card.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white !mb-4 group-hover:!text-blue-400 !transition-colors !duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 !text-sm md:!text-base">
                    {card.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue-500 group-hover:!w-3/4 !transition-all !duration-500"></div>
              </div>

              {/* Vertical divider - shows only between cards on lg screens */}
              {index !== cardsData.length - 1 && (
                <div className="hidden lg:flex items-center justify-center">
                  <div className="h-3/4 w-px bg-gray-400"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCards;