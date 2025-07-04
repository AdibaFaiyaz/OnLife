import React, { useState } from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className='newsletter'>
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
            </svg>
          </div>
          <h2>Stay in the Loop</h2>
          <p>Get exclusive offers, style tips, and be the first to know about new collections delivered straight to your inbox.</p>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <input 
                type="email" 
                placeholder='Enter your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-btn">
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </form>
          
          <div className="newsletter-benefits">
            <div className="benefit">
              <span className="benefit-icon">🎁</span>
              <span>Exclusive Offers</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">👕</span>
              <span>Style Updates</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">⚡</span>
              <span>Early Access</span>
            </div>
          </div>
          
          <p className="newsletter-privacy">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter
