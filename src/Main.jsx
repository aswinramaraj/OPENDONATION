import React from 'react'
import './main_component/main.css'
import Navbar from './main_component/navbar'
import Home from './main_component/Home'
import About from './main_component/About'

const Main = () => {
  return (
    <div>
      <div className='nav_up'>
          <h5 className='main-nav-email'>email : donate@gmail.com</h5>
          <h5 className='main-nav-phone'>Phone :+91 9876543210</h5><br />
          <div className="nav-up-home">
             <h2 className='nav-home-open'>Open</h2>
             <h2 className='nav-home-donate'>Donate</h2>
             <div className="home-side-path">
              <h3 className='home-side-about' >About us</h3>
              <h3 className='home-side-cause'>Cause</h3>
              <h3 className='home-side-gallery'>Gallery</h3>
              <h3 className='home-side-contact'>Contact</h3>
             </div>
          </div>
      </div>
      
     <Home/>
     

    </div>
  )
}

export default Main