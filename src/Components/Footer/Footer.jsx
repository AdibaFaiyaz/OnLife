import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <img src={footer_logo} alt="OnLife Logo" />
              <p>OnLife</p>
            </div>
            <p className="footer-description">
              Discover the latest fashion trends and create your unique style with OnLife. 
              Quality clothing for every occasion, every season, every you.
            </p>
            <div className="footer-social-icons">
              <a href="#" className="social-link instagram" aria-label="Instagram">
                <img src={instagram_icon} alt="Instagram" />
              </a>
              <a href="#" className="social-link pinterest" aria-label="Pinterest">
                <img src={pinterest_icon} alt="Pinterest" />
              </a>
              <a href="#" className="social-link whatsapp" aria-label="WhatsApp">
                <img src={whatsapp_icon} alt="WhatsApp" />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#sustainability">Sustainability</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><a href="#women">Women</a></li>
              <li><a href="#men">Men</a></li>
              <li><a href="#kids">Kids</a></li>
              <li><a href="#accessories">Accessories</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
            </ul>
          </div>
          
          <div className="footer-section newsletter">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for exclusive offers and updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-legal">
            <p>&copy; 2024 OnLife. All rights reserved.</p>
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
