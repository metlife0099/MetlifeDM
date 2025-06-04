import React from 'react'
import HomeHero from '../components/HomeContent/HomeHero'
import HomeBanner from '../components/HomeContent/HomeBanner'
import HomeCards from '../components/HomeContent/HomeCards'
import FAQ from '../components/HomeContent/FAQ'
import HomeWebContent from '../components/HomeContent/HomeWebContent'
import HomeWebBanner from '../components/HomeContent/HomeWebBanner'
import CallToAction from '../components/Others/CallToAction'
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta name="google-site-verification" content="zOo5mDIS73dG0bMDz6uZq6aFIhd7uGRph2WRoWa13sQ" />
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
      </Helmet>

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
