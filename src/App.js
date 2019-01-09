import React, { Component } from 'react';

import Header from './components/Header';
import Content from './components/Content';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      apiKey: '974778d7', // personal API key activated from omdbapi.com
      domain: 'https://bigsearch.herokuapp.com',
      selectedMovie: {},
      errorMessage: ''
    }
  }
  getMovie = async (movieTitle) => {
    const search = await fetch('https://www.omdbapi.com/?t=' + movieTitle + '&apiKey=' + this.state.apiKey);
    const searchJson = await search.json();
    if (searchJson.Response === "True") {
      this.setState({
        errorMessage: '',
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
          RottenTomatoes: searchJson.Ratings.length > 1 ? searchJson.Ratings[1].Value : "N/A",
          Metacritic: searchJson.Ratings.length > 2 ? searchJson.Ratings[2].Value : "N/A"
        }
      });
      window.history.pushState({urlPath: '/' + movieTitle}, null, "/" + movieTitle);
      // this.props.match.params.movie = movieTitle;
    } else {
      this.setState({
        errorMessage: movieTitle + " was not found."
      });
    }
  }

  componentDidMount() {
    const searchedMovie = this.props.match.params.movie;
    if (searchedMovie === undefined || searchedMovie === null) {
      this.getMovie('big');
    } else {
      this.getMovie(searchedMovie);
    }
  }

  render() {
    const movie = this.state.selectedMovie;

    return (
      <div>
        <Header 
          domain={this.state.domain} 
          getMovie={this.getMovie}/>
        <Content 
          movie={movie} 
          errorMessage={this.state.errorMessage} />
      </div>
    );
    
  }
}