import FindHome from '@/Components/FindHome'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import HomiMatch from '@/Components/HomiMatch'
import HomiMessage from '@/Components/HomiMessage'
import LandlordTestimonial from '@/Components/LandlordTestimonial'
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