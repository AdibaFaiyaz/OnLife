import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-background">
        <div className="loginsignup-container">
          <div className="loginsignup-header">
            <h1>{isLogin ? 'Welcome Back' : 'Join OnLife'}</h1>
            <p>{isLogin ? 'Sign in to your account' : 'Create your account to get started'}</p>
          </div>
          
          <form className='loginsignup-form' onSubmit={handleSubmit}>
            <div className='loginsignup-fields'>
              {!isLogin && (
                <div className="input-group">
                  <input 
                    type='text' 
                    name='name'
                    placeholder='Full Name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="input-highlight"></span>
                </div>
              )}
              
              <div className="input-group">
                <input 
                  type='email' 
                  name='email'
                  placeholder='Email Address'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <span className="input-highlight"></span>
              </div>
              
              <div className="input-group">
                <input 
                  type='password' 
                  name='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <span className="input-highlight"></span>
              </div>
            </div>
            
            <button type="submit" className="submit-btn">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>
          
          <p className='loginsignup-switch'>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Sign Up' : 'Sign In'}
            </span>
          </p>
          
          {!isLogin && (
            <div className="loginsignup-agree">
              <input type="checkbox" id="agree" required/>
              <label htmlFor="agree">
                By continuing, I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
              </label>
            </div>
          )}
          
          <div className="social-login">
            <div className="divider">
              <span>or</span>
            </div>
            <div className="social-buttons">
              <button type="button" className="social-btn google-btn">
                <span>Continue with Google</span>
              </button>
              <button type="button" className="social-btn facebook-btn">
                <span>Continue with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
