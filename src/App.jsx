import { useState } from 'react'

import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './component/Home'
import Service from './component/Service'
import About from './component/About'
import Contact from './component/Contact'
import Navbar from './component/Navbar'

import Footer from './component/Footer'
function App() {
  

  return (
    <div className='min-h-screen '>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
    
    <Footer/>
   </div>
  )
}

export default App
