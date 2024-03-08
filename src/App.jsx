import React from 'react'
import NavBar from './components/NavBar'
import CarouselSection from './components/CarouselSection'
import AboutUs from './components/AboutUs'
import Testimonials from './components/Testimonials'
import Statistics from './components/Statistics'
import News from './components/News'
import InquiryForm from './components/InquiryForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
     <CarouselSection/>
     <AboutUs/>
     <Testimonials/>
     <Statistics/>
     <News/>
     <InquiryForm/>
     <Footer/>
    </>
  )
}

export default App
