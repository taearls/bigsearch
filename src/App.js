import React, { Component } from 'react';

import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      apiKey: '974778d7', // personal API key activated from omdbapi.com
      domain: 'localhost:3000', // will eventually be a heroku url
      selectedMovie: {},
      errorMessage: ''
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
          genre: searchJson.Genre,
          plot: searchJson.Plot,
          poster: searchJson.Poster,
          awards: searchJson.Awards,
          actors: searchJson.Actors,
          director: searchJson.Director,
          IMDB: searchJson.Ratings[0].Value,
          RottenTomatoes: searchJson.Ratings[1].Value,
          Metacritic: searchJson.Ratings[2].Value
        }
      });
    } else {
      this.setState({
        errorMessage: movieTitle + " was not found."
      });
    }
  }

  render() {
    const searchedMovie = this.props.match.params.movie;
    const movie = this.state.selectedMovie;
    // console.log(this.state.errorMessage, " this is the error message");

    // sets the movie big as the default when no movie is queried in URL
    if (!searchedMovie) {
      this.getMovie('big');
    } else {
      this.getMovie(searchedMovie);
    }

    return (
      <div>
        <Header getMovie={this.getMovie} />
        <Content movie={movie} errorMessage={this.state.errorMessage} />
        <Footer domain={this.state.domain} />
      </div>
    );
    
  }
}