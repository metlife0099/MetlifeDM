import React, { useState, useEffect, useRef } from 'react';

const ServicesDetailsMore = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSelectOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    {
      title: 'Website Development',
      description: 'We create responsive, user-friendly websites that drive engagement and conversions. Our development process focuses on performance, security, and scalability to ensure your online presence stands out.',
      features: [
        'Custom website design',
        'Mobile-responsive development',
        'E-commerce solutions',
        'CMS integration',
        'Ongoing maintenance'
      ]
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Improve your website\'s visibility in search engine results with our comprehensive SEO services. We use ethical, white-hat techniques to help you rank higher and attract more organic traffic.',
      features: [
        'Keyword research & strategy',
        'On-page optimization',
        'Technical SEO audits',
        'Link building',
        'Local SEO optimization'
      ]
    },
    {
      title: 'Google Ads & Analytics',
      description: 'Maximize your advertising ROI with expertly managed Google Ads campaigns. Combined with powerful analytics, we help you understand your audience and optimize your marketing spend.',
      features: [
        'Campaign setup & management',
        'Conversion tracking',
        'Audience targeting',
        'Performance analysis',
        'ROI optimization'
      ]
    },
    {
      title: 'Pay-Per-Click Service',
      description: 'Our PPC management services deliver targeted traffic to your website with measurable results. We create and optimize campaigns across multiple platforms to maximize your advertising budget.',
      features: [
        'Campaign strategy development',
        'Ad copy creation',
        'Landing page optimization',
        'Bid management',
        'Performance reporting'
      ]
    },
    {
      title: 'SMM',
      description: 'Boost your brand awareness and engagement through strategic social media marketing. We create content that resonates with your audience and grows your online community.',
      features: [
        'Social media strategy',
        'Content creation',
        'Community management',
        'Influencer partnerships',
        'Performance analytics'
      ]
    },
    {
      title: 'Email marketing',
      description: 'Nurture leads and retain customers with effective email marketing campaigns. We help you build subscriber lists, create engaging content, and track results to improve performance.',
      features: [
        'Email campaign strategy',
        'Template design',
        'List segmentation',
        'Automation setup',
        'Analytics & reporting'
      ]
    }
  ];

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const selectService = (index) => {
    setActiveTab(index);
    setIsSelectOpen(false);
  };

  return (
    <section className="!pb-8">
      <div className="container !mx-auto !px-4">
        <div className="flex flex-col md:flex-row !gap-6 !p-4 md:!p-8">
          {/* Mobile Select Dropdown */}
          {isMobile && (
            <div className="w-full !mb-4 relative" ref={dropdownRef}>
              {/* Custom select trigger */}
              <div 
                className={`w-full !p-3 !pr-10 !rounded-lg !border !border-gray-300 !bg-white !text-gray-800 !cursor-pointer transition-all duration-300 flex items-center justify-between ${
                  isSelectOpen ? '!ring-2 !ring-blue-200 !border-blue-500' : ''
                }`}
                onClick={toggleSelect}
              >
                <span className="truncate">{services[activeTab].title}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    isSelectOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              
              {/* Custom dropdown options with animation */}
              {isSelectOpen && (
                <div className="absolute z-10 w-full mt-1 !bg-white !rounded-lg !shadow-lg overflow-hidden transition-all duration-300 transform origin-top">
                  <div className="max-h-60 overflow-y-auto">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className={`!p-3 !cursor-pointer transition-all duration-200 ${
                          activeTab === index
                            ? '!bg-blue-50 !text-blue-600'
                            : 'hover:!bg-gray-100 !text-gray-800'
                        }`}
                        onClick={() => selectService(index)}
                      >
                        {service.title}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Content Section */}
          <div className="w-full md:!w-2/3 !relative">
            <div
              className={`!bg-white !rounded-xl !shadow-xl !overflow-hidden !transition-all !duration-500 ${
                animate ? '!scale-95 !opacity-80' : '!scale-100 !opacity-100'
              }`}
            >
              <div className="!bg-gradient-to-r !from-blue-500 !to-purple-600 !p-6">
                <h2 className="!text-2xl md:!text-3xl !font-bold !text-white">
                  {services[activeTab].title}
                </h2>
              </div>
              <div className="!p-6">
                <p className="!text-gray-700 !mb-6">{services[activeTab].description}</p>
                <div className="!space-y-3">
                  <h4 className="!font-semibold !text-lg !text-gray-800">Key Features:</h4>
                  <ul className="!space-y-2">
                    {services[activeTab].features.map((feature, idx) => (
                      <li key={idx} className="!flex !items-start">
                        <span className="!flex-shrink-0 !w-5 !h-5 !mt-0.5 !mr-2 !text-purple-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="!w-full !h-full"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="!text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Tabs */}
          {!isMobile && (
            <div className="w-full md:!w-1/3 !space-y-2">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full !text-left !p-4 !rounded-lg !transition-all !duration-300 ${
                    activeTab === index
                      ? '!bg-gradient-to-r !from-blue-500 !to-purple-600 !text-white !shadow-lg'
                      : '!bg-gray-100 hover:!bg-gray-200 !text-gray-800'
                  }`}
                >
                  <h3 className="!font-semibold">{service.title}</h3>
                </button>
              ))}
            </div>
          )}

          
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailsMore;