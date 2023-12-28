import React from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nrmkemj', 'template_adfwqbu', form.current, 'ckGOUdAzztw0Y7WPv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>terrymunderu@gmail.com</h5>
            <a href="mailto:terrymunderu@gmail.com">Send an email</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Teresia Wanjiru</h5>
            <a href="https://www.linkedin.com/in/teresiawanjiru/" target="_blank">Send me a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+254794977241</h5>
            <a href="https://wa.me/254794977241" target='_blank'>Send me a message</a>
          </article>
        </div>
{/* end of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name=""  rows="7" placeholder='Your message' required></textarea>
          <button className="btn btn-primary" type='submit'>Send me a message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact