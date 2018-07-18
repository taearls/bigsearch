import React, { Component } from 'react';
import styles from './App.scss';

import Header from './containers/Header';
import Footer from './containers/Footer';
import Content from './containers/Content';
import Errors from './containers/Errors';

class App extends Component {

  constructor() {
    super();
    this.state = {
      apiKey: '974778d7', // personal API key activated from omdbapi.com
      domain: 'localhost:3000', // will eventually be a heroku url
      selectedMovie: {},
      showingError: false
    }
  }

  getMovie = async (movieTitle) => {
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
          director: searchJson.Director,
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
    } else {
      this.errorMessage(movieTitle);
    }
  }

  errorMessage = () => {
    const movieTitle = this.state.selectedMovie.title;
    const errorMessage = movieTitle + "is not found.";
    return errorMessage;
  }

  render() {
    this.getMovie('Finding Nemo');
    if (!this.state.showingError) {
      return (
        <div className={styles.app}>
          <Header title={this.state.selectedMovie.title} 
            getMovie={this.getMovie} />
          <Content movie={this.state.selectedMovie} />
          <Footer movie={this.state.selectedMovie} />
        </div>
      );
    } else {
      return (
        <div className={styles.app}>
          <Errors errorMessage={this.errorMessage} />
        </div>
      );
    }
    
  }
}

export default App;
