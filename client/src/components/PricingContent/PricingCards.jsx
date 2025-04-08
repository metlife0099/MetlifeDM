import React, { useState, useEffect } from 'react';

const PricingCards = () => {
  const services = {
    'web dev': 'Web Development',
    'SEO': 'Search Engine Optimization',
    'GAA': 'Google Ads & Analytics',
    'PPC': 'Pay-Per-Click Advertising',
    'SMM': 'Social Media Marketing',
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
        features: ['Up to 5 pages', 'Responsive design', 'Contact form', '1 month support', 'Social media integration', '1 month SEO booster pack FREE worth $199', '+ 27 promotional emails FREE worth $135', '+ 5% discount on monthly website maintenance.'],
        popular: false
      },
      {
        name: 'Pro-level Basic Website',
        price: '$699/-',
        features: ['5-8 pages', 'Responsive design (mobile-first)', 'Contact form + Google Analytics setup', '2 months of priority support', 'Social media integration (all platforms) + branded kit', 'FREE 1-Month SEO Launchpad: 10 keywords to kickstart rankings ($199 value)', 'FREE 54 High-Conversion Emails: Pre-designed & automated ($270 value)', 'FREE Domain: Up to $50 value', '15% OFF Maintenance: 3 months', 'Launch Guarantee: Live in 30 days or 50% back!'],
        popular: true
      },
      {
        name: 'Business Website',
        price: '$899/-',
        features: ['1-10 pages with custom web design', 'Responsive, speed-optimized layout', 'Contact form + Google Analytics setup', 'Content upload + Google Maps integration', 'Social media integration (all platforms)', 'FREE Domain: Up to $75.00', 'FREE SSL Certificate', 'FREE 1-Month SEO Launchpad: 10 keywords + setup ($299 value)', 'FREE 170 High-Conversion Emails: Pre-built campaigns ($850 value)', '2 months of priority support', '1-2 rounds of revision', '10% OFF Maintenance: For 3 months', 'Launch Guarantee: Live in 30 days or 50% back!'],
        popular: false
      },
      {
        name: 'Pro-level Business Website',
        price: '$1149/-',
        features: ['* 1-10 pages with custom web design', 'Responsive, speed-optimized layout', 'Contact form + Google Analytics setup', 'Content upload + Google Maps integration', 'Social media integration (all platforms)', 'Social media integration (all platforms)', 'FREE Domain: Up to $75', 'FREE SSL Certificate', 'FREE Payment Integration: Accept payments fast ($75 value)', 'FREE 1-Month SEO Launchpad: 10 keywords + setup ($299 value)', 'FREE 200 High-Conversion Emails: Pre-built campaigns ($1,000 value)', '2 months of priority support', '1-2 rounds of revision', '15% OFF Maintenance: For 3 months', '20% OFF Monthly SEO: For 3 months', 'Launch Guarantee: Live in 30 days or 50% back!'],
        popular: true
      },

      {
        name: 'E-commerce website',
        price: '$1750/-',
        features: ['Custom web design, responsive + speed- optimized', 'Product catalog, shopping cart, checkout system', 'Payment gateway integration + inventory management', 'Full authentication, admin panel, order management', 'Tax/shipping setup + email invoice notifications', 'FREE Domain: Up to $100', 'FREE SSL Certificate', 'FREE Payment Gateway Setup: ($99 value)', 'FREE 30- Day Advanced SEO Launchpad: 15 keywords + content ($850 value)', 'FREE 300 High-Conversion Emails: Pre-built campaigns ($1,500 value)', 'FREE Google Analytics Report: ($399 value)', '2 months of priority support ($500 value)', '2-3 rounds of revision', '10% OFF Maintenance: For 3 months', 'Launch Guarantee: Store live in 30 days or 50% back!', ],
        popular: false
      },
      {
        name: 'Pro-level E-commerce website',
        price: '$2050/-',
        features: ['Custom web design, responsive + speed-optimized', 'Product catalog, shopping cart, checkout system', 'Payment gateway integration + inventory management', 'Full authentication, admin panel, order management', 'Tax/shipping setup + email invoice notifications', 'FREE Domain: Up to $100', 'FREE SSL Certificate', 'FREE Payment Gateway Setup: ($99 value)', 'FREE 30 Day Advanced SEO Launchpad: 15 keywords + links ($1,000 value)', '* FREE 400 High-Conversion Emails: Pre-built campaigns ($2,000 value)', 'FREE Google Analytics Report: ($399 value)', 'FREE Brand Awareness Boost: ($150 value)', 'FREE Reputation Management: ($450 value)', '2 months of priority support ($500 value)', '3-4 rounds of revision', '10% OFF Maintenance: For 3 months', '* Launch Guarantee: Store live in 30 days or 50% back!' ],
        popular: true
      }
    ],
    'SEO': [
      {
        name: 'Start-up SEO',
        price: '$450/mo',
        features: ['Keyword research (5-10 keywords)', 'On-page SEO (titles, meta, alt tags)', 'Google My Business setup + local directory submissions', 'Website technical audit', 'Monthly performance report (rankings, traffic, insights)', '1-5 high-authority backlinks/month', 'FREE 90 High-Conversion Emails: Pre-built & targeted ($450 value)', 'FREE Landing Page Audit + Fixes: ($150 value)', '3% OFF Maintenance: For 3 months', '5% OFF Google Ads: For 3 months', 'Monthly strategy call', 'guarantee: 10% traffic boost in 75 days or next month free!'], 
        popular: false
      },
      {
        name: 'Pro-level Start-up SEO',
        price: '$599/mo',
        features: ['Keyword research (up to 12 keywords)', 'On-page SEO (titles, meta, alt tags)', 'Google My Business setup + local directory submissions', 'Website technical audit', 'One comprehensive monthly report (rankings, traffic, insights)', '5-10 high-authority backlinks/month', 'FREE 120 High-Conversion Emails: Pre-built & targeted ($600 value)', 'FREE Website Speed Optimization: Fast loading ($120 value)', '5% OFF Maintenance: For 3 months', '10% OFF Google Ads: For 3 months', 'Monthly strategy call', 'guarantee: 17% traffic boost in 75 days or next month free!'],
        popular: true
      },
      {
        name: 'Business Seo',
        price: '$750/mo',
        features: ['Keyword communiquéresearch (10-15 keywords)', 'On-page SEO (titles, meta, alt tags)', 'Google My Business setup + local directory submissions', 'Website technical audit', 'One comprehensive monthly report (rankings, traffic, insights)', '10-15 high-authority backlinks/month', 'FREE 150 High-Conversion Emails: Pre-built & targeted ($750 value)', 'FREE Website Speed Optimization: Fast loading ($120 value)', '10% OFF Maintenance: For 3 months', '5% OFF Google Ads: For 3 months', 'Monthly strategy call', 'guarantee: 19% traffic boost in 75 days or next month free!',],
        popular: false
      },
      {
        name: 'Pro-level Business Seo',
        price: '$899/mo',
        features: ['Keyword research (10–15 keywords)', 'On-page SEO (titles, meta, alt tags)', 'Setup your Google My Business (GMB) profile for SEO', 'Website technical audit', 'Site Crawlability and Indexation', 'Page Speed and Core Web Vitals', 'Monthly performance report', 'Local directory submissions', '10-15 backlinks/month', '+ 180 FREE promotional emails worth $899', '+ FREE website optimization for fast loading time worth $120', '+ 5% discount on monthly web maintenance', '+ 10% discount on google ads', '2 reports/month', 'FREE sample pack for reputation management service worth $99',],
        popular: true
      },
      {
        name: 'E-commerce SEO',
        price: '$1599/mo',
        features: ['Large-scale keyword targeting (products/categories)', 'On-page SEO (titles, meta, alt tags)', 'SEO for 100+ product pages Schema markup for rich snippets Technical SEO for product filters, pagination', 'Website technical audit', 'Site Crawlability and Indexation', 'Page Speed and Core Web Vitals', 'Product feed optimization for Google Shopping', 'Backlink strategy for products and categories', 'Local directory submissions', 'Conversion rate optimization (CRO)', 'Ongoing competitor/product tracking Blog & content marketing', 'Detailed monthly analytics + revenue tracking', '+ 320 FREE promotional emails worth $1599', '+ FREE website optimization for fast loading time worth $350', '+ 5% discount on monthly web maintenance', '+ 10% discount on google ads', '3 reports/month', 'FREE sample pack for reputation management service worth $149',],
        popular: false
      },
    ],
    'GAA': [
      {
        name: 'Start-up package',
        price: '$799/mo',
        features: ['High-Converting Google Search Campaigns (Up to 4 laser-focused ad groups targeting your top services.)', 'Precision geo-targeting to reach nearby, ready-to-buy customers.', 'Negative keyword strategy to cut wasted spend and boost ROI', 'Track all key metrics: Clicks, Conversions, CTR & CPA and ROI-focused.', 'A/B testing and relentless optimization ensure every dollar drives maximum ROI!', 'Plus, a custom insight every month to level up your strategy'],
        bonus: 'Premium Bonuses – Absolutely FREE!',
        bonusData: ['170 Email Marketing Campaigns (Value: $799) – Fuel follow-ups & boost repeat business', 'Website Speed & SEO Optimization (Value: $199) – Convert more visitors into leads', 'SEO Jumpstart Pack (Value: $299) – Includes on-page keyword optimization for faster Google ranking', 'Up to 2 rounds of revisions for Google ads', 'Brief action summary: “What we did” + “Next steps” '],
        popular: false
      },
      {
        name: 'Pro Start-up package',
        price: '$1249/mo',
        features: ['High-Converting Google Search Campaigns (Up to 8 laser-focused ad groups targeting your top service.)', 'Precision geo-targeting to reach nearby + bid adjustment for high value locales.', 'Negative keyword setup + ongoing refinement to optimize spend.', 'Display Retargeting Campaign ads to past visitors of your website.', 'Metrics: clicks, conversions, CTR, CPA, ROAS (return on ad spend).', 'A/B testing and relentless optimization ensure every dollar drives maximum ROI!', 'Plus, a custom insight every month to level up your strategy.'],
        bonus: 'Premium Bonuses – Absolutely FREE!',
        bonusData: ['250 Email Marketing Campaigns (Value: $1249) – Fuel follow-ups & boost repeat business.', 'Website Conversion Pro: Speed, mobile tweaks, and CTA overhaul for website page + one landing page optimisation ($189 value).', 'SEO Power Start Plus: On-page SEO up to 3 pages, up to 8 keywords research reports, and one 450-word blog posts ($399 value).', 'Up to 4 rounds of revision.', 'Brief action summary: “What we did” + “Next steps”'],
        popular: true
      },
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
        <div className="!text-center !mb-16">
          <h2 className="!text-4xl md:!text-6xl !font-bold !text-gray-900 !mb-2">
            Best <span className="!text-blue-500">value </span>deals
          </h2>
          <p className="!text-xl !text-gray-600 !max-w-3xl !mx-auto">
            Pricing that ignites your growth!
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
              className="block w-full !pl-10 !pr-12 !py-4 text-lg font-medium text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none transition-all duration-300 hover:shadow-md"
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
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
            {pricingData[selectedService].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-105 ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold !px-3 !py-1 transform translate-x-2 ">
                    Entrepreneur’s Hotshot Choice!
                  </div>
                )}
                <div className="!p-8">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="!mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                    {/* {plan.price.includes('/mo') && (
                      <span className="!ml-1 text-xl font-semibold">/month</span>
                    )} */}
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
                  <p className="text-[16px] text-gray-800 font-semibold">{plan.bonus}</p>

                  {plan.bonusData && (
                    <ul className="!mt-6 !space-y-4">
                      {plan.bonusData.map((bonusdata, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <p className="!ml-3 text-base text-gray-700">{bonusdata}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="!px-8 !pb-8">
                  <button
                    className={`w-full !px-6 !py-3 text-lg font-medium rounded-md ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors duration-300`}
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