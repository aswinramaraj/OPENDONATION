import React, { useState } from 'react';
import './contact.css'
import './main_component/main.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the server or API here
    alert('Message sent successfully!');
  };

  return (
    <div className="">
        <div className='nav_up'>
          <h5 className='main-nav-email'>email : donate@gmail.com</h5>
          <h5 className='main-nav-phone'>Phone :+91 9876543210</h5><br />
          <div className="nav-up-home">
             <h2 className='nav-home-open'>Open</h2>
             <h2 className='nav-home-donate'>Donate</h2>
             <div className="home-side-path">
              <button className='btn-home'><h3 className='home-side-about' >About us</h3></button>
              
              <button className='btn-home' ><h3 className='home-side-cause'>Cause</h3></button>
              <button className='btn-home'><h3 className='home-side-gallery'>Gallery</h3></button>
              <button className='btn-home'><h3 className='home-side-contact'>Contact</h3></button>
             </div>
          </div>
          </div>
          <div className="contact-box">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-600 font-semibold">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-600 font-semibold">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-600 font-semibold">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Send Message
          </button>
        </form>
      </div>
          </div>
      
     
    </div>
  );
};

export default Contact;
