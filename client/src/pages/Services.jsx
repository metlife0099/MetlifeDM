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

  return (
    <div>
      <Helmet>
        <title>Top SEO Agency in Miami | Website Development - Metlifedm</title>
        <meta name="description" content="Boost your business with Metlifedm – the leading SEO agency in Miami, FL. Get the best SEO services & website development solutions tailored to grow online." />
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
