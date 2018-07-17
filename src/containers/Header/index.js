import React, { Component } from 'react';
import styles from '../../App.scss';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1> APP NAME </h1>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
