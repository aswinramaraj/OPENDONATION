import React, { useRef } from 'react';
import './main_component/main.css';
import Home from './main_component/Home';
import About from './About';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Cause from './Cause';
import Gallery from './Gallery';


const Main = () => {
  const navi = useNavigate();
  const GalleryRef = useRef(null)
  const causeRef = useRef(null); // Create a ref for the Cause component

  const routeabout = () => {
    navi('/main/about');
  };

  const routecontact = () => {
    navi('/main');
  };

  const causeclick = () => {
    if (causeRef.current) {
      causeRef.current.scrollIntoView({ behavior: 'smooth' }); // Use the ref
    }
  };
  const galleryclick = () => {
    if (GalleryRef.current) {
      GalleryRef.current.scrollIntoView({ behavior: 'smooth' }); // Use the ref
    }
  };

  return (
    <div>
      <div className='nav_up'>
        <h5 className='main-nav-email'>email : donate@gmail.com</h5>
        <h5 className='main-nav-phone'>Phone :+91 9876543210</h5><br />
        <div className="nav-up-home">
          <h2 className='nav-home-open'>Open</h2>
          <h2 className='nav-home-donate'>Donate</h2>
          <div className="home-side-path">
            <button className='btn-home' onClick={routeabout}>
              <h3 className='home-side-about'>About us</h3>
            </button>
            <button className='btn-home' onClick={causeclick}>
              <h3 className='home-side-cause'>Cause</h3>
            </button>
            <button className='btn-home'>
              <h3 className='home-side-gallery' onClick={galleryclick}>Gallery</h3>
            </button>
            <button className='btn-home' onClick={routecontact}>
              <h3 className='home-side-contact'>Contact</h3>
            </button>
          </div>
        </div>
      </div>

      <Home />
      <Cause ref={causeRef} /> 
      <Gallery ref={GalleryRef}/>
      <Footer/>
      
    </div>
  );
};

export default Main;