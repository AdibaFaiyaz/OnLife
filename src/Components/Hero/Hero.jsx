import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content">
            <h2 className="hero-subtitle">New Arrivals Only</h2>
            <div className="hero-title">
              <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt='Hand wave icon'/>
              </div>
              <p>Collections</p>
              <p>For Everyone</p>
            </div>
            <p className="hero-description">
              Discover the latest fashion trends and exclusive collections tailored for every style and occasion.
            </p>
            <button className="hero-latest-btn">
              <span>Latest Collection</span>
              <img src={arrow_icon} alt='Arrow'/>
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-container">
            <img src={hero_img} alt='Fashion model'/>
            <div className="hero-image-overlay"></div>
          </div>
        </div>
      </div>
      
      <div className="hero-features">
        <div className="feature-item">
          <div className="feature-icon">🚚</div>
          <div className="feature-text">
            <h4>Free Shipping</h4>
            <p>On orders over $50</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🔄</div>
          <div className="feature-text">
            <h4>Easy Returns</h4>
            <p>30-day return policy</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🏆</div>
          <div className="feature-text">
            <h4>Quality Assured</h4>
            <p>Premium materials</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
