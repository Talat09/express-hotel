import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-dark text-white footer">
      <div className="phone">
        <p>Phone Support</p>
        <p>24 HOURS A DAY</p>
        <p>+ 01 345 647 745</p>
      </div>
      <div className="connect">
        <p>Connect With Us</p>
        <p>SOCIAL MEDIA CHANNELS</p>
        <div className="icons">
          <FaInstagram className="icon"></FaInstagram>
          <FaTwitter className="icon"></FaTwitter>
          <FaFacebook className="icon"></FaFacebook>
          <FaPinterest className="icon"></FaPinterest>
          <FaYoutube className="icon"></FaYoutube>
        </div>
      </div>
      <div className="subscribe-part">
        <p>Newsletter</p>
        <p>SIGN UP FOR SPECIAL OFFERS</p>
        <div>
          <input type="email" name="email" id="email" />
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
