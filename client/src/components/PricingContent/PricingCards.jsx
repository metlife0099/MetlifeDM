import React, { useState, useEffect } from 'react';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoGridSharp } from "react-icons/io5";
import PopupContact from '../Others/PopupContact';
import { Link } from 'react-router-dom';

const PricingCards = () => {
  const services = {
    'Web Development': 'Web Development',
    'Search Engine Optimization': 'Search Engine Optimization',
    'Google Ads': 'Google Ads',
    'Pay-Per-Click': 'Pay-Per-Click Services',
    'Social Media Marketing': 'Social Media Marketing',
    'Lead Generation': 'Lead Generation',
    'Brand Awarness': 'Brand Awarness',
    'Content Creation': 'Content Creation',
    'Email & SMS Marketing': 'Email & SMS Marketing',
    'Reputation Management Services': 'Reputation Management Services',
  };

  const [selectedService, setSelectedService] = useState('Web Development');
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Pricing data for each service
  const pricingData = {
    'Web Development': [
      {
        name: 'Basic Website',
        price: '$520/-',
        features: ['Up to 6 pages', 'Mobile-first, responsive design', 'WordPress CMS for easy updates', 'Lead-capturing contact form', 'Social media integration', '2 months of priority support', 'FREE: 1-month SEO pack (keyword research, up to 1 optimized pages, Google My Business setup $199 value)', 'FREE 27 High-Conversion Emails: Pre-built campaigns ($135 value)', '10% OFF Maintenance: For 6 months'],
        popular: false
      },
      {
        name: 'Pro-level Basic Website',
        price: '$699/-',
        features: ['Up to 8 pages', 'Responsive design (mobile-first)', 'Contact form + Google Analytics setup', '2 months of priority support', 'Social media integration (all platforms) + branded kit', 'FREE 1-Month SEO Launchpad: 10 keywords to kickstart rankings ($199 value)', 'FREE 54 High-Conversion Emails: Pre-designed & automated ($270 value)', 'FREE Domain: Up to $50 value', '15% OFF Maintenance: 3 months',],
        popular: true
      },
      {
        name: 'Business Website',
        price: '$899/-',
        features: ['Up to 10 pages with custom web design', 'Responsive, speed-optimized layout', 'Contact form + Google Analytics setup', 'Content upload + Google Maps integration', 'Social media integration (all platforms)', 'FREE Domain: Up to $75.00', 'FREE SSL Certificate', 'FREE 1-Month SEO Launchpad: 10 keywords + setup ($299 value)', 'FREE 170 High-Conversion Emails: Pre-built campaigns ($850 value)', '2 months of priority support', '1-2 rounds of revision', '10% OFF Maintenance: For 3 months',],
        popular: false
      },
      {
        name: 'Pro-level Business Website',
        price: '$1149/-',
        features: ['Up to 10+ pages with custom web design', 'Responsive, speed-optimized layout', 'Contact form + Google Analytics setup', 'Content upload + Google Maps integration', 'Social media integration (all platforms)', 'Social media integration (all platforms)', 'FREE Domain: Up to $75', 'FREE SSL Certificate', 'FREE Payment Integration: Accept payments fast ($75 value)', 'FREE 1-Month SEO Launchpad: 10 keywords + setup ($299 value)', 'FREE 200 High-Conversion Emails: Pre-built campaigns ($1,000 value)', '2 months of priority support', '1-2 rounds of revision', '15% OFF Maintenance: For 3 months', '20% OFF Monthly SEO: For 3 months'],
        popular: true
      },

      {
        name: 'E-commerce website',
        price: '$1750/-',
        features: ['Custom web design, responsive + speed- optimized', 'Product catalog, shopping cart, checkout system', 'Payment gateway integration + inventory management', 'Full authentication, admin panel, order management', 'Tax/shipping setup + email invoice notifications', 'FREE Domain: Up to $100', 'FREE SSL Certificate', 'FREE Payment Gateway Setup: ($99 value)', 'FREE 30- Day Advanced SEO Launchpad: 15 keywords + content ($850 value)', 'FREE 300 High-Conversion Emails: Pre-built campaigns ($1,500 value)', 'FREE Google Analytics Report: ($399 value)', '2 months of priority support ($500 value)', '2-3 rounds of revision', '10% OFF Maintenance: For 3 months', ],
        popular: false
      },
      {
        name: 'Pro-level E-commerce website',
        price: '$2050/-',
        features: ['Custom web design, responsive + speed-optimized', 'Product catalog, shopping cart, checkout system', 'Payment gateway integration + inventory management', 'Full authentication, admin panel, order management', 'Tax/shipping setup + email invoice notifications', 'FREE Domain: Up to $100', 'FREE SSL Certificate', 'FREE Payment Gateway Setup: ($99 value)', 'FREE 30 Day Advanced SEO Launchpad: 15 keywords + links ($1,000 value)', '* FREE 400 High-Conversion Emails: Pre-built campaigns ($2,000 value)', 'FREE Google Analytics Report: ($399 value)', 'FREE Brand Awareness Boost: ($150 value)', 'FREE Reputation Management: ($450 value)', '2 months of priority support ($500 value)', '3-4 rounds of revision', '10% OFF Maintenance: For 3 months'],
        popular: true
      }
    ],
    'Search Engine Optimization': [
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
        features: ['Keyword communication research (10-15 keywords)', 'On-page SEO (titles, meta, alt tags)', 'Google My Business setup + local directory submissions', 'Website technical audit', 'One comprehensive monthly report (rankings, traffic, insights)', '10-15 high-authority backlinks/month', 'FREE 150 High-Conversion Emails: Pre-built & targeted ($750 value)', 'FREE Website Speed Optimization: Fast loading ($120 value)', '10% OFF Maintenance: For 3 months', '5% OFF Google Ads: For 3 months', 'Monthly strategy call', 'guarantee: 19% traffic boost in 75 days or next month free!',],
        popular: false
      },
      {
        name: 'Pro-level Business Seo',
        price: '$899/mo',
        features: ['Keyword research (10-15 keywords)', 'On-page SEO (titles, meta, alt tags)', 'Website technical audit + crawlability/indexation', 'Page Speed & Core Web Vitals optimization', 'One comprehensive monthly report (rankings, traffic, insights)', 'Local directory submissions', '10-15 high-authority backlinks/month', 'FREE 180 High-Conversion Emails: Pre-built & targeted ($899 value)', 'FREE Website Speed Optimization: Fast loading ($120 value)', 'FREE 10-Day Reputation Management Trial: Review monitoring & boost ($99 value)', '5% OFF Maintenance: For 3 months', '10% OFF Google Ads: For 3 months', 'Monthly strategy call', 'guarantee: 17% traffic boost in 75 days or next month free!',],
        popular: true
      },
      {
        name: 'E-commerce SEO',
        price: '$1599/mo',
        features: ['Large-scale keyword targeting (products/categories)', 'On-page SEO (titles, meta, alt tags) for 100+ product pages', 'Schema markup for rich snippets', 'Technical SEO (filters, pagination, crawlability/indexation)', 'Page Speed & Core Web Vitals optimization', 'Product feed optimization for Google Shopping', '15-20 high-authority backlinks/month', 'Local directory submissions', 'Conversion rate optimization (CRO)', 'Ongoing competitor/product tracking', 'Blog & content marketing', 'Two comprehensive monthly reports (SEO + revenue/competitors)', 'FREE 320 High-Conversion Emails: Pre-b campaigns & automation ($1,599 value)', 'FREE Website Speed Optimization: ($350 value)', 'FREE 15-Day Reputation Management Trial: Review monitoring & boost ($149 value)', 'FREE SSL Certificate', '5% OFF Maintenance: For 3 months', '10% OFF Google Ads: For 3 months', 'Dedicated account manager + monthly strategy call', 'guarantee: 20% revenue boost in 90 days or next month free!'],
        popular: false
      },
    ],
    'Google Ads': [
      {
        name: 'Start-up package',
        price: '$799/mo',
        features: ['High-Converting Google Search Campaigns (Up to 4 laser-focused ad groups targeting your top services.)', 'Precision geo-targeting to reach nearby, ready-to-buy customers.', 'Negative keyword strategy to cut wasted spend and boost ROI', 'Track all key metrics: Clicks, Conversions, CTR & CPA and ROI-focused.', 'A/B testing and relentless optimization ensure every dollar drives maximum ROI!', 'Plus, a custom insight every month to level up your strategy'],
        bonus: 'Premium Bonuses – Absolutely FREE!',
        bonusData: ['170 Email Marketing Campaigns (Value: $799) – Fuel follow-ups & boost repeat business', 'Website Speed & SEO Optimization (Value: $199) – Convert more visitors into leads', 'SEO Jumpstart Pack (Value: $299) – Includes on-page keyword optimization for faster Google ranking', 'Up to 2 rounds of revisions for Google ads', 'Brief action summary: “What we did” + “Next steps” '],
        popular: false,
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
    'Pay-Per-Click': [
      {
        name: 'Growth Accelerator Package',
        price: '$599/mo',
        features: ['Google Ads + Meta Ads Management', 'Management of up to $3,000/month ad spend. Includes campaign setup, audience targeting, and ongoing bid adjustments.', 'Landing Page Optimization-One-time optimization: improved copy, layout, and call-to-action. Optional A/B testing add-on.', 'Keyword Research-Up to 15 high-intent keywords researched and optimized for campaigns.', 'Weekly Performance Reports-Detailed insights on clicks, conversions, and ROI.', '4 Ad Copy Variations/Month', 'Two for Google Ads, two for Meta Ads, with performance-driven tweaks.'],
        bonus: 'Premium Bonuses – Absolutely FREE!',
        bonusData: ['Website Speed Check - Comprehensive report with actionable fixes (valued at $199).', 'Email Marketing Starter Pack-  One email campaign setup (up to 500 subscribers) + basic automation (e.g., welcome email) (valued at $150).', 'Boost your Ads by Up to 15% in 75 Days – or Your Next Month’s Free!"', 'No lock-ins. No contract. Cancel anytime within 30 days.',],
        popular: false
      },
      {
        name: 'PPC Powerhouse Package',
        price: '$849/mo',
        features: ['Google Ads + Meta Ads Management', 'Up to $5,000 ad spend included (15% management fee beyond $5,000).', 'Campaign setup, audience targeting, and bid optimization.', '20 High-Quality Keywords', 'Researched and optimized for maximum ROI.', '6 Ad Copy Variations/Month', '3 for Google Ads, 3 for Meta Ads, performance-tested.', '1 Landing Page Optimization', 'One-time optimization (copy, design, CTA) + A/B testing setup.', 'Weekly Performance Reports', 'Detailed metrics on clicks, costs, and conversions.'],
        bonus: 'Premium Bonuses – Absolutely FREE!',
        bonusData: ['Website Speed Check', 'Full report with actionable fixes (valued at $199).', 'Email Marketing Starter Pack', '1 campaign setup + basic automation (up to 1,000 subscribers, valued at $425).', '1-Month SEO Booster Pack', 'On-page SEO (valued at $199).', 'Up to 17% improvement in CTR, CPC, or conversions within 75 days, or your next month is FREE.', 'No lock-ins. No contract. Cancel anytime within 30 days.'],
        popular: true
      },
      {
        name: 'Elite Pro Package',
        price: '$1499/mo',
        features: ['Google Ads + Meta Ads Management', 'Up to $15,000 ad spend included.', 'Full campaign setup, advanced targeting, and bid optimization.', '40 High-Quality Keywords', 'Researched and optimized for maximum performance.', '8 Ad Copy Variations/Month', '4 for Google Ads, 4 for Meta Ads, tested and refined.', '2 Landing Page Optimizations/Month', 'Includes copy, design tweaks, and A/B testing setup.', 'Weekly Performance Reports + Monthly Strategy Call', 'Detailed analytics weekly + 30 - minute strategy session monthly.', '', '', ''],
        bonus: 'Premium Bonuses – Absolutely FREE!',
        bonusData: ['Website Speed Check', 'Comprehensive reports with fixes (valued at $199).', 'Email Marketing Setup', '2 campaigns + 1 automation (up to 5,000 subscribers, valued at $399).', '2-Month Advanced SEO Pack', 'website pages optimization, 7 high-quality backlinks, local SEO audit (valued at $1,199).', 'Up to 20% improvement in CTR, CPC, oг conversions within 75 days, or your next month is FREE.', 'No lock-ins. No contract. Cancel anytime within 30 days.' ],
        popular: false
      },
    ],
    'Social Media Marketing': [
      {
        name: 'Launch-pad Package',
        price: '$599/mo',
        features: ['Platform Management', "Management of 2 social media platforms (e.g., Facebook + Instagram, or client's choice based on audience).", 'Profile setup and optimization (e.g., bio, branding, links).', 'Organic Content Creation & Posting', '6 high-quality posts/month .', 'Custom graphics or stock images, engaging captions, and hashtags.', 'Monthly content calendar for approval.', 'Paid Social Ad Campaigns', 'Management of up to $1,000 ad spend.', '2 paid ad campaigns/month (1 per platform, e.g., lead gen or traffic ads).', 'Basic ad creative (image-based) and targeting (e.g., local audience, interests).', '3 hour/week monitoring and responding comments/messages.', 'Analytics & weekly Reporting performance updates (reach, engagement, ad results).'],
        bonus: 'Premium Bonuses – Absolutely FREE!',
        bonusData: ['Social Media Mini-Audit: Quick review of current profiles with 3-5 improvement tips (valued at $149).', 'Ad Starter Credit: $50 credit toward your first ad spend (valued at $50).', '+ FREE 20 Emails for leads generation ( Valued $599)', 'Up to 10% improvement in reach, engagement, or conversions within 75 days, or your next month is FREE.', 'No lock-ins. No contract. Cancel anytime within 30 days.'],
        popular: false
      },
      {
        name: 'Social Media Mastery Plan',
        price: '$1349/mo',
        features: ['Platform Management', 'Full management of 3 social media platforms (e.g., Facebook, Instagram, Twitter/X, LinkedIn, based on client needs).', 'Account setup, profile optimization, and branding consistency.', 'Organic Content Creation & Posting', '12 high-quality posts/month (4 per platform).', "Custom graphics, captions, and hashtags tailored to the client's audience.", 'Content calendar provided monthly for approval.', 'Paid Social Ad Campaigns management of up to $5,000 ad spend.', '6 paid ad campaigns/month (2 per platform).', 'Ad creative design (images or short videos),', 'Copywriting, and targeting (e.g., demographics, interests, lookalike audiences).', 'Daily monitoring of comments, messages, and mentions.', 'Up to 6 hours/week of active engagement (e.g., responding to followers, sparking conversations).', 'Weekly performance reports'],
        bonus: 'Premium Bonuses – Absolutely FREE!',
        bonusData: ['Weekly strategy review call (30 minutes) to discuss results and adjust tactics (valued at $400).', 'Social Media Audit: One-time audit of current profiles with actionable recommendations (valued at $299).', 'Content Boost Pack (valued at $150)', '2 extra posts in the first month (valued at $100).', 'Analytics & Reporting (valued at $199)', 'Trending strategies', 'Up to 15% improvement in reach, engagement, or conversions within 75 days, or your next month is FREE.', 'No lock-ins. No contract. Cancel anytime within 30 days.'],
        popular: true
      },
    ],

    'Lead Generation': [
      {
        name: 'Lead Generation Service',
        price: 'ONLY When YOU Request',
        features: ['Content Marketing', 'Search Engine Optimization (SEO)', 'Pay-Per-Click (PPC) Advertising', 'Social Media Marketing', 'Email Marketing', 'Landing Page Creation', 'Lead Magnet Development', 'Telemarketing', 'Webinar and Event Hosting', 'Lead Scoring and Qualification', 'CRM Integration and Management', 'Analytics and Reporting', 'Trending strategies', 'Up to 15% improvement in reach, engagement, or conversions within 75 days, or your next month is FREE.', 'No lock-ins. No contract. Cancel anytime within 30 days.', 'Many more offers' ],
        popular: false
      },
    ],

    'Brand Awarness': [
      {
        name: 'Brand Awarness',
        price: 'ONLY When YOU Request',
        features: ['Content Marketing', 'Social Media Marketing', 'Search Engine Optimization (SEO)', 'Pay-Per-Click (PPC) Advertising', 'Public Relations (PR)', 'Influencer Marketing', 'Email Marketing', 'Event Sponsorship or Hosting', 'Referral Programs', 'Display Advertising', 'Trending strategies', 'Up to 15% improvement in reach, engagement, or conversions within 75 days, or your next month is FREE.', 'No lock-ins. No contract. Cancel anytime within 30 days.', 'Many more offers'],
        popular: false
      },
    ],

    'Content Creation': [
      {
        name: 'Content Creation',
        price: 'ONLY When YOU Request',
        features: ['Writing & Research ', 'Visual content ', 'Interactive & Development ', 'Collaboration & Management ', 'Social Media & Marketing ', 'AI & Automation', 'Analytics & Feedback', 'Specialized Niches', 'Trending strategies', 'Up to 15% improvement in reach, engagement, or conversions within 75 days, or your next month is FREE.', 'No lock-ins. No contract. Cancel anytime within 30 days.', 'Many more offers'],
        popular: false
      },
    ],

    'Email & SMS Marketing': [
      {
        name: 'Email Marketing',
        price: 'ONLY When YOU Request',
        features: ['List Segmentation and Targeting', 'Email Campaign Strategy and Planning', 'Content Creation and Copywriting', 'Email Design and Templates', 'Email Automation (Workflows, Autoresponders)', 'Email Sending and Scheduling', 'A/B Testing (Split Testing)', 'Performance Tracking and Analytics Reporting', 'Deliverability Management and Compliance', 'Integration with Other Platforms (CRM, etc.)', 'Lead Generation (Forms, Landing Pages)', 'Trending strategies', 'Up to 15% improvement in reach, engagement, or conversions within 75 days, or your next month is FREE.', 'No lock-ins. No contract. Cancel anytime within 30 days.', 'Many more offers'],
        popular: false
      },
      {
        name: 'WhatsApp Marketing',
        price: 'ONLY When YOU Request',
        features: ['Business Profile Setup and Verification', 'Contact List Management (including Opt-in collection)', 'Broadcast/Bulk Messaging (Promotions, Newsletters, Updates)', 'Automated Notifications (Order confirmations, shipping updates, reminders)', 'Chatbot Development and Deployment (for automated replies and flows)', 'Personalized Messaging Campaigns', 'Rich Media Communication (Images, Videos, Documents, Buttons)', ' Interactive Messages (Quick Replies, Call-to-Action Buttons, List Messages)', 'Product Catalog Creation and Sharing', 'Click-to-WhatsApp Ad Campaigns (via Facebook/Instagram)', 'Retargeting Campaigns', 'Analytics and Reporting', ' Integration with CRM and other business systems', 'Customer Support and Service via chat', 'WhatsApp Payments Facilitation (where available)', 'Trending strategies', 'Up to 15% improvement in reach, engagement, or conversions within 75 days, or your next month is FREE.', 'No lock-ins. No contract. Cancel anytime within 30 days.', 'Many more offers'],
        popular: false
      },
      {
        name: 'SMS Marketing',
        price: 'ONLY When YOU Request',
        features: ['Bulk/Mass SMS Sending', 'Contact List Management (including opt-in/opt-out)', 'Audience Segmentation', 'Personalization (using contact data)', 'Two-Way Messaging/Conversational SMS', 'Automated Campaigns (Drip, Welcome, Reminders)', 'Transactional SMS (Alerts, Confirmations, Notifications)', 'Message Scheduling', 'Keyword Management (for opt-in/interaction)', 'Short Code/Long Code Provisioning', 'MMS (Multimedia Messaging) Capabilities', 'Performance Analytics and Reporting', 'API Integration Capabilities', 'Compliance Management Tools', 'Link Shortening and Tracking', 'Trending strategies', 'Up to 15% improvement in reach, engagement, or conversions within 75 days, or your next month is FREE.', 'No lock-ins. No contract. Cancel anytime within 30 days.', 'Many more offers'],
        popular: false
      },
    ],

    'Reputation Management Services': [
      {
        name: 'Reputation Management Services',
        price: 'ONLY When YOU Request',
        features: ['Online Monitoring & Analysis', 'Review Management', 'SEO & Search Engine Reputation', 'Social Media Management', 'PR & Media Relations', 'Crisis Management', 'Legal & Removal Services', 'Customer Feedback & Surveys', 'Employer Branding','Trending strategies', 'Up to 15% improvement in reach, engagement, or conversions within 75 days, or your next month is FREE.', 'No lock-ins. No contract. Cancel anytime within 30 days.', 'Many more offers'],
        popular: false
      },
    ],
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
          Choose Your <span className="!text-blue-500">Service </span>
          </h2>
          <p className="!text-xl !text-gray-600 !max-w-3xl !mx-auto">
            Pricing that ignites your growth!
          </p>
        </div>

        {/* Service Selection Dropdown */}
        <div className="flex justify-center !mb-8">
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

        <h3 className="max-w-3xl !mx-auto text-2xl text-center !mb-10 font-semibold " >Looking for customized <span className='text-blue-600'>{selectedService}</span> services? We design solutions tailored to your unique goals — <span className='text-blue-600'><Link to='/contact'>reach us</Link></span> to see how we can help you achieve them <span className='text-blue-600'>(FREE consultation)</span>.</h3>

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
                    onClick={() => setIsModalOpen(true)}
                    className={`w-full !px-6 !py-3 text-lg font-medium rounded-md cursor-pointer ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors duration-300`}
                  >
                    Get started
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Google Ads & PPC Services Section */}
        <div className="!my-24 !px-4 sm:!px-6 lg:!px-8">
          <div className="max-w-7xl !mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Content */}
              <div className="!p-12">
                <h2 className="!text-2xl md:!text-3xl !font-bold !text-white !mb-4">
                  Supercharge your Brand’s Growth with a  <span className="!text-yellow-300">100% Customized services Powerhouse</span> Tailored Solutions, Skyrocketing ROI, specially Crafted for goal-oriented US businesses
                </h2>
                <p className="!text-lg !text-blue-100 !mb-8">
                  Our expert team delivers: customized services like Custom Website Development, Search Engine Optimization (SEO), Google Ads & Pay-Per-Click Campaigns, Social Media Management, High-Quality Lead Generation, Brand Awareness Campaigns, Online Reputation Management service
                  ...and much more — all aligned with your business goals.
                </p>

                <div className="!space-y-6 !mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 !mt-1">
                      <svg className="h-6 w-6 !text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div className="!ml-4">
                      <h3 className="!text-xl !font-bold !text-white">Getting started is simple:</h3>
                      <p className="!text-blue-100">
                        <span className='text-white font-semibold'>- Free Discovery Call:</span> Dive into an Explosive Discovery Call – Unlock Your Business, Smash Your Goals, and Conquer Your Challenges, Absolutely FREE (a $199 Value)!
                      </p>
                      <p className="!text-blue-100">
                        <span className='text-white font-semibold'>- Free Custom Proposal: </span> Within 48 hours, you’ll get a tailored plan with services and pricing designed just for you.
                      </p>
                      <p className="!text-blue-100">
                        <span className='text-white font-semibold'>- Execution & Results: </span> We launch your strategy and adjust as needed to maximize your success.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 !mt-1">
                      <svg className="h-6 w-6 !text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div className="!ml-4">
                      <h3 className="!text-xl !font-bold !text-white">Why Choose Customized services?</h3>
                      <p className="!text-blue-100">
                        <span className='text-white font-semibold'>- Perfect Fit:</span> No paying for services you don’t need—every piece is built for your brand.
                      </p>
                      <p className="!text-blue-100">
                        <span className='text-white font-semibold'>- Scalable Solutions: </span> Start small or go big, with room to grow as your business does.
                      </p>
                      <p className="!text-blue-100">
                        <span className='text-white font-semibold'>- US Market Expertise: </span> Strategies that resonate with American audiences and trends in 2025.
                      </p>
                      <p className="!text-blue-100">
                        <span className='text-white font-semibold'>- Hands-On Support: </span> A dedicated partner who’s as invested in your success as you are.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row !space-y-4 sm:!space-y-0 sm:!space-x-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="!px-8 !py-4 !text-lg !font-bold !text-center !text-blue-600 !bg-white rounded-lg shadow-md hover:!bg-gray-100 transition-colors duration-300 cursor-pointer flex gap-4 items-center"
                  >
                    <IoGridSharp /> Get Start <FaArrowRightFromBracket />
                  </button>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="hidden md:block relative bg-blue-700">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
                <div className="relative !h-full !p-8 flex items-center justify-center">
                  <div className="!bg-white !p-6 rounded-xl shadow-2xl !max-w-xs transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="!text-blue-600 !font-bold !text-xl !mb-2">Your Custom Plan</div>
                    <div className="!h-48 !bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg !p-4">
                      <div className="flex justify-between !mb-3">
                        <span className="!text-sm !text-blue-600">Services</span>
                        <span className="!text-sm !font-bold !text-green-600">Custom</span>
                      </div>
                      <div className="flex justify-between !mb-3">
                        <span className="!text-sm !text-blue-600">Budget</span>
                        <span className="!text-sm !font-bold !text-green-600">Flexible</span>
                      </div>
                      <div className="flex justify-between !mb-3">
                        <span className="!text-sm !text-blue-600">Duration</span>
                        <span className="!text-sm !font-bold !text-green-600">Adjustable</span>
                      </div>
                      <div className="!mt-4 !pt-3 !border-t border-blue-200">
                        <span className="!text-xs !text-blue-500">Tailored exactly to your requirements</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PopupContact menu */}
        <PopupContact
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
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