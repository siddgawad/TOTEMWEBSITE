import React from 'react'
import ExpertiseSection from '../components/Services/ExpertiseSection'
import MagicSection from '../components/Services/MagicSection'
import Banner from '../components/Services/Banner'
import banner from '../assets/service/banner.png'
import Navbar from '../components/Home/Navbar'

const Services = () => {
  return (
    <>
    <div className='bg-[#000e00]'>
        <div className='pt-32'></div>
        <Navbar />
        <Banner 
        backgroundImage={banner}
        text="Our Upcoming Projects" 
      />
      <div className='p-64'>
     <div class=" w-[845px] text-white text-[33.20px] font-medium font-['Inter']">Totem Interactive is a firm believer in the future and its how its all about AI innovation, driving the future of digital experiences. One of our most exciting projects is Velocity, an AI-powered platform designed to revolutionize how users interact with digital content. By leveraging advanced machine learning algorithms, Velocity will offer personalized experiences, predictive analytics, and intelligent automation.
     </div>
     </div>
      <ExpertiseSection />
      <MagicSection />
    </div>
    </>
  )
}

export default Services
