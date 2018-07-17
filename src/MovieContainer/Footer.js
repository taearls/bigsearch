import React, { Component } from 'react';
import styles from '../App.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        { this.props.children }
      </div>
    )
  }
}
