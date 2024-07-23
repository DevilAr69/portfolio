import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
function page() {
  return (
    <div className='bg-black'>
      <Navbar />
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default page
