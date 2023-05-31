import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Details from './Details/Details';

class App extends Component {
  constructor() {
    super()
    this.state = {
      places: [],
      // Delete singlePlace object once Details component is connected to rest of the app
      singlePlace: {
        id: 1,
        name: "Improper City",
        address: "3201 Walnut Street",
        location: "Denver, Colorado",
        category: "Restaurants & Bars",
        zip_code: "80205",
        rating: "4",
        website: "https://www.impropercity.com/",
        description: "A spacious, artsy, large-scale taproom and coffee bar. Improper City features 36 taps, a full bar selection, specialty cocktails, and a menu that rotates seasonally. The huge patio is dog friendly, has a seasonal bar space, great wifi, community games, and hosts rotating food trucks. Not very shady on hot days.",
        src: "https://www.impropercity.com/wp-content/uploads/photo-gallery/venue-05.jpg?bwg=1677263338",
        alt: "outdoor patio with picnic tables, food trucks, people hanging out, and a couple of dogs",
        created_at: "2023-05-28T20:41:26.792Z",
        updated_at: "2023-05-28T20:41:26.792Z"
      },
    }
  }

  componentDidMount() {
  
  }

  render() {
    return (
      <main>
        {/* App content here */}

        {/* Line 40 =placeholder until integrated; Delete and uncomment the Route lines*/}
        <Details singlePlace={this.state.singlePlace} />
        {/* <Route
          exact path='/details/:id'
          render={({ match }) => {
            const singlePlace = this.state.places.find((place) => {
              return place.id === match.params.id
            });
            <Details singlePlace={singlePlace}/>;
          }
        }/> */}
      </main>
    );
  }

}

export default App;
