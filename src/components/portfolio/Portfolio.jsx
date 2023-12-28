import React from 'react';
import './portfolio.css'
import weather from '../../assets/weather.png'
import heartTrail from '../../assets/heart-trail.png'
import timer from '../../assets/timer.png'
import calculator from '../../assets/calculator.png'
import qrcode from '../../assets/qrcodescanner.jpg'
import dashboard from '../../assets/dashboard page.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Projects</h2>
    <div className="container portfolio__container">
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={weather} alt="weather-app" />
        </div>
        <h3>React Weather App</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/TeresiaWanjiru/react-weather-app.git" className="btn" target='_blank'>Github</a>
        {/* <a href="http://github.com" className="btn btn-primary" target='_blank'>Live Demo</a> */}
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={heartTrail} alt="weather-app" />
        </div>
        <h3>Heart-trail animation</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/TeresiaWanjiru/heart-trail-animation.git" className="btn" target='_blank'>Github</a>
        {/* <a href="http://github.com" className="btn btn-primary" target='_blank'>Live Demo</a> */}
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={timer} alt="weather-app" />
        </div>
        <h3>React Timer App</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/TeresiaWanjiru/react-timer.git" className="btn" target='_blank'>Github</a>
        {/* <a href="http://github.com" className="btn btn-primary" target='_blank'>Live Demo</a> */}
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={calculator} alt="weather-app" />
        </div>
        <h3>Simple Calculator</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/TeresiaWanjiru/calculator-app.git" className="btn" target='_blank'>Github</a>
        {/* <a href="http://github.com" className="btn btn-primary" target='_blank'>Live Demo</a> */}
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image-qr">
          <img src={qrcode} alt="weather-app" />
        </div>
        <h3>QR Scanner</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/TeresiaWanjiru/qrcode-scanner.git" className="btn" target='_blank'>Github</a>
        {/* <a href="http://github.com" className="btn btn-primary" target='_blank'>Live Demo</a> */}
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={dashboard} alt="weather-app" />
        </div>
        <h3>MERN Finance Dashboard</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com/TeresiaWanjiru/Finance-Dashboard-Mern-application.git" className="btn" target='_blank'>Github</a>
        {/* <a href="http://github.com" className="btn btn-primary" target='_blank'>Live Demo</a> */}
        </div>
      </article>
      
    </div>
    </section>
  )
}

export default Portfolio