import React from 'react'
import { Route , BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Home/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ContactPage from './pages/ContactUs'
import Services from './pages/Services'
import JoinUs from './pages/JoinUs'
import Web from './pages/SERVICES/Web'
import Vfx from './pages/SERVICES/Vfx'
import Design from './pages/SERVICES/Design'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Saas from './pages/SERVICES/Saas'
import Game from './pages/SERVICES/GameDev'
import CaseStudies from './pages/CaseStudies'
import CaseStudyPage from './pages/Case'
import ArVr from './pages/SERVICES/ArVr'
import Test from './pages/Test'


const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router basename="/">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Projects />} />
          <Route path='/test' element={<Test />} />

          <Route path='/case1' element={<CaseStudyPage />} />
          

          {/* done */}
          <Route path='/about' element={<About />} />

          <Route path='/contact' element={<ContactPage />} />
          <Route path='/join' element={<JoinUs />} />
          <Route path='/game' element={<Game />} />
          <Route path='/saas' element={<Saas />} />          
          <Route path='/web' element={<Web />} />
          <Route path='/vfx' element={<Vfx />} />
          <Route path='/design' element={<Design />} />
          <Route path='/ar-vr' element={<ArVr />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />


          {/* <Route path='/case' element={<CaseStudies />} /> */}


        </Routes>
      </Router>
    </main>
  )
}

export default App
