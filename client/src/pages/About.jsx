import React from 'react'
import Hero from '../components/Others/Hero'
import { AboutHero } from '../assets/Data/HeroData'
import AboutBanner from '../components/AboutContent/AboutBanner'
import AboutCards from '../components/AboutContent/AboutCards'
import AboutUsContent from '../components/AboutContent/AboutUsContent'
import CallToAction from '../components/Others/CallToAction'

const About = () => {
  return (
    <div>
      <Helmet>
        <title>The Metlifedm Journey That’s Turning Heads in Miami</title>
        <meta name="description" content="Discover why Metlifedm is Miami's go-to digital marketing agency. From SEO and web development to social media marketing, see how they turn ideas into digital success." />
      </Helmet>

      <Hero AboutHero={AboutHero} />
      <AboutUsContent />
      <AboutBanner />
      <AboutCards />
      <CallToAction />
    </div>
  )
}

export default About
