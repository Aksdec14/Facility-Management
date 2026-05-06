import React from 'react'
import HeroSection from './pages/Herosection'
import FacilityManagementSolutionsSection from './pages/FacilityManagementSolutionsSection'
import WhyChooseFusionEdge from './components/Whychoosefusionedge'
import CardsSection from './components/CardsSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <HeroSection />
      <FacilityManagementSolutionsSection />
      <WhyChooseFusionEdge />
      <CardsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default page