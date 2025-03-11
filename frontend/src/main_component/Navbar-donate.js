import React from 'react'
import './main.css'



import { BrowserRouter as Router, Routes, Route,Link, useNavigate } from "react-router-dom";
import { Button } from 'bootstrap';



const Navbardonate = () => {
  const navi = useNavigate()
  const donate = () =>{
    navi('/main/donate_page/donate_things')
  }

  return (
    <div className='navbar'>
        <div className='bar_text'><h2 className='open'>Open </h2>
        <h2 className='donation'>Donation</h2></div>

<div className='side_bar'>

            
<button className='side-bar-text' onClick={donate}>Donate Now 🤲</button>


       
</div>
    </div>
  )
}

export default Navbardonate