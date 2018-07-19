import React, { Component } from 'react';
import styles from '../../App.scss';

export default class Footer extends Component {

  render() {
    return (
      <div className={styles.footer}>
        <h3> Search by appending the movie title in the URL: </h3>
        <h4> Example: {this.props.domain}/big </h4>
      </div>
    )
  }
}
