import React from 'react';
import './Search.css';
import propTypes from 'prop-types';


const Search = ({ filterPlaces }) => {
  return (
    <div className="search-bar">
      <div className="form-container">
        <h2 className="search-label">Search by City:</h2>
        <form className="form">
          <input type="text" 
            name="city"
            className="city-inp"
            placeholder="City"
            onChange={(event) => {
              filterPlaces(event.target.value);
            }}
            onKeyDown={(event) => {
              event.keyCode === 13 && event.preventDefault();
            }}></input>
          <img className="search-icon" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="spy glass icon" />
        </form>
      </div>
    </div>
  )
}

Search.protoTypes = {
  filterPlaces: propTypes.func
}

export default Search