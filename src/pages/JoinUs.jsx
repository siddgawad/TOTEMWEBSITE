import React from 'react'
import CareersSection from '../components/JoinUs/CareersSections'
import Navbar from '../components/Home/Navbar'
import Openings from '../components/JoinUs/Openings'

const JoinUs = () => {
  return (
    <div className='bg-[#000e00]'>
      <div className='pt-24 sm:pt-32'></div>
      <Navbar />
      <CareersSection />
      <div className='p-8 sm:p-16 md:p-24 lg:p-64'>
        <div className="w-full sm:w-[845px] text-white text-xl sm:text-2xl md:text-[33.20px] font-medium font-['Inter']">
        At Totem Interactive, we’re more than just colleagues—we’re a tribe. A place where creativity flows, and innovation is a daily habit. Sound like your kind of workplace? Then let’s talk.        </div>
        <Openings />
      </div>
    </div>
  )
}

export default JoinUs