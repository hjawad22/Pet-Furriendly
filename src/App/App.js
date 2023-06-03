import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { getPlaces } from '../apiCalls';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Details from '../Details/Details';
import Results from '../Results/Results';
import Errors from '../Errors/Errors';

class App extends Component {
  constructor() {
    super()
    this.state = {
      places: [],
      results: [],
      loading: true,
      errorMessage: '',
    }
  };

  componentDidMount() {
    getPlaces()
      .then(places => {
        this.setState({
          places: places,
          results: places,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.message
        });
      });
  };

  filterPlaces = userValue => {
    const filtered = this.state.places.filter(place => {
      const location = place.location.toLowerCase();
      return location.includes(userValue.toLowerCase());
    });
    this.setState({
      results: filtered
    });
  };

  resetResults = () => {
    this.setState({
      results: this.state.places
    })
  };

  render() {
    return (
      <>
        <Header resetResults={this.resetResults}/>
        <main className='App'>
          <Switch>
            <Route exact path='/' render={() => {
              return this.state.errorMessage ? (
                <Errors errorMessage={this.state.errorMessage} /> 
              ) : (
                <>
                  <Search filterPlaces={this.filterPlaces} />
                  <div className='results-component-container'>
                      <Results places={this.state.results} loading={this.state.loading}/> 
                  </div>
                </>
              );
            }} />
            <Route
              exact path='/details/:id'
              render={({ match }) => {
                const matchedPlace = this.state.places.find(place => place.id === parseInt(match.params.id));
                return <Details singlePlace={matchedPlace} />;
              }}
            />
            <Route path="*" render={() => {
              return (
                <Errors errorMessage={this.state.errorMessage} />)
            }} />
          </Switch>
        </main>
      </>
    );
  };
}

export default App;
