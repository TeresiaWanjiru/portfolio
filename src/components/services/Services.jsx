import React from 'react'
import './services.css'
import { MdCheck } from "react-icons/md";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front-End Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <MdCheck className='service__list-icon'/>
              <p>Creating responsive and user-friendly web interfaces </p>
            </li>
            <li>
              <MdCheck className='service__list-icon'/>
              <p>Designing and implementing intuitive and interactive user interfaces</p>
            </li>
            <li>
              <MdCheck className='service__list-icon'/> 
              <p>Performance optimization</p>
            </li>
            <li>
              <MdCheck className='service__list-icon'/>
              <p>Collaboration and version control</p>
            </li>
            <li>
              <MdCheck className='service__list-icon'/>
              <p>Ensuring compatibility and consistent user experience across different web browsers </p>
            </li>
          </ul>
        </article>
{/* END OF FRONTEND */}

    <article className="service">
          <div className="service__head">
            <h3>Back-End Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <MdCheck className='service__list-icon'/>
              <p>Server-Side Logic Development</p>
            </li>
            <li>
              <MdCheck className='service__list-icon'/>
              <p>Developing and maintaining databases SQL or NoSQL</p>
            </li>
            <li>
              <MdCheck className='service__list-icon'/> 
              <p>API Development and Integration</p>
            </li>
            <li>
              <MdCheck className='service__list-icon'/>
              <p>Security Implementation</p>
            </li>
            <li>
              <MdCheck className='service__list-icon'/>
              <p>Scalability and Performance Enhancement</p>
            </li>
            <li>
              <MdCheck className='service__list-icon'/>
              <p>Deployment and DevOps Practices</p>
            </li>
          </ul>
        </article>
      {/* END OF BACKEND */}
      <article className="service">
          <div className="service__head">
            <h3>Virtual Assistance</h3>
          </div>

          <ul className='service__list'>
            <li>
              <MdCheck className='service__list-icon'/>
              <p>Administrative Support</p>
            </li>
            <li>
              <MdCheck className='service__list-icon'/>
              <p>Customer Service and Communication</p>
            </li>
            <li>
              <MdCheck className='service__list-icon'/> 
              <p>Social Media and Marketing Assistance</p>
            </li>
            <li>
              <MdCheck className='service__list-icon'/>
              <p>Project Management Support</p>
            </li>
            <li>
              <MdCheck className='service__list-icon'/>
              <p>Website and Content Management</p>
            </li>
          </ul>
        </article>
        {/* END OF VIRTUAL ASSISTANT */}
      </div>
    </section>
  )
}

export default Services