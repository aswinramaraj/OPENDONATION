import React from 'react';
import './main_component/main.css';
import Navbar from './main_component/navbar';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navi = useNavigate()
    const routecontact = () =>{
        navi('/main/contact')
      }
  return (
    <div className="about-page-container">
     <div className='nav_up'>
          <h5 className='main-nav-email'>email : donate@gmail.com</h5>
          <h5 className='main-nav-phone'>Phone :+91 9876543210</h5><br />
          <div className="nav-up-home">
             <h2 className='nav-home-open'>Open</h2>
             <h2 className='nav-home-donate'>Donate</h2>
             <div className="home-side-path">
              <button className='btn-home' ><h3 className='home-side-about' >About us</h3></button>
              
              <button className='btn-home'><h3 className='home-side-cause'>Cause</h3></button>
              <button className='btn-home'><h3 className='home-side-gallery'>Gallery</h3></button>
              <button className='btn-home' onClick={routecontact}><h3 className='home-side-contact'>Contact</h3></button>
             </div>
          </div>
      </div>

      <div className="about-section">
        <h2>About Us</h2>
        <p>
          Open Donation is a platform that connects people with items they no longer need to those who can use them. We believe in creating a community where people can help each other by giving and receiving donations in a seamless and easy way.
        </p>

        <h3>Our Mission</h3>
        <ul>
          <li>To create a more sustainable world by encouraging donation of unwanted items.</li>
          <li>To provide a transparent and trustworthy platform for donations.</li>
          <li>To empower individuals and communities by providing access to goods and resources they need.</li>
        </ul>

        <h3>How It Works</h3>
        <p>
          Users can donate items they no longer need by creating a post on our platform. Those in need can browse through the available donations and claim the items that meet their requirements.
        </p>

        <h3>Join Us</h3>
        <p>
          Whether you're looking to donate or in need of a donation, we invite you to join our community today and help us make a difference.
        </p>
      </div>
    </div>
  );
};

export default About;
