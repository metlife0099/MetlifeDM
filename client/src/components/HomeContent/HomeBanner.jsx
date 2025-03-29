import React from 'react';
import Image from '../../assets/images/homeBanner.jpg';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  const phoneNumber = '+17862109819';
  return (
    <section className="!py-12 md:!py-18 !bg-gray-100">
      <div className="container mx-auto !px-5 lg:px-0">
        {/* Interior Design Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
          {/* Image */}
          <div className="lg:w-1/2 overflow-hidden">
            <img
              src={Image}
              alt="Interior Design"
              className="w-full h-[400px] sm:h-[500px] object-cover  rounded-lg shadow-lg hover:scale-[1.1] transition-all"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <p className="text-md sm:text-xl text-[#5c7c3b] italic !mb-4">
              <span className="inline-block w-[50px] h-[3px] bg-[#5c7c3b] !mb-1"></span> Grow Your Business with Data-Driven Digital Marketing.
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4">
            We help businesses scale with SEO, PPC, and social media marketing.
            </h2>

            <p className="text-sm sm:text-[16px] text-gray-600">
              Transform your interiors into breathtaking spaces that reflect your personality and style. Our expert interior design services blend functionality with elegance, creating custom designs tailored to your vision. Whether you’re dreaming of a modern kitchen, a cozy living room, or a luxurious office, we bring ideas to life with curated color palettes, premium materials, and thoughtful layouts.
            </p>
            <p className="text-sm sm:text-[16px] text-gray-600 !mt-4">
              From concept to completion, we handle everything — lighting, furniture selection, décor, and finishes — ensuring every detail adds to the harmony of your home or commercial space. Let us create an environment you’ll love to live and work in.
            </p>

            <div className="flex gap-4">
              {/* Call Now Button */}
              <a
                href={`tel:${phoneNumber}`}
                className="border-2 !py-2 !px-4 border-[#5c7c3b] text-white font-semibold !mt-10 rounded-lg cursor-pointer bg-[#5c7c3b] hover:bg-white hover:text-black transition-all"
              >
                Call Now
              </a>

              {/* Get Free Quotes Button */}
              <Link
                to="/contact" // Replace with your contact page route
                className="border-2 !py-2 !px-4 border-[#5c7c3b] font-semibold !mt-10 rounded-lg cursor-pointer hover:bg-[#5c7c3b] hover:text-white transition-all"
              >
                Get Free Quotes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;