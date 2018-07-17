import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
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
