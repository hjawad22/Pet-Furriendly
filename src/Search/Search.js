import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Search.css';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  changeState(event) {
    this.setState({ search: event.target.value })
  }

  render() {
    return (
      <div className="search-bar">
        <div className="form-container">
          <h2 className="search-label">Search by City:</h2>
          <form className="form">
            <img className="search-icon" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="spy glass icon" onClick={() => {
              this.props.filterPlaces(this.state.search)
            }}/>
            <input type="text" 
              name="city"
              className="city-inp"
              placeholder="City"
              onChange={(event) => {
                this.changeState(event)
                this.props.filterPlaces(event.target.value);
              }}
              onKeyDown={(event) => {
                event.keyCode === 13 && event.preventDefault();
              }}></input>
          </form>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  filterPlaces: propTypes.func.isRequired
};

export default Search;