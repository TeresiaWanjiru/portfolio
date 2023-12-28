import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import { GrWorkshop } from "react-icons/gr";
import { IoCodeWorkingSharp } from "react-icons/io5";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>More about me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
             <GrWorkshop className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ months experience</small>
            </article>
            
            {/* <article className="about__card">
             <GrWorkshop className='about__icon'/>
              <h5>Clients</h5>
              <small>3+ months experience</small>
            </article> */}
            
            <article className="about__card">
             <IoCodeWorkingSharp className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>Energetic and driven student on a mission to master the intricacies
of Full Stack Web Development. My hands-on experience as a
System Developer Intern has fueled my passion for crafting
seamless, innovative solutions. From actively contributing to
system development to effectively managing point of sale
operations, I bring a blend of technical prowess, strong
communication skills, and a relentless pursuit of excellence.</p>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;