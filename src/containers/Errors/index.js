import React, { Component } from 'react';
import styles from '../../App.scss';

export default class Errors extends Component {
  render() {
    return (
      <div className={styles.errors}>
        <h1>{this.props.errorMessage}</h1>
      </div>
    )
  }
}
