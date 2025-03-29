import React, { useState } from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';
import Profile1 from '../../assets/images/profile3.jpg';
import Profile2 from '../../assets/images/profile4.jpg';
import Profile3 from '../../assets/images/profile5.jpg';
import Profile4 from '../../assets/images/profile7.jpg';

import Website from '../../assets/images/website.gif';
import SEO from '../../assets/images/seo.gif';
import GoogleAds from '../../assets/images/google.gif';
import PayPerClick from '../../assets/images/pay-per-click.gif';

import Check from '../../assets/gifIcons/double-check.gif'
import { Link } from 'react-router-dom';

const ServicesCont = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Website design',
      main: "Your website is your business’s digital storefront Isn't it? if YES so ",
      description: 'let’s build your website that works for your business which NOT ONLY look great but also drive traffic, leads, and sales.',
      mainPt1: "❌ A slow, outdated website? 53% of visitors leave in 3 seconds or less!",
      mainPt2: "❌ Not mobile-friendly? You’re losing 70% of potential buyers!",
      mainPt3: "❌ Unprofessional web design = 100% No trust",
      experience: 'Explore More',
      image: Website,
      popupdesc: "We don't just build website. We create SALES - DRIVEN MACHINE that turn's your visitors into PAYING CLIENTS!",
      
      point1: "Custom Design – Stunning web design that WOWs your audience.",
      point2: "User-Friendly & Scalable – Easy navigation & future-proof solutions.",
      point3: "Fast & Secure – Lightning-fast load speeds & top-tier security.",
      point4: "Mobile-Friendly & SEO-Optimized – Rank higher & attract more visitors.",
    },
    {
      id: 2,
      name: 'Search Engine Optimization (SEO)',
      description: "Your website is your business’s digital storefront Isn't it? if YES then it should be your #1 lead-genaration machine- but if it's not bringing In-consistent, high-quality leads, then 'no doubt you're losing your money on SEO' for ",
      mainPt1: "❌ No website traffic",
      mainPt2: "❌ Not showing up on Google",
      mainPt3: "❌ Losing leads to bigger competitors",
      experience: 'Explore More',
      image: SEO,
      popupdesc: "Stop chasing clients, let them find you on google!- Get ranked, Found and FLOODED with high quality leads by powerful result driven SEO which will dominate your business in digital world 🌎.",
      
      point1: "On-Page & Technical SEO – Optimized content, speed, and structure.",
      point2: "Local & National SEO – Rank for your target audience, wherever they are.",
      point3: "Keyword & Competitor Research – Outrank your competition with data-driven insights.",
      point4: "Quality Backlinks & Content Marketing – Build authority & drive organic growth.",
    },
    {
      id: 3,
      name: 'Google Ads & Analytics',
      main: "Your competitors are STEALING your CLIENTS ",
      description: "while your ads struggle to convert! Stop the bleeding and stop wasting your money NOW! By the way Google Analytics looks like a maze—traffic is coming in, but where are the qualified buyers?",
      mainPt1: "❌ You’re paying for traffic that never converts",
      mainPt2: "❌ You have NO IDEA where your ad budget is actually going",
      mainPt3: "❌ You’re running campaigns blindly, hoping for results",
      experience: 'Explore More',
      image: GoogleAds,
      popupdesc: "Here’s the hard truth: Every second you’re running unoptimized ads, you’re BURNING CASH on bad targeting, wasted clicks, and lost leads! Here is a time NOW to take control of your marketing success.",
      
      point1: "We set up Google Analytics PROPERLY so you know EXACTLY where your money is going!",
      point2: "We fix your Google Ads to bring in HIGH-QUALITY leads that actually convert!",
      point3: "Quality Backlinks & Content Marketing – Build authority & drive organic growth.",
      point4: "Real-Time Tracking – Know where your visitors come from & what they do.",
    },
    {
      id: 4,
      name: 'Bob Brown',
      description: 'Engineer',
      mainPt1: "❌ No website traffic",
      mainPt2: "❌ Not showing up on Google",
      mainPt3: "❌ Losing leads to bigger competitors",
      experience: 'Explore More',
      image: PayPerClick,
      popupdesc: "Stop chasing clients, let them find you on google!- Get ranked, Found and FLOODED with high quality leads by powerful result driven SEO which will dominate your business in digital world 🌎.",
      
      point1: "On-Page & Technical SEO – Optimized content, speed, and structure.",
      point2: "Local & National SEO – Rank for your target audience, wherever they are.",
      point3: "Keyword & Competitor Research – Outrank your competition with data-driven insights.",
      point4: "Quality Backlinks & Content Marketing – Build authority & drive organic growth.",
    },
    {
      id: 5,
      name: 'Charlie Davis',
      position: 'Designer',
      experience: '5+ Years',
      image: Profile4,
    },
    {
      id: 6,
      name: 'Eva Green',
      position: 'Consultant',
      experience: '9+ Years',
      image: Profile3,
    },
    {
      id: 7,
      name: 'Frank White',
      position: 'Developer',
      experience: '6+ Years',
      image: Profile2,
    },
    {
      id: 8,
      name: 'Grace Hall',
      position: 'Marketing Head',
      experience: '11+ Years',
      image: Profile1,
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <section className="!py-12 md:!py-18 !bg-gray-100">
      <div className="container mx-auto !px-5 lg:px-0">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e6091] !mb-4">
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#1e6091] !mb-2.5"></span>{' '}
            Fuel your brand. Dominate the digital world with
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#1e6091] !mb-2.5"></span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 !mb-8 sm:!mb-12">
          We are best at.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white !p-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl cursor-pointer relative flex flex-col gap-4"
            >
              {/* Team Member Image */}
              <div className="w-full  rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[200px] object-cover"
                />
              </div>

              {/* Team Member Details */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800 !my-2">{member.name}</h3>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-700">{member.main}</span> {member.description}</p>
                <div className="!mt-3">
                <p className="text-sm text-gray-500 !mt-1">{member.mainPt1}</p>
                <p className="text-sm text-gray-500 !mt-1">{member.mainPt2}</p>
                <p className="text-sm text-gray-500 !mt-1">{member.mainPt3}</p>
                </div>
                <p className="text-sm text-gray-500 !mt-5">{member.experience}</p>

                {/* Eye Icon in Bottom-Right Corner */}
                <div
                  className="absolute bottom-4 right-4 text-[#5c7c3b] hover:text-[#03045E] cursor-pointer !mt-5"
                  onClick={() => handleMemberClick(member)}
                >
                  <FaEye className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup for Selected Team Member */}
      {selectedMember && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white !p-6 sm:!p-8 rounded-lg shadow-lg max-w-md w-full relative"
            style={{
              animation: "modalFadeIn 0.3s ease-out",
            }}
          >
            {/* Close Button Inside Modal */}
            <button
              className="absolute top-4 right-4 text-[#5c7c3b] hover:text-[#03045E] cursor-pointer"
              onClick={closePopup}
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Popup Content */}
            <div className="text-center !py-8">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-52 h-[150px] rounded-lg !mx-auto object-cover !mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 !mb-2">
                {selectedMember.name}
              </h3>
              <p className="text-md text-gray-700">{selectedMember.popupdesc}</p>
            </div>

            <div className="flex flex-col !mb-5 gap-2">
              <p className="flex gap-2 items-center justify-center bg-gray-100 !p-1 rounded-lg"><img src={Check} alt="" className='w-10 h-10' />
              {selectedMember.point1}
              </p>
              <p className="flex gap-2 items-center justify-center"><img src={Check} alt="" className='w-10 h-10' />
              {selectedMember.point2}
              </p>
              <p className="flex gap-2 items-center justify-center bg-gray-100 !p-1 rounded-lg"><img src={Check} alt="" className='w-10 h-10' />
              {selectedMember.point3}
              </p>
              <p className="flex gap-2 items-center justify-center"><img src={Check} alt="" className='w-10 h-10' />
              {selectedMember.point4}
              </p>
            </div>

            <div className="w-full">
            <Link
                to="/contact" // Replace with your contact page route
                className="w-full border-2 !py-2 !px-4 border-[#5c7c3b] font-semibold !mt-10 rounded-lg cursor-pointer hover:bg-[#5c7c3b] hover:text-white transition-all"
              >
                Ask us How!
              </Link>
            </div>
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
    </section>
  );
};

export default ServicesCont;