import React, { useState, useEffect } from 'react';

const PricingCards = () => {
  const services = {
    'web dev': 'Web Development',
    'SEO': 'Search Engine Optimization',
    'SMM': 'Social Media Marketing',
    'PPC': 'Pay-Per-Click Advertising',
    'SSM': 'Server & Site Maintenance',
    'Content Wrt': 'Content Writing'
  };

  const [selectedService, setSelectedService] = useState('web dev');
  const [isLoading, setIsLoading] = useState(true);

  // Pricing data for each service
  const pricingData = {
    'web dev': [
      {
        name: 'Basic Website',
        price: '$520/-',
        features: ['Up to 5 pages', 'Responsive design', 'Contact form', '1 month support', 'Social media integration', '1 month SEO booster pack FREE worth $450', '+ 27 promotional emails FREE worth $135', '+ 5% discount on monthly website maintenance.'],
        popular: false
      },
      {
        name: 'Pro Basic Website',
        price: '$699/-',
        features: ['5 - 8 pages', 'Responsive design', 'Contact form', '1 month support', 'Social media integration (all platforms)', '1 month SEO booster pack FREE worth $450', '+ 54 promotional emails FREE worth $270', '+ 15% discount on monthly website maintenance.', '10 keywords for SEO', '+ FREE domain up to $50'],
        popular: true
      },
      {
        name: 'Business Website',
        price: '$899/-',
        features: ['1-10 pages', 'Custom web design ', 'Responsive design', 'Contact form', 'FREE domain up to $75', 'Content upload', 'Social media integration (all platforms)', 'Google map integration', '1 month SEO booster pack FREE worth $450 + SEO setup FREE worth $100', 'SSL certificate (if Hosting is available)', '1-2 rounds of revision', '+ 170 promotional emails marketing worth $850', '+ 10 % discount on monthly maintenance.' ],
        popular: false
      },
      {
        name: 'Pro Business Website',
        price: '$999/-',
        features: ['1-10 pages', 'Custom web design ', 'Responsive design', 'Contact form', 'FREE domain up to $75', 'Content upload', 'Social media integration (all platforms)', 'Google map integration', '1 month SEO booster pack FREE worth $450 + SEO setup FREE worth $100', 'SSL certificate (if Hosting is available)', '1-2 Rounds of revision', '+ 200 Promotional emails marketing worth $1000', '+ 15% Discount on monthly maintenance.', '+ Payment integration FREE worth $75', '+ 20% Discount on monthly SEO' ],
        popular: true
      },

      {
        name: 'E-commerce website',
        price: '$1750/-',
        features: ['Custom web design', 'Responsive design', 'Product catalog', 'Shopping cart and check out system', 'Payments gateway integration','Inventory management system', 'Full authentication', 'Admin panel', 'Order management', 'Tax and shipping', 'Email (invoice) notifications', '1 month advanced SEO booster pack FREE worth $450', 'Google analytics report FREE worth $399', 'SSL certificate (if Hosting is available)','+ 300 Promotional emails marketing worth $1500', '+ advance level 1 months seo $850', 'FREE domain up to $100','+ payment gateway integration $99', '+ 10% Discount on monthly maintenance.', '+ 1 month support worth $300'],
        popular: false
      },
      {
        name: 'Pro E-commerce website',
        price: '$1950/-',
        features: ['Custom web design', 'Responsive design', 'Product catalog', 'Shopping cart and check out system', 'Payments gateway integration','Inventory management system', 'Full authentication', 'Admin panel', 'Order management', 'Tax and shipping', 'Email (invoice) notifications', '1 month advanced SEO booster pack FREE worth $450', 'Google analytics report FREE worth $399', 'SSL certificate (if Hosting is available)','+ 400 Promotional emails marketing worth $2000', '+ advance level 1 months seo $850', 'FREE domain up to $100','+ payment gateway integration $99', '+ 10% Discount on monthly maintenance.', '+ 1 month support worth $300'],
        popular: true
      }
    ],
    'SEO': [
      {
        name: 'Starter SEO',
        price: '$299/mo',
        features: ['Keyword research', 'On-page optimization', 'Basic reporting', '5 backlinks/month', 'Monthly review'],
        popular: false
      },
      {
        name: 'Business SEO',
        price: '$799/mo',
        features: ['Comprehensive audit', 'Technical SEO', '15 backlinks/month', 'Bi-weekly reporting', 'Competitor analysis'],
        popular: true
      },
      {
        name: 'Enterprise SEO',
        price: '$1499/mo',
        features: ['Full SEO strategy', '30+ backlinks/month', 'Weekly reporting', 'Content strategy', 'Dedicated account manager'],
        popular: false
      }
    ],
    'SMM': [
      {
        name: 'Basic Management',
        price: '$399/mo',
        features: ['2 platforms', '12 posts/month', 'Content creation', 'Basic analytics', 'Community engagement'],
        popular: false
      },
      {
        name: 'Growth Package',
        price: '$799/mo',
        features: ['4 platforms', '24 posts/month', 'Content strategy', 'Advanced analytics', 'Ad management'],
        popular: true
      },
      {
        name: 'Premium Package',
        price: '$1299/mo',
        features: ['All platforms', 'Daily posting', 'Influencer collabs', 'Video content', 'Crisis management'],
        popular: false
      }
    ],
    'PPC': [
      {
        name: 'Starter Ads',
        price: '$499/mo',
        features: ['1 campaign', 'Up to $500 ad spend', 'Basic targeting', 'Monthly optimization', 'Performance report'],
        popular: false
      },
      {
        name: 'Performance Ads',
        price: '$999/mo',
        features: ['3 campaigns', 'Up to $2000 ad spend', 'Advanced targeting', 'Weekly optimization', 'A/B testing'],
        popular: true
      },
      {
        name: 'Enterprise Ads',
        price: '$2499/mo',
        features: ['Unlimited campaigns', 'Custom ad spend', 'AI optimization', 'Daily monitoring', 'Dedicated strategist'],
        popular: false
      }
    ],
    'SSM': [
      {
        name: 'Basic Maintenance',
        price: '$99/mo',
        features: ['Weekly backups', 'Security updates', 'Uptime monitoring', 'Basic troubleshooting', 'Email support'],
        popular: false
      },
      {
        name: 'Business Maintenance',
        price: '$299/mo',
        features: ['Daily backups', 'Priority updates', 'Performance optimization', 'Advanced security', 'Chat support'],
        popular: true
      },
      {
        name: 'Premium Maintenance',
        price: '$599/mo',
        features: ['Real-time backups', '24/7 monitoring', 'Emergency support', 'Server optimization', 'Phone support'],
        popular: false
      }
    ],
    'Content Wrt': [
      {
        name: 'Starter Content',
        price: '$199/mo',
        features: ['4 blog posts', 'Basic research', 'SEO optimization', '1 revision', 'Standard turnaround'],
        popular: false
      },
      {
        name: 'Professional Content',
        price: '$499/mo',
        features: ['8 blog posts', 'In-depth research', 'Advanced SEO', '2 revisions', 'Priority turnaround'],
        popular: true
      },
      {
        name: 'Enterprise Content',
        price: '$999/mo',
        features: ['16 blog posts', 'Expert research', 'Content strategy', 'Unlimited revisions', 'Express delivery'],
        popular: false
      }
    ]
  };

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [selectedService]);

  const handleServiceChange = (service) => {
    setIsLoading(true);
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 !py-12 !px-4 sm:!px-6 lg:!px-8">
      <div className="container">
        <div className="text-center !mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Pricing Plans
          </h1>
          <p className="!mt-5 max-w-xl !mx-auto text-xl text-gray-500">
            Choose the perfect plan for your business needs
          </p>
        </div>

        {/* Service Selection Dropdown */}
        <div className="flex justify-center !mb-16">
          <div className="relative w-full !max-w-md">
            <div className="absolute !inset-y-0 left-0 flex items-center !pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select
              value={selectedService}
              onChange={(e) => handleServiceChange(e.target.value)}
              className="block w-full !pl-10 !pr-12 !py-4 text-lg font-medium text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none transition-all duration-300 hover:shadow-md"
            >
              {Object.entries(services).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
            <div className="absolute !inset-y-0 right-0 flex items-center !pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
            {pricingData[selectedService].map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-105 ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold !px-3 !py-1 transform translate-x-2 -translate-y-2 rotate-12">
                    POPULAR
                  </div>
                )}
                <div className="!p-8">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="!mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                    {plan.price.includes('/mo') && (
                      <span className="!ml-1 text-xl font-semibold">/month</span>
                    )}
                  </div>
                  <p className="!mt-2 text-gray-500">Perfect for {selectedService === 'web dev' ? 'small to medium businesses' : 'growing businesses'}</p>
                  <ul className="!mt-6 !space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="!ml-3 text-base text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="!px-8 !pb-8">
                  <button
                    className={`w-full !px-6 !py-3 text-lg font-medium rounded-md ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors duration-300`}
                  >
                    Get started
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PricingCards;