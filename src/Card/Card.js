import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ src, alt, name, location, category, id }) => {
  return(
    <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/details/${id}`}>
      <div className='card-container'>
        <img className='card-image' src={src} alt={alt}/>
        <div className='card-details'>
          <p className='card-name'>{name}</p>
          <p className='card-location'>{location}</p>
          <p className='card-category'>{category}</p>
        </div>
      </div>
    </NavLink>
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

