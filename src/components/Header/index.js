import React, { Component } from 'react';
import styles from '../../App.scss';

export default class Header extends Component {

  render() {
    return (
      <div className={styles.header}>
        <h1> BigSearch </h1>
        <h2> Search your favorite movie (that isn't Big)! </h2>
      </div>
    )
  }
}
