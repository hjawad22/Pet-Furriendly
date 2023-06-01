import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { getPlaces } from '../apiCalls';
import Details from '../Details/Details';
import Search from '../Components/Search/Search';

class App extends Component {
  constructor() {
    super()
    this.state = {
      places: [],
      results: [],
      errorMessage: '',
    }
  };

  componentDidMount() {
    getPlaces('http://localhost:8080/api/v1/places')
      .then(places => {
        this.setState({
          places: places,
          results: places,
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message
        });
      });
  }

  filterPlaces = userValue => {
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
        <Search filterPlaces={this.filterPlaces}/>        
        {/* <Results/> */}
        {/* <Error/> */}
        <Route
          exact path='/details/:id'
          render={({ match }) => {
            const matchedPlace = this.state.places.find(place => place.id === parseInt(match.params.id));
            return <Details singlePlace={matchedPlace} />;
          }}
        />
      </main>
    );
  }

}

export default App;
