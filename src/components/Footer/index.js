import React, { Component } from 'react';
import styles from '../../App.scss';

export default class Footer extends Component {

  render() {
    return (

      <div className={styles.footer}>
        <p> Search by typing the movie title in the URL. </p>
        <p> Example: {this.props.domain}/big </p>
      </div>
    )
  }
}
