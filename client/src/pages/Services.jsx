import React from 'react'
import HomeHero from '../components/HomeContent/HomeHero'
import ServicesCont from '../components/ServicesContent/ServicesCont'
import Hero from '../components/Others/Hero'
import { serviceHero } from '../assets/Data/HeroData'

const Services = () => {
  return (
    <div>
      <Hero serviceHero={serviceHero} />
      <ServicesCont />
    </div>
  )
}

export default Services
