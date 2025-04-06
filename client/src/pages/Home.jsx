import React from 'react'
import HomeHero from '../components/HomeContent/HomeHero'
import HomeBanner from '../components/HomeContent/HomeBanner'
import HomeCards from '../components/HomeContent/HomeCards'
import FAQ from '../components/HomeContent/FAQ'
import HomeWebContent from '../components/HomeContent/HomeWebContent'
import HomeWebBanner from '../components/HomeContent/HomeWebBanner'
import CallToAction from '../components/Others/CallToAction'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeBanner />
      <HomeWebBanner />
      <HomeWebContent />
      <HomeCards />
      
      <FAQ />
      <CallToAction />
    </div>
  )
}

export default Home
