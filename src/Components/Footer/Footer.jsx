import React from 'react';
import "./Footer.scss";
import logo from "../../assets/logo.png";
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>

      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} alt="logo" className='logo' />
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <BsFacebook className='icon' />
            <AiOutlineTwitter className='icon' />
            <BsLinkedin className='icon' />
            <BsGithub className='icon' />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li><a href="/">Home</a></li>
          <li><a href="/">Explore</a></li>
          <li><a href="/">Flight Status</a></li>
          <li><a href="/">Travel</a></li>
          <li><a href="/">Check In</a></li>
          <li><a href="/">Manage your Booking</a></li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">How to</a></li>
          <li><a href="/">Features</a></li>
          <li><a href="/">Baggage</a></li>
          <li><a href="/">Route Map</a></li>
          <li><a href="/">Our Communities</a></li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li><a href="/">Chauffer</a></li>
          <li><a href="/">Our Partners</a></li>
          <li><a href="/">Destination</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">Transportation</a></li>
          <li><a href="/">Programme Rules</a></li>
        </div>

      </div>

      <div className="copyRightDiv flex">
        <p>Courtesy Design | Developed by <a href="https://github.com/mrinnnmoy" target="_blank" rel='noreferrer'>Mrinmoy</a></p>
      </div>

    </div>
  )
};

export default Footer;