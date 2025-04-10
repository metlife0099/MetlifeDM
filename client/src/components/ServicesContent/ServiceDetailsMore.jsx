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
      id: 'lead-generation',
      title: 'Lead Generation Service',
      description: 'Generate high-quality leads for your business with our targeted strategies that connect you with potential customers ready to engage.',
      features: [
        'Target audience identification',
        'Multi-channel lead generation',
        'Lead qualification',
        'CRM integration',
        'Conversion tracking'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'brand-awareness',
      title: 'Brand Awareness',
      description: 'Increase your brand visibility and recognition through strategic campaigns that put your business in front of the right audience.',
      features: [
        'Brand positioning strategy',
        'Multi-platform campaigns',
        'Influencer collaborations',
        'Brand recall techniques',
        'Awareness metrics tracking'
      ],
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      description: 'Engage your audience with high-quality, relevant content that tells your brand story and drives customer action.',
      features: [
        'Content strategy development',
        'Blog posts & articles',
        'Visual content creation',
        'Video production',
        'Content calendar management'
      ],
    },
    {
      id: 'reputation-management',
      title: 'Reputation Management Services',
      description: 'Monitor, protect, and improve your online reputation to build trust with customers and stakeholders.',
      features: [
        'Online review management',
        'Brand sentiment analysis',
        'Crisis management',
        'Positive content promotion',
        'Reputation monitoring'
      ],
    },
    {
      id: 'weekly-smm',
      title: 'Weekly Plan for SMM',
      description: 'Consistent social media presence with our weekly management plans that keep your audience engaged and growing.',
      features: [
        'Weekly content calendar',
        'Platform-specific strategies',
        'Engagement monitoring',
        'Performance analytics',
        'Weekly optimization'
      ],
    },
    {
      id: 'other-services',
      title: 'Other Services',
      description: 'We offer a range of additional digital marketing services tailored to your specific business requirements and goals.',
      features: [
        'Custom marketing solutions',
        'Competitor analysis',
        'Market research',
        'Conversion rate optimization',
        'Marketing automation'
      ],
      gradient: 'from-gray-500 to-slate-500'
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
    <section className="!py-8">
      <div className="container !mx-auto">
        <div className="flex flex-col md:flex-row !gap-6 !p-5 md:!p-4 bg-gray-100">
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
              className={`!bg-white !rounded-xl !overflow-hidden !transition-all !duration-500 ${
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
                  className={`w-full !text-left !p-4 !rounded-lg !transition-all !duration-300 cursor-pointer ${
                    activeTab === index
                      ? '!bg-gradient-to-r !from-blue-500 !to-purple-600 !text-white !shadow-lg'
                      : '!bg-gray-200 hover:!bg-gray-200 !text-gray-800'
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