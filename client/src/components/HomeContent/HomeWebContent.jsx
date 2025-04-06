import { FaWordpress, FaShopify, FaCode, FaMobileAlt, FaServer, FaChartLine } from 'react-icons/fa';
import React, { useEffect, useRef } from 'react';

const HomeWebContent = () => {
  const slidingLineRef = useRef(null);

  useEffect(() => {
    const slidingLine = slidingLineRef.current;
    if (slidingLine) {
      const animateLine = () => {
        slidingLine.style.transform = 'translateX(100%)';
        slidingLine.style.transition = 'transform 8s linear';
        
        setTimeout(() => {
          slidingLine.style.transform = 'translateX(-100%)';
          slidingLine.style.transition = 'none';
          setTimeout(() => {
            animateLine();
          }, 50);
        }, 8000);
      };
      
      animateLine();
    }
  }, []);

  const services = [
    {
      icon: <FaWordpress className="text-4xl text-blue-600" />,
      title: "WordPress-like CMS",
      description: "Create beautiful, content-rich websites with our easy-to-use content management system.",
      color: "bg-blue-100 hover:bg-blue-200",
    },
    {
      icon: <FaShopify className="text-4xl text-green-600" />,
      title: "E-commerce Solutions",
      description: "Build powerful online stores with shopping carts, payment gateways, and inventory management.",
      color: "bg-green-100 hover:bg-green-200",
    },
    {
      icon: <FaCode className="text-4xl text-purple-600" />,
      title: "Custom Development",
      description: "Tailored solutions designed specifically for your unique business requirements.",
      color: "bg-purple-100 hover:bg-purple-200",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-red-600" />,
      title: "Mobile Responsive",
      description: "Fully responsive designs that look perfect on any device, from desktop to mobile.",
      color: "bg-red-100 hover:bg-red-200",
    },
    {
      icon: <FaServer className="text-4xl text-yellow-600" />,
      title: "Hosting & Maintenance",
      description: "Reliable hosting solutions with regular updates and maintenance included.",
      color: "bg-yellow-100 hover:bg-yellow-200",
    },
    {
      icon: <FaChartLine className="text-4xl text-indigo-600" />,
      title: "SEO Optimized",
      description: "Websites built with SEO best practices to help you rank higher in search results.",
      color: "bg-indigo-100 hover:bg-indigo-200",
    },
  ];

  return (
    <div className="relative overflow-hidden !py-12 !px-4 md:!px-8 lg:!px-12 bg-gray-50">
      {/* Sliding line animation */}
      <div 
        ref={slidingLineRef}
        className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform -translate-x-full"
      ></div>
      
      <div className="container">
        {/* Header */}
        <div className="text-center !mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 !mb-4">
            Build Amazing Websites <span className="text-blue-600">Easily</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl !mx-auto">
            Our platform makes website creation as simple as WordPress and Shopify, but with the power of custom development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`${service.color} rounded-xl !p-8 shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg`}
            >
              <div className="!mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 !mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="!mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 !p-8 md:!p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-800 !mb-4">
                Drag & Drop Website Builder
              </h3>
              <p className="text-gray-600 !mb-6">
                Create stunning websites without writing a single line of code. Our intuitive interface makes web design accessible to everyone.
              </p>
              <ul className="!space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full !mr-3"></span>
                  <span className="text-gray-700">Pre-designed templates</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full !mr-3"></span>
                  <span className="text-gray-700">Customizable components</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Real-time preview</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-gray-100 min-h-64 flex items-center justify-center !p-8">
              <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-gray-200 flex items-center justify-center">
                <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="absolute top-4 left-8 w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="absolute top-4 left-12 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-center !px-6">
                  <FaCode className="text-5xl text-blue-600 !mx-auto !mb-4" />
                  <p className="text-gray-600 font-medium">Website Builder Interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWebContent;