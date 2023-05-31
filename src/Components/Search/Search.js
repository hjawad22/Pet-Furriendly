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
          <input type="text" className="city-inp" onChange={() => this.handleChange()} placeholder="City"></input>
        </form>
      </div>
    )
  }
}