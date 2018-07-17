import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';

import MovieContainer from './MovieContainer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      apiKey: '974778d7', // personal API key activated from omdbapi.com
      selectedMovie: ''
    }
  }

  getMovie = (movieTitle) => {

  }

  render() {
    return (
      <div className={styles.app}>
        <MovieContainer />
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Sass is working</h2>
          <span role="img" aria-label="emoji">😎</span>
        </header>
      </div>
    );
  }
}

export default App;
