import React from 'react'
import { FAQHero } from '../assets/Data/HeroData'
import Hero from '../components/Others/Hero'
import FAQQues from '../components/FAQContent/FAQQues'

const FAQ = () => {
  return (
    <div>
      <Hero FAQHero={FAQHero} />
      <FAQQues />
    </div>
  )
}

export default FAQ
