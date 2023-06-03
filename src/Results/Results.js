import React from "react";
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './Results.css';

const Results = ({places}) => {
  return !places.length ? (
      <p className='search-error'>We a-paw-logize, there are no current results for this city!</p>
    ) : (
        <div className='results-container'>
            {places.map(place => {
              return(
                <Card {...place} key={place.id} />
              )
            })}
        </div>
      )
};

export default Results;

Results.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired
};


