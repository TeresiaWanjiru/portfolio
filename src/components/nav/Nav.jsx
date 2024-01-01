import React, { useState } from 'react'
import './nav.css'
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { MdDesignServices } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Nav = () => {
  const[activeNav,setactiveNav] = useState("#")
  return (
<nav>
 <a href="#header" onClick={()=> setactiveNav("#")} className={activeNav ==='#header' ? 'active' : ''}><IoHome /></a>
 <a href="#about" onClick={()=> setactiveNav("#about")} className={activeNav ==='#about' ? 'active' : ''}><FaUser /></a>
 <a href="#experience" onClick={()=> setactiveNav("#experience")} className={activeNav ==='#experience' ? 'active' : ''}><ImBooks /></a>
 <a href="#services" onClick={()=> setactiveNav("#services")} className={activeNav ==='#services' ? 'active' : ''}><MdDesignServices /></a>
 <a href="#contact" onClick={()=> setactiveNav("#contact")} className={activeNav ==='#contact' ? 'active' : ''}><IoCall /></a>
</nav>  
)
}

export default Nav