import React from 'react'
import HomeHero from '../components/HomeContent/HomeHero'
import HomeBanner from '../components/HomeContent/HomeBanner'
import HomeCards from '../components/HomeContent/HomeCards'
import FAQ from '../components/HomeContent/FAQ'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeBanner />
      <HomeCards />
      <FAQ />
    </div>
  )
}

export default Home
