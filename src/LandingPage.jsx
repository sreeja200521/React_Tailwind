import React from 'react'
import HeaderSection from './components/HeaderSection'
import HeroSection from './components/HeroSection'
import ImageGallaery1 from './components/ImageGallaery1'
import ImageGallery2 from './components/ImageGallery2'
import FeatureSection from './components/FeatureSection'
import Process from './components/Process'
import Ratings from './components/Ratings'
import Pricing from './components/Pricing'
import Customerreview from './components/Customerreview'
import Testimonial from './components/Testimonial'
import ConatctForm from './components/ConatctForm'
import Footer from './components/Footer'
import ImageGallery3 from './components/ImageGallery3'

const LandingPage = ({change}) => {
  return (
    <div>
        <HeaderSection change={change}/>
        <HeroSection />
        <ImageGallaery1 />
        <ImageGallery2 />
        <ImageGallery3 />
        <FeatureSection />
        <Process />
        <Ratings />
        <Pricing />
        <Customerreview />
        <Testimonial />
        <ConatctForm />
        <Footer />

    </div>
  )
}

export default LandingPage