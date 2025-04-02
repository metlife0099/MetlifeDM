import React from "react";
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiCalendar } from "react-icons/hi";
import Email from '../../assets/gifIcons/email.gif'
import Call from '../../assets/gifIcons/phone.gif'
import Address from '../../assets/gifIcons/location.gif'
import Support from '../../assets/gifIcons/support.gif'
import Calender from '../../assets/gifIcons/upcoming.gif'

const ContactCards = () => {
  const cards = [
    {
      icon: Email,
      title: "Email Us",
      info: "info@yourcompany.com",
      action: "Mail Now",
    },
    {
      icon: Call,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      action: "Call Now",
    },
    {
      icon: Address,
      title: "Our Location",
      info: "123 Business Ave, Suite 456, Miami, FL",
      action: "Get Directions",
    },
    {
      icon: Support,
      title: "24/7 Support",
      info: "We're always here to help",
      action: "Contact Support",
    },
    {
      icon: Calender,
      title: "Schedule a Call",
      info: "Book a convenient time",
      action: "Book Now",
    },
  ];

  return (
    <section className="!py-12 !px-4 sm:!px-6 lg:!px-8 bg-gray-50">
      <div className="container">
        <h2 className="text-center text-2xl sm:text-4xl font-bold text-gray-800 !mb-4">
          <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-1 sm:!mb-2.5 !mr-1"></span>
          Contact Information
          <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-1 sm:!mb-2.5 !mr-1"></span>
        </h2>
        <p className="text-lg text-center text-gray-600 !mb-12 max-w-2xl !mx-auto">
          Get in touch with us through any of these channels
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute !inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 !p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 !mx-auto !mb-4 rounded-full bg-indigo-50 group-hover:bg-white group-hover:bg-opacity-20 transition-colors duration-500">
                  <img src={card.icon} className="w-12 h-12 rounded-full" alt="" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white !mb-1 transition-colors duration-500">
                  {card.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white group-hover:text-opacity-90 !mb-4 transition-colors duration-500">
                  {card.info}
                </p>
                <button
                  className="!px-4 !py-2 bg-indigo-600 text-white rounded-lg font-medium shadow-md group-hover:bg-white group-hover:text-indigo-600 transform group-hover:-translate-y-1 transition-all duration-500 cursor-pointer"
                >
                  {card.action}
                </button>
              </div>

              {/* Animated border effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>

        {/* Animated divider */}
        <div className="!mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactCards;