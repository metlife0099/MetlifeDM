import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Pricing from './pages/Pricing'
import ScrollToTop from './components/Others/ScrollToTop'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
