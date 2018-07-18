import React, { Component } from 'react';
import styles from '../../App.scss';
import Search from './Search';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1> APP NAME </h1>
        <h2> Search your favorite movie! </h2>
        <Search getMovie={this.props.getMovie} />
      </div>
    )
  }
}
