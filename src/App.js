import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';

import MovieContainer from './MovieContainer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      apiKey: '974778d7', // personal API key activated from omdbapi.com
      domain: 'localhost:3000', // will eventually be a heroku url
      selectedMovie: {}
    }
  }

  getMovie = async (movieTitle) => {
    // convert spaces in movieTitle to + signs
    const search = await fetch('http://www.omdbapi.com/?t=' + movieTitle + '&apiKey=' + this.state.apiKey);
    const searchJson = await search.json();
    if (searchJson.Response === "True") {
      this.setState({
        selectedMovie: {
          title: searchJson.Title,
          rated: searchJson.Rated,
          year: searchJson.Year,
          runtime: searchJson.Runtime,
          genre: searchJson.Genre,
          plot: searchJson.Plot,
          poster: searchJson.Poster,
          website: searchJson.Website,
          awards: searchJson.Awards,
          actors: searchJson.Actors,
          production: searchJson.Production,
          ratings: {
            "IMDB": {
              score: "IMDB: " + searchJson.Ratings[0].Value
            },
            "Rotten Tomatoes": {
              score: "Rotten Tomatoes: " + searchJson.Ratings[1].Value
            },
            "Metacritic": {
              score: "Metacritic: " + searchJson.Ratings[2].Value
            }
          }
        }
      });
      console.log(this.state.selectedMovie);
    } else {
      this.errorMessage(movieTitle);
    }
  }

  errorMessage = (movieTitle) => {
    console.log(movieTitle, "is not found.");
  }

  render() {
    // this.getMovie('Shrek');
    // console.log(this.getMovie('Finding Nemo'));
    return (
      <div className={styles.app}>
        <MovieContainer />
      </div>
    );
  }
}

export default App;
