import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./signup";
import Main from './Main';
import Donate from './donate';
import Donatethings from './donate-things';
import Thank from './thank';
import ProductPage from './Claim';
import About from './About';
import Contact from './Contact';

const Routerlink = () => {
  return (
    <div>
         <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign" element={<Signup />} />
        <Route path='/main' element={<Main/>}/>
        <Route path = '/main/contact' element={<Contact/>}/>
        <Route path = '/main/about' element={<About/>}/>
        <Route path='/main/donate_page' element={<Donate/>}/>
        <Route path='/main/donate_page/donate_things' element={<Donatethings/>}/>
        <Route path='/main/donate_page/donate_things/claim' element={<ProductPage/>}/>
        <Route path = '/main/donate_page/donate_things/thank' element={<Thank/>}/>

      </Routes>
    </Router>
    </div>
  )
}

export default Routerlink