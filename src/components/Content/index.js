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
          <img className={styles.poster} 
            src={movie.poster} 
            alt={movie.title} 
          />
          <p> Directed By: {movie.director} </p>
        </div>
        <div>
          <p> Genre: {movie.genre} </p>
          <p> Starring: {movie.actors} </p>
          <p> Plot: {movie.plot} </p>
          <p> <strong>Ratings:</strong> <br/>
              IMDB: {movie.IMDB} <br/>
              Rotten Tomatoes: {movie.RottenTomatoes} <br/>
              Metacritic: {movie.Metacritic} 
          </p>
          <p> Awards: {movie.awards} </p>
        </div>
      </div>
    )
  }
}
