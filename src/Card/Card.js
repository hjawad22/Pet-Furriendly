import React from 'react'
import './Card.css'

const Card = ({ src, alt, name, location, category }) => {
  return(
    <div className='card-container'>
      <img className='card-image'
      src={src}
      alt={alt}/>
      <div className='card-details'>
        <p className='card-name'>{name}</p>
        <p className='card-location'>{location}</p>
        <p className='card-category'>{category}</p>
      </div>
    </div>
  )
}

export default Card

