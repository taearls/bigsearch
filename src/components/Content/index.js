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
          <h3> <b>Directed By:</b> {movie.director} </h3>
        </div>
        <div>
          <h1 className={styles.warning}> {this.props.errorMessage.toUpperCase()} </h1>
          <p> <b>Genre:</b> {movie.genre} </p>
          <p> <b>Starring:</b> {movie.actors} </p>
          <p> <b>Plot:</b> {movie.plot} </p>
          <p> <b>Ratings:</b> <br/>
              IMDB: {movie.IMDB} <br/>
              Rotten Tomatoes: {movie.RottenTomatoes} <br/>
              Metacritic: {movie.Metacritic} 
          </p>
          <p> <b>Awards:</b> {movie.awards} </p>

        </div>
      </div>
    )
  }
}
