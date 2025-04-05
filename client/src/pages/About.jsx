import React from 'react'
import Hero from '../components/Others/Hero'
import { AboutHero } from '../assets/Data/HeroData'
import AboutBanner from '../components/AboutContent/AboutBanner'
import AboutCards from '../components/AboutContent/AboutCards'
import AboutUsContent from '../components/AboutContent/AboutUsContent'

const About = () => {
  return (
    <div>
      <Hero AboutHero={AboutHero} />
      <AboutUsContent />
      <AboutBanner />
      <AboutCards />
    </div>
  )
}

export default About
