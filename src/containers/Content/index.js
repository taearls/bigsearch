import React, { Component } from 'react';
import styles from '../../App.scss';

export default class Content extends Component {

  render() {
    return (
      <div className={styles.content}>
      	<h1> CONTENT </h1>
      	{this.props.movie.title} <br />
      	<img className={styles.poster} src={this.props.movie.poster} alt={this.props.movie.title} />
      </div>
    )
  }
}
