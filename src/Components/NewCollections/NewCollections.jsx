import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <section className='new-collection'>
      <div className="new-collection-container">
        <div className="new-collection-header">
          <h2>New Collections</h2>
          <p>Discover our latest arrivals crafted with passion and attention to detail</p>
          <div className="new-collection-underline"></div>
        </div>
        
        <div className="collections-grid">
          {new_collection.map((item, i) => (
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
        
        <div className="new-collection-cta">
          <button className="explore-all-btn">
            Explore All Collections
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewCollections
