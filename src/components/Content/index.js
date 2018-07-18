import React, { Component } from 'react';
import styles from '../../App.scss';

export default class Content extends Component {

  render() {
    const movie = this.props.movie;
    return (
      <div className={styles.content}>
        <div className={styles.posterContainer}>
        	<h3>{movie.title} ({movie.year})</h3>
          <h3>Rated {movie.rated}</h3>
          <a href={movie.website} target="_blank" className={styles.cursor} >
          	<img className={styles.poster} 
              src={movie.poster} 
              alt={movie.title} 
            />
          </a>
          <p> Directed By: {movie.director} </p>
        </div>
        <div>
          <p> Genre: {movie.genre} </p>
          <p> Starring: {movie.actors} </p>
          <p> Description: {movie.plot} </p>
          <p> </p>
        </div>
      </div>
    )
  }
}
