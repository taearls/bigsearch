import React, { Component } from 'react';
import styles from '../../App.scss';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      movieToSearch: ''
    }
  }

  handleBlur = ({ target }) => {
    this.setState({
      movieToSearch: target.value
    });
  }
  handleSearch = () => {
    this.props.getMovie(this.state.movieToSearch);
  }
  render() {
    return (
      <div className={styles.header}>
        <h1>BigSearch</h1>
        <h2>Search your favorite movie below (that isn't Big!):</h2>
        <input onBlur={this.handleBlur} type="text" placeholder="Type Movie..."/>
        <button onClick={this.handleSearch}>Search</button>
      </div>
    )
  }
}
