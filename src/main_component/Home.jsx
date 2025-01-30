import React from 'react'
import './home.css'
import Donatethings from '../donate-things'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navi = useNavigate()
  const change = ()=>{
    navi('/main/donate_page')
  }
  return (
    <div className='home'>
    <div className='home-side-text'>
      <h1>GIVE YOUR HAND</h1>
      <h2 className='text2'>TO MAKE THE BETTER WORLD</h2>
      <button className='donate' onClick={change}>Claim Donation</button>
    </div>
 </div>
  )
}

export default Home