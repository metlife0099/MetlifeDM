import React from 'react'
import Icon1 from '../../assets/icons/folder.png'
import Icon2 from '../../assets/icons/monitor.png'
import Icon3 from '../../assets/icons/badge.png'
import Icon4 from '../../assets/icons/transparency.png'
import Icon5 from '../../assets/icons/solution.png'
import Icon6 from '../../assets/icons/bullhorn.png'

const aboutCard = [
  {
    icon: Icon1,
    title: 'Proven Track Record of Success',
    description: 'We’ve helped businesses across industries achieve higher conversions, increased website traffic, and stronger brand visibility through cutting-edge digital marketing strategies.',
  },
  {
    icon: Icon2,
    title: 'Data-Driven & ROI-Focused Strategies',
    description: 'Every Dollar Spent Should Drive Results – That’s Our ROI-Focused Approach.',
  },
  {
    icon: Icon3,
    title: 'Certified Digital Marketing Experts',
    description: 'Our team consists of Google Ads-certified professionals, SEO specialists, and social media strategists who stay ahead of the latest marketing trends.',
  },
  {
    icon: Icon4,
    title: 'Transparent Reporting & Real-Time Insights',
    description: 'We believe in 100% transparency—you’ll always know where your marketing budget is going. Get detailed reports and access to real-time data on your campaign performance.',
  },
  {
    icon: Icon5,
    title: 'Customized Solutions for Your Business',
    description: 'No one-size-fits-all strategies here! We tailor our services to fit your industry, audience, and goals, whether you’re a small startup or an established brand.',
  },
  {
    icon: Icon6,
    title: 'Full-Service Digital Marketing Under One Roof',
    description: 'From SEO and PPC to social media marketing, content creation, and website development, we handle everything to ensure your business thrives online.',
  },
]

const HomeCards = () => {
  return (
    <section className='!py-12'>
      <div className="container">
        <div className="text-center !mb-18">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 !mb-4">
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-1 sm:!mb-2.5 !mr-1"></span>
            Why Partner with Metlifedm?
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-[#5c7c3b] !mb-1 sm:!mb-2.5 !ml-1"></span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 !mb-8 sm:!mb-12 max-w-[700px] !mx-auto">
            At Metlifedm, we don’t just market—we drive real, measurable growth. Our data-driven strategies ensure your business stands out in the competitive US market.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px]">
          {aboutCard.map((item, index) => (
            <div 
              key={index} 
              className="relative flex flex-col gap-3 border-2 border-solid !p-5 rounded-[10px] bg-white overflow-hidden group transition-all duration-300"
            >
              {/* Hover background element */}
              <div className="absolute inset-0 bg-gradient-to-l from-[#5c7c3b] to-[#8aac5f] opacity-0 group-hover:opacity-100 origin-right scale-y-0 group-hover:scale-y-100 transform transition-transform duration-500 ease-in-out"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <img src={item.icon} alt={item.title} className="w-[80px] h-[80px] object-cover transition-all duration-300"/>
                <h2 className="text-2xl font-bold text-headingColor group-hover:text-white transition-colors duration-300">{item.title}</h2>
                <p className="text-[16px] text-green300 group-hover:text-white transition-colors duration-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeCards