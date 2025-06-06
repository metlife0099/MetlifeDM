import React from 'react'
import ServicesCont from '../components/ServicesContent/ServicesCont'
import Hero from '../components/Others/Hero'
import { serviceHero } from '../assets/Data/HeroData'
import ServicesDetails from '../components/ServicesContent/ServicesDetails'
import ServicesDetailsMore from '../components/ServicesContent/ServiceDetailsMore'
import TopServiceBanner from '../components/ServicesContent/TopServiceBanner'
import AddonServiceBanner from '../components/ServicesContent/AddonServiceBanner'
import { Helmet } from 'react-helmet'

const Services = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "MetlifeDM",
      "url": "https://www.metlifedm.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization (SEO)",
            "description": "Improve website rankings on Google and drive organic traffic."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Custom website design and development tailored for business growth."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Marketing",
            "description": "Engaging and SEO-friendly content to increase visibility and conversions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Ads (PPC)",
            "description": "Targeted pay-per-click advertising for faster lead generation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing (SMM)",
            "description": "Strategic campaigns on platforms like Instagram, Facebook, and LinkedIn."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Awareness & Strategy",
            "description": "Build a powerful brand presence across digital channels."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Google Analytics Setup",
            "description": "Track website performance and user behavior with expert analytics setup."
          }
        }
      ]
    },
    "url": "https://www.metlifedm.com/services"
  }

  return (
    <div>
      <Helmet>
        <title>Top SEO Agency in Miami | Website Development - Metlifedm</title>
        <meta name="description" content="Boost your business with Metlifedm – the leading SEO agency in Miami, FL. Get the best SEO services & website development solutions tailored to grow online." />

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <Hero serviceHero={serviceHero} />
      <ServicesCont />
      <TopServiceBanner />
      <ServicesDetails />
      <AddonServiceBanner />
      <ServicesDetailsMore />
    </div>
  )
}

export default Services
