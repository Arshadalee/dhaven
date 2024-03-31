import React from 'react';
import "./footer.css";
import paw from './paw.png';
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className='container footer'>
    <div className='row'>
        <div className='col-sd-2 footerLogo'>
        <img className="companyLogo" src={paw} alt=""/>
        <p>D Heaven</p>
        

        </div>

        <ul className='col-sd-6 footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>


        </ul>
        <div className='col-sd-4 footer-social-icon'>
        <div className='footer-icons-container'>
            <img src={instagram_icon} alt=""/>
        </div>
        <div className='footer-icons-container'>
            <img src={pintester_icon} alt=""/>
        </div>
        <div className='footer-icons-container'>
            <img src={whatsapp_icon} alt=""/>
        </div>
    </div>
      </div>

      <div className='footer-copyright'>
        <hr/>Copyright @2024 - All Right Reserverd
      </div>
    </div>
  )
}

export default Footer;
