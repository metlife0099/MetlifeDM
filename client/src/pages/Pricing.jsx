import React from 'react'
import PricingCards from '../components/PricingContent/PricingCards'
import Hero from '../components/Others/Hero'
import { PricingHero } from '../assets/Data/HeroData'

const Pricing = () => {
  return (
    <div>
      <Hero PricingHero={PricingHero} />
      <PricingCards />
    </div>
  )
}

export default Pricing
