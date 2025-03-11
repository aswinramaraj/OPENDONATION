import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
    const navi = useNavigate()
    const home = (e) =>{
        navi('/main')
    }
  return (
    <div className="thank-you-container">
      <div className="thank-you-box">
        <h1>Thank You!</h1>
        <p className="quote">“No one has ever become poor by giving.”</p>
        <button className="donate-button" onClick={home}>Done</button>
      </div>
    </div>
  );
};

export default ThankYouPage;

// Add this CSS to style the page professionally
const styles = `
  .thank-you-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }

  .thank-you-box {
    text-align: center;
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .quote {
    font-style: italic;
    font-size: 20px;
    margin: 20px 0;
  }

  .donate-button {
    background-color: #fd4605;
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .donate-button:hover {
    background-color: #d93c04;
  }
`;

const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);