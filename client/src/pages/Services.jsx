import React from 'react'
import ServicesCont from '../components/ServicesContent/ServicesCont'
import Hero from '../components/Others/Hero'
import { serviceHero } from '../assets/Data/HeroData'
import ServicesDetails from '../components/ServicesContent/ServicesDetails'
import ServicesDetailsMore from '../components/ServicesContent/ServiceDetailsMore'

const Services = () => {

  return (
    <div>
      <Hero serviceHero={serviceHero} />
      <ServicesCont />
      <ServicesDetails />
      <ServicesDetailsMore />
    </div>
  )
}

export default Services
