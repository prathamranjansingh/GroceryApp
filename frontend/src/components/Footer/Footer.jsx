import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo.png";
import SocialMedia from "../../assets/Socialmedia-icons.png";
import Payment from "../../assets/Payment.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="GrocerGo Logo" className="flogo" />
          <div className="logoText">
            <h1>GrocerGo</h1>
            <h2>Grocery</h2>
          </div>
        </div>

        <div className="useful-links">
          <div className="title">
            <h2>Useful links</h2>
          </div>
          <div className="list">
            <ul>
              <li>About Us</li>
              <li>Refund Policy</li>
              <li>Terms And Condition</li>
              <li>
                <div className="payment">
                  <img src={Payment} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-us">
          <div className="title">
            <h2>Contact Us</h2>
          </div>
          <div className="list">
            <ul>
              <li>
                <b>Address:</b> 1762 School House Road
              </li>
              <li>
                <b>Call Us:</b> 1233-777
              </li>
              <li>
                <b>Email:</b> groceyish@contact.com
              </li>
              <li>
                <div className="social">
                  <img src={SocialMedia} alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
