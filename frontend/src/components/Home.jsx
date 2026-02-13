import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJob from './LatestJob'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <HeroSection></HeroSection>
    <CategoryCarousel></CategoryCarousel>
    <LatestJob></LatestJob>
    <Footer></Footer>
    </div>
  )
}

export default Home