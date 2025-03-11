import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: donate@gmail.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook | Twitter | Instagram</p>
        </div>
        <div className="footer-section">
          <h3>About</h3>
          <p>We connect donors with those in need. Help us make a difference!</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Open Donate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
