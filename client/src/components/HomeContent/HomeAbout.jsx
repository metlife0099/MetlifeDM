import React, { useState, useEffect } from 'react';
import {
  FaUsers,
  FaCog,
  FaHeart,
  FaChartLine,
  FaMapMarkerAlt,
  FaMobile,
  FaSearch,
  FaStar,
  FaUtensils,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ orders: 0, months: 0 });

  useEffect(() => {
    setIsVisible(true);

    // Animate counter numbers
    const animateCounter = (target, key, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCounters(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
        }
      }, 50);
    };

    const timer = setTimeout(() => {
      animateCounter(800, 'orders');
      animateCounter(3, 'months');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <FaUsers className="text-3xl" />,
      title: "People-First Approach",
      description: "We begin by understanding your business goals before creating any solution.",
      delay: "delay-100"
    },
    {
      icon: <FaCog className="text-3xl" />,
      title: "Customized Strategies",
      description: "No template-copying. Each brand receives a customized digital blueprint.",
      delay: "delay-200"
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Technical Expertise with a Human Touch",
      description: "From SEO to design to PPC—each strategy has a genuine purpose.",
      delay: "delay-300"
    }
  ];

  const steps = [
    {
      icon: <FaSearch className="text-2xl" />,
      title: "Complete SEO Audit",
      description: "Revealed no local visibility"
    },
    {
      icon: <FaMobile className="text-2xl" />,
      title: "Mobile-Optimized Website",
      description: "Google My Business setup followed"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Hyper-Local SEO Campaign",
      description: "Targeted local audience strategy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-black overflow-hidden">
      {/* Hero Section */}
      <div className="relative !px-4 !py-16 sm:!px-6 lg:!px-8">
        <div className="container !mx-auto">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Main Header */}
          <div className={`text-center !mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold !mb-6 text-gray-800">
              Why Miami Businesses Trust <span className="text-blue-600">Metlifedm</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 !max-w-4xl !mx-auto leading-relaxed">
              Miami is not just beaches—it's a startup community, local businesses, and global ventures, all vying for online dominance.
              In a market so fiercely competitive, Metlifedm stands out from the crowd by offering something more than marketing.
              <span className="text-blue-600 font-semibold"> We offer growth with a human touch, tested methodology, and deep understanding of both international and local audiences.</span>
            </p>
          </div>

          {/* What Makes Us Different Section */}
          <div className={`!mb-20 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center !mb-12 text-blue-600">
              What Makes Us Different
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group bg-gray-900 rounded-2xl !p-8 border border-gray-800 hover:border-blue-600 transition-all duration-500 hover:transform hover:scale-105 hover:bg-gray-800 animate-fadeInUp ${feature.delay}`}
                >
                  <div className="text-blue-600 !mb-6 group-hover:text-blue-500 transition-colors duration-300 transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold !mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Success Story Section */}
          <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gray-100 rounded-3xl !p-8 sm:!p-12 border border-blue-600/30">


              <div className="!mb-12">
                <h3 className="text-2xl font-bold text-center !mb-8 text-blue-600">After working with Metlifedm:</h3>

                <div className="grid sm:grid-cols-3 gap-6 !mb-12">
                  {steps.map((step, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-blue-600/20 rounded-full w-16 h-16 flex items-center justify-center !mx-auto !mb-4 group-hover:bg-blue-600/40 transition-all duration-300 group-hover:scale-110">
                        <div className="text-blue-600 group-hover:text-blue-500">
                          {step.icon}
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-800 !mb-2 group-hover:text-blue-100 transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Results */}
                <div className="bg-gray-200 rounded-2xl !p-8 border border-blue-600/50">
                  <h3 className="text-2xl font-bold text-center !mb-8 text-blue-600">
                    <FaChartLine className="inline mr-3" />
                    Outcome
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-8 !mb-8">
                    <div className="text-center">
                      <div className="text-5xl sm:text-6xl font-bold text-gray-800 !mb-2">
                        0 → {counters.orders}+
                      </div>
                      <p className="text-blue-600 font-semibold">Online Orders/Month</p>
                    </div>
                    <div className="text-center">
                      <div className="text-5xl sm:text-6xl font-bold text-blue-600 !mb-2">
                        {counters.months}
                      </div>
                      <p className="text-gray-800 font-semibold">Months to Success</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                    <div className="flex items-center text-blue-600">
                      <FaStar className="!mr-2" />
                      <span className="font-semibold">Page 1 for "Caribbean food near me"</span>
                    </div>
                    <div className="flex items-center text-gray-800">
                      <FaCheckCircle className="!mr-2" />
                      <span className="font-semibold">Digital turnaround story</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link to='/contact'>
                  <button className="group bg-blue-600 hover:bg-blue-700 !px-8 !py-4 rounded-full font-bold text-lg text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/25 cursor-pointer">
                    <span className="flex items-center">
                      Start Your Success Story
                      <FaArrowRight className="!ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-20 right-10 animate-bounce delay-1000 hidden lg:block">
        <div className="w-3 h-3 bg-blue-600 rounded-full opacity-60"></div>
      </div>
      <div className="fixed bottom-20 left-10 animate-bounce delay-2000 hidden lg:block">
        <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default HomeAbout;