import React from 'react';
import AbtBanner from '../../assets/images/homeBanner.jpg';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaRegPaperPlane } from 'react-icons/fa';

const AboutBanner = () => {
  const phoneNumber = '+17862109819';
  return (
    <section className='relative !py-20 z-10 bg-gradient-to-b from-gray-50 to-white'>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10">
        <div className="!text-center !mb-16">
          <h2 className="!text-4xl md:!text-6xl !font-bold !text-gray-900 !mb-2">
          About <span className="!text-blue-500">us</span>
          </h2>
          <p className="!text-xl !text-gray-600 !max-w-3xl !mx-auto">
          Ignite your digital presence with our high-voltage marketing solutions
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 !mx-4 lg:!mx-0">
          <div className="w-full lg:w-1/2">
            <p className="text-lg text-blue-500 font-semibold mb-4 flex items-center">
              <span className="w-8 h-1 bg-blue-500 !mr-3"></span>
              Ready Dominate the digital world 🌎
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 !mb-6 leading-tight">
              Welcome to <span className="text-blue-500">Metlifedm LLC</span>
            </h1>
            
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 !my-8"></div>
            
            <div className="!space-y-6">
              <p className="text-gray-700 leading-relaxed">
                We're <span className='font-bold text-gray-900'>Metlifedm LLC</span>, the digital marketing crew that's all about <span className="text-blue-500 font-semibold">real results</span>. We're the strategists who turn clicks into customers, the creatives who make your brand buzz, and the data experts who optimize until your ROI is screaming <span className="font-bold">'BOOM!'</span>
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                We've helped businesses just like yours—from hungry startups to established brands—go from <span className="italic">invisible to unstoppable</span>. And we've got the receipts to prove it!
              </p>

              <p className="text-gray-700 leading-relaxed font-semibold">
                Forget empty promises; we deliver rocket-fueled results. More traffic, bigger buzz, and conversions that hit hard—that's our specialty.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 !mt-10">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold !py-3 !px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FaPhoneAlt /> Call Now
              </a>

              <Link
                to="/contact"
                className="flex items-center gap-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold !py-3 !px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <FaRegPaperPlane /> Get Free Quote
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl opacity-20 blur-lg"></div>
            <img 
              src={AbtBanner} 
              alt="Metlifedm LLC Team" 
              className='relative w-full h-auto max-h-[550px] object-cover rounded-xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 z-10' 
            />
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -20px) scale(1.1); }
          66% { transform: translate(-10px, 10px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default AboutBanner;