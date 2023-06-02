import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ src, alt, name, location, category, id }) => {
  return(
    <div className='card-container' key={id}>
      <img className='card-image'
      src={src}
      alt={alt}/>
      <div className='card-details'>
        <h3 className='card-name'>{name}</h3>
        <p className='card-location'>{location}</p>
        <p className='card-category'>{category}</p>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

