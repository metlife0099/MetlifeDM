import React from 'react'
import Hero from '../components/Others/Hero'
import { TestimonialHero } from '../assets/Data/HeroData'

const Testimonials = () => {
  return (
    <div>
      <Hero TestimonialHero={TestimonialHero} />
    </div>
  )
}

export default Testimonials
