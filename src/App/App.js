import './App.css';
// import Router from 'react-router-dom';
import React, { Component } from 'react';
import { getPlaces } from '../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      places: [],
      results: [],
      errorMessage: ''
    }
  };

  componentDidMount() {
    getPlaces('http://localhost:8080/api/v1/places')
      .then(places => {
        this.setState({
          places: places,
          results: places
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message
        });
      });
  }

  ffilterPlaces = userValue => {
    const filtered = this.state.places.filter(place => {
      const location = place.location.toLowerCase();
      return location.includes(userValue.toLowerCase());
    });
    this.setState({
      results: filtered
    });
  };

  render() {
    return (
      // <Header/>
      <main className='App'>
        {/* App content here */}
        {/* <Form/> */}
        {/* <Results/> */}
        {/* <Error/> */}
      </main>
    );
  }

}

export default App;
