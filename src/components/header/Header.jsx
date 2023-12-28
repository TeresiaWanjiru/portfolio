import React from 'react';
import './header.css';
import Cta from './cta';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/me.jpeg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello My name is</h5>
        <h1>Teresia Wanjiru</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>       
      </div>
    </header>
  )
}

export default Header