import React from 'react'
import './Offers.css'
import exclusive_image from'../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <section className='offers'> 
      <div className="offers-container">
        <div className="offers-left">
          <div className="offers-content">
            <div className="offers-badge">Limited Time</div>
            <h2>Exclusive</h2>
            <h2>Offers For You</h2>
            <p>Get up to 50% off on our best-selling products. Don't miss out on these incredible deals!</p>
            <div className="offers-features">
              <div className="feature">
                <span className="feature-icon">🏷️</span>
                <span>Up to 50% Off</span>
              </div>
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <span>Fast Shipping</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🎁</span>
                <span>Free Returns</span>
              </div>
            </div>
            <button className="offers-cta">
              <span>Shop Now</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="offers-right">
          <div className="offers-image-container">
            <img src={exclusive_image} alt='Exclusive offers'/>
            <div className="offers-glow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offers
