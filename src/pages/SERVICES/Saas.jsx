import React from 'react'
import ExpertiseSection from '../../components/Services/ExpertiseSection'
import MagicSection from '../../components/Services/MagicSection'
import Banner from '../../components/Services/Banner'
import Navbar from '../../components/Home/Navbar'
import JoinOurTribeBanner from '../../components/About/AboutBanner'
import web from '../../assets/service/1Saas.png'
import videoSource from '../../assets/service/totemvid.mp4'
import Footer from '../../components/Home/Footer'

const VideoContainer = () => {
  return (
    <div className="w-full aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-21 lg:aspect-h-9">
      <video
        className="w-full h-full object-cover rounded-lg shadow-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

const Web = () => {
  return (
    <div className="bg-[#000e00] min-h-screen">
      <Navbar className="fixed top-0 left-0 right-0 z-50" />
      <main className="pt-16 sm:pt-20 md:pt-24">
        <Banner 
          backgroundImage={web}
          text="Bsmart Solutions for a Digital World" 
        />
        <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <VideoContainer />
        </section>
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-['Inter'] leading-relaxed">
              At Totem Interactive, web development isn't just about coding—it's about crafting digital experiences that engage, inspire, and deliver results. From responsive websites to complex web applications, our solutions are designed to elevate your online presence.
            </p>
          </div>
        </section>
        <ExpertiseSection />
        <MagicSection />
        <JoinOurTribeBanner />
        <Footer />

      </main>
    </div>
  )
}

export default Web