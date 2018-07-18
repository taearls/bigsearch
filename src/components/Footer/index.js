import React, { Component } from 'react';
import styles from '../../App.scss';

export default class Footer extends Component {

  render() {
    return (
      <div className={styles.footer}>
        <h3> Search by typing the movie title in the URL. </h3>
        <h3> Example: {this.props.domain}/big </h3>
      </div>
    )
  }
}
