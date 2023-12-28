import React from 'react'
import CV from "../../assets/Teresia Wanjiru-CV.pdf"

const cta = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Reach out to me</a>
    </div>
  )
}

export default cta