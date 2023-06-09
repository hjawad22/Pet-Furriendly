import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Errors from '../Errors/Errors';
import './Details.css';

function Details({ singlePlace, error }) {
  if (!singlePlace) {
    return (<Errors errorMessage={error} />)
  };

  const { name, address, location, category, zip_code, rating, website, description, src, alt } = singlePlace;
  
  return (
    <section className='details-container'>
      <img className='details-image' src={src} alt={alt} />
      <div className='details-info'>
        <h2 className='details-name'>{name}</h2>
        <p className='details-category'>{category}</p>
        <p>Rating: {rating}</p>
        <p>{description}</p>
        <p>{address}<br></br>
          {location}<br></br>
          {zip_code}
        </p>
        <a href={website} className='link'>Website</a>
        <NavLink to="/"
          style={{ color: 'inherit', textDecoration: 'inherit'}}
          className='button-back'>Back to search results
        </NavLink>
      </div>
    </section>
  );
};

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
  })
};