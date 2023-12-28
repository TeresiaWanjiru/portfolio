import React from 'react'
import './experience.css'
import { IoShieldCheckmark } from "react-icons/io5";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className="experience__details">
               <IoShieldCheckmark className="icon" />
               <h4>HTML</h4>
            </article>
            <article className="experience__details">
               <IoShieldCheckmark className="icon" />
               <h4>CSS</h4>
            </article>
            <article className="experience__details">
               <IoShieldCheckmark className="icon" />
               <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
               <IoShieldCheckmark className="icon" />
               <h4>React</h4>
            </article>
            <article className="experience__details">
               <IoShieldCheckmark className="icon" />
               <h4>Tailwind</h4>
            </article>

          </div>
        </div>

        <div className="backend">
          <h3>Backend development</h3>
          <div className="experience__content">

          <article className="experience__details">
               <IoShieldCheckmark className="icon" />
               <h4>NodeJS</h4>
            </article>
            <article className="experience__details">
               <IoShieldCheckmark className="icon" />
               <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
               <IoShieldCheckmark className="icon" />
               <h4>MySQL</h4>
            </article>
            <article className="experience__details">
               <IoShieldCheckmark className="icon" />
               <h4>ExpressJS</h4>
            </article>
            <article className="experience__details">
               <IoShieldCheckmark className="icon" />
               <h4>ExpressJS</h4>
            </article>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience