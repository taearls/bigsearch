import React, { Component } from 'react';
import styles from './App.scss';

import Content from './components/Content';
import Errors from './components/Errors';
import Footer from './components/Footer';
import Header from './components/Header';

export default class App extends Component {

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
          // ratings: {
          //   "IMDB": {
          //     score: "IMDB: " + searchJson.Ratings[0].Value
          //   },
          //   "Rotten Tomatoes": {
          //     score: "Rotten Tomatoes: " + searchJson.Ratings[1].Value
          //   },
          //   "Metacritic": {
          //     score: "Metacritic: " + searchJson.Ratings[2].Value
          //   }
          // }
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
    const movie = this.state.selectedMovie;
    const searchedMovie = this.props.match.params.movie;
    
    // sets the movie big as the default when no movie is queried in URL
    if (!searchedMovie) {
      this.getMovie('big');
    } else {
      this.getMovie(searchedMovie);
    }

    if (!this.state.showingError) {
      return (
        <div>
          <Header getMovie={this.getMovie} />
          <Content movie={movie} />
          <Footer />
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