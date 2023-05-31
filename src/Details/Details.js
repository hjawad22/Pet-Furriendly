import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Details.css';

function Details({ singlePlace }) {
  const { name, address, location, category, zip_code, rating, website, description, src, alt } = singlePlace;
  
  return (
    <section className='details-container'>
      <img className='details-image' src={src} alt={alt} />
      <div>
        <h2>{name}</h2>
        <p>{category}</p>
        <p>{rating}</p>
        <p>{address}</p>
        <p>{location}</p>
        <p>{zip_code}</p>
        <p>{website}</p>
        <p>{description}</p>
      </div>
      {/* <NavLink to={``} /> */}
    </section>
  );
}

export default Details;

Details.propTypes = {
  singlePlace: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    zip_code: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired
}