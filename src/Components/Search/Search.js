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
      <div className="form-container">
        <form className="form">
          <input type="text" className="city-inp" placeholder="City" onChange={() => {
            this.handleChange()
            this.props.filterPlaces()
          }
          }></input>
          <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="spy glass icon" />
        </form>
      </div>
    )
  }
}

export default Search