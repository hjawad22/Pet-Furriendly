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
            <img className="search-clear" src="/x-mark.png" alt="x-icon" onClick={() => {
              this.setState({ search: '' })
              this.props.filterPlaces('')
            }} />
            <img className="search-icon" src="/search.png" alt="spy glass icon" />
            <input type="text" 
              name="city"
              className="city-inp"
              placeholder="City"
              value={this.state.search}
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