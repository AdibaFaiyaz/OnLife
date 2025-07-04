import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <section className='popular'>
      <div className="popular-container">
        <div className="popular-header">
          <h2>Popular in Women</h2>
          <p>Discover our most-loved pieces that everyone's talking about</p>
          <div className="popular-underline"></div>
        </div>
        
        <div className="popular-grid">
          {data_product.map((item, i) => (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price}
            />
          ))}
        </div>
        
        <div className="popular-cta">
          <button className="view-all-btn">
            View All Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Popular
