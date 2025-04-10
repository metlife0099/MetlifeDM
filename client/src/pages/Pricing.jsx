import React from 'react'
import PricingCards from '../components/PricingContent/PricingCards'
import Hero from '../components/Others/Hero'
import { PricingHero } from '../assets/Data/HeroData'
import OfferBonus from '../components/PricingContent/OfferBonus'

const Pricing = () => {
  return (
    <div>
      <Hero PricingHero={PricingHero} />
      <OfferBonus />
      <PricingCards />
    </div>
  )
}

export default Pricing
