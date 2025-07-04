import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'

const Item = (props) => {
  const discountPercentage = props.old_price ? Math.round(((props.old_price - props.new_price) / props.old_price) * 100) : 0;
  
  return (
    <div className='item'>
      <div className="item-image-container">
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt={props.name} className="item-image"/>
        </Link>
        {discountPercentage > 0 && (
          <div className="item-discount-badge">-{discountPercentage}%</div>
        )}
        <div className="item-overlay">
          <button className="quick-view-btn">Quick View</button>
        </div>
      </div>
      
      <div className="item-details">
        <h3 className="item-name">{props.name}</h3>
        <div className="item-prices">
          <div className="item-price-new">${props.new_price}</div>
          {props.old_price && (
            <div className="item-price-old">${props.old_price}</div>
          )}
        </div>
        
        <div className="item-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < 4 ? 'star filled' : 'star'}>★</span>
            ))}
          </div>
          <span className="rating-count">(4.0)</span>
        </div>
        
        <button className="add-to-cart-btn">
          <span>Add to Cart</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16 5 16H17M17 13V19C17 19.6 16.6 20 16 20H8C7.4 20 7 19.6 7 19V13M17 13H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Item
