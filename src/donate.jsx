import React, { useEffect, useState } from "react";
import axios from "axios";
import "./main_component/navbar.css";
import { useNavigate } from "react-router-dom";

const Donate = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7010/receve-data")
      .then((response) => setData(response.data.data1))
      .catch((err) => console.log(err));
  }, []);

  const claim = async (item) => {
    try {

      console.log(item)
    
      navigate("/main/donate_page/donate_things/claim",{ state: { item } });
    }
    catch(err)
    {
      console.log(err)
    }
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">Donation</h1>
        <p className="navbar-quote">"Giving is about making a difference."</p>
        <button onClick={() => navigate('/main/donate_page/donate_things')}>
          Donate Now
        </button>
      </nav>

      {/* Donation Items */}
      <div className="container">
        <div className="items">
          {data.length > 0 ? (
            data.map((item, index) => (
              <div className="item-box" key={index}>
               
                <div className="item-img">
                  <img src={item.img} alt={item.item}  className="img"/>
                </div>
                <div className="div">
                <h2 className="title">{item.item}</h2><br />

                <p className="location">Location: {item.loc}</p>
                <p className="des">{item.des}</p>
<button className="btn" onClick={() => claim(item)}>Claim</button>                </div>
                
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Donate;
