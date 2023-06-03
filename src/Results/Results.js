import React from "react";
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Results.css';


const Results = ({places}) => {
  const resultsCards = places.map(place => {
    return (
      <Link key={place.id} to={`/details/${place.id}`}>
        <Card {...place} />
      </Link>
    );
  })
  if(places.length === 0) {
    return(<p className="search-error">We a-paw-logize, there are no current results for this city!</p>)
  }
  return(
    <div className='results-container'>
      {resultsCards}
    </div>
  );
};

export default Results;

Results.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired
}
