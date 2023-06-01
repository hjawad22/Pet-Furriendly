import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(){
    super()
    this.state = {
      city: ''
    }
  }

  handleChange = (event) => {
    this.setState({ city: event.target.value })
  } 

  render() {
    return (
      <div className="search-bar">
        <div className="form-container">
          <h2>Search by City:</h2>
          <form className="form">
            <input type="text" className="city-inp" placeholder="City" onChange={(event) => {
              this.handleChange(event)
              this.props.filterPlaces(this.state.city)
            }
            }></input>
            <img className="search-icon" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="spy glass icon" />
          </form>
        </div>
      </div>
    )
  }
}

export default Search