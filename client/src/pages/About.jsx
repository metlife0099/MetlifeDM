import React from 'react'
import Hero from '../components/Others/Hero'
import { AboutHero } from '../assets/Data/HeroData'
import AboutBanner from '../components/AboutContent/AboutBanner'
import AboutCards from '../components/AboutContent/AboutCards'

const About = () => {
  return (
    <div>
      <Hero AboutHero={AboutHero} />
      <AboutBanner />
      <AboutCards />
    </div>
  )
}

export default About
