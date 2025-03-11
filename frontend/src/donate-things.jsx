import React, { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './main_component/navbar.css'

const Donatethings = () => {
  const [item,setitem] = useState("")
  const [email,setemail] = useState("")
  const  [number,setnumber] = useState("")
  const [img,setimg] = useState("")
  const [loc,setloc] = useState("")
  const [des,setdes] = useState("")
  const [msg,setmsg] = useState("")
  const navi = useNavigate()

  const handlesubmit = async (e) =>{
    e.preventDefault()
    const formData = {
      item,
      email,
      number,
      img,
      loc,
      des,
    };

    try {
      const response = await axios.post("http://localhost:7010/donate-data", formData);
      setmsg(response.data.msg || "Signup successful!");
      if(response.status === 201)
      {
        navi('/main/donate_page/donate_things/thank')
      }
      console.log("Data sent successfully", response.data);
    } catch (error) {
      console.error("Error sending donate data:", error);
    }
  }
  return (
    <div className='sent-box'>
      <div className='nav'>
        <h2 >Donate</h2>
        
      </div>
     
      <div className='form'>
      <form onSubmit={handlesubmit}>
         <h2 >{msg}</h2>
        <label htmlFor="" className='name'>Item Name</label>
        <label htmlFor="" className='email'>Email Address</label><br />
        <input type="text" placeholder='Enter the item name' value={item} onChange={(e)=>{setitem(e.target.value)}} className='input-name'/>
        <input type="text" placeholder='Enter your Email' value={email} onChange={(e)=>{setemail(e.target.value)}} className='input-email'/><br/>


        <label htmlFor="" className='number'>Number</label>
        <label htmlFor="" className='img1'>Image link</label><br />
        <input type="text" placeholder='Enter your Number' value={number} onChange={(e)=>{setnumber(e.target.value)}} className='input-num'/>
        <input type="text" placeholder='Enter the image link' value={img} onChange={(e)=>{setimg(e.target.value)}} className='input-img'/><br/>


        <label htmlFor="" className='loc'>Location</label>
        <label htmlFor="">  </label><br/>
        <input type="text" placeholder='Enter the Your location' value={loc} onChange={(e)=>{setloc(e.target.value)}} className='input-loc'/>
        <br/>
        <label className='des'>Description</label><br />
        <textarea rows="4" cols="50" placeholder="Enter your item description..." className='input-des' value={des} onChange={(e)=>{setdes(e.target.value)}}></textarea> <br />
        <button type='submit' className='donate-btn'>Donate</button>

      </form>
      </div>
    </div>
  )
}

export default Donatethings