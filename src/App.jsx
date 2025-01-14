import { useState } from 'react'

import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './component/Home'
import Service from './component/Service'
import About from './component/About'
import Contact from './component/Contact'
import Navbar from './component/Navbar'
import AboutHomeApplication from './component/othercomponent/AboutHomeApplication'
import AboutkitchenApp from './component/othercomponent/AboutkitchenApp'
import AboutSmartphone from './component/othercomponent/AboutSmartphone'
import Aboutcooling from './component/othercomponent/Aboutcooling'
import SmallApp from './component/othercomponent/SmallApp'
import AboutLaptop from './component/othercomponent/AboutLaptop'
import Footer from './component/Footer'
import AboutTv from './component/othercomponent/AboutTv'

function App() {
  

  return (
    <div className='min-h-screen '>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/abouttv' element={<AboutTv/>}/>
      <Route path='/home-appliances' element={<AboutHomeApplication/>}/>
      <Route path='/kitchen-appliances' element={<AboutkitchenApp/>}/>
      <Route path='/smartphones' element={<AboutSmartphone/>}/>
      <Route path='/cooling-solutions' element={<Aboutcooling/>}/>
      <Route path='/small-appliances' element={<SmallApp/>}/>
      <Route path='/laptops' element={<AboutLaptop/>}/>
    </Routes>
    
    <Footer/>
   </div>
  )
}

export default App
