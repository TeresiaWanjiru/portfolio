import React from 'react'
import './footer.css'
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#about" className='footer__logo'>Teresia Wanjiru </a>
      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/teresiawanjiru/"><BsLinkedin /></a>
        <a href="mailto:terrymunderu@gmail.com"><MdEmail/></a>
        <a href="https://wa.me/254794977241"><IoLogoWhatsapp /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Teresia Wanjiru. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer