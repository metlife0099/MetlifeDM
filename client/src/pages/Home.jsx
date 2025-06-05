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
        <title>Best Digital Marketing Company in Miami, FL | Metlifedm</title>
        <meta name="description" content="Metlifedm is the best digital marketing agency in Miami, FL, offering expert SEO, social media, PPC, and web solutions to grow your brand online. Partner with the top digital marketing company in Miami today!" />
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
