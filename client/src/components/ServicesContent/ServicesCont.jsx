import React, { useState } from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';
import Website from '../../assets/images/website.gif';
import SEO from '../../assets/images/seo.gif';
import GoogleAds from '../../assets/images/google.gif';
import PayPerClick from '../../assets/images/pay-per-click.gif';
import SocialMedia from '../../assets/images/social-media-marketing.gif';

import Check from '../../assets/gifIcons/double-check.gif'
import { Link } from 'react-router-dom';

const ServicesCont = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Website Development',
      main: "Your website is your business’s digital storefront Isn't it? if YES so ",
      description: 'let’s build your website that works for your business which NOT ONLY look great but also drive traffic, leads, and sales.',
      mainPt1: "❌ Did you know? 53% of visitors leave in 3 seconds or less! if your website is slow or outdated.",
      mainPt2: "❌ You’re losing 70% of potential buyers! because your website is not mobile friendly.",
      mainPt3: "❌ 100% there is NO CLIENT TRUST if your website is unprofessional",
      experience: 'Explore More',
      image: Website,
      popupdesc: "We don't just build website. We create SALES - DRIVEN MACHINE that turn's your visitors into PAYING CLIENTS!",
      
      point1: "Custom Design – Stunning web design that WOWs your audience.",
      point2: "User-Friendly & Scalable – Easy navigation & future-proof solutions.",
      point3: "Fast & Secure – Lightning-fast load speeds & top-tier security.",
      point4: "Mobile-Friendly & SEO-Optimized – Rank higher & attract more visitors.",
    },
    {
      id: 2,
      name: 'Search Engine Optimization (SEO)',
      description: "Your website is your business’s digital storefront Isn't it? if YES then it should be your #1 lead-genaration machine- but if it's not bringing In-consistent, high-quality leads, then 'no doubt you're losing your money on SEO' for ",
      mainPt1: "❌ No website traffic",
      mainPt2: "❌ Not showing up on Google",
      mainPt3: "❌ Losing leads to bigger competitors",
      experience: 'Explore More',
      image: SEO,
      popupdesc: "Stop chasing clients, let them find you on google!- Get ranked, Found and FLOODED with high quality leads by powerful result driven SEO which will dominate your business in digital world 🌎.",
      
      point1: "On-Page & Technical SEO – Optimized content, speed, and structure.",
      point2: "Local & National SEO – Rank for your target audience, wherever they are.",
      point3: "Keyword & Competitor Research – Outrank your competition with data-driven insights.",
      point4: "Quality Backlinks & Content Marketing – Build authority & drive organic growth.",
    },
    {
      id: 3,
      name: 'Google Ads & Analytics',
      main: "Your competitors are STEALING your CLIENTS ",
      description: "while your ads struggle to convert! Stop the bleeding and stop wasting your money NOW! By the way Google Analytics looks like a maze—traffic is coming in, but where are the qualified buyers?",
      mainPt1: "❌ You’re paying for traffic that never converts",
      mainPt2: "❌ You have NO IDEA where your ad budget is actually going",
      mainPt3: "❌ You’re running campaigns blindly, hoping for results",
      experience: 'Explore More',
      image: GoogleAds,
      popupdesc: "Here’s the hard truth: Every second you’re running unoptimized ads, you’re BURNING CASH on bad targeting, wasted clicks, and lost leads! Here is a time NOW to take control of your marketing success.",
      
      point1: "We set up Google Analytics PROPERLY so you know EXACTLY where your money is going!",
      point2: "We fix your Google Ads to bring in HIGH-QUALITY leads that actually convert!",
      point3: "Quality Backlinks & Content Marketing – Build authority & drive organic growth.",
      point4: "Real-Time Tracking – Know where your visitors come from & what they do.",
    },
    {
      id: 4,
      name: "Pay-Per-Click Service",
      main: "PPC is draining your money and you know it right! ",
      description: 'Google & Facebook Ads feel like a BLACK HOLE—money goes in, NOTHING comes out! because of this harsh truth:',
      mainPt1: "❌ You’re PAYING for the WRONG traffic.",
      mainPt2: "❌ You’re getting clicks from people who will NEVER buy.",
      mainPt3: "❌ Your competitors are OUTBIDDING YOU and STEALING YOUR CUSTOMERS.",
      experience: 'Explore More',
      image: PayPerClick,
      popupdesc: "Clicks are coming in, but where are the SALES? STOP wasting your money on ads that don’t convert! It’s NOW time to take control all over and start dominating because you can now TRACK, OPTIMIZE, and SCALE your PPC service. Let’s build a PPC campaign that actually WORKS!",
      
      point1: "Precision targeting—Ads reach the RIGHT audience, not random clicks.",
      point2: "Conversion-focused strategy—More leads, more sales, ZERO wasted budget.",
      point3: "Conversion-optimized strategy—Turn traffic into revenue, not just visits.",
      point4: "Advanced tracking & AI-powered insights—Know what works, fix what doesn’t!",
    },
    {
      id: 5,
      name: "Social Media Marketing",
      main: "Does your Social Media Marketing Burning Cash Instead of Making Sales? ",
      description: 'STOP the cycle of wasting your money for ZERO ROI! Here’s the brutal truth:',
      mainPt1: "❌ Your content isn’t converting—because it’s not built to sell.",
      mainPt2: "❌ You’re attracting the wrong audience—engagement means NOTHING without buyers.",
      mainPt3: "❌ Your competitors are using DATA to dominate—while you’re stuck guessing.",
      experience: 'Explore More',
      image: SocialMedia,
      popupdesc: "Your social media should be a SALES MACHINE, not 'JUST LIKES'  or  money drainer —let’s make your social media work FOR YOU! and TURN SOCIAL MEDIA INTO A SALES MACHINE",
      
      point1: "Precision audience targeting—We don’t chase likes, we attract buyers.",
      point2: "We only target buyers, not random scrollers.",
      point3: "Conversion-optimized content—Every post, ad, and story is built to SELL.",
      point4: "AI-powered tracking & optimization—No more guessing, just RESULTS.",
    },
    {
      id: 6,
      name: "Lead Generation Service",
      main: "Why are you spending Money on Lead Generation that Brings ZERO Sales? ",
      description: 'STOP your pipeline is FULL…but where are the actual leads for SALES? Your leads should be MONEY MACHINE for you—not costing you a fortune! Here’s the brutal reality:',
      mainPt1: "❌ You’re attracting the WRONG audience—tire kickers, not buyers.",
      mainPt2: "❌ Your follow-up system is BROKEN—leads are slipping through the cracks.",
      mainPt3: "❌ Your competitors are using DATA to dominate—while you’re stuck guessing!",
      experience: 'Explore More',
      image: SocialMedia,
      popupdesc: "Stop chasing leads—let them come to you with More leads. More sales. Less wasted budget because that's what we are best at!  Our lead generation services use data-driven strategies, targeted ads, and automation to attract and convert the right customers for your business. ",
      
      point1: "Hyper-targeted lead generation—No more cold leads, just hot buyers.",
      point2: "Conversion-optimized strategy—More leads, more deals, ZERO wasted budget.",
      point3: "Landing page & funnerl optimization - turn visitors into PAYING CLIENTS.",
      point4: "Advanced tracking & AI-powered insights—Know what works, fix what doesn’t!",
    },
    {
      id: 7,
      name: "Brand Awarness",
      main: "Did you know 87% of potential clients scroll past your business ",
      description: 'without a second glance and the business fails because of outdated brand awareness marketing strategies. It means a total waste of your money because',
      mainPt1: "❌ No proper branding marketing strategy.",
      mainPt2: "❌ Spending thousands on outdated technology and strategy  for zero result.",
      mainPt3: "❌ Remember your competitors are using a cutting-edge strategy to steal the spotlight and you are stuck with outdated technology.",
      experience: 'Explore More',
      image: SocialMedia,
      popupdesc: "We don't just create strategies for your brand awareness- we engineer it! Imagine a system that brings in ready-to-buy clients while you can just focus on your running business.",
      
      point1: "Our strategy doesn't just bring leads- we bring sales, growth and unstoppable brand authority.",
      point2: "Profit- driven marketing system that turns traffic into PAYING CLIENTS.",
      point3: "Masters in the strategy system that takes you from stuck to unstoppable- fast using Advanced AI.",
      point4: "Our pinpoint accuracy just target your ideal clients, ensuring every dollar you spend hits the right audience.",
    },
    {
      id: 8,
      name: "Content creation",
      main: "You’re pouring your soul into words, hitting ‘publish’ with big dreams, and then… NOTHING. ",
      description: 'No clicks, no shares, just a big fat silence staring back at you. Sound like your personal nightmare? because of',
      mainPt1: "❌ Lack of Engagement in content writing.",
      mainPt2: "❌ Poor Structure- rambling ideas, no clear beginning or end.",
      mainPt3: "❌ Overused or Bland Ideas- Rehashing generic topics without a fresh angle.",
      experience: 'Explore More',
      image: SocialMedia,
      popupdesc: "your content shouldn’t be a soul-crushing slog—it should be a WEAPON. We’re talking hooks that stab straight to the heart, lines that make jaws drop, and a secret twist that turns ‘meh’ into ‘MORE. We are exposing the hidden thorn in your side.",
      
      point1: "Create Content That Solves Problems.",
      point2: "Reverse-Engineer about your  audience.",
      point3: "Find a trending post in your niche, then flip it with your spin.",
      point4: "Using a plug-and-play structure.",
    },
    {
      id: 9,
      name: "Weekly plan for SMM",
      main: "Alright, buckle up—because I’m about to drop a truth bomb ",
      description: "that’ll make you rethink EVERYTHING about your social media game! You’ve got a weekly plan, you’re posting like a champ, but… where are the leads?  What’s going WRONG? It's because ",
      mainPt1: "❌ Lack of Strategy- Posting randomly without goals.",
      mainPt2: "❌ timing and frequency issue- posting at the wrong time or posting late.",
      mainPt3: "❌ Algorithm Blind Spots- Posts get buried, wasting your effort.",
      experience: 'Explore More',
      image: SocialMedia,
      popupdesc: "Here’s the deal: your weekly plan isn’t broken—it’s just missing the juice! We are about to drop the ultimate fix that’ll turn your plan into a LEAD-GRABBING machine—let’s GO!",
      
      point1: "Tailor posts to your audience’s needs—solve their problems!",
      point2: "Batch-create content to stay consistent.",
      point3: "Add a bold CTA to every post.",
      point4: "4. Peek at insights mid-week and tweak what’s off.",
    },
    {
      id: 10,
      name: "Email, whatsapp and sms marketing ",
      main: "Are you pouring time, money, and caffeine-fueled creativity into email, WhatsApp, and SMS campaigns ",
      description: "—only to watch them flop like a bad stand-up routine?The brutal truth? —most of it gets deleted, blocked, or simply ignored. ",
      mainPt1: "❌ Your emails sit unopened.",
      mainPt2: "❌ Your WhatsApp messages get ignored.",
      mainPt3: "❌ Your SMS campaigns feel like they’re vanishing into thin air.",
      experience: 'Explore More',
      image: SocialMedia,
      popupdesc: "We will flip the script with hyper-personalized, curiosity-charged, value-packed messaging that demands attention.No more ghosting. No more wasted leads. Just real engagement and real conversions.",
      
      point1: "Email: Avoid spam filters, grab attention with killer subject lines, and use AI-driven automation for higher replies.",
      point2: "WhatsApp: Use conversational marketing (instead of robotic blasts) to increase response rates by up to 80%.",
      point3: "SMS: Time-sensitive, action-driven texts that command attention and drive instant clicks.",
      point4: "Every message feels tailor-made, not generic spam.",
    },
    {
      id: 11,
      name: "Reputation Management services ",
      main: "From Trash Talk to Top Rank – Reclaim Your Rep! ",
      description: "Is your online reputation spiraling into a fiery dumpster of doom? One rogue review, one snarky X post, one viral “They screwed me!” rant—and suddenly, your brand’s name is mud. ",
      mainPt1: "❌ Fake or angry reviews are scaring away potential customers.",
      mainPt2: "❌ Your competitors look better online—even if they’re not!",
      mainPt3: "❌ Google, Yelp, and social media are shaping your brand—without your control.",
      experience: 'Explore More',
      image: SocialMedia,
      popupdesc: "Imagine this: a crack team—or a slick AI-powered system—scouring the web, X, and review sites 24/7, burying the haters with a flood of glowing testimonials, polished responses, and SEO magic.Watch the skeptics turn into superfans.",
      
      point1: "Jaw-dropping content.",
      point2: "trust-building PR hits,",
      point3: "A real-time crisis control",
      point4: "Monitor, respond, and protect your reputation—24/7.",
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <section className="!py-12 md:!py-18 !bg-gray-100">
      <div className="container mx-auto !px-5 lg:px-0">
        <div className="!text-center !mb-16">
          <h1 className="!text-4xl md:!text-6xl !font-bold !text-gray-900 !mb-2">
          How the Best SEO & Web Development Company <span className="!text-blue-500">in Miami </span>is Changing the <span className="!text-blue-500">Digital Game</span> for Local Brands
          </h1>
          <p className="!text-xl !text-gray-600 !max-w-3xl !mx-auto">
          Fuel your brand. Dominate the digital world with
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white !p-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl cursor-pointer relative flex flex-col gap-4"
            >
              {/* Team Member Image */}
              <div className="w-full  rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[200px] object-cover"
                />
              </div>

              {/* Team Member Details */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800 !my-2">{member.name}</h3>
                <span className="block w-[150px] h-[4px] bg-blue-600 !my-2"></span>
                <p className="text-sm text-gray-600"><span className="font-semibold text-gray-700">{member.main}</span> {member.description}</p>
                <div className="!mt-3">
                <p className="text-sm text-gray-500 !mt-1">{member.mainPt1}</p>
                <p className="text-sm text-gray-500 !mt-1">{member.mainPt2}</p>
                <p className="text-sm text-gray-500 !mt-1">{member.mainPt3}</p>
                </div>
                <p className="text-sm text-gray-500 !mt-5">{member.experience}</p>

                {/* Eye Icon in Bottom-Right Corner */}
                <div
                  className="absolute bottom-4 right-4 text-blue-500 hover:text-blue-700 transition-all cursor-pointer !mt-5"
                  onClick={() => handleMemberClick(member)}
                >
                  <FaEye className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup for Selected Team Member */}
      {selectedMember && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white !p-6 sm:!p-8 rounded-lg shadow-lg max-w-md w-full relative"
            style={{
              animation: "modalFadeIn 0.3s ease-out",
            }}
          >
            {/* Close Button Inside Modal */}
            <button
              className="absolute top-4 right-4 text-blue-500 hover:text-blue-700 cursor-pointer"
              onClick={closePopup}
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Popup Content */}
            <div className="text-center !py-8">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-52 h-[150px] rounded-lg !mx-auto object-cover !mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 !mb-2">
                {selectedMember.name}
              </h3>
              <p className="text-md text-gray-700">{selectedMember.popupdesc}</p>
            </div>

            <div className="flex flex-col !mb-5 gap-2">
              <p className="flex gap-2 bg-gray-100 !p-1 rounded-lg"><img src={Check} alt="" className='w-10 h-10' />
              {selectedMember.point1}
              </p>
              <p className="flex gap-2"><img src={Check} alt="" className='w-10 h-10' />
              {selectedMember.point2}
              </p>
              <p className="flex gap-2 bg-gray-100 !p-1 rounded-lg"><img src={Check} alt="" className='w-10 h-10' />
              {selectedMember.point3}
              </p>
              <p className="flex gap-2"><img src={Check} alt="" className='w-10 h-10' />
              {selectedMember.point4}
              </p>
            </div>

            <div className="w-full">
            <Link
                to="/contact" // Replace with your contact page route
                className="w-full border-2 !py-2 !px-4 border-blue-500 font-semibold !mt-10 rounded-lg cursor-pointer hover:bg-blue-700 hover:text-white transition-all"
              >
                Send us Inquiry
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS for Modal Animation */}
      <style>
        {`
          @keyframes modalFadeIn {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ServicesCont;