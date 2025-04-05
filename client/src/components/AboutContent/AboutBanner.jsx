import React from 'react';
import AbtBanner from '../../assets/images/homeBanner.jpg';
import { Link } from 'react-router-dom';

const AboutBanner = () => {
  const phoneNumber = '+17862109819';
  return (
    <section className='!py-20 z-100'>
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4"><span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-2.5"></span> About Us <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-2.5"></span></h2>
          <p className="text-base sm:text-lg text-gray-600 !mb-8 sm:!mb-12">
            Ignite your connection with us.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="!p-5 !py-7 w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-lg text-[#5c7c3b] font-semibold mb-2"><span className="inline-block w-[20px] sm:w-[45px] h-[3px] bg-[#5c7c3b] !mb-1 !mr-1"></span>Dominate the digital world 🌎</p>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Metlifedm LLC, Where your digital Growth Ignites—For Real</h1>
            <span className="block w-[300px] h-[4px] bg-[#5c7c3b] !my-8"></span>
            <p className="text-sm sm:text-[16px] text-gray-600">
            Who are we? We’re <span className='font-bold text-gray-900'>Metlifedm LLC,</span>  the digital marketing crew that’s all about results, not excuses. We’re the strategists who’ve cracked the code on turning clicks into customers, the creatives who make your brand buzz like a live wire, and the data geeks who optimize <span className='font-bold text-gray-900'>until your ROI is screaming</span> ‘BOOM!’ We’ve helped businesses just like yours—small startups, big dreamers—go from invisible to unstoppable. And we’ve got the receipts to prove it!
            </p>
            {/* <p className="text-sm sm:text-[16px] text-gray-600 !mt-4">
            From snug family homes to modern business structures, we give our all to each project. Our designers, architects, and skilled workers will stand by you from beginning to end. We employ high-quality materials and up-to-date techniques to complete your project on schedule and within your financial plan.
            </p> */}
            <p className="text-sm sm:text-[16px] text-gray-600 !mt-4">
            Forget empty promises; we deliver rocket-fueled results. More clicks, bigger buzz, and conversions that hit hard—that’s what we bring
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

          <div className="!p-5 w-full lg:w-1/2 flex gap-4 items-center justify-center order-1 overflow-hidden lg:order-2">
            <img src={AbtBanner} alt="Banner 1" className='w-full h-[400px] sm:h-[450px] lg:h-[550px] odject-cover rounded-lg !shadow-lg object-cover hover:scale-[1.1] transition-all' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
