import FindHome from '@/components/find-home'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HomiMatch from '@/components/homi-match'
import HomiMessage from '@/components/homi-message'
import LandlordTestimonial from '@/components/landlord-testimonial'
import React from 'react'


const Home = () => {
  return (
    <div>
       <Header/>
       <FindHome/>
       <HomiMessage/>
       <HomiMatch/>
       <LandlordTestimonial/>
       <Footer/>
    </div>
  )
}

export default Home